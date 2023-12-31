import { MdManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";
import { IoMdCreate } from "react-icons/io";
import { MdOutlinePostAdd } from "react-icons/md";
import logo from "../../assets/logo.png";
const DashBoard = () => {

  const [{userRole}] = useUserRole()

  
  
  return (
    <div className="flex gap-5">
      {/* left sidber  */}
      <aside className="flex flex-col  h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <a href="#">
          <img
            className="w-32"
            src={logo}
            alt=""
          />
        </a>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Admin & surveyor
              </label>

              <>
                {userRole === "admin" && (
                  <>
                    
                    <Link
                      to="/dashboard/managesurveyes"
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <FaHome />
                      <span className="mx-2 text-sm font-medium">
                        Manage Surveyes
                      </span>
                    </Link>
                  </>
                )}
                {userRole === "admin" || userRole === "surveyor" ? (
                  <Link
                    to="/dashboard/manageusers"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <MdManageAccounts />
                    <span className="mx-2 text-sm font-medium">
                      Manage users.
                    </span>
                  </Link>
                ) : (
                  ""
                )}

                {userRole === "surveyor" && (
                  <>
                    <Link
                      to="/dashboard/createsurvey"
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      href="#"
                    >
                      <IoMdCreate />
                      <span className="mx-2 text-sm font-medium">
                        Create Survey
                      </span>
                    </Link>
                    <Link
                      to="/dashboard/mypostedsurvey"
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      href="#"
                    >
                      <MdOutlinePostAdd />
                      <span className="mx-2 text-sm font-medium">
                        My Posted Survey
                      </span>
                    </Link>
                  </>
                )}
              </>

              
            </div>

            
           
          </nav>
        </div>
      </aside>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
