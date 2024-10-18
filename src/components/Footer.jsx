import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-10 md:flex md:justify-between">
        {/* Quick Links Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/yoga" className="hover:underline">
                Yoga
              </NavLink>
            </li>
            <li>
              <NavLink to="/workout" className="hover:underline">
                Workout
              </NavLink>
            </li>
            <li>
              <NavLink to="/bmi" className="hover:underline">
                BMI
              </NavLink>
            </li>
            <li>
              <NavLink to="/calorie" className="hover:underline">
                Calorie
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@healthcare.com" className="hover:underline">
              info@healthcare.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline">
              +1 234 567 890
            </a>
          </p>
          <p>Address: 123 HealthCare St., Wellness City</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <NavLink to="https://facebook.com" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </NavLink>
            <NavLink to="https://twitter.com" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </NavLink>
            <NavLink to="https://instagram.com" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </NavLink>
            <NavLink to="https://linkedin.com" className="hover:text-blue-700">
              <FaLinkedin size={24} />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p>&copy; 2024 HealthCare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
