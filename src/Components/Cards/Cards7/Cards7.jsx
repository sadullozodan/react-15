import { useTranslation } from "react-i18next";


export function Cards7(props) {
 const { t, i18n } = useTranslation();

    return (
        <>
           <div className="w-[300px] h-[300px] rounded-2xl bg-[#1C1C1C] ml-[30px] pt-[10px]">
            <h1 className="max-w-[250px] text-center pt-[5px] ml-[23px] text-[#CAFF33] bg-[#191919] mt-[40px] h-[40px] rounded-2xl border-[1px]">{t("text28")}</h1>
            <h1 className="max-w-[250px] text-center pt-[5px] text-[#FFFFFF] border-[gray] ml-[23px] mt-[40px] h-[40px] rounded-2xl border-[1px]">{t("text29")}</h1>
            <h1 className="max-w-[250px] text-center pt-[5px] text-[#FFFFFF] border-[gray] ml-[23px] mt-[40px] h-[40px] rounded-2xl border-[1px]">{t("text30")}</h1>
           </div>
        </>
    )
}