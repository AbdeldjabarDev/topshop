import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import ProductsContainer from "../components/ProductsContainer";

export default function AllProducts()
{
    let products = useSelector((state)=> state.products.value)
    return(<>
        <Nav></Nav>
        <ProductsContainer all products={products}></ProductsContainer>
    </>)
}