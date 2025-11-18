"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

import imageAbout from "@/public/image 19 (1).svg";
import CardSec7 from "@/components/myComponents/cardSec7";

const Page = () => {
  const t = useTranslations("home");

  return (
    <>
      <section className="px-[5%] py-[50px]">
        <div className="flex flex-col pb-[60px] items-center">
          <h1 className="font-bold text-[35px]">{t("title2News")}</h1>
          <hr className="text-[#FFA900] w-[130px] border" />
        </div>

        <div className="flex xl:flex-row gap-[50px] flex-col items-center justify-between border-gray-200 border-[2px] rounded-[15px] p-[20px]">
          <aside className="xl:w-[47%] flex flex-col gap-[10px] rounded-[10px]">
            <h1 className="text-[25px] font-bold">{t("blockTitle")}</h1>

            <div className="flex flex-col gap-[20px]">
              <p className="text-[#4B5563]">{t("p1")}</p>
              <p className="text-[#4B5563]">{t("p2")}</p>
              <p className="text-[#4B5563]">{t("p3")}</p>

              <button className="flex gap-[10px] text-[#FFA900]">
                {t("more")} <ChevronRight />
              </button>
            </div>
          </aside>

          <aside>
            <Image className="w-[100%]" src={imageAbout} alt="" />
          </aside>
        </div>
      </section>

      <section className="px-[5%] flex xl:flex-row flex-col justify-between flex-wrap gap-[30px] py-[50px]">
        <CardSec7 img={imageAbout} />
        <CardSec7 img={imageAbout} />
        <CardSec7 img={imageAbout} />
        <CardSec7 img={imageAbout} />
        <CardSec7 img={imageAbout} />
        <CardSec7 img={imageAbout} />
      </section>
    </>
  );
};

export default Page;
