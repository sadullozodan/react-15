
export function Cards3(props) {
    const {img, text, text1 } = props;

    

    return (
        <>
            <div className="w-[400px] h-[300px]  rounded-2xl flex flex-col items-center gap-[10px] p-[20px] border-[1px solid #444]">
                
                <img src={img} alt="" />

                <h1 className="text-[#FFFFFF] text-[24px]">
                    {text}
                </h1>

                <p className="text-[#B3B3B3] text-[16px] text-center">
                    {text1}
                </p>

            </div>
        </>
    );
}