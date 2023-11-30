
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import SingleSurvey from "./SingleSurvey";
import Navbar from "../../ShareComponets/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const AllSurveys = () => {

  

    // const {surveyCount}  = useLoaderData();
    const axiosPublic = useAxiosPublic()
    // const itemPerpage = 10;
    // const [currentPage,setCurrentPage] = useState(0)

    const [surveys,setSurveys] = useState(null)

    const [category,setCategory] = useState('')
    const [sorting,setSorting] = useState(null)
    
     

    useEffect(() => {
      axiosPublic
        .get(`/surveyes?category=${category}&sorting=${sorting}`)
        .then((result) => {
          setSurveys(result.data);
        });
    }, [category,axiosPublic,sorting]);


    
   
  //  const numberOfPage = Math.ceil(surveyCount / itemPerpage);
  //  const pages = [...Array(numberOfPage).keys()];


  //  const handlePrivies = () => {
  //   if(currentPage > 0){
  //       setCurrentPage(currentPage - 1)
        
  //   }
  //  }
   
  //  const handleNext = () => {
  //   if(currentPage < pages.length - 1){
  //       setCurrentPage(currentPage + 1)
        
  //   }
  //  }

   if(!surveys){
        return <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>;
   }

   
   
   const handleCategory = e =>{
    const value = e.target.value;
    setCategory(value)
   }

   const handleSorting = (e) => {
    const value = e.target.value;
     if(value === 'toptolow'){
      setSorting(-1)
    }else if(value === 'lowtotop'){
      setSorting(1)
    }else{
      setSorting('NaN')
    }
   }

    

    return (
      <>
      <Navbar></Navbar>
        <div className="py-8">
          <div className="flex gap-5">
            <div className="w-60">
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Filter Category
              </label>
              <select
                onChange={handleCategory}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="all">
                  All Category
                </option>
                <option value="food">Food</option>
                <option value="fitness">Fitness</option>
                <option value="music">Music</option>
                <option value="movies">movies</option>
                <option value="technology">Technology</option>
                <option value="travel">Travel</option>
              </select>
            </div>
            <div className="w-60">
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Sorting
              </label>
              <select onChange={handleSorting}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value={'alloption'}>Choose a option</option>
                <option value="toptolow">Vote Top To Low</option>
                <option value="lowtotop">Vote Low To Top</option>
                
              </select>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 py-8">
            {surveys?.map((survey) => (
              <SingleSurvey key={survey._id} survey={survey}></SingleSurvey>
            ))}
          </div>
          <div className="flex justify-center py-5">
            {/* <a
            // onClick={handlePrivies}
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
          </a> */}

            {/* {pages.map((page, index) => (
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
          ))} */}

            {/* <a
            // onClick={handleNext}
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
          </a> */}
          </div>
        </div>
        <Footer></Footer>
      </>
    );
};

export default AllSurveys;