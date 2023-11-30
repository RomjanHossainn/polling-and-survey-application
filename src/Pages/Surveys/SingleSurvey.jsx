// import { useState } from "react";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineHowToVote } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
const SingleSurvey = ({survey}) => {

    // const {user} = useAuth()
    // const axiosPublic = useAxiosPublic()

    const {category,description,dislikeCount,timestamp,likeCount,title,vote,_id} = survey || {}

  

    return (
      <Link
        to={`/details/${_id}`}
        className="bg-[#F0F2F5] px-5 py-8 rounded-md"
      >
        <div className="cursor-pointer ">
          <div className="flex justify-between">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-md font-medium tracking-widest">
              Category__{category}
            </span>
            <span>{`Leatest _${timestamp.slice(0,10)}`}</span>
          </div>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
            {title}
          </h2>
          <p className="leading-relaxed mb-8">{description}</p>

          <div className="flex items-center flex-wrap  border-gray-100 mt-auto w-full justify-between">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <AiFillLike className="text-2xl" />
                <p>Like</p>
                <span>{likeCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <BiSolidDislike className="text-2xl" />
                <p>Dislike</p>
                <span>{dislikeCount}</span>
              </div>
              <div className="flex items-center py-2 gap-2 border px-3 ">
                <MdOutlineHowToVote className="text-2xl" />
                <p>Total Vote </p>
                <p className="text-[#4D7EE9]">{vote}</p>
              </div>
            </div>
            <div className="flex items-center bg-[#4D7EE9] rounded-md px-3 py-2">
              <span className="text-white mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                Comments
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm gap-3">
                <FaRegComment className="text-lg text-white" />
                <p className="text-md text-white">6</p>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default SingleSurvey;