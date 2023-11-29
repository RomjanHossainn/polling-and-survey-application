import {
  useQuery,
} from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadAllSurvey = (currentPage,itemPerPage) => {

  

    const axiosPublic = useAxiosPublic()

    const {data : surveyes = [], isPending,refetch} = useQuery({
        queryKey : ['surveydata'],
        queryFn : async () => {
            const data = await axiosPublic.get(`/surveyes?page=${currentPage}&size=${itemPerPage}`);
            return data.data;
        }
    })

  return [surveyes,isPending,refetch];
};

export default useLoadAllSurvey;
