
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
import SurveyManage from "../Pages/DashBoard/SurveyManage/SurveyManage";
import OnlyAdminPrivet from "../PrivetRoute/AdminPrivet/OnlyAdminPrivet";
import MyPostedSurvey from "../Pages/DashBoard/MypostedSurveys/MyPostedSurvey";
import PricingPage from "../Pages/PricingPage/PricingPage";
import UpdateSurvey from "../Pages/DashBoard/UpdateSurvey/UpdateSurvey";
import Comments from "../components/Commnents/Comments";
import Erorrpage from "../ShareComponets/Erorrpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Erorrpage></Erorrpage>,
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
        path: "/pricingpage",
        element: <PricingPage></PricingPage>,
      },
      {
        path: "/surveyspage",
        element: (
          <PrivetRoute>
            <AllSurveys></AllSurveys>
          </PrivetRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <SurveyDetails></SurveyDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/seecommnets/:id",
        element : <Comments></Comments>
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement : <Erorrpage></Erorrpage>,
    element: (
      <AdminPrivet>
        <DashBoard></DashBoard>
      </AdminPrivet>
    ),
    children: [
      
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
          // <AdminPrivet>
          <CreateSurvey></CreateSurvey>
          // </AdminPrivet>
        ),
      },
      {
        path: "/dashboard/managesurveyes",
        element: (
          <OnlyAdminPrivet>
            <SurveyManage></SurveyManage>
          </OnlyAdminPrivet>
        ),
      },
      {
        path: "/dashboard/mypostedsurvey",
        element: (
          <AdminPrivet>
            <MyPostedSurvey></MyPostedSurvey>
          </AdminPrivet>
        ),
      },
      {
        path: "/dashboard/mypostedsurvey/update/:id",
        element: <UpdateSurvey></UpdateSurvey>,
      },
    ],
  },
]);

export default router;