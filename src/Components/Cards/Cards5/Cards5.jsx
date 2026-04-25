import Button from "../../Button/Button";


export function Cards5(props) {
    const {img, text, text1,text2,text3,text4,text5 ,num1,num2,num3 } = props;
    return (
        <>
        <div>
            <h1 className="text-[white] text-[34px]">{text}</h1>
            <h3 className="text-[22px] mt-[20px] text-[#B3B3B3]">{text1}</h3>
            <div className="flex gap-20px] mt-[40px] mb-[30px]">
                <div className="mt-[]">
                    <h1 className="text-[40px] text-[#CAFF33]">{num1}</h1>
                    <h2 className="text-[22px] text-[#B3B3B3]">{text2}</h2>
                </div>
                <div className="mt-[]">
                    <h1 className="text-[40px] text-[#CAFF33]">{num2}</h1>
                    <h2 className="text-[22px] text-[#B3B3B3]">{text3}</h2>
                </div>
                <div className="mt-[]">
                    <h1 className="text-[40px] text-[#CAFF33]">{num3}</h1>
                    <h2 className="text-[22px] text-[#B3B3B3]">{text4}</h2>
                </div>
            </div>
                <Button variant="outlined">{text5}</Button>
        </div>
        </>
    )
}