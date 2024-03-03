import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { resetToken } from "../app/features/auth/authSlice";
const Header = () => {
  const { userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const hangLogout = () => {
    dispatch(resetToken());
  };

  return (
    <nav className="bg-gray-50 dark:bg-gray-900 p-4 ">
      <div className="flex items-center justify-between tracking-wider ">
        <NavLink
          to="/"
          className="text-2xl font-semibold text-gray-900 gap-3  justify-center align-middle  dark:text-white flex"
        >
          <img
            className="w-12 h-12   rounded-full mr-2"
            src={logo}
            alt="logo"
          />
          AlazSec
        </NavLink>
        <div className="flex space-x-4">
          <NavLink to="/" className="nav-link text-gray-900 dark:text-white">
            Home
          </NavLink>

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
