import { MdManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const DashBoard = () => {
  const isAdmin = true;
  const isSurveyor = true;



  return (
    <div className="flex gap-5">
      {/* left sidber  */}
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <a href="#">
          <img
            className="w-auto h-7"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </a>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Admin
              </label>

              {isAdmin || isSurveyor ? (
                <>
                  <Link to="dashboard/adminhome"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    
                  >
                    <FaHome />
                    <span className="mx-2 text-sm font-medium">Admin Home</span>
                  </Link>
                  <Link to="/dashboard/manageusers"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    
                  >
                    <MdManageAccounts />
                    <span className="mx-2 text-sm font-medium">
                      Manage users.
                    </span>
                  </Link>
                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <MdManageAccounts />
                    <span className="mx-2 text-sm font-medium">All Users</span>
                  </a>
                </>
              ) : (
                ""
              )}

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Preformance</span>
              </a>
            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                content
              </label>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Guides</span>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Hotspots</span>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Checklists</span>
              </a>
            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Customization
              </label>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Themes</span>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Setting</span>
              </a>
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
