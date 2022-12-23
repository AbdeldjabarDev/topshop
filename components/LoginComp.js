import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser, setLoggedIn } from "../state/cartSlice";
import { getCookie,setCookie } from "cookies-next";
import store from "../state/store";
import sha1 from "../helpers/sha1";
let fetcher = (...args) => fetch(...args).then((res)=> res.json());
export default function LoginComp(props) {
  let dispatch = useDispatch();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  // let [phone,setPhone] = useState('');
  let [loginState, setLoginState] = useState(true);
  let [loading, setLoading] = useState(false);
  let [passwordError, setPasswordError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [generalError, setGeneralError] = useState("");
  let router = useRouter();
  // store.subscribe(() => {
  //   setUser(store.getState().cart.user);
  //   setTokenString(store.getState().cart.token);
  // });
  let attempSignUp = (email,password,phone)=>
  {
   
    let b = { email: email, password_hash: sha1(password) ,phone:phone };
    fetch('https://topshopserver.onrender.com/'+ "accounts/create",{
     method:'POST',
     body:JSON.stringify(b),
     headers : {
      'Content-Type':'application/json'
     },
    }).then((e) => e.json)
    .then((data)=>
    {
      if(data.error == 0)
      {
        dispatch(setUser(data.userId));
        dispatch(setToken(data.token));
        dispatch(setLoggedIn(true));
      }
      else if(data.error == 2)
          {
           setPasswordError('');
           setEmailError('');
           setGeneralError('Something went wrong while creating your account please try again later')
          }
      
     
    })
  }
  let attemptLogin = (email, password) => {
    const data = { email: email, password_hash: sha1(password) };
    fetch('https://topshopserver.onrender.com/' +"login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.error == 0)
        {
            dispatch(setUser(data.userId));
            dispatch(setToken(data.token));
            dispatch(setLoggedIn(true));
           
            setCookie('topshop_userId',data.userId);
            setCookie('topshop_token',data.token);
            setCookie('topshop_lastlogin',data.last_login);
            setCookie('topshop_email',email);
            console.log(data);
            router.replace("/");
            setLoading(false);
        }
        else if(data.error == 2)
        {
         setPasswordError('Wrong email or password try again');
         setEmailError('');
         setGeneralError('');
         setLoading(false);
        }
        else if(data.error == 4)
        {
         setEmailError('No account matches this email please sign up');
         setPasswordError('');
         setGeneralError('');
         setLoading(false);
        }
      })
      .catch((err) => {
        setGeneralError(err.toString());
        setEmailError('');
        setPasswordError('');

        console.log("error : " + err);
      });
    setLoading(true);
  };
  // let t = getCookie('topshop_userId');
  // let u = getCookie('topshop_token');
  // if(t != undefined && u != undefined)
  // {
  //   window.confirm('You are already logged in log out then try again');
  //   router.replace('/');
  // }
  return (<div
      className="relative w-full h-full flex bg-[#f1f1f1]"
      style={{ transition: "all 0.8s ease" }}
    >
      <div className="absolute  mb-[5%] rounded-lg shadow-lg top-[50%] left-[50%] translate-x-[-50%] mt-[20%] lg:mt-[5%] lg:w-[40%] w-[90%] bg-white">
        <div
          className="flex flex-col gap-6 h-fit  mt-[3%]"
          style={{ transition: "height 0.8s ease" }}
        >
          <div className="text-3xl text-black  font-sans ml-auto mr-auto mb-[2%]">
            {loginState == true ? "Login" : "Sign up"}
          </div>
         <form className="flex flex-col w-full ml-auto mr-auto"  onSubmit={(e)=>
        {
          e.preventDefault();
        
          if(loginState == true)
          {
//             // if(email.match(/([a-zA-Z0-9-])+@([a-z])+(\.)([a-z])+/g) ==  null )
//             // {
//             //     setEmailError('Invalid email');
//             //     setGeneralError('');
//             //     setPasswordError('');
//             //     setLoading(false);
//             //     return;
//             // }
              attemptLogin(email, password);
              // router.replace('/')
              setEmailError('');
              setPasswordError(''); 
              setGeneralError('');
              

          }
          else
          {
                     
attempSignUp(email,password)
          }
        
        }}>
         <input
            className=" w-[90%] lg:w-[80%] pl-3 ml-auto mr-auto h-[7vh]  rounded-md border border-slate-400 mb-[2%]"
            placeholder="Email"
            type="email"
            id=""
            onChange={(e) => {
             
              setEmail(e.target.value);
            }}
          ></input>
           <div className="text-red-600 ml-[12.5%]">{emailError}</div>

          <input
            className="w-[90%] lg:w-[80%] pl-3 ml-auto mr-auto h-[7vh]  rounded-md border border-slate-400 mb-[2%]"
            placeholder="Password"
            type="password"
            id=""
            onChange={(e) => {
              setPassword(e.target.value);
            
            }}
          ></input>
           <div className="text-red-600 ml-[12.5%]">{passwordError}</div>
          {/* <input
            className={
              "w-[75%] pl-3 ml-auto  mr-auto h-[7vh] rounded-md border border-slate-400 mb-[2%]"
            }
            placeholder="Phone number"
            type={"tel"}
            style={{ display: loginState == true ? "none" : "inline" }}
           onChange={(e)=>{
            
            setPhone(e.target.value);
           }}></input>
          <input
            className={
              "w-[75%] pl-3 ml-auto mr-auto h-[7vh]  rounded-md border border-slate-400 mb-[2%]"
            }
            placeholder="Something else"
            type="password"
            style={{ display: loginState == true ? "none" : "inline" }}
          ></input> */}
          
          <button type="submit"
           
            className="ml-auto mr-auto lg:w-[20%] w-[40%] text-lg bg-green-600 text-white p-3 rounded-md"
          >
            {loading == false ? (loginState == true ? "Login" : "Sign up") : ""}
            <div
              className="w-8 h-8 ml-auto mr-auto rounded-full border border-white border-b-blue-500 animate-spin"
              style={{ display: loading == true ? "block" : "none" }}
            ></div>
          </button>
         </form>
        </div>
        <div className="flex flex-col ml-auto mr-auto">
          <div
            className="ml-auto mr-auto dark:text-black"
            style={{ display: loginState == true ? "block" : "none" }}
          >
            Forgot password ?{" "}
            <Link href="/reset">
              <span className="text-blue-500">Reset password</span>
            </Link>
          </div>
          <div className="ml-auto mr-auto dark:text-black"> 
            {loginState == true ? "No Account ?" : "Already have an account ?"}
            <span
              className="text-blue-500  cursor-default"
              onClick={(e) => {
                setEmailError('');
              setPasswordError('');
              setGeneralError('');
                if (loginState == true) setLoginState(false);
                else setLoginState(true);
              }}
            >
              {" "}
              {loginState == true ? "Sign up" : "Login"}
            </span>
          </div>
         <div className="ml-[12.5%] text-red-500">{generalError}</div>
        </div>
      </div>
    </div>
  );
}
