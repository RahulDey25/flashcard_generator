// Importing React from react library and NavLink component from react-router-dom
import React from "react";
import { NavLink } from "react-router-dom";

// Navbar component for navigation
const Navbar = () => {
    return (

        // Container for the Navbar with padding and styling
        <div className="w-full pt-6 px-9 lg:px-40 2xl:px-64 pb-3">

            {/* Title for the Navbar */}
            <h1 className="text-2xl text-black font-semibold mb-4 2xl:text-3xl 2xl:font-bold 2xl:pt-7 pt-4 pb-2 2xl:pb-3">
                Create Flashcard</h1>

            {/* Navigation buttons section with styling */}
            <div className="flex font-medium 2xl:text-xl 2xl:font-bold space-x-12 pb-3 px-2">

                {/* Button for creating a new flashcard */}
                <button className="">
                    <NavLink to={'/'} style={({ isActive }) => ({
                        borderBottom: isActive ? '4px solid red' : undefined,
                        paddingBottom: '12px',
                        color: isActive ? 'red' : 'GrayText'
                    })}>
                        Create New
                    </NavLink>
                </button>

                {/* Button for viewing user's flashcards */}
                <button className="">
                    <NavLink to={'/myflashcard'} style={({ isActive }) => ({
                        borderBottom: isActive ? '4px solid red' : undefined,
                        paddingBottom: '12px',
                        color: isActive ? 'red' : 'GrayText'
                    })}>
                        My Flashcard
                    </NavLink>
                </button>
            </div>

            {/* Horizontal line as a separator */}
            <hr className="border border-gray-300 md:mb-5 mb-8" />
        </div>
    );
};

// Exporting Navbar component as the default export
export default Navbar;