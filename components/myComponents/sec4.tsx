"use client";

import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

import imageMap from '@/public/Group 2.svg'
import CardSec4 from './cardSec4'

const Sec4 = () => {
  const t = useTranslations("home");

  return (
    <>
      <section className="px-[5%] py-[100px]">
        <div className="flex justify-center">
          <h1 className="font-bold text-3xl">{t("coverageMap")}</h1>
        </div>

        <div className="flex xl:flex-row items-center gap-[50px] flex-col justify-between py-[50px]">
          <aside className="flex flex-col w-[100%] gap-[20px]">

            <CardSec4 obk={t("obk")} akb={t("akb")} />
            <hr className="text-[#FFA900] border w-[200px]" />

            <CardSec4 obk={t("obk")} akb={t("akb")} />
            <hr className="text-[#FFA900] border w-[200px]" />

          </aside>

          <Image src={imageMap} alt="" />
        </div>
      </section>
    </>
  );
};

export default Sec4;
