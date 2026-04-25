import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

export function Cards2() {
    const { t} = useTranslation();
    return <>
    <div className="flex justify-between mt-[60px]">
     <div>
        <h1 className="text-[white] text-[40px]  ml-[30px]">
           {t("text")} <span className="text-[#CAFF33]">{t("text1")}</span>
        </h1>
        <h1 className="text-[#B3B3B3] ml-[30px] text-[22px] w-[900px] ">
              {t("text2")}
        </h1>
     </div>
     <div className="mt-[50px] mr-[20px]">
     <Button >
         {t("btn")}
     </Button>
     </div>

    </div>
    </>
       
}