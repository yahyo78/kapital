"use client";
import React from "react";
import Mybutton from "@/components/Mybutton";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "@/src/i18n/routing";
import { useParams } from "next/navigation";

const Select = () => {
  const t = useTranslations("home");
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();
  const changeLang = (locale: string) => {
    router.replace(pathname, { locale });
  };
  return (
    <>
      <select value={locale} onChange={(e) => changeLang(e.target.value)}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="tj">Тоҷикӣ</option>{" "}
      </select>
    </>
  );
};

export default Select;
