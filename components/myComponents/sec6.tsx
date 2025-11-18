"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

import imageKrember from '@/public/Frame 1261154819.svg'

const Sec6 = () => {
  const t = useTranslations("home");

  return (
    <section className="px-[3%]">
      <div className="bg-[#111827] rounded-[10px] py-[50px] flex flex-col items-center gap-[20px] text-white">

        <h1 className="text-[30px] font-bold">{t("title")}</h1>
        <hr className="w-[150px] text-[#FFA900]" />

        <p className="xl:w-[700px] text-center">
          {t("description")}
        </p>

        <div className="flex flex-wrap justify-center gap-[30px]">
          <Image className="w-[150px] xl:w-[250px]" src={imageKrember} alt="" />
          <Image className="w-[150px] xl:w-[250px]" src={imageKrember} alt="" />
          <Image className="w-[150px] xl:w-[250px]" src={imageKrember} alt="" />
          <Image className="w-[150px] xl:w-[250px]" src={imageKrember} alt="" />
        </div>

      </div>
    </section>
  );
};

export default Sec6;
