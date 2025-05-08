import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo (2).png";
const Navbar = () => {
    const isSignIn = false;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownToggle = () => {
        setIsDropdownOpen((prevState) => !prevState);
      };
    
      // Close dropdown when mouse leaves
      const closeDropdown = () => {
        setIsDropdownOpen(false);
      };
    return (
       <nav className="flex items-center justify-between p-4">
      
       <div className="flex items-center space-x-2">
         <img src={logo} alt="logo" className="ml-[7rem]" />
       </div>
  {/* Navbar Links */}
  <div className="hidden md:flex space-x-6">
        <a href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#discover" className="text-gray-600 hover:text-gray-900">
          Discover
        </a>
        <a href="#activities" className="text-gray-600 hover:text-gray-900">
          Activities
        </a>
        <a href="#about" className="text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </div>

      <div className="flex items-center space-x-4 mr-[9rem] relative">
        
        <FaUser
        
          size={20}
          onClick={handleDropdownToggle}
        />

{isDropdownOpen && (
          <div
            className="absolute right-0 mt-36 w-48 bg-white border border-gray-200 rounded shadow-lg z-50"
            onMouseLeave={closeDropdown}
          >
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a href='/'>  Your Profile</a>
              
              </li>
           {/* <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a href='/'>  Your Profile</a>
              
              </li>*/}
              {isSignIn ? (
                 <li
                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                 <a href='/'>  SignOut</a>
               
               </li>
              ):(
                <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a href='/'>  SignIn</a>
              
              </li>
              
              )}
              </ul>
              </div>
              )}
</div>
       </nav>
    );
}
export default Navbar;