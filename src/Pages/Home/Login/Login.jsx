import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const { signInUser } = useAuth();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        signInUser(data.email,data.password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => {
                if (err.code === "auth/invalid-login-credentials") {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    },
                  });
                  Toast.fire({
                    icon: "warning",
                    title: "invalid login credentials ",
                  });
                }
            
        })
    }

    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto  items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" max-w-sm bg-gray-100 rounded-lg p-8 flex flex-col mx-auto  w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Login Now
              </h2>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
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
                  type="password"
                  {...register("password", { required: true })}
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.password && (
                  <p> Password is required</p>
                )}
                
              </div>

              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Login
              </button>
              <p className="text-xs text-center text-gray-500 mt-3">
                There is no account before?{" "}
                <Link to="/register" className="text-indigo-500">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
};

export default Login;