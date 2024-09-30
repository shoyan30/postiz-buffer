import React from 'react';
import img from '../../assets/logo/logo.jpg';

const Navbar = () => {
    const navOption = <>
        <li><a>Features</a></li>
        <li>
            <details>
                <summary>Providers</summary>
                <ul className="p-2 bg-black">
                    <li><a>Providers 1</a></li>
                    <li><a>Providers 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>Blog</a></li>
        <li><a>Pricing</a></li>
        <li><a>FQA</a></li>
    </>;

    return (
        <div>
            <div className="navbar">
                {/* Navbar Start: Logo on the left */}
                <div className="navbar-start">
                    <img src={img} alt="Logo" className="h-8 w-auto" />
                </div>

                {/* Move the dropdown button to the right in mobile view */}
                <div className="navbar-end w-full lg:hidden">
                    <div className="dropdown ml-auto">
                        <button tabIndex={0} aria-label="Open Menu" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content w-full rounded-box mt-3 w-52 p-2 shadow bg-black text-white">
                            {navOption}
                            {/* Mobile-only "Log In" and "Get Started" buttons */}
                            <li><a className="btn rounded-lg mt-2">Log In</a></li>
                            <li><a className="btn rounded-lg mt-2">Get Started</a></li>
                        </ul>
                    </div>
                </div>

                {/* Navbar Center: Menu items for larger screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>

                {/* Navbar End: Log In and Get Started buttons for larger screens */}
                <div className="navbar-end hidden lg:flex">
                    <button className="btn mr-4 rounded-3xl">
                        Log In
                    </button>
                    <button className="btn rounded-3xl">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
