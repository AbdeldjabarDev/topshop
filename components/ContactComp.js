import Nav from "../components/Nav"
import { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import store from "../state/store";
export default function ContactComp(props)
{
    let contRef = useRef();
    let router = useRouter();
    let [e,setE] = useState("");
    let emRef = useRef();
    let nRef = useRef();
    let sRef = useRef();
    let iRef = useRef();
    return(<div className="flex flex-col w-full h-full">
<Nav></Nav>
<div className="lg:w-[45%] lg:h-[80vh] h-full md:w-[60%] w-full  bg-white shadow-md border ml-auto mr-auto lg:mt-[6%] mt-[20%] overflow-hidden">
    <div className="w-[200%] flex " ref={contRef}>
  <form className="w-[100%] flex flex-col gap-5" onSubmit={(e)=>
{
    e.preventDefault();
    if(iRef.current.value.toString().length > 420)
    {
     setE("The maximum number of characteres allowed in the issue description is 420 ");
     return;
    }
 
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
     contRef.current.style.transform = "translateX(-50%)"
 })
    
}}>
  <div className="ml-auto mr-auto text-xl mb-[3%] lg:text-2xl mt-[6%]">We are always happy to here from you</div>
    <input className="ml-auto mr-auto w-[85%] border pl-2 rounded-md h-[7vh]" ref={emRef} type="email" placeholder="Email"></input>
    <input className="ml-auto mr-auto w-[85%] border pl-2 rounded-md h-[7vh]" ref={nRef} type="text" placeholder="Full Name"></input>
    <input className="ml-auto mr-auto w-[85%] border pl-2 rounded-md h-[7vh]" ref={sRef} placeholder="Subject"></input>
    <textarea className="ml-auto mr-auto w-[85%] pl-2 h-[25vh] resize-none border" ref={iRef} placeholder="Write your description of the issue here"></textarea>
    <button className="ml-auto mr-auto text-white w-[15%] shadow-md active:shadow-none bg-green-600 p-3 rounded-md transition-none" type="submit">Send</button>
    <div>{e}</div>
  </form>
  <div className="w-[100%] flex flex-col gap-5">
  <div className="ml-auto mr-auto text-2xl mt-[16%]">Your issue has been reported</div>
  <button className="ml-auto mr-auto text-white w-fit shadow-md active:shadow-none bg-green-600 p-3 rounded-md transition-none" onClick={(e)=>
{
 router.replace('/')   
}}>Continue Shopping</button>

  </div>
    
    
    </div>
</div>
    </div>)
}