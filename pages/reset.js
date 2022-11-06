import { useRef, useState } from "react";

function RequestReset(props)
{
    
}
export default function Reset(props)
{
    let [error,setError] = useState();
    let contRef = useRef();
    let xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:23000/reset')
    xhr.onloadend = ()=>
    {
        let res = JSON.parse(xhr.responseText);
        if(res.status != 0)
        {
          setError(res.message);
        }
    }
    xhr.onerror =(e)=>{
        setError(e.toString());
    }
    return(<div className="w-full h-full flex flex-col">
     <div className="w-[40%] h-[40%] border border-black bg-white ml-auto mr-auto mt-[10%] flex flex-col overflow-hidden" ref={contRef}>
   <div className="w-[100%]">
   <div className="mt-[2%] mb-[5%]">Enter your email address so that we send you a verification code </div>
     <input className="w-[75%] rounded-md " placeholder="Email"></input>
     <button className="bg-green-500 p-3 rounded-md mr-10 ml-auto ">Proceed</button>
     <div className="text-red-600">{error}</div>
     <div></div>
   </div>
     
     </div>
    </div>)
}