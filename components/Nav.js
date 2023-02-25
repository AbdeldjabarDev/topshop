import { useRef, useState } from "react";
import { useRouter } from "next/router";
import store from "../state/store";
import { setQuery, setLoggedIn } from "../state/cartSlice";
import { useDispatch } from "react-redux";
import { getCookie, deleteCookie } from "cookies-next";
import { setSelectedCategory } from "../state/productsSlice";

function deleteAllCookies()
{
  deleteCookie("topshop_userId");
  deleteCookie("topshop_email");
  deleteCookie("topshop_lastlogin");
  deleteCookie("topshop_token");
}
export default function Nav(props) {
  const dispatch = useDispatch();
  let searchRef = useRef();
  let navRef = useRef();
  let loginListRef = useRef();
  let [loginListState, setLoginListState] = useState(true);
  let router = useRouter();
  let categoriesRef = useRef();
  let cartRef = useRef();
  let accountRef = useRef();
  let [closed, setClosed] = useState(true);
  return (
    <div className="fixed h-[70px]  md:h-[70px] mb-[15%] text-xl w-[100vw] z-20 flex gap-5 shadow-sm bg-white cursor-default">
      <div
        className="absolute md:w-[30%] lg:[15%] w-[100%]  overflow-hidden  shadow-md h-[100vh]  top-0 left-0 bg-white text-black flex flex-col translate-x-[-100%] "
        ref={navRef}
        style={{ transition: "transform 0.8s ease" }}
      >
        <div
          className="flex  mt-[10%] pt-4 pb-4 content-center bg-white hover:bg-green-50"
          onClick={(e) => {
            if (closed === true) {
              categoriesRef.current.style.transitionProperty = "height";
              categoriesRef.current.style.transitionDuration = "0.8s";
              categoriesRef.current.style.transitionTimingFunction = "ease";
              categoriesRef.current.style.height = "40%";
              setClosed(false);
            }

            if (closed === false) {
              categoriesRef.current.style.height = "0px";
              setClosed(true);
            }
          }}
        >
          <img
            src="/images/menu-side-nav-svgrepo-com.svg"
            className="w-8 h-8 ml-4 mr-2"
          ></img>
          <div>Categories </div>
        </div>
        <div
          className="ml-4 flex flex-col gap-4 h-0 text-black overflow-hidden overflow-y-auto"
          ref={categoriesRef}
          style={{ transition: "height 0.8s ease" }}
        >
          {store.getState().products.categories.map((e) => {
            return (
              <div key={e.name}
                onClick={(ee) => {
                  store.dispatch(setSelectedCategory(e.name));
                  router.replace("/categories?category=" + e.name);
                }}
              >
                {e.name} ( {e.count} )
              </div>
            );
          })}
        </div>
        <div
          className="text-black text-3xl absolute top-[0.2%] left-[90%] mr-10 ml-auto"
          onClick={(e) => {
            navRef.current.style.transform = "translateX(-100%)";
          }}
        >
          x
        </div>
        <div className="flex flex-col">
          <div
            className="flex  pt-4 pb-4 content-center hover:bg-green-50"
            onClick={(e) => {
              router.replace("/purchases");
            }}
          >
            <img
              className="w-8 h-8 ml-4 mr-2"
              src="/images/stacked-print-products-svgrepo-com.svg"
            ></img>
            <div>My Purchases</div>
          </div>
          <div
            className="flex  pt-4 pb-4 content-center hover:bg-green-50"
            onClick={(e) => {
              router.replace("/contact");
            }}
          >
            <img
              className="w-8 h-8 ml-4 mr-2"
              src="/images/contact-form-svgrepo-com.svg"
            ></img>
            <div>Contact us</div>
          </div>
          <div
            className="flex  pt-4 pb-4 content-center hover:bg-green-50"
            onClick={(e) => {
              if(store.getState().cart.loggedIn == true)
              {
                deleteAllCookies();
                dispatch(setLoggedIn(false));
              }
              router.replace('/login')
             
            }}
          style={{display:store.getState().cart.loggedIn == true ? 'block':'none'}}
          >
            <img
              className="w-8 h-8 ml-2 mr-2"
              src={store.getState().cart.loggedIn == true ? "/images/logout-svgrepo-com.svg":"/images/account-svgrepo-com.svg"}
            ></img>
            <div>{store.getState().cart.loggedIn == true ? 'Log out':'Login'}</div>
          </div>
        </div>
        <div
          className="flex pt-4 pb-4 content-center lg:hidden hover:bg-green-50"
          onClick={(e) => {
            router.replace("/cart");
          }}
        >
          <img
            className="w-7 ml-2 mr-2 h-7  "
            src="/images/cart-svgrepo-com.svg"
            ref={cartRef}
          ></img>
          <div>My Cart</div>
        </div>
      </div>
      <div className="flex gap-3 -z-20 ">
        <img
          src="/images/menu-svgrepo-com.svg"
          className="w-7 h-7  ml-4  translate-y-[80%]"
          onClick={(e) => {
            navRef.current.style.transform = "translateX(0%)";
          }}
        ></img>
        <img
          className="w-14 h-12 ml-2 mr-auto  translate-y-[20%]"
          src="/images/logo.svg"
          onClick={(e) => {
            router.replace("/");
          }}
        ></img>
      </div>
      <div className="flex pt-4 gap-5  border-green-600 lg:mr-[5%] mr-0 ml-[20%] lg:ml-auto ">
        <input
          className="w-[50%] lg:w-[50%] h-[40px] bg-[#f6f6f6] focus:bg-white rounded-full border border-slate-300 pl-5 text-black"
          ref={searchRef}
          onFocus={(e) => {
            e.target.style.width = "80%";
            e.target.style.transition = "width 0.8s ease";
          }}
          onBlur={(e) => {
            e.target.style.width = "50%";
          }}  
        ></input>
        <div className="flex border-black gap-4">
          <img
            className="w-7 h-7  hover:shadow-md"
            src="/images/search.svg"
            onClick={(e) => {
              if (searchRef.current.value.toString() !== "") {
                dispatch(setQuery(searchRef.current.value));
                router.replace("/search/?query=" + searchRef.current.value);
              }
            }}
          ></img>
          <img
            className="w-7 h-7 hidden lg:inline  hover:shadow-md"
            src="/images/cart-svgrepo-com.svg"
            ref={cartRef}
            onClick={(e) => {
              router.replace("/cart");
            }}
          ></img>
          <img
            className="w-7 h-7 hidden lg:inline"
            src="/images/account.svg"
            ref={accountRef}
            onClick={(e) => {
              if (!store.getState().cart.loggedIn) {
                router.replace("/login");
                return;
              } else {
                if (loginListState == false) setLoginListState(true);
                else setLoginListState(false);
              }
            }}
          ></img>
        </div>
      </div>
      <div
        className="absolute left-[80%] w-[18%] top-[10vh] -z-10 h-[30vh] flex flex-col"
        ref={loginListRef}
        style={{
          opacity: loginListState == true ? "0" : "1",
          transition: "opacity 0.4s ease",
        }}
      >
        <div className="bg-white shadow-lg border border-slate-600 rounded-b-lg w-full h-full overflow-hidden">
          <div className="flex flex-col pl-3 mt-[4%]">
            <div className="text-opcaity-50 text-black text-sm mb-1">Email</div>
            <div className="text-lg mb-4">{getCookie("topshop_email")}</div>
            <div className="text-opcaity-50 text-black text-sm mb-1">
              Last logged in
            </div>
            <div className="text-lg">{getCookie("topshop_lastlogin")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
