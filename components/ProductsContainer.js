

import { Children, useRef, useState } from "react"
import ProductCont from "./ProductCont"
import Image from "next/image";
export default function ProductsContainer(props)
{
    let [x,setX] = useState(0);
    let parentRef = useRef();
    if(!props.all)
  return(
    <div className='flex relative h-[40vh]'>
   <div className="w-[75%]  ml-[10%]  overflow-hidden flex">
   <div className='flex pt-6 mr-auto border-red-600 gap-9' ref={parentRef} style={{transition:"all 1s ease-out",transform:`translateX(${x}%)`,width:(props.products.length*100)/4 + '%'}}>
     {props.products.map((e)=> {
         return <ProductCont key={e._id} product= {e} />
     })}            
     </div>
   </div>
         
   <div className='bg-black w-16 h-16 absolute top-[50%] left-[2%] translate-y-[-50%] content-center text-center pt-3 rounded-full cursor-default shadow-md active:shadow-none text-5xl text-white'
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
     <div className=' w-16 h-16 absolute top-[50%] left-[88%] translate-y-[-50%] content-center text-center pt-3 rounded-full cursor-default shadow-md active:shadow-none text-5xl text-white'
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
    <div className="w-[100%]  ml-auto mr-auto    -green-600 flex">
   <div className='flex w-[100%] flex-wrap pt-6 mr-auto  -[2px]  -red-600 gap-9' ref={parentRef} style={{transition:"all 1s ease-out",transform:`translateX(${x}%)`}}>
     {props.products.map((e)=> {
         return <ProductCont product= {e} />
     })}            
     </div>
   </div>
  )

}