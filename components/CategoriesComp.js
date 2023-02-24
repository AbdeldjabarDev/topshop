import Nav from "../components/Nav";
import { useRouter } from "next/router";
import store from "../state/store";
import ProductsContainer from "../components/ProductsContainer";
import useSWR from "swr";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

let initiated = 0;
export default function CategoriesComp()
{
    
    let products = useSelector((state)=> state.products.value);
    let q = useSelector((state) => state.products.selectedCategory);
    return(
    <div className="w-full h-full flex flex-col">
<Nav></Nav>
<div className="mt-20 flex w-full">
<div className="flex flex-col   mr-[0.5%]  w-full">
<div className="flex flex-col">
<div className="text-3xl ml-auto mr-auto mt-[2%]">{q.toUpperCase()}</div>
<ProductsContainer products = {products.filter((e) => e.category == q)} all/>
</div>
</div>
<div className="w-[20%] hidden lg:inline border border-slate-700"></div>
</div>
    </div>)
}
