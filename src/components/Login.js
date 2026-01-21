
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validation";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
//This is the logic for the use same form as for sign in and sign up as to save time and logic is used as if else
const [isSignIn, setIsSignIn] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);  
const navigate = useNavigate();


//To get the data to be validated we use us this hook
const email = useRef(null);
const password = useRef(null);
const name = useRef(null);

const handleButtonClick = () => {
  //Used below functionto validate the data
  
  const message = checkValidData(email.current.value, password.current.value);

  setErrorMessage(message);
  if (message)return;
  // SignUP  or SignIn Logic
  if(!isSignIn){
    // Sign UP logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL: ""
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
    console.log(user);
    navigate("/");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage (errorCode, errorMessage);
    });

  }
  else{
    // Sign UP logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage (errorCode, errorMessage);

  });
  }
}
//Create the Sign In and SignUp form in one form 
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);  //toggle between two forms sign in and sign up
  }

  return (
    <div>  
      <Header />

      {/* Background Image */}
      <div className=" fixed inset-0 w-full h-screen -z-20"> 
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg" 
        alt="BG"  />
      </div>
      
      {/* Login Form */}
        <form onSubmit={(e)=>e.preventDefault()} className="w-4/12 absolute p-10 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 h-auto" >
          <h1 className="text-white text-2xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          { !isSignIn && (<input type="text" placeholder="First Name Last Name" className="p-3 my-2 rounded w-full bg-black bg-opacity-60 border border-gray-700 text-white"/>) }

          <input ref={email} type="email" placeholder="Email Address/phone number" className="p-3 my-2 rounded w-full bg-black bg-opacity-60 border border-gray-700 text-white"/>
          <input ref={password} type="password" placeholder="Password" className="p-3 my-2 rounded w-full  bg-black bg-opacity-60 border border-gray-700 text-white"/>
          <p className="text-red-600">{errorMessage}</p>
          <button type="submit" className="p-3 my-2 bg-red-700 text-white w-full rounded" onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
          
          {isSignIn && (<><p className="text-white text-center">OR</p>
          <button className="p-3 my-2  bg-gray-600 bg-opacity-60 text-white w-full rounded">Sign In with code</button></>)}
          <p className="text-white " onClick={toggleSignIn} >New to Netflix? <span className="text-bold">Sign up now. </span></p>
        </form>

      </div>
  )
}

export default Login;
