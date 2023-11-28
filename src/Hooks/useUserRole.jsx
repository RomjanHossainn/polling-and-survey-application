
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
    const {user,loading} = useAuth()
    const axiosSercure = useAxiosSecure();
    
    const {data : userRole = {},isPending} = useQuery({
        queryKey : [user?.email,'userRole'],
        enabled : !loading,
        queryFn : async () => {
            const result = await axiosSercure.get(`/user/role?email=${user.email}`)
            return result.data;
        }
    })

    return [userRole,isPending]
    
};

export default useUserRole;