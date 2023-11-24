
import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
               path : '/',
               element : <Home></Home> 
            },
            {
                path : '/register',
                element : <Register></Register>
            }
        ],
    }
])

export default router;