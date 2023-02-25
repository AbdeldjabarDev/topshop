import { useSelector } from "react-redux"
import store from "../state/store"
import ProductCont from "./ProductCont"
import { useRouter } from "next/router";
import { setSelectedCategory } from "../state/productsSlice";
export default function CategoriesCont()
{
    let router = useRouter();
    let categories = useSelector((state) => state.products.categories)
    if(categories.length != 0)
    {
        return(
            <div className='ml-20 gap-9 w-[90%]  flex md:flex-row flex-col flex-wrap '>
    {categories.map((e)=>
        {
         return   <div className='w-60 h-60 bg-white shadow-md rounded-md flex flex-col 'key={Math.random()*100000} onClick={(ee)=>
         {
            router.replace('/categories')
            store.dispatch(setSelectedCategory(e.name))
         }}>
            <img className='w-full h-[80%]' src={store.getState().products.value.filter((v)=> v.category == e.name)[0].thumbnail}></img>
            <div className='ml-2 mt-2'>{e.name.toUpperCase() + "  (" + e.count + ")" }  </div>
            </div>
        })}
            </div>
        ) 
    }
  
    else
    return (<div className="ml-20 w-full flex gap-9 md:flex-row flex-col">
    <ProductCont e></ProductCont>
    <ProductCont e></ProductCont>
    <ProductCont e></ProductCont>
    <ProductCont e></ProductCont>
    <ProductCont e></ProductCont>
    </div> )
 
  
}