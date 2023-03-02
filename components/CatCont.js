import { setSelectedCategory } from "../state/productsSlice";
import store from "../state/store"

import { useRouter } from "next/router"
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import {IoMdArrowForward} from "react-icons/io"
import { useRef } from "react";

export default function CatCont(props)
{
    let dark = useSelector((state)=> state.products.dark)
    let {ref,inView,entry} = useInView()
    let router = useRouter();
    let bref = useRef();
    return(
        <div className='realtive lg:w-60 h-60 w-full shadow-md overflow-hidden rounded-md flex flex-col' style={{transform :inView == true ? 'translateY(-100px)':'translateY(0px)',color:dark == true ? 'white':'black',backgroundColor: dark == true ? '#000d1a':'white'}} ref={ref} onClick={(ee)=>
            {
               router.replace('/categories')
               store.dispatch(setSelectedCategory(props.category.name))
            }}
            onMouseEnter={(e)=>
            {
                  bref.current.style.transform = "translateY(-25%)";
            }}
            onMouseLeave={(e)=>
            {
                bref.current.style.transform = "translateY(25%)";

            }}
            >
                
               <img className='w-full h-[80%] z-50' src={store.getState().products.value.filter((v)=> v.category == props.category.name)[0].thumbnail}></img>
               <div className="absolute bottom-0 right-0 w-full translate-y-[25%]" ref={bref}>
               <div className='ml-2 mt-2'>{props.category.name.toUpperCase() + "  (" + props.category.count + ")" }  </div>
               <div className="w-full align-end flex gap-1 border-red-600 ml-2 mt-4">View {props.category.name} <span className="mt-1"><IoMdArrowForward /></span> </div>      
                    </div>
               </div>
    )
}