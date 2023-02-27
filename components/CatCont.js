import { setSelectedCategory } from "../state/productsSlice";
import store from "../state/store"

import { useRouter } from "next/router"
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

export default function CatCont(props)
{
    let dark = useSelector((state)=> state.products.dark)
    let {ref,inView,entry} = useInView()
    let router = useRouter();
    return(
        <div className='lg:w-60 h-60 w-full shadow-md rounded-md flex flex-col' style={{transform :inView == true ? 'translateY(-100px)':'translateY(0px)',color:dark == true ? 'white':'black',backgroundColor: dark == true ? 'rgb(40 31 39)':'white'}} ref={ref} onClick={(ee)=>
            {
               router.replace('/categories')
               store.dispatch(setSelectedCategory(props.category.name))
            }}>
               <img className='w-full h-[80%]' src={store.getState().products.value.filter((v)=> v.category == props.category.name)[0].thumbnail}></img>
               <div className='ml-2 mt-2'>{props.category.name.toUpperCase() + "  (" + props.category.count + ")" }  </div>
               </div>
    )
}