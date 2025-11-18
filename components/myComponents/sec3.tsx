"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

import imageTime from "@/public/Frame 1261154794 (1).svg";
import { MapPin } from "lucide-react";

const Sec3 = () => {
  const t = useTranslations("home");

  return (
    <>
      <section className="w-[100%] flex xl:flex-row flex-col gap-[50px] justify-between px-[5%]">
        
        <aside className="w-full xl:w-[40%] flex flex-col gap-[20px]">
          
          <div className="bg-gray-100 rounded-[20px]">
            <div className="flex items-center rounded-[20px] imageBg p-[10px] gap-[10px]">
              <Image src={imageTime} alt="" />
              <div>
                <h1 className="text-[30px] font-bold">{t("years")}</h1>
                <p>{t("yearsText")}</p>
              </div>
            </div>
          </div>

          <div className="w-full flex xl:flex-row flex-col gap-[30px] justify-between">

            <div className="bg-gray-100 py-[10px] rounded-[20px] xl:w-[48%]">
              <div className="w-full p-[10px] flex flex-col rounded-[20px] imageBg2 gap-[10px] ">
                <Image src={imageTime} alt="" />
                <div className="flex flex-col gap-[10px] px-[15px]">
                  <h1 className="text-[30px] font-bold">{t("employeesCount")}</h1>
                  <p className="text-[#6B7280]">{t("employeesText")}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-[20px] xl:w-[48%]">
              <div className="w-full p-[10px] flex flex-col rounded-[20px] imageBg2 gap-[10px] ">
                <Image src={imageTime} alt="" />
                <div className="flex flex-col gap-[10px] px-[15px]">
                  <h1 className="text-[30px] font-bold">{t("employeesCount")}</h1>
                  <p className="text-[#6B7280]">{t("employeesText")}</p>
                </div>
              </div>
            </div>

          </div>

        </aside>

        <aside className="w-full xl:w-[57%] ">
          <div className="h-full rounded-[20px] bg-gray-100">
            
            <div className="flex flex-col justify-center imageBg3 h-full rounded-[20px] items-center">

              <h1 className="text-[20px] xl:pt-0 pt-[20px] font-bold">
                {t("mainOffices")}
              </h1>

              <div className="flex xl:flex-row flex-col py-[20px] gap-[20px] pt-[40px]">

                <div className="backdrop-blur-2xl p-[20px] rounded-[10px] xl:w-[300px] flex flex-col items-center">
                  <div className="flex gap-[10px]">
                    <MapPin />
                    <div><p>{t("city")}</p></div>
                  </div>
                  <p className="text-[#6B7280]">{t("phone")}</p>
                  <p className="text-[#6B7280]">{t("address")}</p>
                </div>

                <div className="backdrop-blur-2xl p-[20px] rounded-[10px] xl:w-[300px] flex flex-col items-center">
                  <div className="flex gap-[10px]">
                    <MapPin />
                    <div><p>{t("city")}</p></div>
                  </div>
                  <p className="text-[#6B7280]">{t("phone")}</p>
                  <p className="text-[#6B7280]">{t("address")}</p>
                </div>

              </div>

              <div className="flex flex-col text-center items-center pt-[20px] gap-[10px] ">
                <h1 className="text-[25px]">{t("branchesTitle")}</h1>

                <div className="flex justify-center gap-[20px] flex-wrap">
                  <p className="p-[10px] w-[120px] text-center rounded-[10px] backdrop-blur-2xl">
                    {t("branch1")}
                  </p>
                  <p className="p-[10px] w-[120px] text-center rounded-[10px] backdrop-blur-2xl">
                    {t("branch1")}
                  </p>
                  <p className="p-[10px] w-[120px] text-center rounded-[10px] backdrop-blur-2xl">
                    {t("branch1")}
                  </p>
                  <p className="p-[10px] w-[120px] text-center rounded-[10px] backdrop-blur-2xl">
                    {t("branch1")}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </aside>

      </section>
    </>
  );
};

export default Sec3;
