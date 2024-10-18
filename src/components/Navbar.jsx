import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="md:w-[70%] w-[90%]  sm:w-[80%] mx-auto border-[1px] border-gray-400 shadow-xl mt-4 px-10 p-3 rounded-full flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/">
            <span className="text-3xl text-green-800 transiton-all hover:text-green-900">HealthCare</span>
          </NavLink>
        </div>
        <div className="flex items-center">
          <button className="menu-icon lg:hidden" onClick={toggleMenu}>
            <span className="text-gray-600 hover:text-green-900">
              {isMenuOpen ? (
                <i className="fa-solid fa-xmark text-xl "></i>
              ) : (
                <i className="fa-solid fa-bars text-xl "></i>
              )}
            </span>
          </button>
          <div className="lg:block hidden">
            <ul className="lg:flex items-center gap-5 space-x-4">
              <li>
                <NavLink to="/" className="text-gray-600 hover:text-green-900">
                  Home
                    <hr className="w-1/2 h-[1.6px] hidden bg-green-900 border-none mx-auto rounded-full" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/yoga"
                  className="text-gray-600 hover:text-green-900"
                >
                  Yoga
                  <hr className="w-1/2 h-[1.6px] hidden bg-green-900 border-none mx-auto rounded-full" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/workout"
                  className="text-gray-600 hover:text-green-900"
                >
                  Workout
                  <hr className="w-1/2 h-[1.6px] hidden bg-green-900 border-none mx-auto rounded-full" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bmi"
                  className="text-gray-600 hover:text-green-900"
                >
                  BMI
                  <hr className="w-1/2 h-[1.6px] hidden bg-green-900 border-none mx-auto rounded-full" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calorie"
                  className="text-gray-600 hover:text-green-900"
                >
                  Calorie
                  <hr className="w-1/2 h-[1.6px] hidden bg-green-900 border-none mx-auto rounded-full" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`nav-links ${
          isMenuOpen ? "block" : "hidden"
        } mb-10 lg:hidden flex items-center justify-center mt-5 `}
      >
        <ul className="flex items-center gap-5">
          <li>
            <NavLink to="/" className="text-gray-600 hover:text-green-900">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/yoga" className="text-gray-600 hover:text-green-900">
              Yoga
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/workout"
              className="text-gray-600 hover:text-gray-900"
            >
              Workout
            </NavLink>
          </li>
          <li>
            <NavLink to="/bmi" className="text-gray-600 hover:text-gray-900">
              BMI
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calorie"
              className="text-gray-600 hover:text-gray-900"
            >
              Calorie
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
