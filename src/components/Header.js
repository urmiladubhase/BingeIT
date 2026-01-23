import {signOut } from "firebase/auth";
import { useNavigate} from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect} from 'react';
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();


  const handleSignOut =() => {
    signOut(auth).then(() => {
      

    }).catch((error) => {
            navigate("/error");
    });  

  }
  //This logic is for the user authentication
    useEffect(() => { 
    const unsubscribe = onAuthStateChanged(auth,(user) => { 
  if (user) {
    const {uid, email,displayName} = user;
    dispatch(addUser({
      uid:uid,
      email:email, 
      displayName: displayName
    }
    ));
    navigate("/browse");
    
  } else {
    dispatch(removeUser());
    navigate("/");
 
  }
});
return () => unsubscribe();
},[dispatch, navigate]);
  return (
<header>
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
   <div className="absolute flex justify-between p-4 w-full items-center">
    <div className="w-40">
    <img src={LOGO} alt="Netflix Logo" />  
    </div>
    <div className="">
    <button onClick={handleSignOut} className= " p-2 my-2 bg-red-700 text-white w-full rounded">Sign out  </button>
    </div>
    </div>
    </header>
  )
}

    //<img src="https://play-lh.googleusercontent.com/j6vz-GIwLT1yRnspp3-x3usIn6cQPeQRTj8Lz_M9NQcEjg89B_xDSdr2drbwWdq0-XI=w480-h960-rw" alt="BingeIT Logo" className="w-20 h-20"/>
 

export default Header;