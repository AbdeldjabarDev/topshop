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
    <div className="w-[90%] ml-auto mr-auto flex mb-[2%] mt-[2%]">
   <div className="flex">
   <img
        className="w-[30%] h-full ml-[4%]"
        src={props.product.thumbnail}
      ></img>
      <div className="text-lg ml-[2%] mt-[15%]">{props.product.title}</div>
   </div>
      <div className="border border-red-600">
        <div className="flex mr-[0.2%] ml-auto gap-3 border mt-[45%] translate-y-[-50%] border-green-200">
          <div
            className="p-3 rounded-full bg-green-600 text-black shadow-md w-10  h-10 pb-3 top-[50%] translate-y-[-50%] "
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
          <div>{count}</div>
          <div
            className="p-3 rounded-full bg-[#f0efef] text-black shadow-md text-lg w-10  h-10 top-[50%] translate-y-[-50%]"
            onClick={(e) => {
              if (count > 1) {
                dispatch(setProductcount({ p: props.product, c: count - 1 }));
                setCount(count - 1);
              } else return;
            }}
          >
           <Image src="/images/cart_minus.svg" layout="fill"></Image>
          </div>
          <div className="text-black border border-red-500 bg-transparent hover:bg-red-500 p-3 hover:text-white rounded-lg content-center h-fit top-[50%] translate-y-[-50%]"
          onClick={(e)=>{
            dispatch(removeProduct(props.product));
            setCount(null);
          }}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );
}
