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
<div className="mt-[5%] contetnt-center ml-auto mr-auto">
<div className="text-3xl ml-[10%] mb-[2%] first-letter:capitilize ">{q.toUpperCase()}</div>
<div className="ml-auto mr-auto flex border border-red-600 w-[80%]">
<ProductsContainer products = {products} all/>
</div>

</div>
    </div>)
}