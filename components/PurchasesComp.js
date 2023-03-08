import Nav from "../components/Nav";
import PurchaseTableItem from "../components/PurchaseTableItem";
import store from "../state/store";
import { useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
let initiated = 0,children = [];
let fetcher = (...args) => fetch(...args).then((res)=> res.json());
export default function PurchasesComp(props)
{ 
    let router = useRouter();
    let [purchases,setPurchases] = useState([]);
    let dark = useSelector((state) => state.products.dark);
    console.log('initiated  : ' + initiated);
    if(initiated == 0 )
    {
        if(getCookie('topshop_userId') != undefined)
        fetch('https://topshopserver.onrender.com/purchases',{
            method:"POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({uid:getCookie('topshop_userId')})
        })
        .then((res) => res.json())
        .then((data)=>
        {
            if(data.error == 0)
            {
            
                setPurchases(data.purchases.slice(1,data.purchases.length));
                
                initiated++;
                console.log(data.purchases);
            }
            
        })
    }
    if(getCookie('topshop_userId')== undefined)
    return(
        <div className="w-full h-full flex flex-col   gap-6" style={{backgroundColor : dark == true ? "#000d2f":"white",color:dark == true ? "white":"black"}}>
            <Nav></Nav>
            <div className="w-full lg:w-[50%] h-[100vh]  mt-[90px]  ml-auto mr-auto flex flex-col gap-6" style={{backgroundColor : dark == true ? "#000d2f":"white",color:dark == true ? "white":"black"}}>
                <img className="max-h-[400px]" src='/images/Secure.svg'></img>
        <div className="ml-auto mr-auto justify-center text-xl lg:text-2xl mt-[5%] w-fit">You need to login to view your purchases</div>
        <button className="pl-5 pr-5 pt-3 pb-3 rounded-md text-lg w-fit ml-auto mr-auto border text-white primary shadow-md active:shadow-none " onClick={(e)=>{
            router.replace('/login')
        }}>Login</button>
            </div>
        </div>
    )
    return(<div className="w-full min-h-screen h-fit flex flex-col" style={{backgroundColor : dark == true ? "#000d2f":"white",color:dark == true ? "white":"black"}}>
<Nav></Nav>
<div className="flex flex-col rounded-md shadow-md lg:w-[60%] md:w-[80%] w-full ml-auto mr-auto mt-[10%] pb-[5%] pl-[3%] pr-[3%]">
<div className="mt-[2%] ml-auto mr-auto text-2xl">Here you will find every purchase you made from TopShop</div>
<table className="mt-[5%] ml-auto mr-auto w-full ">
 <div className="flex mb-4">
    <div className="ml-[2%]">Package</div>
    <div className="ml-[53%]">Total price</div>
    <div className="mr-[10%] ml-auto">Status</div>
    </div>       
{purchases.map((e)=>
{
   return (<tr><td><PurchaseTableItem p={e}></PurchaseTableItem></td></tr>)
})}  
</table>
</div>
    </div>)
}