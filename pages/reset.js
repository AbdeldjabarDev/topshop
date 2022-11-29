import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Carouseler from "../components/Carouseler";

function RequestReset(props)
{
    
}
export default function Reset(props)
{
    
    let contRef = useRef();
   let router = useRouter();
   let eRef = useRef();
   let cRef = useRef();
   let pRef = useRef();
   let npRef = useRef();
   let [error,setE] = useState();
   let em,c;
   
    return(<div className="w-full h-full flex flex-col">
      <div className="w-[50%]  bg-white h-[50vh] border border-red-600 overflow-hidden ml-auto mr-auto mt-[10%]">
      <div className="flex" style={{width:"400%"}} ref={contRef}>
     <div className="w-full h-full  flex flex-col gap-6 mt-[5%]">
      <div className="ml-auto mr-auto">Enter your email so that we can send you a verification code</div>
      <input className="ml-auto mr-auto w-[70%] pl-2 h-[6vh] rounded-md border" placeholder="Email" ref={eRef}></input>
      <button className="p-3 rounded-md shadow-md bg-green-600 text-white ml-auto mr-auto" onClick={(e)=>
      {
        
         em = eRef.current.value.toString();
        if(em.match(new RegExp('(a-zA-Z0-9)*@([a-z])+\.([a-z])+')) ==  null )
        {
          setE('Please enter a valid email');
          return;
        }

        fetch(process.env.BACKEND_URL  || "http://localhost:23000" +'/reset',{
          method:'POST',
          body:JSON.stringify({email:em}),
          headers:{
            'Content-Type':'application/json'
          }
        }).then((r) => r.json())
          .then((data)=>
          {
            if(data.error == 0)
            {
              contRef.current.style.transform = "translateX(-25%)"
            }
          })
        
      }}>Proceed</button>
      <div className="text-red-600">{error}</div>
     </div>
     <div className="w-full h-full flex flex-col gap-4 s mt-[5%]">
      <div className="ml-auto mr-auto">We sent a code to {}</div>
      <input className="ml-auto mr-auto w-[70%] pl-2 h-[6vh] rounded-md border" placeholder="Verification code" ref={cRef}></input>
      <button className="p-3 rounded-md shadow-md bg-green-600 text-white ml-auto mr-auto" onClick={(e)=>
      {
       
        fetch(process.env.BACKEND_URL  || "http://localhost:23000"+'/reset/verify',{
          method:'POST',
          body:JSON.stringify({email:em,code:c}),
          headers:{
            'Content-Type':'application/json'
          }
        }).then((r) => r.json())
          .then((data)=>
          {
            if(data.error == 0)
            {

              contRef.current.style.transform = "translateX(-50%)"
            }
            else
            {
              setE(data.message)
            }
          })
      }}>Proceed</button>
      <div className="text-red-600">{error}</div>
      </div>
      <div className="w-full h-full flex flex-col mt-[2%] pl-6 gap-5">
       <div>New password</div>
       <input className=" w-[70%] pl-2 h-[6vh] rounded-md border" placeholder="Verification code" ref={pRef}></input>
      <div>Confirm new password</div>
      <input className=" w-[70%] pl-2 h-[6vh] rounded-md border" placeholder="Verification code" ref={npRef}></input>
      <button className="p-3 rounded-md shadow-md bg-green-600 text-white ml-auto mr-auto" onClick={(e)=>
      {
        if(npRef.current.value !== pRef.current.value)
        {
          setE('Passwords do not match');
          return;
        }
        else if(pRef.current.value == '')
        {
          setE('Password field cannot be empty');
          return;
        }
        fetch(process.env.BACKEND_URL || "http://localhost:23000" + '/reset/new',{
          method:'POST',
          body:JSON.stringify({email:em,code:c,password_hash:pRef.current.value}),
          headers:{
            'Content-Type':'application/json'
          }
        }).then((r) => r.json())
          .then((data)=>
          {
            if(data.error == 0)
            {
              contRef.current.style.transform = "translateX(-75%)"
            }
          })
      }}>Proceed</button>
      <div className="text-red-600">{error}</div>
      </div>
      <div className="w-full h-full flex flex-col mt-[2%]">
<div>Password has been reset successfully </div>
<button className="p-3 rounded-md shadow-md bg-green-600 text-white ml-auto mr-auto" onClick={(e)=>
      {
        router.replace('/login')
      }}>Continue</button>
      </div>
      </div>
      </div>
  
     
     
    </div>)
}