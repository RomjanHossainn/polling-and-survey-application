import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../ShareComponets/SectionTtile/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SingleSurvey from "../../Pages/Surveys/SingleSurvey";
import useAuth from "../../Hooks/useAuth";

const MostVoted = () => {

  const axiosPublic = useAxiosPublic();

  const {data : mostVoteSurvey= [],isPending,refetch} = useQuery({
    queryKey : ['topVote6survey'],
    queryFn : async () => {
      const result = await axiosPublic.get('/mostvotesurvey')
      return result.data;
    }
  })

  const user = useAuth();
  console.log(user.user)

  if(isPending){
    return (
      <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>
    );
  }

  const date = new Date();
  console.log(date.getDate(),date.getFullYear(),date.getMonth())


    return (
      <div>
        <div className="py-6">
          <SectionTitle title={"Featured Surveys"}></SectionTitle>
          <p className="text-center">
            Here are the polls with the most votes . You can participate  if you
            want <br /> . polls with the most votes{" "}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {mostVoteSurvey?.map((survey) => (
            <SingleSurvey key={survey._id} survey={survey}></SingleSurvey>
          ))}
        </div>
      </div>
    );
};

export default MostVoted;