"use client";
import Mybutton from "@/components/Mybutton";
import React, { Suspense } from "react";
import Loading from "./loading";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "@/src/i18n/routing";
import { useParams } from "next/navigation";

const Page = () => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();
  const changeLang = (locale: string) => {
    router.replace(pathname, { locale });
  };
  return (
    <div>
      {t("title")}
      <Suspense fallback={<Loading />}>
        <Mybutton />
        <select value={locale} onChange={(e) => changeLang(e.target.value)}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="tj">Тоҷикӣ</option>
        </select>
      </Suspense>
    </div>
  );
};

export default Page;
