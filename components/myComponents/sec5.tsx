"use client";

import React from 'react'
import { useTranslations } from 'next-intl'

import CardSec5 from './cardSec5'
import CardSec51 from './cardSec5.1'
import ImageCARD from '@/public/home.svg'

const Sec5 = () => {
  const t = useTranslations("home");

  return (
    <>
      <section className="px-[5%] py-[50px]">

        <div className="flex flex-col items-center gap-[15px]">
          <h1 className="text-[30px] font-bold">{t("infrastructure")}</h1>
          <hr className="text-[#FFA900] border-[2px] w-[150px]" />
        </div>

        <div className="flex xl:flex-row flex-col gap-[20px] justify-between py-[40px]">
          <CardSec5
            img={ImageCARD}
            name={t("warehouseArea")}
            desc={t("warehouseDesc")}
          />
          <CardSec5
            img={ImageCARD}
            name={t("warehouseArea")}
            desc={t("warehouseDesc")}
          />
        </div>

        <div className="w-full flex xl:flex-row flex-col gap-[20px] justify-between">
          <CardSec51 img={ImageCARD} name={t("clientsCount")} text={t("clientsText")} />
          <CardSec51 img={ImageCARD} name={t("clientsCount")} text={t("clientsText")} />
          <CardSec51 img={ImageCARD} name={t("clientsCount")} text={t("clientsText")} />
        </div>

      </section>
    </>
  )
}

export default Sec5
