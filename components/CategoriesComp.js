import Nav from "../components/Nav";
import ProductsContainer from "../components/ProductsContainer";
import { useSelector } from "react-redux";

export default function CategoriesComp()
{
    let dark = useSelector((state) => state.products.dark);
    let products = useSelector((state)=> state.products.value);
    let q = useSelector((state) => state.products.selectedCategory);
    return(
    <div className="w-full h-full flex flex-col" style={{backgroundColor : dark == true ? "rgb(40 31 39)":"white",color:dark == true ? "white":"black"}}>
<Nav></Nav>
<div className="mt-20 flex w-full">
<div className="flex flex-col  mr-[0.5%]  w-full">

<div className="text-3xl ml-auto mr-auto mt-[2%]">{q.toUpperCase()}</div>
<ProductsContainer products = {products.filter((e) => e.category == q)} all/>
</div>
<div className="w-[20%] hidden lg:inline border border-slate-700"></div>
</div>
    </div>)
}
