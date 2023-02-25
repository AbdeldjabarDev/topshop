import { useEffect, useState } from "react";
import Nav from "./Nav";
import ProductsContainer from "./ProductsContainer";
export default function SearchComp(props)
{
  
  let [products,setProducts] = useState([]);
  useEffect(()=>
  {
    fetch("https://topshopserver.onrender.com/products?query=" + props.query, {
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
       <div className="ml-auto mr-auto lg:mt-[10%] mt-[15%] flex flex-col w-full lg:w-[60%]  bg-white pb-10 shadow-md pl-2">
       <div className="text-2xl w-full border-b p-3 justify-center flex content-center mt-[1.5%]">Search results for  "{props.query}"</div>
        <ProductsContainer products={products} all></ProductsContainer>
       </div>
        </div>
    )
}