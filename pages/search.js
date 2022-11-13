import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
export default function Search(props)
{
    let router = useRouter();
    // let forceUpdate = useForceUpdate();
    // let [query,setQuery] = useState(router.query.query);
    // let unsub = store.subscribe(()=>{
    //     setQuery(store.getState().cart.dummy)
    //     fetch("http://localhost:23000/products?query=" + query, {
    //   method: "GET", 
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //   setProducts(data)
    //   })
    //   .catch((err) => {
    //     console.log("error : " + err);
    //   });
    // })
    //  useEffect(()=>{
       
    //  })
    // // setQuery(router.query.query)
   
    
    // let search = () =>{
    
    // }
    
   
    // if(products.length == 0)
//    useEffect(()=>
//    {
   
//    },[query])
   
    return(
       <SearchComp query={router.query.query}/>
    )
}