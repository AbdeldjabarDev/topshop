import store from "../state/store";
import Nav from "../components/Nav";
import CartProductCont from "../components/CartProductCont";
import { useEffect, useState,useRef } from "react";
import {  useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useSelector } from "react-redux";
export default function CartComp(props) {
  let router = useRouter();
  let [empty, setEmpty] = useState(false);
  let [loading,setLoading] = useState(false);
  let [totalAmount,setTotalAmount] = useState(store.getState().cart.total);
  let notloggedInRef = useRef();
  let dark = useSelector((state)=> state.products.dark)
  useEffect(() => {
   
    if (store.getState().cart.value.length == 0) setEmpty(true);
    return store.subscribe(() => {
      if (store.getState().cart.value.length == 0) setEmpty(true);
      
      setTotalAmount(store.getState().cart.total);
    
    });
  });
  
  if (empty)
    return (
      <>
         <Nav></Nav>
      
      <div className="w-full h-[100vh] flex justify-around flex-col"   style={{backgroundColor:dark ==true ? '#000d1a':'white',transition:'transform 0.5s ease'}}>
       
        <img className="ml-auto mr-auto translate-y-[20%] w-[300px] h-[300px]" src="/images/empty_cart.svg"></img>
        <div className="ml-auto mr-auto text-xl ">You have no items in your cart</div>
      </div>
      </>
   
    );
  return (
    <div className="w-[100vw] h-[100vh] flex" style={{backgroundColor:dark == true ? "#000d1a":"#f7f7f7"}}>
      <Nav></Nav>
      <div className="absolute top-[0px] left-1 lg:left-[25%] hidden h-fit lg:h-[40px] w-full lg:w-[50vw] border border-white shadow-md" ref={notloggedInRef}  style={{backgroundColor:dark ==true ? '#000d1a':'white',transition:'transform 0.5s ease',color:dark == true ? "white":"black"}}>
      <div className="ml-1 lg:ml-10 text-lg">You need to login first to confirm the purchase</div>
      <div className="mr-6 text-lg ml-auto text-red-600 cursor-default rounded-full p-1 to-blue-900" onClick={(e)=>
      {
        // notloggedInRef.current.style.transform = "translateY(-100px)";

        notloggedInRef.current.style.transform  = "translateY(-90px)";
      }}>x</div>
    </div>
      <div className="lg:w-[50%] h-fit w-full ml-auto mr-auto border border-white lg:border  rounded-md shadow-none lg:shadow-lg flex flex-col mt-[90px]  gap-4" style={{backgroundColor : dark == true ? "#000d1a":"white",color:dark == true ? "white":"black"}}>
        <div className="flex flex-col ml-0 lg:ml-[10%]">
          {store.getState().cart.value.map((e, i) => {
            return <CartProductCont product={e} count={i} key={e.id}/>;
          })}
        </div>

        <div className="flex flex-col  border-red-400 ">
        <div className="ml-auto mr-[10%] mb-[2%]">{"Total : " +totalAmount+ "$"}</div>
          <button
            disabled={loading}
            className="primary disabled:bg-blue-200 border text-white p-3 w-[150px] rounded-md mb-10  ml-auto mr-auto "
            onClick={(e) => {
              if(store.getState().cart.loggedIn == false)
              {
                notloggedInRef.current.style.display = "flex";
                notloggedInRef.current.style.transform = "translateY(100px)";
                return;
              }
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
             // console.log(JSON.stringify({its:items,uid:store.getState().cart.user}));
              fetch("https://topshopserver.onrender.com/purchase", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({its:items,uid:getCookie('topshop_userId')}),
              })
              .then((response)=> response.json())
              .then((data)=>
              {
                setLoading(false);
                if(data.url!=undefined)
                router.push(data.url)

              })
              .catch((err) => {console.log(err);setLoading(false)});
            }}
          >
            
            {loading == false ? "Confirm" : ""}
            <div
              className="w-8 h-8 ml-auto mr-auto rounded-full border border-blue-900 border-b-white animate-spin"
              style={{ display: loading == true ? "block" : "none" }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
}
