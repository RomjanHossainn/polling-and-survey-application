import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SingleSurvey from "../../Pages/Surveys/SingleSurvey";
import SectionTitle from "../../ShareComponets/SectionTtile/SectionTitle";

const RecentCreatedSurvey = () => {

    const axiosPublic = useAxiosPublic()

    const {data : recentCreatedSurvey = []} = useQuery({
        queryKey : ['resencreatesurveydata'],
        queryFn : async() => {
            const data = await axiosPublic.get('/recentcreatesurvey')
            return data.data;
        }
    })

   
    return (
      <div>
        <div className="py-12">
          <SectionTitle title={"Latest Surveys Section "}></SectionTitle>
          <p className="text-center">Here are some recently published surveys you can participate in</p>
        </div>
        <div className="grid md:grid-cols-2  gap-6">
          {recentCreatedSurvey?.map((survey) => (
            <SingleSurvey key={survey._id} survey={survey}></SingleSurvey>
          ))}
        </div>
      </div>
    );
};

export default RecentCreatedSurvey;