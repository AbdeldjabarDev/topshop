import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct, setProductcount } from "../state/cartSlice";
import Image from "next/image";
import store from "../state/store";
export default function CartProductCont(props) {
  let [count, setCount] = useState(store.getState().cart.count.at(props.count));
  let dispatch = useDispatch();
  if(count === null)
  return(
    <div></div>
  )
  else
  return (
    <div className="w-full lg:w-[90%] ml-auto mr-auto flex mb-[2%] mt-[2%]">
   <div className="flex">
   <img
        className="w-[40%]  h-full ml-[4%]"
        src={props.product.thumbnail}
      ></img>
      <div className="flex flex-col ml-3 mt-[30%] gap-4 ">
      <div className="text-lg text-ellipsis max-w-[200px]">{props.product.title}</div>
      <div className="text-lg ">{props.product.price}$</div>
      </div>
   </div>
      <div className="mt-[25%] mr-[4%] ml-auto">
        <div className="flex mr-[0.2%] lg:flex-nowrap flex-wrap ml-auto gap-3  h-fit translate-y-[-50%] border-red-600">
          <div className="flex gap-3 mt-[10%]">
          <div
            className="p-3 rounded-full relative bg-green-600 text-black shadow-md w-10  h-10 pb-3 top-[50%] translate-y-[-50%] "
            onClick={(e) => {
              if (count < props.product.stock) {
                dispatch(setProductcount({ p: props.product, c: count + 1 }));
                setCount(count + 1);
              } else {
                //TODO: handle overstock later;
              }
            }}
          >
           <Image src="/images/cart_plus.svg" layout="fill"></Image>
          </div>
          <div className="text-2xl mb- block h-full">{count}</div>
          <div
            className="p-3 relative rounded-full bg-[#f0efef] text-black shadow-md text-lg w-10  h-10 top-[50%] translate-y-[-50%]"
            onClick={(e) => {
              if (count > 1) {
                dispatch(setProductcount({ p: props.product, c: count - 1 }));
                setCount(count - 1);
              } else return;
            }}
          >
           <Image src="/images/cart_minus.svg" layout="fill"></Image>
          </div>
          </div>
          <button className= "relative mt-auto  ml-auto mr-auto border border-red-500 bg-transparent hover:bg-red-500 p-3 hover:text-white rounded-lg content-center h-fit lg:top-[100%]"
          onClick={(e)=>{
            dispatch(removeProduct(props.product));
            setCount(null);
          }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
