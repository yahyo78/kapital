"use client";
import Mybutton from "@/components/Mybutton";
import React, { Suspense } from "react";
import Loading from "./loading";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Page = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      {t("title")}
      <Suspense fallback={<Loading />}>
        <Mybutton />
        <Link href={"en/about"} locale="en">
          En
        </Link>
      </Suspense>
    </div>
  );
};

export default Page;
