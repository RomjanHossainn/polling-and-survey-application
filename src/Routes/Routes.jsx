
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
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";
import AdminPrivet from "../PrivetRoute/AdminPrivet/AdminPrivet";
import CreateSurvey from "../Pages/DashBoard/CreateSurvey/CreateSurvey";
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
        element: (
          <PrivetRoute>
            <AllSurveys></AllSurveys>
          </PrivetRoute>
        ),
        loader: () => fetch("http://localhost:5000/surveyCount"),
      },
      {
        path: "/details/:id",
        element: <SurveyDetails></SurveyDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard",
        element: <h1>HOME</h1>,
      },
      {
        path: "/dashboard/manageusers",
        element: (
          <AdminPrivet>
            <ManageUser></ManageUser>
          </AdminPrivet>
        ),
      },
      {
        path: "/dashboard/createsurvey",
        element: (
          <AdminPrivet>
            <CreateSurvey></CreateSurvey>
          </AdminPrivet>
        ),
      },
    ],
  },
]);

export default router;