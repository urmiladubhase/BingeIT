import { useDispatch } from 'react-redux';
import {  Outlet, useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect , useRef} from 'react';

const AppLayout = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
    const hasNavigated = useRef(false); // navigation throttle


  useEffect(() => { 
      const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email,displayName} = user;
    dispatch(addUser({uid:uid,email:email, displayName: displayName}));
    
    
        if (!hasNavigated.current) {
          hasNavigated.current = true;
          navigate("/browse", { replace: true });
        }  
  } else {
    dispatch(removeUser());
    hasNavigated.current = false;
    navigate("/", { replace: true }); 

  }
});

    return () => unsubscribe(); // ✅ cleanup
    },[dispatch, navigate]);
    return <Outlet/>
}
export default AppLayout;