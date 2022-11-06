import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser, setLoggedIn } from "../state/cartSlice";
import { getCookie,setCookie } from "cookies-next";
import store from "../state/store";
// function attemptLogin(email,password)
// {
//     let dispatch = useDispatch();
//    let body = {email:email,password_hash:password}
//    let xhr = new XMLHttpRequest();
//    xhr.open('post','http://localhost:23000/login');
//    xhr.onerror((e)=>{})
//    xhr.onloadend(()=>{
//     dispatch(setUser(JSON.stringify(xhr.responseText)))
//    })
//    xhr.send(JSON.stringify(body));

// }
function attempSignUp(email, password, phone) {
  let dispatch = useDispatch();
  let body = { email: email, password_hash: password };
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:23000/accounts/create");
  xhr.onerror((e) => {});
  xhr.onloadend(() => {
    dispatch(setUser(JSON.stringify(xhr.responseText)));
  });
  xhr.send(JSON.stringify(body));
}
export default function Login(props) {
  let dispatch = useDispatch();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loginState, setLoginState] = useState(true);
  let [loading, setLoading] = useState(false);
  let [passwordError, setPasswordError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [generalError, setGeneralError] = useState("");
 
  let [userId, setUserId] = useState("");
  let [token, setTokenString] = useState("");
  let router = useRouter();
  store.subscribe(() => {
    setUserId(store.getState().cart.user);
    setTokenString(store.getState().cart.token);
  });
  let attemptLogin = (email, password) => {
    const data = { email: email, password_hash: password };
    //    console.log(JSON.stringify(data));
    //    console.log(email + ' : '  + password)
    fetch("http://localhost:23000/login", {
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
            setLoading(false);
            setCookie('topshop_userId',data.userId);
            setCookie('topshop_token',data.token);
            console.log(data);
            router.replace("/");
        }
        else if(data.error == 2)
        {
         setPasswordError('Wrong password try again');
         setEmailError('');
         setGeneralError('')
        }
        else if(data.error == 4)
        {
         setEmailError('No account matches this email please sign up');
         setPasswordError('');
         setGeneralError('')
        }
      })
      .catch((err) => {
        setGeneralError(err);
        setEmailError('');
        setPasswordError('');

        console.log("error : " + err);
      });

    // const data = { email: email,password_hash:password };

    // fetch('http://localhost:23000/login', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });

    setLoading(true);
  };
  let t = getCookie('topshop_userId');
  let u = getCookie('topshop_token');
  if(t != undefined && u != undefined)
  {
    window.confirm('You are already logged in log out then try again');
    router.replace('/');
  }
  return (
    <div
      className="relative w-full h-full flex bg-[f1f1f1]"
      style={{ transition: "all 0.8s ease" }}
    >
      <div className="absolute border border-slate-600 rounded-lg shadow-lg top-[50%] left-[50%] translate-x-[-50%] mt-[5%] w-[40%] bg-white">
        <div
          className="flex flex-col gap-6 h-fit  mt-[3%]"
          style={{ transition: "height 0.8s ease" }}
        >
          <div className="text-4xl font-semibold font-sans ml-auto mr-auto mb-[2%]">
            {loginState == true ? "Login" : "Sign up"}
          </div>
          <input
            className=" w-[75%] pl-3 ml-auto mr-auto h-[7vh]  rounded-md border border-slate-400 mb-[2%]"
            placeholder="Email"
            type="email"
            onChange={(e) => {
             
              setEmail(e.target.value);
            }}
          ></input>
           <div className="text-red-600 ml-[12.5%]">{emailError}</div>

          <input
            className=" w-[75%] pl-3 ml-auto mr-auto h-[7vh]  rounded-md border border-slate-400 mb-[2%]"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            
            }}
          ></input>
           <div className="text-red-600 ml-[12.5%]">{passwordError}</div>
          <input
            className={
              "w-[75%] pl-3 ml-auto  mr-auto h-[7vh] rounded-md border border-slate-400 mb-[2%]"
            }
            placeholder="Phone number"
            type="password"
            style={{ display: loginState == true ? "none" : "inline" }}
          ></input>
          <input
            className={
              "w-[75%] pl-3 ml-auto mr-auto h-[7vh]  rounded-md border border-slate-400 mb-[2%]"
            }
            placeholder="Something else"
            type="password"
            style={{ display: loginState == true ? "none" : "inline" }}
          ></input>
          
          <button
            onClick={(e) => {
            //   console.log("email : " + email + "," + "password : " + password);
            
            if(email.match(new RegExp('(a-zA-Z0-9)*@([a-z])+\.([a-z])+')) ==  null )
            {
                setEmailError('Invalid email');
                setGeneralError('');
                setPasswordError('');
                return;
            }
              attemptLogin(email, password);
              setEmailError('');
              setPasswordError('');
              setGeneralError('');
            }}
            className="ml-auto mr-auto w-[20%] text-lg bg-green-600 text-white p-3 rounded-md"
          >
            {loading == false ? (loginState == true ? "Login" : "Sign up") : ""}
            <div
              className="w-8 h-8 ml-auto mr-auto rounded-full border border-white border-b-blue-500 animate-spin"
              style={{ display: loading == true ? "block" : "none" }}
            ></div>
          </button>
        </div>
        <div className="flex flex-col">
          <div
            className="ml-auto mr-auto"
            style={{ display: loginState == true ? "block" : "none" }}
          >
            Forgot password ?{" "}
            <Link href="/reset">
              <span className="text-blue-500">Reset password</span>
            </Link>
          </div>
          <div className="ml-auto mr-auto">
            {loginState == true ? "No Account ?" : "Already have an account ?"}
            <span
              className="text-blue-500 cursor-default"
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
