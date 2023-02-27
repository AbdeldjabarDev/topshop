import { useRouter } from "next/router";
import store from "../state/store";
import Nav from "../components/Nav";
import {Carouseler} from "../components/Carouseler";
import ProductsContainer from "../components/ProductsContainer";
import RatingBar from "../components/RatingBar";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addProduct,removeProduct } from "../state/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

// let fetcher = (...args) => fetch(...args).then((res)=> res.json());
export default function DetailsComp()
{
   
   let p = useSelector((state) => state.products.selectedProduct);
   let [c,setC] = useState([]);
   let dark = useSelector((state) => state.products.dark)
    useEffect(()=>
    {
      if(c.length == 0)
      setC(p.images.map((e)=> <img src={e} key={e}></img>));
    },[c,p])
    let dispatch = useDispatch();
    let [inCart,setInCart] = useState(false);
    console.log(p)
return ( <div className="flex flex-col w-full h-full" style={{backgroundColor : dark == true ? "rgb(40 31 39)":"white",color:dark == true ? "white":"black"}}>
<Nav></Nav>
<div className="lg:w-[90%] w-full mt-[8%] ml-auto flex flex-col mr-auto     -black">
  <div className="mt-[15%] lg:mt-[1%] text-2xl ml-0 lg:ml-[10%] mb-[1%]">{p.title}</div>
  <div className="flex lg:flex-nowrap flex-wrap w-full lg:w-[80%] gap-10 mb-[10%]  h-fit p-4 ml-auto mr-auto shadow-lg " style={{backgroundColor : dark == true ? "rgb(40 31 39)":"white",color:dark == true ? "white":"black"}}>
    <Carouseler
      tailwind="lg:w-[40%] w-[100%] relative h-[100%] -[5px]   -green-600"
      controls={[
        <div className="absolute lg:top-[35%] top-[105%] lg:left-[105%] left-[20%] text-xl w-12 h-12 text-center"><BsFillArrowLeftCircleFill   size={32}/> </div>,
        <div className="absolute lg:top-[55%] top-[105%] lg:left-[105%] left-[45%] text-xl w-12 h-12 text-center"><BsFillArrowRightCircleFill  size={32} /></div>,
      ]}
      children={c}
    ></Carouseler>


  <div className="flex flex-col w-full lg:w-[40%] h-full gap-10 ml-[20%] mt-[10%]">
  <div className=" grid grid-cols-2 -green-600  gap-6">
      {/* {
    Object.keys(product).map((e)=>
    {
      if(e == 'images' || e == 'thumbnail' || e == 'category' || e == 'description' || e=='_id' || e=='id' || e =='title')
      {return;}
     return <div className="flex gap-5 "><div>{e} :</div> {product[e]}</div>
    })} */}
      <div><div className="text-opacity-50 text-lg">Brand</div><div className="text-xl">{p.brand}</div></div>
      <div><div className="text-opacity-50 text-lg">Price</div><div className="text-xl">{p.price + "$"}</div></div>
      <div><div className="text-opacity-50 text-lg">In Stock</div><div className="text-xl">{p.stock}</div></div>
      <div><div className="text-opacity-50 text-lg">Discount</div><div className="text-xl">{p.discountPercentage + "%"}</div></div>
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
  <div className="text-2xl lg:ml-[10%] ml-2 font-semibold">Similar Products :</div>
  <ProductsContainer
    products={store.getState().products.value.filter((e) => {
      return e.category == p.category && e.id != p.id;
    })}
   all></ProductsContainer>
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