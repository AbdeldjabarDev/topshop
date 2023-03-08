import Nav from "../components/Nav"
import { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import store from "../state/store";
import { useSelector } from "react-redux";
export default function ContactComp(props)
{
    let contRef = useRef();
    let router = useRouter();
    let [e,setE] = useState("");
    let emRef = useRef();
    let nRef = useRef();
    let sRef = useRef();
    let iRef = useRef();
    let dark = useSelector((state) => state.products.dark);
    let [loading,setLoading] = useState(false);
    return(<div className="flex flex-col w-full h-full" style={{backgroundColor : dark == true ? "#000d2f":"white",color:dark == true ? "white":"black"}}>
<Nav></Nav>
<div className="lg:w-[45%] h-fit  md:w-[60%] w-full  shadow-md  ml-auto mr-auto  mt-[100px] overflow-hidden border" >
    <div className="w-[200%] flex " ref={contRef}>
  <form className="w-[100%] flex flex-col gap-5" onSubmit={(e)=>
{
    e.preventDefault();
    if(iRef.current.value.toString().length > 420)
    {
     setE("The maximum number of characteres allowed in the issue description is 420 ");
     return;
    }
 setLoading(true)
 fetch('https://topshopserver.onrender.com/'+ "/report",{
 method:"POST",
 headers:{
     "Content-Type":"application/json",
 },
 body:JSON.stringify({
    uid:store.getState().cart.user,
     email:emRef.current.value.toString(),
     name:nRef.current.value.toString(),
     subject:sRef.current.value.toString(),
     issue:iRef.current.value.toString(),
 }),
 
 }).then((r) => r.json())
 .then((data)=>
 {
     contRef.current.style.transform = "translateX(-50%)";
     setLoading(false);
 })
    
}}>
  <div className="ml-auto mr-auto text-xl mb-[3%] lg:text-2xl mt-[6%]">We are always happy to here from you</div>
    <input className="ml-auto mr-auto w-[85%] border pl-2 rounded-md h-[60px]" style={{backgroundColor : dark == true ? "rgb(130 130 130)":"white",color:dark == true ? "white":"black"}} ref={emRef} type="email" placeholder="Email"></input>
    <input className="ml-auto mr-auto w-[85%] border pl-2 rounded-md h-[60px]" style={{backgroundColor : dark == true ? "rgb(130 130 130)":"white",color:dark == true ? "white":"black"}} ref={nRef} type="text" placeholder="Full Name"></input>
    <input className="ml-auto mr-auto w-[85%] border pl-2 rounded-md h-[60px]" style={{backgroundColor : dark == true ? "rgb(130 130 130)":"white",color:dark == true ? "white":"black"}} ref={sRef} placeholder="Subject"></input>
    <textarea className="ml-auto mr-auto w-[85%] pl-2 h-[200px] resize-none border" style={{backgroundColor : dark == true ? "rgb(130 130 130)":"white",color:dark == true ? "white":"black"}} ref={iRef} placeholder="Write your description of the issue here"></textarea>
    <button
            type="submit"
            disabled={loading}
            className="ml-auto mr-auto lg:w-[22%] md:w-[28%] w-fit pl-4 pr-4 pt-2 pb-2 border text-lg disabled:bg-green-100 primary text-white p-3 rounded-md"
          >
         { loading == true ?"" : "Send"}
            <div
              className="w-8 h-8 ml-auto mr-auto rounded-full border border-white border-b-blue-500 animate-spin"
              style={{ display: loading === true ? "block" : "none" }}
            ></div>
          </button>
    <div>{e}</div>
  </form>
  <div className="w-[100%] flex flex-col gap-5">
  <div className="ml-auto mr-auto text-2xl mt-[16%]">Your issue has been reported</div>
  <button className="ml-auto mr-auto w-[150px] shadow-md active:shadow-none primary  rounded-md transition-none" onClick={(e)=>
{
 router.replace('/')   
}}>Continue Shopping</button>

  </div>
    
    
    </div>
</div>
    </div>)
}