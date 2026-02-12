import {signOut } from "firebase/auth";
import { useNavigate} from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";
//import lang  from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut =() => {
    signOut(auth).then(() => {
      

    }).catch((error) => {
            navigate("/error");
    });  

  }
  //This logic is for the user authentication
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );

      // ❗ navigate ONLY if not already on browse
      if (window.location.pathname !== "/browse") {
        navigate("/browse");
      }
    } else {
      dispatch(removeUser());

      // ❗ navigate ONLY if not already on home
      if (window.location.pathname !== "/") {
        navigate("/");
      }
    }
  });

  return () => unsubscribe();
}, [dispatch, navigate]);


const handleGPTSearchClick =() => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange =(e) =>{
    dispatch(changeLanguage(e.target.value));
  }


  return (
     <header className="absolute z-50 w-full">
  <div className="flex items-center justify-between px-6 py-4 w-full bg-gradient-to-t to-black  flex-col md:flex-row">
    
    {/* Left - Logo */}
    <img src={LOGO} alt="Netflix Logo" className="w-40" />

    {/* Right - Buttons */} 
    {user && (
      <div className="flex items-center gap-4">
        {showGptSearch && (<select className="p-2 m-2 bg-black text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.identifier} value={lang.identifier} >{lang.name}</option>))}
        </select>) }
        <button
          onClick={handleGPTSearchClick}
          className="px-3 py-2 bg-white text-black rounded"
        >
         {showGptSearch ? "HomePage" : "GPT Search"}
        </button>

        <img
          className="w-10 h-10 rounded-full"
          alt="usericon"
          src={user?.photoURL}
        />

        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-700 text-white rounded"
        >
          Sign out
        </button>
      </div>
    )}

  </div>
</header>

  )
}

export default Header;