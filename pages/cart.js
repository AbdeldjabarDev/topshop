import store from "../state/store";
import Nav from "../components/Nav";
import CartProductCont from "../components/CartProductCont";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
export default function Cart(props) {
  let router = useRouter();
  let [empty, setEmpty] = useState(false);
  let [loading,setLoading] = useState(false);
  let [totalAmount,setTotalAmount] = useState(store.getState().cart.total);
  useEffect(() => {
    if (store.getState().cart.value.length == 0) setEmpty(true);
    return store.subscribe(() => {
      if (store.getState().cart.value.length == 0) setEmpty(true);
      
      setTotalAmount(store.getState().cart.total);
    
    });
  });
  
  if (empty)
    return (
      <div className="w-full h-full flex flex-col">
        <Nav></Nav>
        <div className="w-[50%] ml-auto mr-auto border border-black rounded-md h-[50vh] flex shadow-lg mt-[15%]">
          <div className="ml-auto mr-auto mt-[23%] text-xl">
            You have no items in your cart
          </div>
        </div>
      </div>
    );
  return (
    <div className="w-full h-full flex flex-col">
      <Nav></Nav>
      <div className="w-[50%] ml-auto mr-auto border border-black  rounded-md shadow-lg flex flex-col mt-[10%] gap-4">
        <div className="flex flex-col ml-[10%]">
          {store.getState().cart.value.map((e, i) => {
            return <CartProductCont product={e} count={i} />;
          })}
        </div>

        <div className="flex flex-col border border-red-400 ">
        <div className="ml-auto mr-[10%] mb-[2%]">{"Total : " +totalAmount+ "$"}</div>
          <button
            className="bg-green-600 p-3 rounded-md mb-10 font-semibold ml-auto mr-auto text-white"
            onClick={(e) => {
              setLoading(true);
              let items = [];
              let current_products = store.getState().cart.value;
              for (let i = 0; i < current_products.length; i++) {
                items.push({
                  price_data: {
                    currency: "usd",
                    product_data: {
                      name: current_products.at(i).title,
                    },
                    unit_amount: current_products.at(i).price*100,//for stripe 
                  },
                  quantity: store.getState().cart.count.at(i),
                });
              }
              console.log(JSON.stringify(items));
              fetch("http://localhost:23000/purchase", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(items),
              })
              .then((response)=> response.json())
              .then((data)=>
              {
                setLoading(false);
                router.push(data.url)

              })
              .catch((err) => console.log(err));
            }}
          >
            
            {loading == false ? "Confirm" : ""}
            <div
              className="w-8 h-8 ml-auto mr-auto rounded-full border border-blue-500 border-b-white animate-spin"
              style={{ display: loading == true ? "block" : "none" }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
}
