"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

import imageContact from "@/public/image 19 (1).svg";
import Sec7 from "@/components/myComponents/sec7";

const Contact = () => {
  const t = useTranslations("home");

  return (
    <>
      <section className="px-[5%] py-[20px]">
        <div>
          <Image className="w-[100%] xl:h-[85vh]" src={imageContact} alt="" />
        </div>

        <div className="flex flex-col xl:items-center gap-[10px] py-[50px]">
          <h1 className="text-[30px] font-bold">{t("mainTitle")}</h1>
          <hr className="text-[#FFA900] border w-[150px]" />
        </div>

        <div className="flex flex-col gap-[40px]">
          <h1 className="font-bold text-[20px]">{t("aboutTitle")}</h1>
          <p className="text-[#111827]">{t("aboutText1")}</p>
          <p className="font-bold">{t("aboutText2")}</p>
          <p className="text-[#111827]">{t("aboutText3")}</p>
        </div>

        <div className="flex flex-col gap-[10px] py-[20px]">
          <h1 className="font-bold text-[20px]">{t("valuesTitle")}</h1>
          <p className="font-bold">{t("valuesText")}</p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[20px] font-bold">{t("goalsTitle")}</h1>
          <p className="font-bold">{t("goal1")}</p>
          <p className="font-bold">{t("goal2")}</p>
          <p className="font-bold">{t("goal3")}</p>
          <p className="text-[#111827]">{t("companyToday")}</p>
        </div>
      </section>

      <section>
        <Sec7 />
      </section>
    </>
  );
};

export default Contact;
