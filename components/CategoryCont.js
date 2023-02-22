import { useSelector } from "react-redux"
import store from "../state/store"
import ProductCont from "./ProductCont"
export default function CategoryCont()
{
    let categories = useSelector((state) => state.products.categories)
    if(categories.length != 0)
    {
        return(
            <div className='ml-20 w-full flex md:flex-row flex-col'>
    {categories.map((e)=>
        {
            <div className='w-60 h-60 flex'>
            <img className='w-full h-[80%]' src={store.getState().products.value.filter((v)=> v.category == e.name)[0].thumbnail}></img>
            <div className='ml-2'>{e.name + "  (" + e.count + ")" }  </div>
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