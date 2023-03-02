import { useSelector } from "react-redux"
import ProductCont from "./ProductCont"
import { useRouter } from "next/router";
import CatCont from "./CatCont";
export default function CategoriesCont()
{
    let router = useRouter();
    let categories = useSelector((state) => state.products.categories)
   
    if(categories.length != 0)
    {
        return(
            <div className='lg:ml-20 ml-auto mr-auto gap-9 md:w-[95%] flex md:flex-row flex-col flex-wrap '>
    {categories.map((e)=>
        {
         return   <CatCont key={Math.random()*100000 } category={e}></CatCont>
        })}
            </div>
        ) 
    }
  
    else
    return (<div className="lg:ml-20 ml-auto mr-auto w-full flex lg:gap-6 gap-3 md:flex-row flex-col">
    <ProductCont e></ProductCont>
    <ProductCont e></ProductCont>
    <ProductCont e></ProductCont>
    <ProductCont e></ProductCont>
    <ProductCont e></ProductCont>
    </div> )
 
  
}