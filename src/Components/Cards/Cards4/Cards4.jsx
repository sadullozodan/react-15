
import icon from '../../../assets/Image/Icon Container (8).png'
export function Cards4(props){
    const {text} = props
    return <>
     <div>
        <div className="flex justify-between rounded-2xl">
        <div className="w-[300px] h-[200px]  pt-[20px] mt-[30px] borer-[1px solid] bg-[#151414] rounded-3xl">
            <img  className="pl-[110px]" src={icon} alt="" />
            <h1 className="text-[18px] items-center w-[290px] ml-[8px] mt-[20px] items-center flex justify-center text-[white]">{text}</h1>
        </div>
        </div>
        
     </div>
    </>
}