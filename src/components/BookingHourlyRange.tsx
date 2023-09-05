// BookingHourlyRange.js

import React, { useState,useEffect } from 'react';
// import {bookingTimeSlots} from '../../src/data/bookingTimeSlots'
import { bookingTimeSlots } from '@/data/bookingTimeSlots';

const BookingHourlyRange = ({ onRangeSelect }) => {

  const [tabDateWise, setTabDateWise] = useState(0);
  const [timeActive, setTimeActive] = useState(1000);
  useEffect(()=>{
    setTimeActive(1000);

  },[tabDateWise])


  return (
    <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-10 z-10 ">
          <div className="overflow-auto bg-white  w-full  h-auto  max-h-full  relative">
            
            <div className="">
              <div className="select-area grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-start">
                <div>
                  <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                    Duration
                  </p>
                  <select aria-label="Duration" className="select border border-card focus:outline-none  w-full md:w-32 lg:w-32 rounded-full mt-2 mb-4  max-w-xs">
                    {" "}
                    <option disabled selected>
                      Hour
                    </option>
                    <option>2 hour</option>
                    <option>3 hour</option>
                    <option>4 hour</option>
                    <option>5 hour</option>
                    <option>6 hour</option>
                  </select>
                </div>

                <div>
                  <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                    Year
                  </p>
                  <select aria-label="Year" className="w-full md:w-32 lg:w-32 select border border-card focus:outline-none rounded-full mt-2 mb-4  max-w-xs">
                    {" "}
                    <option disabled selected>
                      2023
                    </option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                  </select>
                </div>

                <div>
                  <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                    Month
                  </p>
                  <select aria-label="Month" className="select border border-card focus:outline-none w-full md:w-32 lg:w-32 rounded-full mt-2 mb-4  max-w-xs">
                    {" "}
                    <option disabled selected>
                      Month
                    </option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>

                <div>
                  <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                    Week
                  </p>
                  <select aria-label="Week" className="select border border-card focus:outline-none w-full md:w-32 lg:w-32 rounded-full mt-2 mb-4  max-w-xs">
                    {" "}
                    <option disabled selected>
                      Week
                    </option>
                    <option>Week</option>
                    <option>21st - 27st</option>
                    <option>31st - 37st</option>
                    <option>41st - 47st</option>
                    <option>51st - 57st</option>
                    <option>11st - 17st</option>
                  </select>
                </div>
                 <div>
                  <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                    &nbsp;
                  </p>
                  <button 
                    type="submit"
                    className="p-2 bg-blue-500 text-white  hover:bg-blue-600 border border-card focus:outline-none w-full md:w-32 lg:w-32  rounded-full mt-2 mb-4  max-w-xs">
                    Search
                  </button>
                </div>

              </div>
            </div>

            <div className="md:flex md:justify-between center overflow-auto mt-2 ">
              {bookingTimeSlots.map((bookingTime, idx) => {
               
                return (
                  <div key={idx} className="">
                    <div className="text-center">
                      <div className={`w-full rounded-r-full md:rounded-none lg:rounded-none  py-1 px-1 mb-1  ${idx === tabDateWise?" text-indigo-500 bg-slate-300 md:bg-slate-50 lg:bg-slate-50": "bg-slate-200 md:bg-slate-50 lg:bg-slate-50" } text-gray-500  lg:text-[15px] font-semibold flex lg:flex-col flex-row text-[16px]  cursor-pointer`} onClick={()=>{setTabDateWise(idx);}}>
                        <h1 className="py-1 px-2">
                         {bookingTime.dayName},{bookingTime.month}&nbsp;{bookingTime.date}
                         
                        </h1>
                      </div>
                      
                    </div>
                  </div>
                );
              })}
            </div>
              <div className="columns-2 lg:columns-4 md:columns-4 overflow-auto">  
                   {bookingTimeSlots[tabDateWise].dayTimeSlots.map(
                          (dayTime, index) => {
                            return (
                              <div
                              className="text-center mb-5 w-full" key={index} >                               
                             
                          <button className={`w-full lg:mt-2 mt:2 mx-auto text-[16px] font-medium text-[#929292]    ${index === timeActive? "bg-blue-500 sm:bg-blue-500 md:bg-blue-500 lg:bg-blue-500   text-white sm:text-white md:text-white lg:text-white ": "bg-[#F2F2F7] sm:bg-[#F2F2F7] md:bg-[#F2F2F7] lg:bg-[#F2F2F7] xl:bg-[#F2F2F7]"} rounded-full py-2 px-3 focus:bg-purple `} onClick={()=>setTimeActive(index)}>
                                  {dayTime}
                                </button>
                              </div>
                            );
                          }
                        )}
              </div>
            </div>

           
        </div>

  );
};

export default BookingHourlyRange;
