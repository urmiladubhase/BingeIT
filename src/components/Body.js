
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Browse from '../components/Browse';
import { useDispatch } from 'react-redux';
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect} from 'react';



const Body = () => { 
const dispatch =useDispatch();
  
const appRouter = createBrowserRouter([
  {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        },
    ]);

    useEffect(() => { 
     onAuthStateChanged(auth,(user) => { 
  if (user) {
    const {uid, email,displayName} = user;
    dispatch(addUser({
      uid:uid,
      email:email, 
      displayName: displayName}));
    
  } else {
    dispatch(removeUser());
 
  }
});
});
    
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
 