import { CgArrowTopRight } from "react-icons/cg"; 


export function Cards8(props) {
    // const { t, i18n } = useTranslation();
    const { text, text1 } = props;
    return (
        <>
        <div className="w-[500px] h-[290px] rounded-2xl border-[#1C1C1C] border-[1px] bg-[#1C1C1C]">
          <div className="flex justify-between ml-[20px] mt-[40px]">
            <h1 className="text-[25px] text-[#FFFFFF]">{text}</h1>
            <CgArrowTopRight className="w-[120px] h-[70px] text-[#CAFF33] mt-[-15px]"/>
          </div>
          <h1 className="ml-[20px] mt-[40px] text-[#B3B3B3]">{text1}</h1>
        </div>
        </>
    )
}