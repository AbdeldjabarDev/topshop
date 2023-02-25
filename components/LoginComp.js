import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser, setLoggedIn } from "../state/cartSlice";
import { setCookie } from "cookies-next";
import CryptoJS from "crypto-js";

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
  let [submitState, setSubmitState] = useState(false);
  let router = useRouter();
  // store.subscribe(() => {
  //   setUser(store.getState().cart.user);
  //   setTokenString(store.getState().cart.token);
  // });
  let attempSignUp = (email, password, phone) => {
    let b = { email: email, password_hash: password, phone: phone };
    console.log("sign up info : " + b.password_hash);
    fetch("https://topshopserver.onrender.com/accounts/create", {
      method: "POST",
      body: JSON.stringify(b),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((e) => e.json)
      .then((data) => {
        if (data.error == 0) {
          setLoading(false);

          dispatch(setUser(data.userId));
          dispatch(setToken(data.token));
          dispatch(setLoggedIn(true));
          router.replace("/");
          setSubmitState(false);
        } else if (data.error == 2) {
          setLoading(false);
          setSubmitState(false);

          setPasswordError("");
          setEmailError("");
          setGeneralError(
            "Something went wrong while creating your account please try again later"
          );
        }
      })
      .catch((e) => {
        setLoading(false);
        setSubmitState(false);

        setGeneralError(e.toString());
      });
    setLoading(true);
    setSubmitState(true);
  };
  let attemptLogin = (email, password) => {
    const data = {
      email: email,
      password_hash: CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex),
    };
    fetch("https://topshopserver.onrender.com/accounts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error == 0) {
          dispatch(setUser(data.userId));
          dispatch(setToken(data.token));
          dispatch(setLoggedIn(true));
          setCookie("topshop_userId", data.userId);
          setCookie("topshop_token", data.token);
          setCookie("topshop_lastlogin", data.last_login);
          setCookie("topshop_email", email);
          console.log(data);
          router.replace("/");
          setLoading(false);
        } else if (data.error == 2) {
          setPasswordError("Wrong email or password try again");
          setEmailError("");
          setGeneralError("");
          setLoading(false);
        } else if (data.error == 4) {
          setEmailError("No account matches this email please sign up");
          setPasswordError("");
          setGeneralError("");
          setLoading(false);
        }
      })
      .catch((err) => {
        setGeneralError("Ooops Something went wrong try again !");
        setEmailError("");
        setPasswordError("");
        setLoading(false);
        console.log("error : " + err);
        setSubmitState(false);
      });
    setLoading(true);
    setSubmitState(true);
  };
  // let t = getCookie('topshop_userId');
  // let u = getCookie('topshop_token');
  // if(t != undefined && u != undefined)
  // {
  //   window.confirm('You are already logged in log out then try again');
  //   router.replace('/');
  // }
  return (
    <div className="border ml-auto pb-5 mr-auto  mb-[5%]  shadow-lg mt-[25%] lg:mt-[10%] md:w-[70%] lg:w-[40%] w-[100%] bg-white">
      <div className="fixed top-0 left-0 shadow-md h-[70px] w-full flex bg-white">
        <img
          className="w-14 h-14 ml-10 mr-10 self-center"
          src="/images/logo.svg"
          onClick={(e) => router.replace("/")}
        ></img>
        <div
          className="w-[85px] pt-2 pl-3 cursor-default h-[50px] text-lg self-center mr-10 ml-auto rounded-md bg-green-600 text-white"
          onClick={(e) => {
            setLoginState(!loginState);
            setGeneralError('');
          }}
        >
          {loginState == true ? "Sign Up" : "Sign In"}
        </div>
      </div>
      <div
        className="flex flex-col gap-10 h-fit  mt-[3%]"
        style={{ transition: "height 0.8s ease" }}
      >
        <div className="text-3xl text-black  font-sans ml-auto mr-auto mb-[2%]">
          {loginState == true ? "Sign In" : "Sign up"}
        </div>
        <form
          className="flex flex-col gap-5 md:gap-4 pb-3 w-full ml-auto mr-auto"
          onSubmit={(e) => {
            e.preventDefault();
          
            if (loginState == true) {
              attemptLogin(email, password);
              setEmailError("");
              setPasswordError("");
              setGeneralError("");
            } else {
              attempSignUp(email, password);
              setEmailError("");
              setPasswordError("");
              setGeneralError("");
            }
          
          }}
        >
          <input
            className="md:w-[80%] w-[90%]  lg:w-[90%] lg:max-w-[550px] pl-3 ml-auto mr-auto p-4  rounded-md border border-slate-400 mb-[2%]"
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <div className="text-red-600 ml-[12.5%]">{emailError}</div>
          <input
            className="md:w-[80%] w-[90%]  lg:w-[90%] lg:max-w-[550px]  pl-3 ml-auto mr-auto p-4  rounded-md border border-slate-400 mb-[2%]"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <input
            className={
              "md:w-[80%] w-[90%] lg:w-[90%] lg:max-w-[550px]  pl-3 ml-auto mr-auto p-4 rounded-md border border-slate-400 mb-[2%]"
            }
            placeholder="Confirm Password"
            type="password"
            style={{ display: loginState == true ? "none" : "inline" }}
            onChange={(e) => {
              if (e.target.value != password) {
                setPasswordError("Passwords don't match");
              }
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
          <div
            className="w-full text-black flex content-center pl-[5%] pr-2  transition-none"
            style={{
              height: generalError != "" ? "70px" : "0px",
              background:
                generalError != "" ? "rgba(220,38,38,0.2)" : "transparent",
              borderLeft:
                generalError != "" ? "4px solid rgb(220 38 38)" : "none",
            }}
          >
            <img
              className="w-9 h-9 mr-3 self-center"
              style={{opacity:generalError != '' ? '1':'0',transition:'none'}}
              src="/images/warn.svg"
            ></img>
            <span className=" mt-5">{generalError}</span>
          </div>

          <button
            type="submit"
            disabled={submitState}
            className="ml-auto mr-auto lg:w-[22%] md:w-[28%] w-fit pl-4 pr-4 pt-2 pb-2 text-lg disabled:bg-green-100 bg-green-600 text-white p-3 rounded-md"
          >
            {loading == false
              ? loginState == true
                ? "Sign In"
                : "Sign up"
              : ""}
            <div
              className="w-8 h-8 ml-auto mr-auto rounded-full border border-white border-b-blue-500 animate-spin"
              style={{ display: loading === true ? "block" : "none" }}
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
            <span className="text-blue-500 cursor-default">Reset password</span>
          </Link>
        </div>
        <div className="ml-auto mr-auto dark:text-black">
          {loginState == true ? "No Account ?" : "Already have an account ?"}
          <span
            className="text-blue-500  cursor-default"
            onClick={(e) => {
              setEmailError("");
              setPasswordError("");
              setGeneralError("");
             setLoginState(!loginState)
            }}
          >
            {" "}
            {loginState == true ? "Sign up" : "Sign In"}
          </span>
        </div>
      </div>
    </div>
  );
}
