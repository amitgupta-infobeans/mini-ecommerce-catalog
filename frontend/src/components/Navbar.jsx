import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CategoryCard from "./CategoryCard";
import { useApiHandler } from "../hooks/useApiHandler";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: category } = useApiHandler("category", "get");
  const { message } = useApiHandler("user/logout", "get");
  const navigate = useNavigate();

  const lsUser = JSON.parse(localStorage.getItem("user"));

  const logoutAction = async () => {

    localStorage.removeItem("user");
    toast.success(message);
    navigate("/login");
  };


  return (
    <nav className="bg-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Site Name */}
          <div className="flex items-center cursor-pointer">
            <Link to="/" className="flex flex-col items-center justify-center">
              <img src="trolly.svg" className="w-9" alt="logo" />
              <span className="font-bold text-md">E-Commerce Mini</span>
            </Link>
          </div>

          {/* Hamburger menu (small screens) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-800"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu items (hidden on small) */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {category.length && category.map((onecat) => {
              return <CategoryCard key={onecat._id} onecat={onecat} />
            })}
          </div>

          {/* Profile */}
          <div className="hidden sm:flex flex-col justify-center items-center ml-3">
            {lsUser && (
              <img
                title="Logout"
                className="size-8 rounded-full cursor-pointer"
                src="./logout.png"
                alt="User"
                onClick={logoutAction}
              />
            )}

            <Link
              to={!lsUser && "/login"}
              className="px-1 py-1 text-sm font-medium hover:bg-gray-900 hover:text-white"
            >
              {lsUser ? `Welcome ${lsUser}` : "Login"}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-2 space-y-1">
            {category.length && category.map((onecat) => {
              return <CategoryCard key={onecat._id} onecat={onecat} />
            })}

            <Link
              to={!lsUser && "/login"}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-900 hover:text-white "
            >
              {lsUser ? `Welcome ${lsUser}` : "Login"}
            </Link>
            {lsUser && <Link
              onClick={logoutAction}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-900 hover:text-white "
            >
              Logout
            </Link>}

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
