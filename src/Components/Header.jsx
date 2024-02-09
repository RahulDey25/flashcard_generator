// Importing React library for creating React components
import React from "react";

// Importing NavLink from react-router-dom to create navigation links
import { NavLink } from "react-router-dom";

// Importing the logo image from the specified path
import logo from "../Assets/download.png"


// Functional component for the Header
const Header = () => {
  return (

        // Navigation section
    <nav>

              {/* Container div with padding, shadow, and background color */}
        <div className="p-2 xl:px-10 shadow-md bg-white">

        <NavLink to={"/"}>

          {/* Logo image with responsive width */}
          <div className="flex items-center">
          <img className=" w-9 h-8 " src={logo} alt="logo" />
        <h1 className="text-black ml-0 mb-1 text-2xl font-normal">maBetter</h1> 
        </div>
        </NavLink>
        </div>
    </nav>
  )
}

// Exporting the Header component as the default export
export default Header;
