import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { CategoryList } from "./CategoryList"
import { Profile } from "./Profile";
import { Hamburger } from "./Hamburger";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gray-400">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center cursor-pointer">
              <img src="trolly.svg" className="w-9" alt="logo" />
              <span className="font-bold text-md ml-2">E-Commerce Mini</span>
            </Link>

            {/* Hamburger for small screens */}
            <Hamburger handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-col md:items-center md:space-x-6">
              <SearchBar />
              <div className="flex items-center justify-center mt-1 flex-wrap">
                <CategoryList />
              </div>
            </div>

            {/* Profile */}
            <div className="hidden md:flex flex-col items-center ml-3">
              <Profile />
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-1 flex flex-col">
            <SearchBar />
            <div className="flex flex-col items-start flex-wrap">
              <CategoryList />
              <Profile />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
