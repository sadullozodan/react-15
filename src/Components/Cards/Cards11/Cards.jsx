import { useTranslation } from "react-i18next";
import icon from "../../../assets/Image/Abstract Design (1).png"
import Button from "../../Button/Button"
export function Cards11(){
    const { t, i18n } = useTranslation();
    return(
        <>
          <div className="w-[80%] h-[200px] border-[1px] bg-[#1C1C1C] border-[#CAFF33] ml-[30px] mt-[50px] rounded-4xl flex ml-[150px] mb-[50px]">
            <img className="absolute z-0" src={icon} alt="" />
            <div className="flex flex-col pl-[70px] justify-center">
                <h1 className="text-[25px] text-[white] mb-[20px]">{t("text50")}<span className="text-[#CAFF33]"> {t("text51")}</span></h1>
                <p className="text-gray-300 w-[70%]">{t("text52")}</p>
            </div>
            <div className="mt-[80px] mr-[70px]">
               <Button >{t("intro")}</Button>
            </div>
          </div>
        </>
    )
}