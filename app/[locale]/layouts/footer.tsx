import Image from "next/image";
import React from "react";

// images
import imageLogoFooter from "@/public/Frame 1261154809.svg";
import imageSocialMedia from "@/public/Social Media Container.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {

    const t = useTranslations("home");
  

  return (
    <div>
      <div className="flex xl:flex-row flex-col gap-[10px] items-center px-[5%] py-[30px] items-center justify-between">
        <Image src={imageLogoFooter} alt="" />
        <ul className="xl:flex hidden bg-white p-[10px] gap-[10px] xl:gap-[50px]">
          <li>
            <Link href={"/"}>{t("onas")}</Link>
          </li>
          <li>
            <Link href={"about"}>{t("karta")}</Link>
          </li>
          <li>
            <Link href={"contact"}>{t("info")}</Link>
          </li>
          <li>
            <Link href={"supervayzer"}>{t("partner")}</Link>
          </li>
          <li>
            <Link href={"vacansion"}>{t("vacansion")}</Link>
          </li>
        </ul>
        <Image src={imageSocialMedia} alt="" />
      </div>
      <div className="px-[5%] flex justify-center">
        <hr className="w-[100%] text-gray-300" />
      </div>
      <div className="flex px-[5%] text-center justify-center py-[30px]">
        <p className="text-[#9CA3AF]">
          Copyright © 2024 KAPITAL-T | All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
