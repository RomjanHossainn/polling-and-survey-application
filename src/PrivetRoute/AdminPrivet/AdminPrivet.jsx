import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";

const AdminPrivet = ({children}) => {
    const [{userRole},isPending] = useUserRole();
    const {user,loading} = useAuth()

    if(isPending || loading){
        return (
          <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>
        );
    }

    if(user && userRole === 'admin' || userRole === 'surveyor'){
        return children;
    }

    return <Navigate to="/"></Navigate>
};

export default AdminPrivet;