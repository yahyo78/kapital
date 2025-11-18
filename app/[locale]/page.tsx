// "use client";
// import Mybutton from "@/components/Mybutton";
// import React, { Suspense } from "react";
// import Loading from "./loading";
// import { useTranslations } from "next-intl";
// import Link from "next/link";
// import { usePathname, useRouter } from "@/src/i18n/routing";
// import { useParams } from "next/navigation";

// const Page = () => {
//   const t = useTranslations("HomePage");
//   const router = useRouter();
//   const pathname = usePathname();
//   const { locale } = useParams();
//   const changeLang = (locale: string) => {
//     router.replace(pathname, { locale });
//   };
//   return (
//     <div>
//       {t("title")}
//       <Suspense fallback={<Loading />}>
//         <Mybutton />
//         <select value={locale} onChange={(e) => changeLang(e.target.value)}>
//           <option value="en">English</option>
//           <option value="ru">Русский</option>
//           <option value="tj">Тоҷикӣ</option>
//         </select>
//       </Suspense>
//     </div>
//   );
// };

// export default Page;

"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

// images
import imageOffice from "@/public/unsplash_U2BI3GMnSSE.svg";
import imageOffice2 from "@/public/unsplash_pYlBAu3de0w.svg";
import imageOffice3 from "@/public/unsplash_nC6CyrVBtkU.svg";
import iconPhoto from "@/public/Frame 1261154794.svg";

import Sec3 from "@/components/myComponents/sec3";
import Sec4 from "@/components/myComponents/sec4";
import Sec5 from "@/components/myComponents/sec5";
import Sec6 from "@/components/myComponents/sec6";
import Sec7 from "@/components/myComponents/sec7";
import Sec8 from "@/components/myComponents/sec8";
import Sec9 from "@/components/myComponents/sec9";

const Page = () => {
  const t = useTranslations("home");

  return (
    <>
      <section>
        <div className="bgImage">
          <div className="flex flex-col h-screen gap-[20px] items-center justify-center text-white">
            <h1 className="xl:text-[100px] text-center text-[40px] font-bold">
              {t("companyName")}
            </h1>

            <p className="text-center px-[30px]">{t("slogan")}</p>

            <div className="flex xl:flex-row flex-col gap-[20px]">
              <button className="bg-[#FFA900] p-[10px] px-[30px] rounded-[50px]">
                {t("bePartner")}
              </button>

              <button className="border-[#FFA900] border-[2px] p-[10px] px-[30px] rounded-[50px] text-[#FFA900]">
                {t("contactUs")}
              </button>
            </div>

            <div className="flex xl:flex-row flex-col gap-[20px]">
              <div className="flex items-center gap-[20px]">
                <p className="xl:text-5xl text-[30px] font-bold">8250</p>
                <div>
                  <p>{t("activeClients")}</p>
                  <p>{t("includingHoReCa")}</p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-[20px]">
                <p className="xl:text-5xl text-[30px] font-bold">9500</p>
                <div>
                  <p>{t("totalClients")}</p>
                  <p>{t("includingHoReCa")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[50px] w-[100%] px-[5%]">
        <div>
          <h1 className="text-[30px] font-bold text-center">{t("aboutUs")}</h1>
          <div className="flex justify-center text-center py-[10px]">
            <p className="xl:w-[800px] w-[80%]">{t("aboutUsText")}</p>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col py-[40px] justify-between gap-[40px]">
          <aside className="xl:w-[45%] flex flex-col gap-[20px] w-full">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[30px] font-bold text-[#FFA900]">
                {t("values")}
              </h1>
              <div className="p-[20px] border-[#E5E7EB] border-[2px] rounded-[20px]">
                <p>{t("valuesText")}</p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[30px] font-bold text-[#FFA900]">
                {t("goals")}
              </h1>

              <div className="p-[20px] flex flex-col gap-[20px] border-[#E5E7EB] border-[2px] rounded-[20px]">
                <div className="flex gap-[10px] items-center">
                  <Image src={iconPhoto} alt="" />
                  <p className="font-bold">{t("goal1")}</p>
                </div>

                <div className="flex gap-[10px] items-center">
                  <Image src={iconPhoto} alt="" />
                  <p className="font-bold">{t("goal2")}</p>
                </div>

                <div className="flex gap-[10px] items-center">
                  <Image src={iconPhoto} alt="" />
                  <p className="font-bold">{t("goal3")}</p>
                </div>
              </div>

              <h1>{t("companyToday")}</h1>
            </div>
          </aside>

          <aside className="w-full flex flex-col gap-[20px] xl:w-[45%]">
            <Image className="w-[100%]" src={imageOffice} alt="" />
            <div className="flex xl:flex-row flex-col gap-[30px] justify-between items-center">
              <Image className="xl:w-[60%]" src={imageOffice2} alt="" />
              <Image
                className="xl:w-[35%] w-[100%]"
                src={imageOffice3}
                alt=""
              />
            </div>
          </aside>
        </div>
      </section>

      <section>
        <Sec3 />
      </section>
      <section>
        <Sec4 />
      </section>
      <section>
        <Sec5 />
      </section>
      <section>
        <Sec6 />
      </section>
      <section>
        <Sec7 />
      </section>
      <section>
        <Sec8 />
      </section>
      <section>
        <Sec9 />
      </section>
    </>
  );
};

export default Page;
