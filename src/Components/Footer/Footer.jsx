import { AiFillLinkedin } from "react-icons/ai"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiFillFacebook } from "react-icons/ai"; 
import { GoLocation } from "react-icons/go"; 
import { IoIosCall } from "react-icons/io"; 
import { MdEmail } from "react-icons/md"; 
import { useTranslation } from "react-i18next";
import logo from "../../assets/Image/Logo (33).png"
export default function Footer(){
    const { t, i18n } = useTranslation();
    return <>
    <div className="w-[100%] mt-[50px] bg-[#1C1C1C] border-[1px] h-[420px]  border-[#1C1C1C] mt-[140px]">
      <div className="flex items-center justify-center text-center mt-[20px]">
      <img  src={logo} alt="" />
      </div>
      <div className="flex justify-center gap-[30px] border-b-[1px] border-[#262626] w-[100%] mt-[20px] pb-[40px]">
        <h1 className="text-[22px] text-[#E4E4E7] mt-[20px]">{t("text53")}</h1>
        <h1 className="text-[22px] text-[#E4E4E7] mt-[20px]">{t("text54")}</h1>
        <h1 className="text-[22px] text-[#E4E4E7] mt-[20px]">{t("text55")}</h1>
        <h1 className="text-[22px] text-[#E4E4E7] mt-[20px]">{t("text56")}</h1>
      </div>
      <div className="flex gap-[30px] justify-center mt-[40px] border-b-[1px] border-[#262626] w-[100%] mt-[20px] pb-[40px]">
      <div className="flex">
        <MdEmail className="h-[30px] w-[50px] text-[#CAFF33]"/>
        <h1 className="text-[#E4E4E7] text-[18px]">hello@skillbirdge.com</h1>
      </div>
      <div className="flex">
        <IoIosCall className="h-[30px] w-[50px] text-[#CAFF33]"/>
        <h1 className="text-[#E4E4E7] text-[18px]">+91 91813 23 2309</h1>
      </div>
      <div className="flex">
        <GoLocation className="h-[30px] w-[50px] text-[#CAFF33]"/>
        <h1 className="text-[#E4E4E7] text-[18px]">{t("text64")}</h1>
      </div>
      </div>
       <div className="w-[90%] h-[80px] rounded-[40px] ml-[5%] bg-[#191919] mt-[20px] flex items-center ">
       <div className="flex items-center justify-between w-[100%] mr-[30px]">
        <div>
           <div className="flex gap-[20px] ml-[30px]">
                <div className="w-[50px] h-[50px] border-[1px] rounded-[50%] bg-[#CAFF33] border-[#CAFF33] flex items-center justify-center">
                    <AiFillFacebook className="w-[30px]  h-[30px] bg-[#CAFF33]"/>
                </div>
                <div className="w-[50px] h-[50px] border-[1px] rounded-[50%] bg-[#CAFF33] border-[#CAFF33] flex items-center justify-center">
                    <AiOutlineTwitter className="w-[30px]  h-[30px] bg-[#CAFF33]"/>
                </div>
                <div className="w-[50px] h-[50px] border-[1px] rounded-[50%] bg-[#CAFF33] border-[#CAFF33] flex items-center justify-center">
                   <AiFillLinkedin className="w-[30px]  h-[30px] bg-[#CAFF33]"/>
                </div>
           </div>
        </div>
           <div>
             <h1 className="text-[#E4E4E7] text-[22px] mt-[7px]">{t("text59")}</h1>
           </div>
           <div>
           <div className="flex">
            <h1 className="text-[#E4E4E7] text-[22px] mt-[7px] border-r-[3px] border-[#262626] pr-[10px] ">{t("text60")}</h1>
            <h1 className="text-[#E4E4E7] text-[22px] mt-[7px] ml-[10px]">{t("text61")}</h1>
           </div>
           </div>
       </div>
       </div>
    </div>
    </>
}