import Nav from "../components/Nav";
import { useRouter } from "next/router";
import store from "../state/store";
import ProductsContainer from "../components/ProductsContainer";
import useSWR from "swr";
import { useEffect } from "react";
import { useState } from "react";
let fetcher = (...args)=> fetch(...args).then((res)=> res.json());
export default function CategoriesComp({query})
{
    let [q,setQ] = useState('');
    let [products,setProducts] = useState([]);
    useEffect(()=>
    {
        let query = useRouter().query;
   setProducts(store.getState().products.value.filter((e)=> {return e.category == query.category}));
   setQ(query)
    },[q])
    return(
    <div className="w-full h-full flex flex-col">
<Nav></Nav>
<div className="mt-[5.5%] flex w-full">
<div className="flex flex-col bg-[#fbfbfb] shadow-md ml-[1.3%] mr-[0.5%] lg:w-[90%] w-full">
<div className="pl-[2%]  flex flex-col">
<div className="text-3xl ml-auto mr-auto mt-[2%]">{q.toString().toUpperCase()}</div>
<ProductsContainer products = {products} all/>
</div>
</div>
<div className="w-[20%] hidden lg:inline border border-slate-700"></div>
</div>
    </div>)
}
