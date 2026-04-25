import { AiOutlineMenuUnfold } from "react-icons/ai";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import Cards from "../Cards/Cards";
import icon from "../../assets/Image/Icon (33).png"
import Button from "../Button/Button";
import FinanceCard from "../Cards/Cards1";
import acb from "../../assets/Image/Abstract Design.png"
import { Cards2 } from "../Cards/Cards2";
import { Cards3 } from "../Cards/Cards3/Cards3";
import con7 from '../../assets/Image/Icon Container (7).png'
import { Cards4 } from "../Cards/Cards4/Cards4";
import abs from "../../assets/Image/Abstract Design (1).png"
import abs1 from "../../assets/Image/Abstract Design (2).png"
import { Cards5 } from "../Cards/Cards5/Cards5";
import { Cards6 } from "../Cards/Cards6/Cards6";
import { Cards7 } from "../Cards/Cards7/Cards7";
import { Cards8 } from "../Cards/Cards8/Cards8";
import FAQCarousel from "../Cards/Cards9/Cards9";
import Testimonials from "../Cards/Cards10/Cards10";
import { Cards11 } from "../Cards/Cards11/Cards";
function Content() {
   const { t, i18n } = useTranslation();
  return (
    <>
      <div className="flex gap-[70px]">
    <div className="ml-[10px]">
    <div className="flex mt-[40px] ml-[30px] w-[300px] bg-[#262626] rounded-2xl  items-center gap-[10px] pl-[10px] h-[50px] border-[1px solid]">
       <img src={icon} alt="" />
      <h1 className="text-[white]">{t("welcome5")}</h1>
    </div>
    <h1 className="w-[600px] ml-[30px] mt-[20px] text-[#FFFFFF]  text-[45px]">{t("welcome")}{""}<span className="text-[#CAFF33]">{t("welcome1")}</span></h1>
 <h1 className="w-[600px] ml-[30px] mt-[20px] text-[#FFFFFF]  text-[20px]">{t("yalla")}</h1>
      <div className="ml-[30px] mt-[30px]">
     <Button>
      {t("intro")}
     </Button>
      </div>
    </div>
    <div>
    </div>
    <div className="ml-[50px] flex relative">
     <FinanceCard />
     <img className="w-[300px]  mt-[60px] h-[350px] absolute z-0 ml-[370px]" src={acb} alt="" />
    </div>
      </div>
      <Cards2/>
      <div className="flex mt-[120px]  justify-around">
        <Cards3 img={con7} text={t("text3")} text1={t("text4")}/>
        <Cards3 img={con7} text={t("text5")} text1={t("text6")}/>
        <Cards3 img={con7} text={t("text7")} text1={t("text8")}/>
      </div>
      <div>
        <h1 className="text-[40px] text-[#CAFF33] ml-[30px] mt-[150px]">{t("text9")}</h1>
        <h1 className="text-[22px] ml-[30px] text-[#B3B3B3] w-[1200px] mb-[0px]">{t("text10")}</h1>
      </div>
    <div className="flex gap-15">
      <div className="w-[820px] mt-[50px] ml-[30px] h-[555px] border-[1px solid] rounded-4xl bg-[#1C1C1C] relative z-20">
       <img className="absolute z-10" src={abs} alt="" />
       <div className="flex flex-wrap w-[800px] justify-around mt-[40px] relative z-20">
       <Cards4 text={t("text11")}/>
       <Cards4 text={t("text12")}/>
       <Cards4 text={t("text13")}/>
       <Cards4 text={t("text14")}/>
       </div>
      </div>
      <div className="mt-[50px]">
        <Cards5 
          text={t("text15")}
          text1={t("text16")}
          text2={t("text17")}
          text3={t("text18")}
          text4={t("text19")}
          text5={t("text20")}
          num1={"78%"}
          num2={"63%"}
          num3={"91%"}
        />
      </div>
        </div>
        <div className="flex gap-15 mt-[100px]">
      <div className="mt-[50px] ml-[40px] ">
        <Cards6 
          text={t("text21")}
          text1={t("text22")}
          text2={t("text23")}
          text3={t("text24")}
          text4={t("text25")}
          text5={t("text20")}
          num1={"65%"}
          num2={"70%"}
          num3={"45%"}
        />
      </div>
      <div className="w-[820px] mt-[50px] h-[580px] mb-[20px] border-[1px solid] rounded-4xl bg-[#1C1C1C] relative z-20 mr-[20px]">
       <img className="absolute z-10 ml-[587px]" src={abs1} alt="" />
       <div className="flex flex-wrap w-[800px] justify-around mt-[50px] relative z-20">
       <Cards4 text={t("text11")}/>
       <Cards4 text={t("text12")}/>
       <Cards4 text={t("text13")}/>
       <Cards4 text={t("text14")}/>
       </div>
      </div>
        </div>
      <div>
        <h1 className="text-[40px] text-[#CAFF33] ml-[30px] mt-[120px]">{t("text26")}</h1>
        <h1 className="text-[22px] ml-[30px] text-[#B3B3B3] w-[1200px] mt-[10px]">{t("text27")}</h1>  
    </div>
 <div className="flex gap-[90px] mt-[50px]">
     <div>
      <Cards7/>
     </div>
     <div className="flex flex-wrap gap-[30px]">
      <Cards8 text={t("text31")} text1={t("text32")}/>
      <Cards8 text={t("text33")} text1={t("text34")}/>
      <Cards8 text={t("text35")} text1={t("text36")}/>
      <Cards8 text={t("text38")} text1={t("text37")}/>
     </div>
  </div>    
     <div>
        <h1 className="text-[40px] text-[#CAFF33] ml-[30px] mt-[150px]">{t("text39")}</h1>
        <h1 className="text-[22px] ml-[30px] text-[#B3B3B3] w-[1200px] mb-[0px]">{t("text40")}</h1>
      </div>
      <FAQCarousel text1={t("text41")} text2={t("text42")}/>
      <FAQCarousel text1={t("text48")} text2={t("text49")}/>
<div className="flex justify-between mt-[150px] mr-[20px]">
       <div>
        <h1 className="text-[40px] text-[#CAFF33] ml-[30px]">{t("text39")}</h1>
        <h1 className="text-[22px] ml-[30px] text-[#B3B3B3] w-[1200px] mb-[0px]">{t("text40")}</h1>
      </div>
      <div className="mt-[20px]">
         <Button>
      {t("intro1")}
     </Button>
      </div>
    </div>
      <Testimonials/>


      <Cards11/>
      





    </>
  );
}

export default memo(Content);