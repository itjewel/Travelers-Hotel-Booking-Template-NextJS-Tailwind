
// import DatePickerCustomDay from "@/components/DatePickerCustomDay";
// import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import {useState} from 'react'
import DatePickerCustomHeaderTwoMonth from "./DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "./DatePickerCustomDay";
import DatePicker from "react-datepicker";
export const DailyDatePicker = () => {
    const [dates, setDates] = useState<number[]>([
        new Date("2023/02/06").getTime(),
        new Date("2023/02/09").getTime(),
        new Date("2023/02/15").getTime(),
      ]);
  return (
    <div className="addListingDatePickerExclude">
        <DatePicker
          onChange={(date) => {
            let newDates = [];

            if (!date) {
              return;
            }
            const newTime = date.getTime();
            if (dates.includes(newTime)) {
              newDates = dates.filter((item) => item !== newTime);
            } else {
              newDates = [...dates, newTime];
            }
            setDates(newDates);
          }}
          // selected={startDate}
          monthsShown={2}
          showPopperArrow={false}
          excludeDates={dates.filter(Boolean).map((item) => new Date(item))}
          inline
          renderCustomHeader={(p) => <DatePickerCustomHeaderTwoMonth {...p} />}
          renderDayContents={(day, date) => (
            <DatePickerCustomDay dayOfMonth={day} date={date} />
          )}
        />
      </div>
  )
}
