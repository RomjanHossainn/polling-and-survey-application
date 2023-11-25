import useAuth from '../../Hooks/useAuth';
import logo from '../../assets/logo.png'

import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {


  const {user,loading,logOut} = useAuth()
    
    const handleLogOut = () => {
      logOut()
      .then(() => {
        console.log('logout')
      })
      .catch(err => {

      })
    }

  const navLinks = (
    <>
      <li>
        <NavLink className={'text-lg'} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={'text-lg'} to="/surveyspage">Surveys Page </NavLink>
      </li>
      <li>
        <NavLink className={'text-lg'} to="/pricingpage">Pricing Page </NavLink>
      </li>
    </>
  );


    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navLinks}
            </ul>
          </div>
          <Link>
            <img src={logo} className="w-[150px]" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user &&(
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user ? user?.photoURL : ""}
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <p className='ms-3 text-lg'>Name : {user && user.displayName}</p>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          )}

          <div>
            {loading? (
              <div>
                <div className="animate-pulse">
                  <div className="rounded-full animate-pulse  bg-slate-500 h-10 w-10"></div>
                </div>
              </div>
            ) : !user ? (
              <Link to="/login" className="btn">
                Login
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;