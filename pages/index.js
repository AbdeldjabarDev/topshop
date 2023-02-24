import Head from 'next/head'
import Nav from '../components/Nav'
import { setUser, setToken, setLoggedIn } from '../state/cartSlice'
import { addProducts, setReady } from '../state/productsSlice'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCookie } from 'cookies-next'
import store from '../state/store'
import ProductsContainer from '../components/ProductsContainer'
import CategoryCont from '../components/CategoryCont'
let initiated = 0;
async function fetchData(errorSetter)
{
  if(initiated == false)
{
  let response = null ;
  try
  {
   response =  await fetch('https://topshopserver.onrender.com/'+'products');
    let jsonResponse =  await response.json();
    store.dispatch(addProducts(jsonResponse.result));
    // productsSetter(jsonResponse);
    console.log('got products  : ' + jsonResponse);
    store.dispatch(setReady(true));
    initiated = true;
  }
  catch(e)
  {
  switch (response?.status)
  {
    case 500:
      errorSetter('We are facing some issues right now.Please come back later');
      break;
    
  }  
   


  }

}




  
 
}
export default function Home()
{
  
    let dispatch = useDispatch();
    let [wwidth,setWidth] = useState(0);
    // let [products,setProducts] = useState([])
    
    let products = useSelector((state) => state.products.value)
    let [error,setError] = useState('');
    let errorRef = useRef();
   useEffect(()=>{ 
setWidth(window.innerWidth)
// fetchData(setError);
if(store.getState().products.value.length == 0)
fetch('https://topshopserver.onrender.com/products')
.then((res) => res.json())
.then((data)=>
{
  console.log('adding products ');
  store.dispatch(addProducts(data.result));
  initiated++;
})
.catch((e)=>
{
  setError('We are facing issues now : ' + e.toString())
})

})
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
    
  {/* <ProductsContainer products={products}  title="Newest Products" width={wwidth}/>   */}
    {/* <div>{store.getState().products.value.length + " initiated : " + initiated}</div> */}
    {/* <div className='flex flex-col'>
    {store.getState().products.value.map((e)=>
   {
    <div className='text-4xl text-black'>{e.id + " name : " + e.name}</div>
   })}
    </div> */}
    <div className='absolute top-0 md:w-[100vw] left-[0vw] md:left-[10vw] lg:left-[25vw] lg:w-[50vw] flex  shadow-md h-[60px] bg-white' style={{opacity:error != '' ? '1':'0',transition:'transform 1s linear'}} ref={errorRef}>
    <div className='w-full  h-[60px] text-red-600 pl-2  pr-2 pt-4  ' >{error}</div>
    <div className='mr-6 ml-auto translate-y-[25%] text-black' onClick={(e)=>
    {
    errorRef.current.style.transform = 'translateY(-70px)'  
    // errorRef.current.style.display = 'none';
    
    }}>x</div>
    </div>
    <ProductsContainer products={products.filter((e)=> (e.rating-4)*5 > 4)} title= "Top Rated Products" width={wwidth}/>
    <div className='text-2xl font-semibold ml-20 w-fit mt-[1%] mb-[2%] before:bg-red-600'>Or browse by category</div>
    <CategoryCont></CategoryCont>
  </div>
        
        </div>
    )
}
