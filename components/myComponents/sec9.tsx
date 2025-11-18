"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

import imageFile from "@/public/Upload.svg";
import imageMap from "@/public/Frame 1261154859.png";
import imageSms from "@/public/sms.svg";

const Sec9 = () => {
  const t = useTranslations("home");

  return (
    <>
      <section className="w-full flex xl:flex-row flex-col gap-[50px] bg-[#E5E7EB] p-[30px]">

        <aside className="xl:w-[47%] px-[5%] flex flex-col gap-[10px]">
          <div className="flex justify-center">
            <h1 className="text-[33px] font-bold">{t("title")}</h1>
          </div>

          <div className="flex flex-col gap-[20px]">

            <input
              className="p-[10px] w-[100%] rounded-[10px] bg-[#FFFFFF]"
              placeholder={t("fullName")}
            />

            <input
              className="p-[10px] w-[100%] rounded-[10px] bg-[#FFFFFF]"
              placeholder={t("companyName")}
            />

            <div className="flex justify-between">
              <input
                className="p-[10px] w-[48%] rounded-[10px] bg-[#FFFFFF]"
                placeholder={t("email")}
                type="email"
              />

              <input
                className="p-[10px] w-[48%] rounded-[10px] bg-[#FFFFFF]"
                placeholder={t("phone")}
                type="number"
              />
            </div>

            <div className="bg-[#FFFFFF] flex gap-[20px] xl:p-[20px] p-[10px] rounded-[10px]">
              <Image alt="" src={imageFile} />
              <div>
                <p className="font-bold text-[16px] xl:text-[20px]">
                  {t("uploadTitle")}
                </p>
                <p className="text-[#6B7280] text-[15px]">{t("uploadSize")}</p>
              </div>
            </div>

            <button className="w-[100%] p-[10px] text-white rounded-[10px] bg-[#1E293B]">
              {t("send")}
            </button>

          </div>
        </aside>

        <aside className="xl:w-[47%]">
          <div>
            <Image className="w-[100%]" src={imageMap} alt="" />

            <div className="xl:px-[20px] px-[10px] flex xl:flex-row flex-col gap-[20px] justify-between">

              <button className="p-[10px] xl:p-[20px] flex gap-[10px] justify-center items-center xl:w-[47%] bg-[#F4F4F5] rounded-[10px]">
                <Image src={imageSms} alt="" /> {t("emailContact")}
              </button>

              <button className="p-[10px] xl:p-[20px] flex gap-[10px] justify-center items-center xl:w-[47%] bg-[#F4F4F5] rounded-[10px]">
                <Image src={imageSms} alt="" /> {t("emailContact")}
              </button>

            </div>

          </div>
        </aside>

      </section>
    </>
  );
};

export default Sec9;
