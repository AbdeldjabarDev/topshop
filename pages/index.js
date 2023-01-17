import Head from 'next/head'
import Nav from '../components/Nav'
import { setUser, setToken, setLoggedIn } from '../state/cartSlice'
import { addProducts, setReady } from '../state/productsSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCookie } from 'cookies-next'
import store from '../state/store'
import ProductsContainer from '../components/ProductsContainer'
let initiated = false;
export default function Home()
{
   console.log('Backend url : ' + process.env.BACKEND_URL);
    let dispatch = useDispatch();
    let [wwidth,setWidth] = useState(0);
    let [products,setProducts] = useState([]);
   useEffect(()=>{ 
setWidth(window.innerWidth)
if(!store.getState().products.ready)
fetch('https://topshopserver.onrender.com/'+'products')
.then((response)=> response.json())
.then((data)=>
{
    dispatch(setReady(true))
    dispatch(addProducts(data.result));
    setProducts(data.result)

})})
let t = getCookie('topshop_userId');
let u = getCookie('topshop_token');
if(t != undefined && u != undefined)
{
  dispatch(setUser(u));
  dispatch(setToken(t));
  dispatch(setLoggedIn(true));
  
}  
    return(
        <div className="flex flex-col gap-4 h-[100%]">
    <Head>
        <title>Top Shop</title>
        <meta name="description" content="TopShop e-commerce website" />
        <link rel="icon" href="/images/logo.svg" />
        <meta name='viewport' content='width=device-width,initial-scale = 1' />
    </Head>
    <Nav></Nav>
  <div className='flex flex-col gap-5 lg:mt-[8%] md:mt-[15%] mt-[20%]'>
    
  <ProductsContainer products={products}  title="Newest Products" width={wwidth}/>  
    {/* <div>{store.getState().products.value.length + " initiated : " + initiated}</div> */}
    {/* <div className='flex flex-col'>
    {store.getState().products.value.map((e)=>
   {
    <div className='text-4xl text-black'>{e.id + " name : " + e.name}</div>
   })}
    </div> */}
    <ProductsContainer products={products.filter((e)=> (e.rating-4)*5 > 4)} title= "Top Rated Products" width={wwidth}/>
  </div>
    {/* <Container child={content} tailwind="w-[80%] h-full "></Container> */}
        
        </div>
    )
}
