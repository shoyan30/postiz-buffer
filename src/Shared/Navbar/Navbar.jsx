// import React from 'react';
import img from '../../assets/logo/logo.png'
// import { PiCaretDoubleRightBold, PiGreaterThan } from 'react-icons/pi';

// const Navbar = () => {
//     const navOption = <>
//         <li><a>Features</a></li>
//         <li>
//             <details>
//                 <summary>Providers</summary>
//                 <ul className="p-2 bg-black">
//                     <li><a>Providers 1</a></li>
//                     <li><a>Providers 2</a></li>
//                 </ul>
//             </details>
//         </li>
//         <li><a>Blog</a></li>
//         <li><a>Pricing</a></li>
//         <li><a>FQA</a></li>
//     </>;

//     return (
//         <div>
//             <div className="navbar">
//                 {/* Navbar Start: Logo on the left */}
//                 <div className="navbar-start">
//                     <img src={img} alt="Logo" className="h-[32px]  w-[28px]" />
//                     <p className='ms-2 font-lobster text-3xl text-2xl'>POSTIZ</p>
//                 </div>

//                 {/* Move the dropdown button to the right in mobile view */}
//                 <div className="navbar-end w-full lg:hidden">
//                     <div className="dropdown ml-auto">
//                         <button tabIndex={0} aria-label="Open Menu" className="btn btn-ghost">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </button>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content w-full rounded-box mt-3 sm:w-52 p-2 shadow bg-black text-white ">
//                             {navOption}
//                             {/* Mobile-only "Log In" and "Get Started" buttons */}
//                             <li><a className="btn rounded-lg mt-2">Log In</a></li>
//                             <li><a className="btn rounded-lg mt-2">Get Started</a></li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Navbar Center: Menu items for larger screens */}
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navOption}
//                     </ul>
//                 </div>

//                 {/* Navbar End: Log In and Get Started buttons for larger screens */}
//                 <div className="navbar-end hidden lg:flex">
//                     <button className="btn bg-black text-white mr-4 rounded-3xl">
//                         Log In
//                     </button>
//                     <button className="btn rounded-3xl">
//                         Get Started<PiCaretDoubleRightBold />
//                     </button>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa'; // Import FaChevronDown
import { PiCaretDoubleRightBold } from 'react-icons/pi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProviderOpen, setIsProviderOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProviderDropdown = () => {
        setIsProviderOpen(!isProviderOpen);
    };

    return (
        <nav className="w-full  top-0">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl flex items-center font-bold">
                    <img src={img} alt="Logo" className="h-[32px]  w-[28px]" />
                    <p className='ms-2 font-lobster text-3xl text-2xl'>POSTIZ</p>
                </div>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#features" className="">Features</a>

                    {/* Provider with Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleProviderDropdown}
                            className="text-white flex items-center focus:outline-none"
                        >
                            Provider <FaChevronDown className="ml-2" /> {/* Icon added here */}
                        </button>
                        {isProviderOpen && (
                            <div className="absolute left-0 mt-2 w-48 border rounded-md shadow-lg z-20">
                                <a href="#provider1" className="block px-4 py-2">
                                    Provider 1
                                </a>
                                <a href="#provider2" className="block px-4 py-2">
                                    Provider 2
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="#blogs" className="">Blogs</a>
                    <a href="#pricing" className="">Pricing</a>
                    <a href="#sqa" className="">SQA</a>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="px-4 py-2 border rounded-2xl">Login</button>
                    <button className="btn rounded-2xl">
                         Get Started<PiCaretDoubleRightBold />
                     </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className=" focus:outline-none">
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden shadow-md">
                    <a href="#features" className="block px-4 py-2 ">Features</a>

                    {/* Provider Dropdown in Mobile View */}
                    <div className="px-4 py-2">
                        <button
                            onClick={toggleProviderDropdown}
                            className="w-full text-left  flex items-center focus:outline-none"
                        >
                            Provider <FaChevronDown className="ml-2" /> {/* Icon added here for mobile */}
                        </button>
                        {isProviderOpen && (
                            <div className="pl-4">
                                <a href="#provider1" className="block px-4 py-2 ">Provider 1</a>
                                <a href="#provider2" className="block px-4 py-2 ">Provider 2</a>
                            </div>
                        )}
                    </div>

                    <a href="#blogs" className="block px-4 py-2">Blogs</a>
                    <a href="#pricing" className="block px-4 py-2">Pricing</a>
                    <a href="#sqa" className="block px-4 py-2">SQA</a>
                    <button className="w-full mb-2 px-4 py-2 border rounded-2xl mt-2">Login</button>
                    <button className="btn w-full rounded-2xl">
                         Get Started<PiCaretDoubleRightBold />
                     </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;



