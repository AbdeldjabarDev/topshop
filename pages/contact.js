import Nav from "../components/Nav"
import { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Contact(props)
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
<div className="w-[45%] h-[78vh]  bg-white shadow-md border ml-auto mr-auto mt-[6%] overflow-hidden">
    <div className="w-[200%] flex " ref={contRef}>
  <div className="w-[100%] flex flex-col gap-5">
  <div className="ml-auto mr-auto text-2xl mt-[6%]">We are always happy to here from you</div>
    <input className="ml-auto mr-auto w-[85%] border pl-2 rounded-md h-[7vh]" ref={emRef} placeholder="Email"></input>
    <input className="ml-auto mr-auto w-[85%] border pl-2 rounded-md h-[7vh]" ref={nRef} placeholder="Full Name"></input>
    <input className="ml-auto mr-auto w-[85%] border pl-2 rounded-md h-[7vh]" ref={sRef} placeholder="Subject"></input>
    <textarea className="ml-auto mr-auto w-[85%] pl-2 h-[25vh] resize-none border" ref={iRef} placeholder="Write your description of the issue here"></textarea>
    <button className="ml-auto mr-auto text-white w-[15%] shadow-md active:shadow-none bg-green-600 p-3 rounded-md transition-none" onClick={(e)=>
    {
if(emRef.current.value.toString().match(new RegExp('(a-zA-Z0-9)*@([a-z])+\.([a-z])+')) == null)
   {
    setE("Please enter a valid email so that our team knows how to contact you");
    return;
   }
   if(iRef.current.value.toString().length > 420)
   {
    setE("The maximum number of characteres allowed in the issue description is 420 ");
    return;
   }

fetch(process.env.BACKEND_URL || "http://localhost:23000" + "/report",{
method:"POST",
headers:{
    "Content-Type":"application/json",
},
body:JSON.stringify({
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
    }}>Send</button>
    <div>{e}</div>
  </div>
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