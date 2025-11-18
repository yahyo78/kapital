import { MapPin } from "lucide-react";
import React from "react";

const VacansionCard = (props) => {
  return (
    <>
      <div
        style={{
          minWidth: "340px",
          ...(props.w && { minWidth: props.w }), // base width from props
        }}
        className={`flex flex-col gap-[20px] border-[2px] p-[20px] border-[#E5E7EB] rounded-[20px]`}
      >
        <div className="flex  items-center justify-between">
          <h1 className="p-[5px] bg-black text-white rounded-[10px] ">
            {props.opit}
          </h1>
          <div className="flex text-[#9CA3AF] gap-[10px]">
            <MapPin />
            <p>{props.location}</p>
          </div>
        </div>
        <h1 className="text-[18px] font-black">{props.vacansion}</h1>

        <div className="flex items-center gap-[10px]">
          <button className="bg-[#FFA900] px-[20px] p-[10px] text-white rounded-[50px] ">
            Подробнее
          </button>
          <button className="px-[20px] rounded-[50px] border-[#FFA900] text-[#FFA900] border p-[10px]">
            Подать завку
          </button>
        </div>
      </div>
    </>
  );
};

export default VacansionCard;
