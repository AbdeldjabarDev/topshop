

import {  useRef, useState } from "react"
import ProductCont from "./ProductCont"
import Image from "next/image";
import { useEffect } from "react";
export default function ProductsContainer(props)
{
    let [x,setX] = useState(0);
    let parentRef = useRef();
    let [width,setWidth] = useState(props.width);
    useEffect(()=>
    {
      setWidth(window.innerWidth)
      window.addEventListener('resize',(ev)=>
      {
        setWidth(window.innerWidth)
      });
      

    },[width])

  if(!props.all && width >= 1200)
  return(
    
    <div className='flex flex-col relative  h-[40%]' >
    <div className='text-2xl font-semibold w-fit  ml-[8%]  mr-auto mt-[1%] mb-[2%] before:bg-red-600 before:w-20 before:h-20'>{props.title}</div>
   <div className="w-[80%]  ml-[8%]  overflow-hidden flex">
   <div className='flex  mr-auto border-red-600 gap-9' ref={parentRef} style={{transition:"all 1s ease-out",transform:`translateX(${x}%)`,width:(props.products.length*100)/4 + '%'}}>
     {props.products.map((e)=> {
         return <ProductCont key={e._id + Math.random()*10} product= {e} />
     })}            
     </div>
   </div>
         
   <div className='bg-black w-16 h-16 absolute top-[50%] left-[1%] translate-y-[-50%] content-center text-center pt-3 rounded-full cursor-default shadow-md active:shadow-none text-5xl text-white'
    onClick={(e)=>
    {
        // if(x > 0)
        // {
        //     e.target.style.display="none"
        // }
        // if(x <= 0)
        // {
        //     e.target.style.display="block"
        // }



    setX(x+(100/props.products.length)*4)

    }} style={{transition:"all 2s ease",transitionDelay:"1s",display: Math.round(x) == 0 ? "none":"block",transitionProperty:"display"}}><Image src="/images/previous_arrow.svg" layout="fill"></Image></div>
     <div className=' w-16 h-16 absolute top-[50%] left-[92%] translate-y-[-50%] content-center text-center pt-3 rounded-full cursor-default shadow-md active:shadow-none text-5xl text-white'
    onClick={(e)=>
    {
        if(x-(100/props.products.length)*4 <= -100)
        return;
        setX(x-(100/props.products.length)*4)
    }}><Image src="/images/next_arrow.svg" layout="fill"></Image></div>
    {/* <div>{x} : {100}</div> */}
    
     {/* <div className='w-fit absolute left-[70%] top-[100%] bg-black text-white p-3 mt-5'>View all Products</div> */}
    </div>
  )
  else
  return(
    <div className="w-full lg:w-[100%] ml-auto mr-auto flex flex-col">
    <div className='text-2xl font-semibold w- text-center w-fit ml-auto mr-auto mb-[2%]'>{props.title}</div>
     
   <div className='flex w-fit ml-auto mr-auto justify-center pl-[2%] flex-wrap pt-6  lg:ml-auto  -[2px]  -red-600 lg:gap-6 gap-3' ref={parentRef} >
     {props.products.map((e)=> {
         return <ProductCont key={e._id} product= {e} />
     })}            
     </div>
   </div>
  )

}