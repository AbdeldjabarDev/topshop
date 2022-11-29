import Nav from "../components/Nav"
import { useRouter } from "next/router";
export default function PurchaseFail()
{
    let router= useRouter();
    return (<div className="flex flex-col w-full h-full">
<Nav></Nav>
<div className="w-[40%] h-[40vh] flex flex-col mt-[15vh] shadow-md bg-white ml-auto mr-auto border ">
<div className="ml-auto mr-auto font-bold text-2xl mt-[5%]">Great !</div>
<div className="ml-auto mr-auto">Your items are on their way to you .</div>
<div className="ml-auto mr-auto">You can check their status in the "My Purchases" Section on the side nav.</div>
<button className="p-3 rounded-md shadow-md mt-[10%] bg-green-600 text-white ml-auto mr-auto" onClick={(e)=>{
router.replace('/')
}}>Continue</button>
</div>
    </div>)
}