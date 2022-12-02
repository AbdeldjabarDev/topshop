import { useState } from "react"
function sum(items)
{
    let sum = 0;
    items.forEach((e)=>
    {
      sum+= e.price_data.unit_amount* e.quantity;
    })
    return sum/100;
}
export default function PurchaseTableItem(props)
{
    let [t,setTotal] = useState(0);
    return(
        /*
        {
                  price_data: {
                    currency: "usd",
                    product_data: {
                      name: current_products.at(i).title,
                    },
                    unit_amount: current_products.at(i).price*100,//for stripe 
                  },
                  quantity: store.getState().cart.count.at(i),
                }*/
            <div className="pl-6 rounded-lg text-md flex w-[100%] h-[10vh] hover:bg-green-50  text-black bg-[#f9f9f9] gap-6 mb-2">
<div className="flex flex-col ">
    {props.p.items.map((e)=>{
        return (<div className="list-style-none translate-y-[50%]">
            {e.price_data.product_data.name} <span className="text-black text-opacity-60">x</span> {e.quantity}
        </div>)
    })}
   
    
    </div>
<div className="mt-[3%] ml-[50%]">
{sum(props.p.items)}$</div>
<div className="mr-[5%] ml-auto top-[50%] translate-y-[60%] h-fit flex gap-4">{props.p.status == 0 ? "Delivered":"Pending"}<div>{props.p.status == 0 ? <img className="h-4 w-4 translate-y-[50%]" src="/images/ok-svgrepo-com.svg"></img> : <></>}</div></div>
    </div>
        
    )
}