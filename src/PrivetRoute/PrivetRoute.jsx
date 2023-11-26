import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoute = ({children}) => {

    const location = useLocation()

    const {user,loading} = useAuth();
    if(loading){
        return (
          <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>
        );
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;