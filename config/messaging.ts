import { Messaging, getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase";
import axios from "axios";

export async function requestNotificationsPermission() {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    await saveMessagingDeviceToken();
  }
}

export async function saveMessagingDeviceToken() {
  const msg = await messaging();
  const fcmToken = await getToken(msg as Messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
  });

  if (fcmToken) {
    localStorage.setItem("fcmToken", fcmToken);
    axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/notification/device`,
      {
        fcmToken,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      }
    );

  } else {
    // Needs to request permission to show notifications.
    requestNotificationsPermission();
  }

}