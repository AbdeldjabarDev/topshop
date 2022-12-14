import { useRouter } from "next/router";
import store from "../state/store";
import Nav from "../components/Nav";
import {Carouseler} from "../components/Carouseler";
import ProductsContainer from "../components/ProductsContainer";
import RatingBar from "../components/RatingBar";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProduct,removeProduct } from "../state/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
let fetcher = (...args) => fetch(...args).then((res)=> res.json());
export default function DetailsComp()
{
    let [c,setC] = useState([]);
    let [products,setProducts] = useState([]);
    let [p,setP] = useState({title:'',brand:'',price:'',discountPercentage:'',stock:'',rating:''});
    let router = useRouter();
    useEffect(()=>
    {
        let f = async() =>
        {
            let data = await fetch('https://topshopserver.onrender.com/' + 'products')
            .then((res) => res.json())   
            let product;
           
        let id = router.query.id;
        console.log(
            "number of products  : " + data.length
          );
        for (let p of data) {
          if (p._id == id) {
            product = p;
           
          }
        }
        let c = [];
        for (let i of product.images) {
          console.log("image : " + i);
          c.push(<img className="w-[100%]" src={i} key={i}></img>);
          setC(c);
          setP(product);
          setProducts(data);
        }
        }
        f();
    },[c,p])
    let dispatch = useDispatch();
    let [inCart,setInCart] = useState(false)
return ( <div className="flex flex-col w-full h-full">
<Nav></Nav>
<div className="lg:w-[90%] w-full mt-[8%] ml-auto flex flex-col mr-auto  border   -black">
  <div className="mt-[15%] lg:mt-[1%] text-2xl ml-0 lg:ml-[10%] mb-[1%]">{p.title}</div>
  <div className="flex flex-wrap w-full lg:w-[80%] gap-10 mb-[10%] pb-[5%] h-fit lg:h-[60vh] ml-auto mr-auto shadow-lg bg-white    -black">
    <Carouseler
     
      tailwind="lg:w-[40%] w-[100%] relative h-[100%] -[5px]   -green-600"
      controls={[
        <div className="absolute lg:top-[50%] top-[105%] lg:left-[-15%] left-[20%] text-xl w-12 h-12 text-center   p-4 rounded-full bg-red-300"><Image src="/images/details_nextarrow.svg" layout="fill"></Image></div>,
        <div className="absolute lg:top-[50%] top-[105%] lg:left-[105%] left-[45%] text-xl w-12 h-12 text-center pb-3  p-4 rounded-full bg-blue-300"><Image src="/images/details_previousarrow.svg" layout="fill"></Image></div>,
      ]}
    >{c}</Carouseler>


  <div className="flex flex-col w-full lg:w-[40%] h-full gap-10 ml-[20%] mt-[10%]">
  <div className=" grid grid-cols-2 -green-600  gap-6">
      {/* {
    Object.keys(product).map((e)=>
    {
      if(e == 'images' || e == 'thumbnail' || e == 'category' || e == 'description' || e=='_id' || e=='id' || e =='title')
      {return;}
     return <div className="flex gap-5 "><div>{e} :</div> {product[e]}</div>
    })} */}
      <div><div className="text-black text-opacity-50 text-lg">Brand</div><div className="text-xl">{p.brand}</div></div>
      <div><div className="text-black text-opacity-50 text-lg">Price</div><div className="text-xl">{p.price + "$"}</div></div>
      <div><div className="text-black text-opacity-50 text-lg">In Stock</div><div className="text-xl">{p.stock}</div></div>
      <div><div className="text-black text-opacity-50 text-lg">Discount</div><div className="text-xl">{p.discountPercentage + "%"}</div></div>
      <RatingBar rating={(p.rating - 4) * 5} />
    </div>
    <button className="bg-green-600 text-white p-2 rounded-md w-fit ml-auto mr-auto" onClick={(e)=>{
if (inCart === false) {
console.log("adding " + p.title);
// store.getState().cart.value.delete(props.product._id);
dispatch(addProduct(p));
setInCart(true);
return;
}


dispatch(removeProduct(p));
setInCart(false);
    }}>{inCart === true ? "Remove From Cart":"Add to Cart"}</button>
  </div>
  </div>
  <div className="text-2xl ml-[10%] font-semibold">Similar Products :</div>
  <ProductsContainer
    products={products.filter((e) => {
      return e.category == p.category && e.id != p.id;
    })}
  ></ProductsContainer>
</div>
</div>)
}
// export async function  getServerSideProps(context)
// {
  
    
//     let data = await fetch(process.env.BACKEND_URL || 'http://localhost:23000/' + 'products')
//     .then((res) => res.json())
//     let product;
//     let id = context.query.id;
//     // console.log(
//     //   "number of products  : " + store.getState().products.value.length
//     // );
//     console.log(
//         "number of products  : " + data.length
//       );
//     for (let p of data) {
//       if (p._id == id) {
//         product = p;
//       }
//     }
//     return {product:product}
// }