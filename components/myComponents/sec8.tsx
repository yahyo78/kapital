"use client";

import React from "react";
import { useTranslations } from "next-intl";
import CardSec8 from "./cardSec8";

const Sec8 = () => {
  const t = useTranslations("home");

  return (
    <section className="px-[5%]">
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] font-bold">{t("vacancies")}</h1>
        <hr className="text-[#FFA900] border w-[150px]" />
      </div>

      <div className="flex xl:flex-row flex-col justify-between gap-[20px] py-[50px]">
        <CardSec8
          opit={t("experience")}
          location={t("location")}
          h1Text={t("position")}
          pText={t("description")}
        />

        <CardSec8
          opit={t("experience")}
          location={t("location")}
          h1Text={t("position")}
          pText={t("description")}
        />

        <CardSec8
          opit={t("experience")}
          location={t("location")}
          h1Text={t("position")}
          pText={t("description")}
        />
      </div>
    </section>
  );
};

export default Sec8;
