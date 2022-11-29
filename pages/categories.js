import Nav from "../components/Nav";
import { useRouter } from "next/router";
import store from "../state/store";
import ProductsContainer from "../components/ProductsContainer";
export default function Categories()
{
    let router = useRouter();
    let q = router.query.category;
    let products = store.getState().products.value.filter((e)=> {return e.category == q})
    return(
    <div className="w-full h-full flex flex-col">
<Nav></Nav>
<div className="mt-[5.5%] flex w-full">
<div className="flex flex-col bg-[#fbfbfb] shadow-md  ml-[1.3%] mr-[0.5%]  w-[78%]">
<div className="pl-[2%]  flex flex-col">
<div className="text-3xl  mt-[2%]">{q.toUpperCase()}</div>
<ProductsContainer products = {products} all/>
</div>
</div>
<div className="w-[20%] border border-slate-700"></div>
</div>
    </div>)
}