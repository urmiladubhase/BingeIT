import Header from "./Header";
import { useState } from "react";

const Login = () => {
//This is the logic for the use same form as for sign in and sign up as to save time and logic is used as if else
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {

    setIsSignIn(!isSignIn);//toggle between two forms sign in and sign up


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
        <form className="w-4/12 absolute p-2 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 h-auto" >
          <h1 className="text-white text-2xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          { !isSignIn && (<input type="text" placeholder="First Name Last Name" className="p-3 my-2 rounded w-full bg-black bg-opacity-60 border border-gray-700"/>) }

          <input type="text" placeholder="Email Address/phone number" className="p-3 my-2 rounded w-full bg-black bg-opacity-60 border border-gray-700"/>
          <input type="text" placeholder="Password" className="p-3 my-2 rounded w-full  bg-black bg-opacity-60 border border-gray-700"/>
          <button type="submit" className="p-3 my-2 bg-red-700 text-white w-full rounded">{isSignIn ? "Sign In" : "Sign Up"}</button>
          
          {isSignIn && (<><p className="text-white text-center">OR</p>
          <button className="p-3 my-2  bg-gray-600 bg-opacity-60 text-white w-full rounded">Sign In with code</button></>)}
        

          <p className="text-white " onClick={toggleSignIn} >New to Netflix? <span className="text-bold">Sign up now. </span></p>
        </form>

       
      </div>
  )
}

export default Login;