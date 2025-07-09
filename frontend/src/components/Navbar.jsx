import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApiCall } from "../hooks/useApiCall";
import { toast } from "react-toastify";
import CategoryCard from "./CategoryCard";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, callApi] = useApiCall();
  const navigate = useNavigate();
  const [category, setCategory] = useState([])

  const lsUser = JSON.parse(localStorage.getItem("user"));
  const hasFetchedCategory = useRef(false)

  const logoutAction = async () => {
    const baseURL = `${import.meta.env.VITE_API_URL}/user/logout`;
    const { success, error, message, data } = await callApi(baseURL, "GET");
    if (success) {
      localStorage.removeItem("user");
      // toast.success(message);
      navigate("/login");
    }
  };

  const getAllCat = async () => {
    const baseURL = `${import.meta.env.VITE_API_URL}/category`;
    const { success, message, error, data } = await callApi(baseURL, "get")
    if (success) {
      // toast.success(message)
      setCategory(data)
    }
  }

  useEffect(() => {

    if (!hasFetchedCategory.current) {
      getAllCat()
      hasFetchedCategory.current = true

    }

  }, [])



  return (
    <nav className="bg-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Site Name */}
          <div className="flex items-center cursor-pointer">
            <img src="./trolly.svg" className="w-10 pt-1" alt="logo" />
            <span className="font-bold text-lg ml-2">E-Commerce Mini</span>
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
            <Link className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-900 hover:text-white">
              Dashboard
            </Link>
            <Link className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-900 hover:text-white">
              Team
            </Link>
            <Link className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-900 hover:text-white">
              Projects
            </Link>
            <Link className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-900 hover:text-white">
              Calendar
            </Link>
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
