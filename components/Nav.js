import { useRef,useState } from "react"
import { useRouter } from "next/router";
import CatCont from "./CatCont";
import Link from "next/link";
import store from "../state/store";
import { setQuery,setLoggedIn } from "../state/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCookie,setCookie,deleteCookie } from "cookies-next";

function getData()
{
    // fetch('localhost:23000/get-categories').then((result)=>{
    //     let data = result.json();
    //     return data;
        
    // })
    
    return (
        [{name:"Women",numItems:"45"},{name:"Men",numItems:"45"},{name:"Kids",numItems:"45"},{name:"Winter",numItems:"45"}]
    )
}
function deleteAllCookies()
{
 deleteCookie('topshop_userId');
 deleteCookie('topshop_email');
 deleteCookie('topshop_lastlogin');
 deleteCookie('topshop_token');


}
export default function Nav(props)
{
    const dispatch = useDispatch();
    //const opened = useSelector(selectOpened)
    let searchRef = useRef();
    let navRef = useRef();
    let loginListRef = useRef();
    let [loginListState,setLoginListState] = useState(true);
    let router = useRouter();
    let categoriesRef = useRef();
    let [closed,setClosed] = useState(true);
    // let [categories,setCategories] = useState([])
    // setCategories(getData());
    let categories = getData();
    return(
    <div className="fixed h-[10%]  text-xl w-[100vw] z-10 flex gap-5 shadow-sm bg-white">
        <div className="absolute w-[20%]  overflow-hidden  shadow-md h-[100vh] top-0 left-0 bg-white text-black flex flex-col translate-x-[-100%] " ref={navRef} style={{transition:"transform 0.8s ease"}}>
 <div className="flex mt-[10%] pt-4 pb-4 content-center bg-white hover:bg-green-50" onClick={(e)=>{
     if(closed === true)
 {
 categoriesRef.current.style.transitionProperty ="height";
 categoriesRef.current.style.transitionDuration ="0.8s";
 categoriesRef.current.style.transitionTimingFunction ="ease";
 categoriesRef.current.style.height = "40%";
 setClosed(false);
 }
           
 if(closed === false)
{
  categoriesRef.current.style.height = "0px";
 setClosed(true);
}

}}>
    <img src="/images/menu-side-nav-svgrepo-com.svg" className="w-8 h-8 ml-2 mr-2"></img><div >Categories  </div></div>
<div className="flex flex-col gap-4 h-0 text-black overflow-hidden overflow-y-auto"  ref={categoriesRef} style={{transition:"height 0.8s ease"}}>
    {
    store.getState().products.categories.map((e)=>{
     return <div onClick={(ee)=>{router.replace('http://localhost:3000/categories?category=' + e.name)}}>{e.name} ( {e.count} )</div>
    })
   }
</div>
<div className="text-black text-3xl absolute top-[0.2%] left-[90%] mr-10 ml-auto" onClick={(e)=>{ navRef.current.style.transform ="translateX(-100%)"}}>X</div>
<div className="flex flex-col">
<div className="flex  pt-4 pb-4 content-center hover:bg-green-50" onClick={(e)=>{
    router.replace('/purchases')
}}><img className="w-8 h-8 ml-2 mr-2" src="/images/stacked-print-products-svgrepo-com.svg"></img><div>My Purchases</div></div>
<div className="flex  pt-4 pb-4 content-center hover:bg-green-50" onClick={(e)=>
{
    router.replace('/contact')
}}><img className="w-8 h-8 ml-2 mr-2" src="/images/contact-form-svgrepo-com.svg"></img><div>Contact us</div></div>
<div className="flex  pt-4 pb-4 content-center hover:bg-green-50" onClick={(e)=>{deleteAllCookies();dispatch(setLoggedIn(false))}}><img className="w-8 h-8 ml-2 mr-2" src="/images/log-out-svgrepo-com.svg"></img><div>Log out</div></div>
</div>


</div>
<div className="flex gap-3">
<img src="/images/menu-svgrepo-com.svg" className="w-8 h-8 ml-4 mt-4 " onClick={(e)=>{navRef.current.style.transform ="translateX(0%)";}}></img>
<img className="w-14 h-14 ml-2 mr-auto mt-2" src="/images/logo.svg" onClick={(e)=>{ router.replace('/')}}></img>
</div>
 <div className="flex gap-6 mr-[10%] ml-auto mt-[2vh]">
<input className="h-[70%] mb-[0.5%] bg-[#f8f8f8] focus:bg-white rounded-full border border-slate-300 bg-opacity-90 pl-6 text-black" ref={searchRef} 
></input>
<div className="flex mt-[1.8%] gap-4">
<img className="w-7 h-7" src="/images/search-svgrepo-com.svg" onClick={(e)=>{
    if(searchRef.current.value.toString() !== "")
    {
        dispatch(setQuery(searchRef.current.value));
        router.replace('/search/?query=' + searchRef.current.value);
    }
    
}}></img>
<img className="w-7 h-7" src="/images/cart-svgrepo-com.svg" onClick={(e)=>{
    router.replace('/cart');
}}></img>  
<img className="w-7 h-7" src="/images/account-svgrepo-com.svg" onClick={(e)=>{
    if(!store.getState().cart.loggedIn)
   {
    router.replace('/login');
    return;
   }
    else
    {
        if(loginListState == false)
        setLoginListState(true)
        else 
        setLoginListState(false);

    }

}}></img>

</div>
 </div>
 <div className="absolute left-[80%] w-[18%] top-[10vh] -z-10 h-[30vh] flex flex-col" ref={loginListRef} style={{opacity: loginListState == true ? '0':'1',transition:'opacity 0.4s ease'}}>
    <div className="bg-white shadow-lg border border-slate-600 rounded-b-lg w-full h-full overflow-hidden" >
   <div className="flex flex-col pl-3 mt-[4%]">
    <div className="text-opcaity-50 text-black text-sm mb-1">Email</div>
    <div className="text-lg mb-4">{getCookie('topshop_email')}</div>
    <div className="text-opcaity-50 text-black text-sm mb-1">Last logged in</div>
    <div className="text-lg">{getCookie('topshop_lastlogin')}</div>
   </div>
    </div>
   
 </div>
    </div>)
}