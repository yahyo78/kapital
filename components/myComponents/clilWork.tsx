import { useTranslations } from "next-intl";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";


// images 
import imageFile from '@/public/Feature.svg'

const ClilWork = () => {
  const t = useTranslations("home");

  return (
    <>
      <div className="xl:w-[350px] rounded-[10px] flex flex-col gap-[10px] p-[20px] border-[#E5E7EB] border-2">
        <h1 className="text-[20px] font-bold">{t("interest")}</h1>
        <p className="text-[#4B5563]">{t("zapolnite")}</p>

        <Dialog>
          <DialogTrigger className="w-[100%] bg-[#FFA900] text-center p-[10px] text-white font-bold rounded-[50px]">
            {t("click")}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Отклик на вакансию</DialogTitle>
              <div className="flex flex-col gap-[20px] py-[20px]">
                <input type="text" className="w-[100%] p-[10px] border rounded-[15px]" placeholder="Имя фамилия" />
                <input type="text" className="w-[100%] p-[10px] border rounded-[15px]" placeholder="Email" />
                <input type="text" className="w-[100%] p-[10px] border rounded-[15px]" placeholder="Телефон" />
                <Image className="w-[100%]" src={imageFile} alt="" />
                <button className="w-[100%] px-[30px] bg-[#1E293B] p-[10px] text-white rounded-[50px]">Отправить</button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ClilWork;
