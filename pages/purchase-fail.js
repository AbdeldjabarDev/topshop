import Nav from "../components/Nav"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export default function PurchaseFail()
{
    let router= useRouter();
    let dark = useSelector((state)=> state.products.dark);
    return (<div className="flex flex-col w-full h-full" style={{backgroundColor : dark == true ? "#000d1a":"white",color:dark == true ? "white":"black"}}>
<Nav></Nav>
<div className="w-[40%] h-[40vh] flex flex-col mt-[15vh] shadow-md bg-white ml-auto mr-auto border ">
<div className="ml-auto mr-auto font-bold text-2xl mt-[5%]">Sorry</div>
<div className="ml-auto mr-auto">Seems like your purchase did not succeed.Please try again !</div>
<div className="ml-auto mr-auto">If the issue persists please contact us </div>
<button className="p-3 rounded-md shadow-md mt-[10%] bg-green-600 text-white ml-auto mr-auto" onClick={(e)=>{
router.replace('/')
}}>Continue</button>
</div>
    </div>)
}