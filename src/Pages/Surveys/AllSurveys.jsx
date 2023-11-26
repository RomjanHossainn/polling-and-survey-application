import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import SingleSurvey from "./SingleSurvey";

const AllSurveys = () => {


    const {surveyCount}  = useLoaderData();
    const axiosPublic = useAxiosPublic()
    const itemPerpage = 10;
    const [currentPage,setCurrentPage] = useState(0)

    const [surveys,setSurveys] = useState(null)



    useEffect(() => {
        setSurveys(null)
        axiosPublic.get(
          `/surveyes?page=${currentPage}&size=${itemPerpage}`
        )
        .then(result => {
            setSurveys(result.data)
        })
    },[currentPage,axiosPublic])

   
   const numberOfPage = Math.ceil(surveyCount / itemPerpage);
   const pages = [...Array(numberOfPage).keys()];


   const handlePrivies = () => {
    if(currentPage > 0){
        setCurrentPage(currentPage - 1)
        
    }
   }
   
   const handleNext = () => {
    if(currentPage < pages.length - 1){
        setCurrentPage(currentPage + 1)
        
    }
   }

   if(!surveys){
        return <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>;
   }



    return (
      <div>
        <div className="grid md:grid-cols-2 gap-12 py-8">
          {surveys?.map((survey) => (
            <SingleSurvey key={survey._id} survey={survey}></SingleSurvey>
          ))}
        </div>
        <div className="flex justify-center py-5">
          <a
            onClick={handlePrivies}
            href="#"
            className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-blue-500 hover:text-white  dark:bg-gray-800 dark:text-gray-600"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>

              <span className="mx-1">previous</span>
            </div>
          </a>

          
            {pages.map((page, index) => (
              <a
                key={index}
                href="#"
                onClick={() => setCurrentPage(page)}
                className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform  rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                  currentPage === page && "bg-blue-500 text-white"
                }`}
              >
                {page}
              </a>
            ))}
          

          <a
            onClick={handleNext}
            href="#"
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    );
};

export default AllSurveys;