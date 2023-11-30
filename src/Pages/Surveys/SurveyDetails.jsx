import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcSurvey } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Swal from "sweetalert2";
import Navbar from "../../ShareComponets/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const SurveyDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  
 
  // const [value,setValue] = useState('')

  const userId = user?.providerData[0].uid;

  const {
    data: survey = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["surveyinfo"],
    queryFn: async () => {
      const data = await axiosPublic.get(`/surveyedetails/${id}`);
      return data.data;
    },
  });

  const { category, timestamp, email, description, dislikeCount, likeCount, title, vote, _id } =
    survey || {};

  if (isPending) {
    return (
      <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>
    );
  }



  

  const handleVote = () => {

    const voteCheck = {
      userId,
      surveyId: _id,
      impretion: "vote",
      email: email,
      user: user?.displayName,
      vote: vote,
    };

    axiosPublic.post("/voteduser",voteCheck)
    .then(res => {
      if(res.data.message === 'AlreadyExist'){
       Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "All Ready Voted !",
       });
      }
    })

    axiosPublic.patch(`/vote?id=${_id}`,voteCheck).then((result) => {
      if (result.data.modifiedCount > 0) {
        console.log(result)
        refetch();
      }
    });
  };




  // const handleRadioValue = (e) => {
  //   e.preventDefault();

  //   const answer = {
  //     email: user?.email,
  //     ans: value,
  //   };

  //   axiosPublic.post("/answer", answer).then((res) => {
  //     console.log(res.data);
  //   });
  // };

  

    const handleLike = () => {

      const voteCheck = {
        userId,
        surveyId: _id,
        impretion: "like",
        email: email,
        user: user?.displayName,
        
      };


      axiosPublic.post("/voteduser", voteCheck).then((res) => {
        if (res.data.message === "AlreadyExist") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All Ready Liked !",
          });
        }
      });

    
      axiosPublic
        .patch(`/likeincreement?id=${_id}`,voteCheck)
        .then((result) => {
          if (result.data.modifiedCount > 0) {
            refetch();
            
          }
        });
     
    };

    const handleDisLike = () => {

      const voteCheck = {
        userId,
        surveyId: _id,
        impretion: "dislike",
        email: email,
        user: user?.displayName,
        
      };

      axiosPublic.post("/voteduser", voteCheck).then((res) => {
        if (res.data.message === "AlreadyExist") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All Ready Disliked !",
          });
        }
      });


      axiosPublic.patch(`/dislike?id=${_id}`,voteCheck).then((result) => {
       if(result.data.modifiedCount > 0){
        refetch()
       
       }
      });
      
    };


    const handleComment = (e) => {
      e.preventDefault()
      const comments = e.target.comment.value;

      const commentInfo = {
        comment : comments,
        email : email,
        userEmail : user?.email
      }

      axiosSecure.post('/comments',commentInfo)
      .then(res => {
        console.log(res.data)
      })

    }
    

   

    const data = [
      {
        name: "vote",
        value: vote,
      },
      {
        name: "like",
        value: likeCount,
      },
      {
        name: "dislike",
        value: dislikeCount,
      },
      {
        name: "timestamp",
        value : timestamp
      },
    ];

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#F0F2F5] my-5 max-w-4xl rounded-md mx-auto">
        <div className="p-12 mx-auto max-w-3xl mt-12">
          <div className="md:flex items-center justify-between">
            <div>
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                {category}
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                {title}
              </h2>
              <p className="leading-relaxed mb-8">{description}</p>
            </div>
            <div>
              <FcSurvey className="text-[200px]  mb-8 md:-mb-8" />
            </div>
          </div>
          <div>
            <form>
              <div className="flex items-center mb-2 gap-2">
                <label htmlFor="yes">Yes</label>
                <input
                  type="radio"
                  name="yes"
                  value="yes"
                  className="radio radio-primary"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="yes">No</label>
                <input
                  type="radio"
                  name="yes"
                  value="no"
                  className="radio radio-primary ms-[14px]"
                />
              </div>
              <input
                type="button"
                value="Send"
                className="my-4 bg-blue-500 text-white px-3 rounded-md py-1 cursor-pointer"
              />
            </form>
          </div>
          <div className="flex  items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <div className="flex gap-7 mt-3 md:mt-0 mb-3 md:mb-0">
              <div className="flex items-center gap-2">
                <AiFillLike
                  onClick={handleLike}
                  className="text-2xl cursor-pointer text-blue-500"
                />
                <p>Like</p>
                <span>{likeCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <BiSolidDislike
                  onClick={handleDisLike}
                  className="text-2xl cursor-pointer"
                />
                <p>Dislike</p>
                <span>{dislikeCount}</span>
              </div>
            </div>

            <span className=" mr-3  inline-flex items-center sm:ml-auto mt-5 md:mt-0 leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <button
                onClick={handleVote}
                className="btn mr-2 px-6 text-white bg-[#3B82F6]"
              >
                vote
              </button>
              <p>{`Total Vote = ${vote}`}</p>
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

        <div>
          <form onSubmit={handleComment} className="mb-6 mx-8 lg:mx-24 md:mx-20">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label for="comment" class="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="3"
                className=" w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 
              bg-indigo-500
              focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Post comment
            </button>
          </form>
        </div>

        <div className="flex justify-center">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey=""
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />

            <Line
              type="monotone"
              dataKey=""
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="value" activeDot={{ r: 8 }} />
            <Line
              type="monotone"
              dataKey=""
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="value" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SurveyDetails;