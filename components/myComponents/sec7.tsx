"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

import CardSec7 from "./cardSec7";
import imageCard from "@/public/image 19.svg";
import { ArrowRight } from "lucide-react";

const Sec7 = () => {
  const t = useTranslations("home");

  return (
    <>
      <section className="px-[5%] py-[50px]">

        <h1 className="text-center font-bold text-[30px] text-[#111827]">
          {t("otherNews")}
        </h1>

        <div className="flex xl:flex-row flex-wrap gap-[20px] flex-col justify-between py-[30px]">
          <CardSec7 img={imageCard} />
          <CardSec7 img={imageCard} />
          <CardSec7 img={imageCard} />
        </div>

        <div className="flex justify-center py-[50px]">
          <button className="flex px-[20px] p-[10px] rounded-[50px] bg-[#FFA900] text-white gap-[20px]">
            {t("allNews")}
            <ArrowRight />
          </button>
        </div>

      </section>
    </>
  );
};

export default Sec7;
