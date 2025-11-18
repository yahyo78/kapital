import Image from "next/image";
import React from "react";

const CardSec5 = (props) => {
  return (
    <div className="xl:w-[49%] rounded-[10px] flex flex-col items-center bg-[#F5F5F5] p-[20px] px-[30px]">
      <Image alt="" src={props.img} />
      <h1 className="text-[25px] font-bold">{props.name}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default CardSec5;
