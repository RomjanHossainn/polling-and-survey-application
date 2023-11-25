import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadAllSurvey = () => {

    const axiosPublic = useAxiosPublic()

    const {data : surveyes = [], isPending} = useQuery({
        queryKey : ['surveydata'],
        queryFn : async () => {
            const data = await axiosPublic.get('/surveyes');
            return data.data;
        }
    })

  return [surveyes,isPending];
};

export default useLoadAllSurvey;
