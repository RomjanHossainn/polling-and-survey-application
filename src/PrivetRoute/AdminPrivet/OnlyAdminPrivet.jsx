import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";

const OnlyAdminPrivet = ({children}) => {

    const {user,loading} = useAuth();
    const [{userRole}, isPending] = useUserRole();

    console.log(userRole)

    if(loading || isPending){
        return 'loading'
    }

    if (user && userRole === "admin") {
      return children;
    }


    return <Navigate to='/'></Navigate>
};

export default OnlyAdminPrivet;