import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { resetToken } from "../app/features/auth/authSlice";
const Header = () => {
  const { userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const hangLogout = () => {
    dispatch(resetToken());
  };

  return (
    <nav className=" px-5 py-1 text-xl">
      <div className="flex items-center justify-between tracking-wider ">
        <NavLink
          to="/"
          className="text-2xl font-semibold text-gray-900  dark:text-white grid items-center grid-flow-col"
        >
          <img className="w-16 h-16  rounded-full " src={logo} alt="logo" />
          <h1 className="text-4xl">AlazSec</h1>
        </NavLink>
        <div className="flex space-x-4">
          <NavLink to="/" className="nav-link text-gray-900 dark:text-white">
            Home
          </NavLink>
          {userToken ? (
            <>
              <NavLink
                to="/user/dashboard"
                className="nav-link text-gray-900 dark:text-white"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/user/osint"
                className="nav-link text-gray-900 dark:text-white"
              >
                Osint
              </NavLink>
            </>
          ) : null}

          <NavLink
            to="/contact"
            className="nav-link text-gray-900 dark:text-white"
          >
            Contact
          </NavLink>
          {userToken ? (
            <NavLink
              onClick={hangLogout}
              to="/auth/login"
              className="nav-link text-gray-900 dark:text-white"
            >
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="nav-link text-gray-900 dark:text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className="nav-link text-gray-900 dark:text-white"
              >
                Sing Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
