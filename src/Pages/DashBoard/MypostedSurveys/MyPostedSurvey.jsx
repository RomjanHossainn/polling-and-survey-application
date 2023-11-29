import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Modal from "react-modal";
import { useState } from "react";
const MyPostedSurvey = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()

    const [feadback,setFeadback] = useState(null)
    const [userFeadback,setUserFeadback] = useState (null);
    
    const {data : mySurveys = [],isPending,refetch} = useQuery({
        queryKey : [user?.email,'postedSurvey'],
        queryFn : async() => {
            const result = await axiosSecure.get(`/mypostedsurvey?email=${user.email}`)
            return result.data;
            
        }
    })

    console.log(mySurveys)

    

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        width : '600px',
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };


    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    
    function closeModal() {
      setIsOpen(false);
    }


    const handleAdminFeadback = (id,email) => {
        axiosSecure.get(`/adminfeadback?id=${id}&email=${email}`)
        .then(res => {
            setFeadback(res.data)
            console.log(res.data)
        })

        axiosSecure.get(`/usersfeadback/?id=${id}&email=${user.email}`,)
        .then(res => {
            setUserFeadback(res.data)
        })
   
        

    }
    
    if(isPending){
      return (
        <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>
      );
    }

    return (
      <div>
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
              {mySurveys?.map((survey) => (
                <tr
                  key={survey._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {survey.title}
                  </th>
                  <td className="px-6 py-4">{survey.email}</td>
                  <td className="px-6 py-4">{survey.category}</td>
                  <td className="px-6 py-4">
                    <span
                      onClick={() =>
                        handleAdminFeadback(survey._id, survey.email)
                      }
                    >
                      <a
                        onClick={openModal}
                        href="#"
                        className={`font-medium px-3 py-2 rounded-md ${
                          survey.status === "unpublish"
                            ? "bg-red-500"
                            : "bg-green-600"
                        }  text-white hover:underline`}
                      >
                        {survey.status === "unpublish"
                          ? "Unpublished click FeedBack"
                          : survey.status}
                      </a>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {feadback ? (
              <h2 className="text-red-500 mb-4">Admin FeadBack Message</h2>
            ) : (
              <h2>User FeadBack</h2>
            )}
            {feadback ? (
              <div>
                <p>--{feadback?.feedBackMessage}</p>
                <h5 className="mt-3">category : {feadback?.category}</h5>
                <h5>title : {feadback?.title}</h5>
                <h5>email : {feadback?.email}</h5>
              </div>
            ) : (
              <>
                <table className="table-auto table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>impretion</th>
                      <th>time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{userFeadback?.user}</td>
                      <td>{userFeadback?.userId}</td>
                      <td>{userFeadback?.impretion}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}

            <form>
              <button
                onClick={closeModal}
                className="text-end mt-3 bg-red-400 text-white px-4 rounded-md py-1"
              >
                Close
              </button>
            </form>
          </Modal>
        </div>
      </div>
    );
};

export default MyPostedSurvey;