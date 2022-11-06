import { useEffect, useState } from "react";
import Nav from "./Nav";
import ProductsContainer from "./ProductsContainer";
function getData(callback)
{
    fetch("http://localhost:23000/products?query=" + props.query, {
        method: "GET", 
      })
        .then((res) => res.json())
        .then((data) => {
        ca(data)
        })
        .catch((err) => {
          console.log("error : " + err);
        });   
}
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
       <div className="ml-auto mr-auto flex flex-col w-[60%]">
       <div className="text-3xl ml-[10%] mt-[12%]">Search results for  "{props.query}"</div>
        <ProductsContainer products={products} all></ProductsContainer>
       </div>
        </div>
    )
}