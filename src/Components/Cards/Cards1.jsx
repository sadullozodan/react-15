import React from "react";
import { useTranslation } from "react-i18next";
export default function FinanceCard() {
      const { t, i18n } = useTranslation();
  return (
    <div className=" text-white min-h-screen flex items-center justify-center relative z-10">
      <div className="w-[550px] bg-[#11141b] rounded-2xl p-5 shadow-lg border border-[#1f232b]">
        <div className="bg-[#1a2a1a] rounded-xl p-4 flex items-center gap-3 mb-4">
          <div className="bg-lime-400 text-black w-8 h-8 flex items-center justify-center rounded-full">
            +
          </div>
          <div>
            <p className="font-bold">+$5000,00</p>
            <span className="text-sm text-gray-400">{t("text63")}</span>
          </div>
        </div>
        <h2 className="mb-2 text-gray-300">{t("text65")}</h2>
        <div className="bg-[#151922] p-3 rounded-xl mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">{t("text66")}</p>
              <p>Joel Kenley</p>
            </div>
            <p className="text-red-400">-$12.00</p>
          </div>
        </div>
        <div className="bg-[#151922] p-3 rounded-xl mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">{t("text66")}</p>
              <p>Joel Kenley</p>
            </div>
            <p className="text-red-400">-$24.00</p>
          </div>
        </div>
        <div className="bg-[#151922] p-3 rounded-xl mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">{t("text66")}</p>
              <p>Joel Kenley</p>
            </div>
            <p className="text-red-400">-$68.00</p>
          </div>
        </div>
        <h2 className="mb-2 text-gray-300">{t("text67")}</h2>
        <div className="bg-[#151922] p-4 rounded-xl mb-4 flex justify-between">
          <div>
            <p>🇮🇳 INR</p>
            <span className="text-gray-400 text-sm">{t("text68")}</span>
            <p className="mt-2">5,0000</p>
          </div>
          <div>
            <p>🇺🇸 USD</p>
            <span className="text-gray-400 text-sm">{t("text69")}</span>
            <p className="mt-2">12.00</p>
          </div>
        </div>
        <button className="w-full bg-lime-500 text-black py-2 rounded-xl font-semibold">
          {t("text62")}
        </button>
        <div className="mt-4 flex justify-between items-center text-gray-400 text-sm">
          <span>{t("text70")}</span>
          <div className="flex gap-2 text-lime-400">
            <span>$</span>
            <span>€</span>
            <span>₿</span>
          </div>
        </div>
      </div>
    </div>
  );
}