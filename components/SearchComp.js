import { useEffect, useState } from "react";
import Nav from "./Nav";
import ProductsContainer from "./ProductsContainer";
export default function SearchComp(props)
{
  
  let [products,setProducts] = useState([]);
  useEffect(()=>
  {
    fetch("http://localhost:23000/products?query=" + props.query, {
        method: "GET", 
      })
        .then((res) => res.json())
        .then((data) => {
        setProducts(data)
        })
        .catch((err) => {
          console.log("error : " + err);
        });
  },[props.query])
    return(
        <div className="w-full h-full flex flex-col">
        <Nav ></Nav>
       <div className="ml-auto mr-auto mt-[10%] flex flex-col w-[85%] lg:w-[60%] bg-white shadow-md pl-2">
       <div className="text-2xl w-full border-b  mt-[1.5%]">Search results for  "{props.query}"</div>
        <ProductsContainer products={products} all></ProductsContainer>
       </div>
        </div>
    )
}