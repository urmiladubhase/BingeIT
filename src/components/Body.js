
import { RouterProvider, useNavigate } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Browse from '../components/Browse';
import { useDispatch } from 'react-redux';

const Body = () => { 


// Routing of the pages
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

    
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
 