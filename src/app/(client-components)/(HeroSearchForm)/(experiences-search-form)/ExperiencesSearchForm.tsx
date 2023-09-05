import React, { FC, useState } from "react";
import LocationInput from "../LocationInput";
import GuestsInput from "../GuestsInput";
import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";

export interface ExperiencesSearchFormProps {}

export type TypeDropOffLocationType = "Hourly Room" | "Event Spaces" | "Parking" | "Storage" | "Education" | "Business" | "Electric Charging" | "Pet Care" | "Daytime Room" | "Nighttime Room" | any;

const ExperiencesSearchForm: FC<ExperiencesSearchFormProps> = ({}) => {


  const [dropOffLocationType, setDropOffLocationType] =
    useState<TypeDropOffLocationType>(["Hourly Room"]);

  const options = [ "Hourly Room", "Event Spaces", "Parking", "Storage", "Education", "Business", "Electric Charging", "Pet Care", "Daytime Room", "Nighttime Room" ];

    const toggleOption = ( str: string ) => {
      if ( dropOffLocationType.includes( str ) ) {
        const newArr = dropOffLocationType.filter( ( item: string ) => item !== str );
        setDropOffLocationType( newArr );
      } else {
        setDropOffLocationType( [ ...dropOffLocationType, str ] );
      }
    }

    const renderRadioBtn = () => {
    return (
      
      <div className="flex flex-row space-between items-center">
      <div className=" py-5 [ nc-hero-field-padding ] flex flex-row flex-wrap border-b border-neutral-100 dark:border-neutral-700">
        
        {
          options.map( ( option, index ) => { 
            return (
              <div className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
                  dropOffLocationType.includes( option )
                    ? "bg-black shadow-black/10 shadow-lg text-white"
                    : "border border-neutral-300 dark:border-neutral-700"
                  }`}
                onClick={ ( e ) => toggleOption( option ) }
              >
                { option }
              </div>
            );
          })
        }

        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8 mr-2 my-1 sm:mr-3"></div>
      </div>
      <div className="mr-[1rem]">
        <span className="py-1.5 px-4 flex items-center text-sm cursor-pointer mr-2 my-1 sm:mr-3">selected { dropOffLocationType.length }/{ options.length }</span>
      </div>
      </div>
    );
  };
  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 rounded-[40px] xl:rounded-[49px] rounded-t-2xl xl:rounded-t-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
        {renderRadioBtn()}
        <div className="flex flex-1 rounded-full">
          <LocationInput className="flex-[1.5]" />
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          <ExperiencesDateSingleInput className="flex-1" />
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          <GuestsInput
            className="flex-1"
            buttonSubmitHref="/listing-experiences"
          />
        </div>
      </form>
    );
  };

  return renderForm();
};

export default ExperiencesSearchForm;
