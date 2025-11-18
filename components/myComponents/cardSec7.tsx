import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CardSec7 = (props) => {
  return (
    <>
      <div className="p-[10px] py-[15px] flex flex-col gap-[10px] xl:w-[30%] rounded-[20px]  border-[#E5E7EB] border-[3px]">
        <Image className="w-[100%]" alt="" src={props.img} />
        <h1 className="text-[20px] font-bold">Title</h1>
        <p className="text-[#4B5563]">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </p>
        <div className="flex text-[#FFA900] gap-[10px]">
          <p className="">Подробнее</p>
          <ChevronRight />
        </div>
      </div>
    </>
  );
};

export default CardSec7;
