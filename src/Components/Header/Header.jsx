import { AiOutlineGlobal } from "react-icons/ai"; 
import { memo } from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/Image/Group (12).png"
import l32 from "../../assets/Image/Logo (32).png"
import Button from "@mui/material/Button";



function Header() {
  const { t, i18n } = useTranslation();

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  }
  return (
    <>
    <div>
     <img className="absolute "  src={img} alt="" />
      <div className="flex ml-[0px]">

      <div className="w-[93%] border-[0.3px] border-[#CAFF33] h-[100px] mt-[20px] rounded-2xl ml-[50px] p-[10px]  items-center flex justify-around  sticky top-0 z-[1000]">
        <div>
        <img src={l32} alt="" />
        </div>
        <div className="flex gap-[20px]">
            <h1 className="w-[100px] h-[30px]  border-[1px solid] border-[#CAFF33] bg-[#CAFF33] flex items-center items-center pl-[28px] rounded-2xl text-[black] ">{t("text53")}</h1>
            <h1 className="text-[#FFFFFF]">{t("text54")}</h1>
            <h1 className="text-[#FFFFFF]">{t("text55")}</h1>
            <h1 className="text-[#FFFFFF]">{t("text56")}</h1>
        </div> 
        <div className="flex gap-[20px] pr-[0px]">
      <select 
        className="p-2 bg-[#CAFF33] border-[1px solid CAFF33] border-[#CAFF33] rounded-2xl"
        value={i18n.language}
        onChange={(e) => TranslateClick(e.target.value)}
        >
        <option value="en">English </option>
        <option value="ru">Русский</option>
      </select>
      <div className="w-[40px] h-[40px] rounded-full border-[1px solid] border-[#CAFF33] flex items-center justify-center">
            <Button href="#text-buttons">Link</Button>
      </div>
            <h1 className="w-[100px] flex justify-center items-center text-[18px] rounded-2xl h-[40px] border-[1px solid] bg-[#CAFF33]">Login</h1>
            
        </div>
      </div>
      <div>
    </div>
      </div>
    </div>
          </>
  );
}

export default memo(Header);