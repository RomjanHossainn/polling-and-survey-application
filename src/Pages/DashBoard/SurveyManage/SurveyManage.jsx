
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useLoadAllSurvey from "../../../Hooks/useLoadAllSurvey";

const SurveyManage = () => {

    const [manageSurveys,isPending,refetch] = useLoadAllSurvey();
    const axiosSecure = useAxiosSecure()
    
    console.log(manageSurveys)

    // const [data : manageSurveyes = []] = useQuery({
    //     queryKey : ['managesSurveysData'],
    //     queryFn : async() => {
    //         const result = await axiosSecure.get('/manage')
    //     }
    // })


    const handleUnPublish = (_id,title,email,surveyCategory)=> {

      Swal.fire({
        title: "Why do you want to unpublish this response? give feedback?",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result.value);
          axiosSecure.patch(`/surveystatus/${_id}`).then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
            }

            const badReviewMessage = {
              title: title,
              email: email,
              category: surveyCategory,
              surveyId: _id,
              feedBackMessage: result.value,
            };

            axiosSecure
              .post("/admin/feedback/message", badReviewMessage)
              .then((res) => {
                console.log(res.data);
              });
          });
        }
      });
      
        
    }

    if(isPending){
      return (
        <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>
      );
    }

    
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Survey Ttile
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {manageSurveys?.map((survey) => (
              <tr key={survey._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {survey.title}
                </th>
                <td className="px-6 py-4">{survey.email}</td>
                <td className="px-6 py-4">{survey.category}</td>
                <td className="px-6 py-4">
                  <a onClick={() => handleUnPublish(survey._id,survey.title,survey.email,survey.category)}
                    href="#"
                    className="font-medium px-3 py-2 rounded-md bg-green-600 text-white hover:underline"
                  >
                    Unpublish
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default SurveyManage;