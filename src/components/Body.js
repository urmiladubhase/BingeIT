
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Browse from '../components/Browse';
import AppLayout from "../utils/appLayout";



const Body = () => { 

  
const appRouter = createBrowserRouter([
  {
  
  element: <AppLayout/>,
  children: [{
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        },]
    
        
      }
    ]);
    
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
 