import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import ProductsContainer from "../components/ProductsContainer";

export default function AllProducts()
{
    let products = useSelector((state)=> state.products.value)
    return(<>
        <Nav></Nav>
        <div className="w-full h-[100px]"></div>
        <ProductsContainer all products={products} title="This is all we have for the moment ..."></ProductsContainer>
    </>)
}