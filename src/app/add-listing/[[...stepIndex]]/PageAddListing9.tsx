"use client";


import NcInputNumber from "@/components/NcInputNumber";
import React, { FC, useState } from "react";

import TabButton from "@/components/TabButton";
import { DailyDatePicker } from "@/components/DailyDatePicker";
import BookingHourlyRange from "@/components/BookingHourlyRange";

export interface PageAddListing9Props {}

const PageAddListing9: FC<PageAddListing9Props> = () => {
  const [activeTab, setActiveTab] = useState('daily');


  const handleRangeSelect = (range:any) => {
    console.log('Selected range:', range);
    // Handle the range data accordingly
  };


  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">How long can guests stay?</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {` Shorter trips can mean more reservations, but you'll turn over your
          space more often.`}
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-7">
        {/* ITEM */}
        <NcInputNumber label="Nights min" defaultValue={1} />
        <NcInputNumber label="Nights max" defaultValue={99} />
      </div>

      {/*  */}
      <div>
        <h2 className="text-2xl font-semibold">Set your availability</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Editing your calendar is easy—just select a date to block or unblock
          it. You can always make changes after you publish.
        </span>
      </div>

      <TabButton activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === 'daily' ? (
        <DailyDatePicker />
      ) : (
        <BookingHourlyRange onRangeSelect={handleRangeSelect} />
      )}
      
    </>
  );
};

export default PageAddListing9;
