import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav">
        Home
      </NavLink>

      <NavLink to="/contact" className="nav">
        Contact
      </NavLink>
      <NavLink to="/auth/login" className="nav">
        Login
      </NavLink>
      <NavLink to="/auth/register" className="nav">
        Register
      </NavLink>
      <NavLink to="/user/dashboard" className="nav">
        User Dashboard
      </NavLink>
      <NavLink to="/user/osint" className="nav">
        Osint
      </NavLink>
      <NavLink to="/admin/dashboard" className="nav">
        Admin Dashboard
      </NavLink>
    </nav>
  );
};

export default Header;
