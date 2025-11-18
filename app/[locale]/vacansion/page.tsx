"use client";

import VacansionCard from "@/components/myComponents/vacansionCard";
import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Vacansion = () => {
  const t = useTranslations("home");

  return (
    <section className="px-[5%] flex xl:flex-row flex-col justify-between w-full">
      <aside className="xl:w-[30%] xl:flex hidden flex-col gap-[30px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[20px] font-bold">{t("regionsTitle")}</h1>

          <div className="bg-[#F9FAFB] flex py-[20px] flex-col gap-[20px] rounded-[10px] p-[10px]">
            {t.raw("regions").map((item: any, index: number) => (
              <div
                key={index}
                className="flex rounded-[10px] bg-white p-[10px] px-[15px] justify-between"
              >
                <div className="flex gap-[10px]">
                  <input type="checkbox" />
                  <h1>{item.name}</h1>
                </div>
                <p>{item.count}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="text-[#FFA900] w-[150px] border-[2px]" />

        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[20px] font-bold">{t("categoriesTitle")}</h1>

          <div className="bg-[#F9FAFB] flex py-[20px] flex-col gap-[20px] rounded-[10px] p-[10px]">
            {t.raw("categories").map((item: any, index: number) => (
              <div
                key={index}
                className="flex rounded-[10px] bg-white p-[10px] px-[15px] justify-between"
              >
                <div className="flex gap-[10px]">
                  <input type="checkbox" />
                  <h1>{item.name}</h1>
                </div>
                <p>{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <aside className="xl:w-[65%] flex flex-col gap-[10px]">
        <h1 className="text-[30px] font-bold">{t("vacanciesTitle")}</h1>

        <div className="flex xl:gap-[20px] gap-[10px] w-[100%]">
          <button className="p-[10px] xl:hidden text-white px-[20px] bg-[#FFA900] rounded-[50px]">
            <Dialog>
              <DialogTrigger className="xl:hidden">
                <SlidersHorizontal />
              </DialogTrigger>
              <DialogContent className="p-5 max-h-[80vh] w-full sm:w-[400px] overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold mb-4">
                    Filter
                  </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col px-[5%] gap-[5px] overflow-y-auto max-h-[65vh]">
                  {/* Regions */}
                  <div className="flex flex-col gap-4">
                    <h1 className="text-[20px] font-bold">
                      {t("regionsTitle")}
                    </h1>
                    <div className="flex flex-col gap-2 bg-[#F9FAFB] p-3 rounded-lg">
                      {t.raw("regions").map((item: any) => (
                        <div
                          key={item.name}
                          className="flex justify-between bg-white p-2 rounded-md"
                        >
                          <div className="flex gap-2">
                            <input type="checkbox" />
                            <span>{item.name}</span>
                          </div>
                          <p>{item.count}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-[#FFA900]" />

                  {/* Categories */}
                  <div className="flex flex-col gap-4">
                    <h1 className="text-[20px] font-bold">
                      {t("categoriesTitle")}
                    </h1>
                    <div className="flex flex-col gap-2 bg-[#F9FAFB] p-3 rounded-lg">
                      {t.raw("categories").map((item: any) => (
                        <div
                          key={item.name}
                          className="flex justify-between bg-white p-2 rounded-md"
                        >
                          <div className="flex gap-2">
                            <input type="checkbox" />
                            <span>{item.name}</span>
                          </div>
                          <p>{item.count}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </button>
          <div className="bg-[#F4F4F5] rounded-[50px] w-[100%] p-[10px]">
            <input
              placeholder={t("searchPlaceholder")}
              className="w-[100%] border-none outline-none p-[5px]"
              type="text"
            />
          </div>
          <button className="p-[10px] text-white px-[20px] bg-[#FFA900] rounded-[50px]">
            <Search />
          </button>
        </div>

        <div className="py-[30px] flex flex-col gap-[30px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <VacansionCard
              key={index}
              w={"100%"}
              vacansion={t("card.job")}
              location={t("card.location")}
              opit={t("card.experience")}
            />
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Vacansion;
