import { useParams } from "react-router-dom";

const SurveyDetails = () => {

    const {id} = useParams();
    

    return (
        <div>
            <h1>details</h1>
        </div>
    );
};

export default SurveyDetails;