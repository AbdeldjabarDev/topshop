import Nav from "../components/Nav";
import { useRouter } from "next/router";
import store from "../state/store";
import ProductsContainer from "../components/ProductsContainer";
import useSWR from "swr";
import { useEffect } from "react";
import { useState } from "react";
let fetcher = (...args)=> fetch(...args).then((res)=> res.json());
let initiated = 0;
export default function CategoriesComp()
{
    
    let router = useRouter();
    let [products,setProducts] = useState([]);
    let [q,setQ] = useState(router.query.category);
    useEffect(()=>
    {
   if(initiated == 0)
   {
    window.addEventListener('category_selected',()=>
    {
        console.log('catgeory selected : ' + router.query.category);
        setProducts(store.getState().products.value.filter((e)=> {return e.category == q}));
        setQ(router.query.category);

    })
    initiated++;
   }    

    },[q])
    return(
    <div className="w-full h-full flex flex-col">
<Nav></Nav>
<div className="mt-[5.5%] flex w-full">
<div className="flex flex-col bg-[#fbfbfb] shadow-md ml-[1.3%] mr-[0.5%] lg:w-[90%] w-full">
<div className="pl-[2%]  flex flex-col">
<div className="text-3xl ml-auto mr-auto mt-[2%]">{q}</div>
<ProductsContainer products = {products} all/>
</div>
</div>
<div className="w-[20%] hidden lg:inline border border-slate-700"></div>
</div>
    </div>)
}
