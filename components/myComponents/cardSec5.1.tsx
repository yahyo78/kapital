import Image from "next/image";
import React from "react";

const CardSec51 = (props) => {
  return (
    <>
      <div className="xl:w-[40%] flex flex-col items-center px-[30px] p-[20px] rounded-[20px] bg-[#EEEEEE] ">
        <div className="flex w-full justify-between">
          <div>
            <h1 className="text-[30px] font-bold">{props.name}</h1>
            <p className="text-[#6B7280]">{props.text}</p>
          </div>
          <Image src={props.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default CardSec51;
