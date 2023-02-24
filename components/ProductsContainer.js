

import {  useRef, useState } from "react"
import ProductCont from "./ProductCont"
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function ProductsContainer(props)
{
    let [x,setX] = useState(0);
    let parentRef = useRef();
    let router = useRouter();
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
  {
    if(props.products.length == 0)
    return(<div className="flex flex-col ml-20">
       <div className='text-2xl font-semibold w-fit    mr-auto mt-[1%] mb-[2%] before:bg-red-600 '>{props.title}</div>
      <div className="flex gap-9 w-full overflow-hidden">

      <ProductCont e></ProductCont>
      <ProductCont e></ProductCont>
      <ProductCont e></ProductCont>
      <ProductCont e></ProductCont>
      <ProductCont e></ProductCont></div>

    
    </div>)
    return(
      <div className='flex flex-col relative h-[40%]' >
      <div className='text-2xl font-semibold w-fit ml-20 mr-auto mt-[1%] mb-[2%] before:bg-red-600 '>{props.title}</div>
     <div className="w-full overflow-hidden flex">
     <div className='flex ml-20 mr-auto border-red-600 gap-9' ref={parentRef} style={{transition:"all 1s ease-out",transform:`translateX(${x}%)`,width:(props.products.length*100)/4 + '%'}}>
       {props.products.slice(0,5).map((e)=> {
           return <ProductCont key={e._id + Math.random()*100000} product={e} />
       })}            
       </div>
     </div>
           
     <div className="p-3 mr-24 ml-auto w-fit shadow-md active:shadow-none  bg-green-600 mt-4 text-white" onClick={(e)=>
    {
     router.replace('/all-products')      
    }}>View more</div>
      {/* <div>{x} : {100}</div> */}
      
       {/* <div className='w-fit absolute left-[70%] top-[100%] bg-black text-white p-3 mt-5'>View all Products</div> */}
      </div>
    )
  }
  else
  {
    if(props.products.length == 0)
    return(
      <div className="w-full  ml-auto mr-auto flex flex-col">
      <div className='text-2xl font-semibold w- text-center w-fit ml-auto mr-auto mb-[2%]'>{props.title}</div>
       
     <div className='flex w-fit ml-auto mr-auto justify-center pl-[2%] flex-wrap pt-6  lg:ml-auto  -[2px]  -red-600 lg:gap-6 gap-3' ref={parentRef} >
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     <ProductCont e></ProductCont>        
     
     
     
     
     
       </div>
     </div>
    )  
    return(
      <div className="w-full ml-auto mr-auto flex flex-col">
      <div className='text-2xl font-semibold w- text-center w-fit ml-auto mr-auto mb-[2%]'>{props.title}</div>
       
     <div className='flex w-[95%] justify-center flex-wrap lg:ml-auto  -[2px]  border-red-600 lg:gap-6 gap-3' ref={parentRef} >
       {props.products.map((e)=> {
           return <ProductCont key={e._id + Math.random()*100000} product= {e} />
       })}            
       </div>
     </div>
    )  
  }
 

}