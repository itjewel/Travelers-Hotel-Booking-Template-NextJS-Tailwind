importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAYu8iEeSnAmQzaL_S9LFkRsh0Xq8wOE-A",
  authDomain: "totel-d7322.firebaseapp.com",
  projectId: "totel-d7322",
  storageBucket: "totel-d7322.appspot.com",
  messagingSenderId: "407855852221",
  appId: "1:407855852221:web:0daae91ec4d472aff9e5d4",
  measurementId: "G-W5FFB5M4SB",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
