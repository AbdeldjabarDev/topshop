import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../state/cartSlice";
import store from "../state/store";
import RatingBar from "./RatingBar";
function findInArray(arr, p) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === p.title) {
      return i;
    }
  }
  return -1;
}

export default function ProductCont(props) {
  let dispatch = useDispatch();
  let ref = useRef();
  let [inCart, setInCart] = useState(
    findInArray(store.getState().cart.value, props.product) === -1
      ? false
      : true
  );
  let x = 0;
  return (
    <div
      className="relative  w-fit overflow-hidden rounded-md shadow-md h-fit "
      onMouseEnter={(e) => {
        ref.current.style.transform = "translateY(0%)";
      }}
      onMouseLeave={(e) => {
        ref.current.style.transform = "translateY(100%)";
      }}
    >
      <div
        className="absolute z-20 top-0 left-0  translate-y-[100%] bg-white bg-opacity-50 w-full h-full"
        ref={ref}
        style={{ transition: "transform 0.8s ease" }}
      >
        <button
          className=" w-[70%] text-xl mt-[40%] border border-black bg-black text-white hover:text-black rounded-full hover:bg-transparent ml-10 mr-auto"
          onClick={(e) => {
            if (inCart === false) {
              console.log("adding " + props.product.title);
              // store.getState().cart.value.delete(props.product._id);
              dispatch(addProduct(props.product));
              setInCart(true);
              return;
            }
            console.log("removing " + props.product.title);

            dispatch(removeProduct(props.product));
            setInCart(false);
          }}
        >
          {inCart === true ? "Remove From Cart" : "Add to Cart"}
        </button>
        <button className=" w-[70%] text-xl mt-[5%] border border-green-600 bg-green-600 text-white hover:text-black rounded-full hover:bg-transparent ml-10 mr-auto">
          <Link href={"/details?id=" + props.product._id}><span className=" hover:text-green-600">Details</span></Link>
        </button>
      </div>
      <div className="relative w-60 h-60 flex flex-col bg-[#fefefe]   border">
        <img
          className="w-[100%] ml-auto mr-auto h-[90%] z-10"
          src={props.product.thumbnail}
        ></img>
        <div className="flex flex-col gap-2">
          <div className="flex text-black w-[100%]">
            <div className="text-md max-w-[50%]  ml-2 mr-auto">
              {props.product.title}
            </div>
            {/* <div className="text-xl  ml-2 mr-auto">{props.product.name}</div> */}
            <div className="flex flex-col max-h-fit w-[50%]">
              <div className="mr-2 ml-auto ">{props.product.price} $</div>
              <div className="text-red-500 ml-auto mr-2 font-bold text-sm">
                (
                {props.product.discountPercentage > 0
                  ? "-" + props.product.discountPercentage + "%"
                  : ""}
                )
              </div>
            </div>
          </div>
          <div className="flex w-full gap-8 ml-2">
            <RatingBar rating={(props.product.rating - 4) * 5}></RatingBar>
            <div className="-mt-1">
              <span className="text-green-600 text-sm">
                {props.product.stock}
              </span>{" "}
              In Stock
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
