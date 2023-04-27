import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  // console.log("user", user);
  const menuItems = (
    <>
      <li>
        <Link to="/" className="bg-white hover:bg-white font-semibold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/" className="bg-white hover:bg-white font-semibold">
          About
        </Link>
      </li>
      <li>
        <Link to="/" className="bg-white hover:bg-white font-semibold">
          Services
        </Link>
      </li>
      <li>
        <Link to="/" className="bg-white hover:bg-white font-semibold">
          Contact
        </Link>
      </li>

      <li>
        {user?.email ? (
          <>
            <Link
              to="/orders"
              className="bg-white hover:bg-white font-semibold"
            >
              Orders
            </Link>
            <Link
              onClick={handleLogout}
              className="bg-white hover:bg-white font-semibold"
            >
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login" className="bg-white hover:bg-white font-semibold">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar mt-5 mb-5 bg-base-100">
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
            className="menu menu-compact dropdown-content mt-3 p-2 hover:bg-white w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
