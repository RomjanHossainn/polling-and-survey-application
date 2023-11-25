
import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Home/Login/Login";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AllSurveys from "../Pages/Surveys/AllSurveys";
import SurveyDetails from "../Pages/Surveys/SurveyDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/surveyspage",
        element: <AllSurveys></AllSurveys>,
        loader: () => fetch("http://localhost:5000/surveyCount"),
      },
      {
        path : '/details/:id',
        element : <SurveyDetails></SurveyDetails>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
  },
]);

export default router;