import React from "react";

const CardSec4 = (props) => {
  return (
    <>
      <div className="flex border xl:w-[300px] w-[100%] p-[15px] rounded-[10px] flex-col gap-[10px]">
        <h1 className="text-2xl">{props.akb}</h1>
        <div className="flex gap-[10px]">
          <h1 className="text-2xl ">
            2170 <span className="text-[18px]"> АКБ</span>
          </h1>
          <p className="text-2xl">
           {props.okb}<span className="text-[18px]"> OКБ</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CardSec4;
