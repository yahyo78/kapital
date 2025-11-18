"use client";
import React from "react";

// images
import imageLogo from "@/public/image 9.svg";
import Image from "next/image";
import Link from "next/link";
import { TextAlignJustify } from "lucide-react";
import Select from "@/components/myComponents/select";
import { useTranslations } from "next-intl";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const t = useTranslations("home");
  return (
    <nav className="flex items-center justify-between">
      <Image src={imageLogo} alt="" />
      <ul className="xl:flex hidden gap-[50px]">
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
      <div className="flex gap-[10px]">
        <Select />
        <Popover>
          <PopoverTrigger>
            <TextAlignJustify />
          </PopoverTrigger>
          <PopoverContent>
            <ul className="xl:hidden flex flex-col bg-white p-[10px] gap-[10px] xl:gap-[50px]">
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
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
