import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";
import Carouseler from "../components/Carouseler";
import {setResetEmail,removeResetEmail,setResetCode,removeResetCode} from '../state/cartSlice'
import store from "../state/store";
let fetcher = (...args) => fetch(...args).then((res)=> res.json());
export default function ResetComp(props)
{
    
    let contRef = useRef();
   let router = useRouter();
   let eRef = useRef();
   let cRef = useRef();
   let pRef = useRef();
   let npRef = useRef();
   let [error,setE] = useState();
   let [loading,setLoading] = useState(false);
   let dispatch = useDispatch();
   
    return(<div className="w-full h-[100%] flex flex-col">
      <div className="w-[65%] lg:w-[40%]  bg-white rounded-md border overflow-hidden ml-auto mr-auto mt-[10%]">
      <div className="flex mt-10 " style={{width:"400%"}} ref={contRef}>
     <div className="w-full h-full  flex flex-col gap-6 mt-[2%]">
      <div className="ml-auto mr-auto dark:text-black text-center">Enter your email so that we can send you a verification code</div>
      <input className="ml-auto mr-auto lg:w-[70%] w-[90%] pl-2 h-[6vh] rounded-md border" placeholder="Email" ref={eRef}></input>
      <button className="p-3 mt-4 rounded-md shadow-md bg-green-600 text-white ml-auto mr-auto" onClick={async(e)=>
      {
        console.log('Email submitted ')
        dispatch(setResetEmail(eRef.current.value.toString()));
        // if(em.match(/(a-zA-Z0-9)*@([a-z])+\.([a-z])+/g) ==  null )
        // {
        //   setE('Please enter a valid email');
        //   return;
        // } 
        try 
        {
          fetch('',{
            
          })
            let data = await fetcher('https://topshopserver.onrender.com/' +'/reset',{
                method:'POST',
                body:JSON.stringify({email:store.getState().cart.resetEmail}),
                headers:{
                  'Content-Type':'application/json'
                },
                mode:'no-cors',
              
              }
            );
            setLoading(false)
            if(data.error == 0)
            {
              contRef.current.style.transform = "translateX(-25%)"
            }
            if(data.error == 5)
            {
              setE("Internal service error please try again later")
            }
        }
        catch(e)
        {
            console.log(e);
            setLoading(false);
            setE('Unable to hanlde you request at the moment try again in a while');

        }
       
          setLoading(true);
        
      }}>{loading == true ? "":"Proceed"} <div
      className="w-8 h-8 ml-auto mr-auto rounded-full border border-white border-b-blue-500 animate-spin"
      style={{ display: loading == true ? "block" : "none" }}
    ></div></button>
      <div className="text-red-600 ml-auto mr-auto w-fit">{error}</div>
     </div>
     <div className="w-full h-full flex flex-col gap-4 s mt-[2%]">
      <div className="ml-auto mr-auto">We sent a code to {store.getState().cart.resetEmail.substring(0,3)+"****"+store.getState().cart.resetEmail.substring(store.getState().cart.resetEmail.indexOf('@'),store.getState().cart.resetEmail.length)}</div>
      <input className="ml-auto mr-auto w-[70%] pl-2 h-[6vh] rounded-md border" placeholder="Verification code" ref={cRef}></input>
      <button className="p-3 rounded-md shadow-md bg-green-600 text-white ml-auto mr-auto" onClick={(e)=>
      {
        dispatch(setResetCode(cRef.current.value.toString()));
        fetch('https://topshopserver.onrender.com/'+'/reset/verify',{
          method:'POST',
          body:JSON.stringify({email:store.getState().cart.resetEmail,code:store.getState().cart.resetCode}),
          headers:{
            'Content-Type':'application/json'
          }
        }).then((r) => r.json())
          .then((data)=>
          {
            setLoading(false);
            if(data.error == 0)
            {

              contRef.current.style.transform = "translateX(-50%)"
            }
            else
            {
              setE(data.message)
            }
          }).catch((e)=>
          {
            setLoading(false);
            console.log(e);
            
          })
          setLoading(true);
      }}>{loading == true ? "":"Proceed"} <div
      className="w-8 h-8 ml-auto mr-auto rounded-full border border-white border-b-blue-500 animate-spin"
      style={{ display: loading == true ? "block" : "none" }}
    ></div></button>
      <div className="text-red-600  ml-auto mr-auto w-fit">{error}</div>
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
       
        fetch('https://topshopserver.onrender.com/' + '/reset/new',{
          method:'POST',
          body:JSON.stringify({email:store.getState().cart.resetEmail,code:store.getState().cart.resetCode,password_hash:pRef.current.value}),
          headers:{
            'Content-Type':'application/json'
          }
        }).then((r) => r.json())
          .then((data)=>
          {
            setLoading(false)
            if(data.error == 0)
            {
              contRef.current.style.transform = "translateX(-75%)"
            }
          }).catch((e)=>
          {
            console.log(e)
            setLoading(false)
          })
          setLoading(true)
      }}>{loading == true ? "":"Proceed"} <div
      className="w-8 h-8 ml-auto mr-auto rounded-full border border-white border-b-blue-500 animate-spin"
      style={{ display: loading == true ? "block" : "none" }}
    ></div></button>
      <div className="text-red-600  ml-auto mr-auto w-fit">{error}</div>
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