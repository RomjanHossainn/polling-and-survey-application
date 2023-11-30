import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useComments = (id) => {
    const axiosPublic = useAxiosPublic();
    const {data : comments = [],refetch} = useQuery({
        queryKey : ['comments'],
        queryFn : async () => {
            const result = await axiosPublic.get(`/comments/${id}`)
            return result.data;
        }
    })

    return [comments,refetch]
};

export default useComments;