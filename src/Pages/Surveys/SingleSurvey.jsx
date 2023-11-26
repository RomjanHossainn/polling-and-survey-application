// import { useState } from "react";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { Link } from "react-router-dom";
const SingleSurvey = ({survey}) => {

    // const {user} = useAuth()
    // const axiosPublic = useAxiosPublic()

    const {category,description,dislikeCount,likeCount,title,vote,_id} = survey || {}

    

    return (
      <Link to={`/details/${_id}`}>
        <div className="cursor-pointer">
          <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
            Category__{category}
          </span>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
            {title}
          </h2>
          <p className="leading-relaxed mb-8">{description}</p>
          
          <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <AiFillLike className="text-2xl" />
                <span>{likeCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <BiSolidDislike className="text-2xl" />
                <span>{dislikeCount}</span>
              </div>
            </div>
            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <p>{`Total Vote  = ${vote}`}</p>
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </Link>
    );
};

export default SingleSurvey;