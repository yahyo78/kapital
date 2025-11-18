"use client";

import ClilWork from "@/components/myComponents/clilWork";
import VacansionCard from "@/components/myComponents/vacansionCard";
import { MapPin } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

const Supervayzer = () => {
  const t = useTranslations("home");

  return (
    <>
      <section className="w-full">

        <div className="flex flex-col gap-[30px] items-center">
          <h1 className="text-[30px] font-bold">{t("title")}</h1>
          <hr className="text-[#FFA900] border-[2px] w-[130px]" />

          <div className="flex justify-center items-center gap-[20px]">
            <h1 className="p-[10px] rounded-[10px] bg-black text-white">{t("experience")}</h1>
            <div className="flex text-[#9CA3AF] gap-[10px]">
              <MapPin />
              <h1>{t("location")}</h1>
            </div>
          </div>
        </div>

        <div className="py-[70px] flex xl:flex-row flex-col justify-between gap-[50px] xl:px-[5%] px-[8%]">

          <aside className="xl:w-[60%] flex flex-col gap-[50px]">

            <div>
              <li className="font-bold">{t("jobTitle")}</li>
              <li className="font-bold">{t("fullTime")}</li>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h1 className="font-bold text-[25px]">{t("aboutCompanyTitle")}</h1>
              <p>{t("aboutCompany1")}</p>
              <p>{t("aboutCompany2")}</p>

              {t.raw("qualities").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </div>

            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[25px] font-bold">{t("responsibilitiesTitle")}</h1>
              {t.raw("responsibilities").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </div>

            <div>
              <h1 className="font-bold text-[25px]">{t("importantTitle")}</h1>
              <p>{t("importantText")}</p>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[25px] font-bold">{t("expectationsTitle")}</h1>
              {t.raw("expectations").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </div>

            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[25px] font-bold">{t("weOfferTitle")}</h1>
              {t.raw("weOffer").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </div>

            <h1 className="text-[25px] font-bold">{t("finalText")}</h1>

          </aside>

          <aside>
            <ClilWork />
          </aside>

        </div>

        <div className="w-[100%]">
          <div className="flex flex-col gap-[10px] py-[20px] items-center">
            <h1 className="text-[30px] text-center font-bold">{t("otherVacancies")}</h1>
            <hr className="text-[#FFA900] w-[120px] border-[2px]" />
          </div>

          <div className="px-[5%] w-full flex gap-[50px] flex-nowrap overflow-x-auto py-[50px]">
            {[...Array(5)].map((_, i) => (
              <VacansionCard
                key={i}
                w={"340px"}
                vacansion={t("vacansion")}
                location={t("location")}
                opit={t("experience")}
              />
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default Supervayzer;
