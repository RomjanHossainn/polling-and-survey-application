import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const CreateSurvey = () => {

    const {user} = useAuth();
    const axiosSercure = useAxiosSecure()

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    

    const handleData = (data) => {
        console.log(data)
        const createSurvey = {
          title: data.title,
          description: data.des,
          category : data.select,
          email : user?.email,
          likeCount : 0,
          dislikeCount : 0,
          options : ['Yes','No'],
          vote : 0,
          status : 'posted',
        };

        axiosSercure.post('/surveys',createSurvey)
        .then(res => {
            console.log(res.data)
        })

    }

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Create Survey
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              From here you can create your survey
            </p>
          </div>
          <div className=" mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Ttile
                  </label>
                  <input
                    type="text"
                    {...register('title',{required : true})}
                    name="title"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="text-sm text-gray-600">
                    Category
                  </label>
                  <div className="form-control w-full max-w-xs">
                    <select name="select" {...register('select',{required : true})} className="select select-bordered">
                      {/* <option disabled  selected>
                        Chose Category
                      </option> */}
                      <option value="music">Music</option>
                      <option value="fitness">Fitness</option>
                      <option value="movies">Movies</option>
                      <option value="travel">Travel</option>
                      <option value="technology">Technology</option>
                      <option value="food">Food</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    {...register('description',{required:true})}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit Survey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default CreateSurvey;
