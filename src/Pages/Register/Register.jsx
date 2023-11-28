import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import GoogleSignUp from "../../components/GoogleSignUp/GoogleSignUp";

const Register = () => {

  const {createUser} = useAuth()

  const axiosPublic = useAxiosPublic();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

   const onSubmit = (data) => {
      createUser(data.email,data.password)
      .then(result => {
        const user = result.user;
        updateProfile(user,{
          displayName : data.name,photoURL:data.imageURL
        })
        .then(() => {

          const user = {
            name : data.name,
            email : data.email,
            role : 'user'
          }

          axiosPublic.post('/users',user)
          .then(result => {
            if(result.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Register Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              reset()
            }
          })

        })
        .catch(err => {
          console.log(err)
        })
      })
      .catch(err => {
        console.log(err.message)
      })
   };

   const loaction = useLocation();

   console.log(loaction)

    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto  items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" max-w-sm bg-gray-100 rounded-lg p-8 flex flex-col mx-auto  w-full mt-10 md:mt-0">
              <div>
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                  Register Now
                </h2>
                <GoogleSignUp state={loaction.state.state}></GoogleSignUp>
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.name && <p> Name is required.</p>}
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.email && <p> Email is required.</p>}
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  {...register("password", { required: true, minLength: 8 })}
                  type="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.password && (
                  <p> Password is required. min-8 carecter</p>
                )}
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Image URL
                </label>
                <input
                  type="text"
                  {...register("imageURL", { required: true })}
                  name="imageURL"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.imageURL && <p> ImageURL is required.</p>}
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Register
              </button>
              <p className="text-xs text-center text-gray-500 mt-3">
                already have an account?{" "}
                <Link to="/login" className="text-indigo-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
};

export default Register;