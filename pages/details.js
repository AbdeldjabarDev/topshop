import { useRouter } from "next/router";
import store from "../state/store";
import Nav from "../components/Nav";
import Carouseler from "../components/Carouseler";
import ProductsContainer from "../components/ProductsContainer";
import RatingBar from "../components/RatingBar";
export default function Details(props) {
  let router = useRouter();
  let product;
  let id = router.query.id;
  console.log(
    "number of products  : " + store.getState().products.value.length
  );
  for (let p of store.getState().products.value) {
    if (p._id == id) {
      product = p;
    }
  }
  let c = [];
  for (let i of product.images) {
    console.log("image : " + i);
    c.push(<img className="w-[100%]" src={i}></img>);
  }
  return (
    <div className="flex flex-col w-full h-full">
      <Nav></Nav>
      <div className="w-[90%] h-[80vh] mt-[8%] ml-auto flex flex-col mr-auto      -black">
        <div className="mt-[1%] text-2xl ">{product.title}</div>
        <div className="flex w-[80%] gap-10 mb-[10%] h-[40vh]      -black">
          <Carouseler
            children={c}
            tailwind="w-[90%] relative h-[40vh] mt-[6%]  -[5px]   -green-600"
            controls={[
              <div className="absolute top-[50%] left-[-15%] text-xl w-12 h-12 text-center   p-4 rounded-full bg-red-300">{"<"}</div>,
              <div className="absolute top-[50%] left-[105%] text-xl w-12 h-12 text-center pb-3  p-4 rounded-full bg-blue-300"> {">"}</div>,
            ]}
          ></Carouseler>
          <div className="w-[3px]  ml-[10%] mt-[6%] h-[100%] bg-black"></div>

          <div className="flex flex-col w-[40%]  -green-600 ml-[20%] mt-[8%] gap-6">
            {/* {
          Object.keys(product).map((e)=>
          {
            if(e == 'images' || e == 'thumbnail' || e == 'category' || e == 'description' || e=='_id' || e=='id' || e =='title')
            {return;}
           return <div className="flex gap-5 "><div>{e} :</div> {product[e]}</div>
          })} */}
            <div>Brand : {product.brand}</div>
            <div>Price : {product.price + " $"} </div>
            <div>In Stock : {product.stock} left</div>
            <div>Discount : {product.discountPercentage + " %"}</div>
            <RatingBar rating={(product.rating - 4) * 5} />
          </div>
        </div>
        <div className="text-3xl font-semibold">Similar Products :</div>
        <ProductsContainer
          products={store.getState().products.value.filter((e) => {
            return e.category == product.category && e.id != product.id;
          })}
        ></ProductsContainer>
      </div>
    </div>
  );
}
