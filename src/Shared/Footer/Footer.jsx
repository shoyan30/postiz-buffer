import React from 'react';
import postiz from '../../assets/logo/postiz.png';
import logo from '../../assets/logo/logo.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';

const Footer = () => {
    return (
        // <div className="relative p-2">
        //     <div className='ms-10 z-0 relative'>
        //         <img src={postiz} alt="Postiz Logo" />
        //     </div>
        //     <footer className="footer relative -mt-16 z-1 sm:-mt-56  bg-black text-white text-base-content sm:h-[300px] p-10 mt-10">
        //         <aside className='space-y-4'>
        //             <div className="flex items-center justify-center">
        //                 <img src={logo} alt="Logo" className="h-[32px] w-[28px] mt-1" />
        //                 <p className='ms-2 font-lobster text-3xl'>POSTIZ</p>
        //             </div>
        //             <p><small>Open-source social media scheduling tool</small></p>

        //             <div className="flex justify-center items-center gap-x-6">
        //                 <FaGithub className="text-3xl" />
        //                 <FaLinkedin className="text-3xl" />
        //                 <IoLogoFacebook className="text-3xl" />
        //             </div>
        //         </aside>
        //         {/* Navigation Links */}
        //         <nav>
        //             <h6 className="footer-title">Free Tools</h6>
        //             <a className="link link-hover">Branding</a>
        //             <a className="link link-hover">Design</a>
        //             <a className="link link-hover">Marketing</a>
        //             <a className="link link-hover">Advertisement</a>
        //         </nav>
        //         {/* Additional Navigation Links */}
        //         <nav>
        //             <h6 className="footer-title">Resource</h6>
        //             <a className="link link-hover">About us</a>
        //             <a className="link link-hover">Contact</a>
        //             <a className="link link-hover">Jobs</a>
        //             <a className="link link-hover">Press kit</a>
        //         </nav>
        //         {/* Company Navigation Links */}
        //         <nav>
        //             <h6 className="footer-title">Company</h6>
        //             <a className="link link-hover">Terms of use</a>
        //             <a className="link link-hover">Privacy policy</a>
        //             <a className="link link-hover">Cookie policy</a>
        //         </nav>

        //     <hr />
        //     </footer>


        // </div>
        <div>
            <div className='relative'>
                <div className='ms-10 z-0 relative'>
                    <img src={postiz} alt="Postiz Logo" />
                </div>
            </div>
            <div className='relative pt-8 bg-black pb-16 -mt-16 z-1 sm:-mt-56'>
                <div className="grid grid-cols-1 sm:grid-cols-5 max-w-6xl mx-auto mb-8 px-4">
                    <div className="col-span-2">
                        <div className="flex items-center justify-center sm:justify-start">
                            <img src={logo} alt="Logo" className="h-[32px] w-[28px]" />
                            <p className="ms-2 font-lobster text-3xl">POSTIZ</p>
                        </div>
                        <p className="text-sm mt-2 text-center sm:text-left">Open-source social media scheduling tool</p>

                        <div className="flex space-x-4 mt-4 justify-center sm:justify-start">
                            <FaGithub className="text-3xl" />
                            <FaLinkedin className="text-3xl" />
                            <IoLogoFacebook className="text-3xl" />
                        </div>
                    </div>

                    {/* Combine Free Tools, Resource, and Company into one column on mobile and center */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 col-span-3 gap-4 mt-4 sm:mt-0 text-center sm:text-left">
                        <div>
                            <nav className="flex flex-col items-center sm:items-start">
                                <h6 className="text-lg font-bold mb-2 text-white">Free Tools</h6>
                                <a className=" text-[#D1D1D1]">Branding</a>
                                <a className=" text-[#D1D1D1]">Design</a>
                                <a className=" text-[#D1D1D1]">Marketing</a>
                                <a className=" text-[#D1D1D1]">Advertisement</a>
                            </nav>
                        </div>

                        <div>
                            <nav className="flex flex-col items-center sm:items-start">
                                <h6 className="text-lg font-bold mb-2 text-white">Resource</h6>
                                <a className=" text-[#D1D1D1]">About us</a>
                                <a className=" text-[#D1D1D1]">Contact</a>
                                <a className=" text-[#D1D1D1]">Jobs</a>
                                <a className=" text-[#D1D1D1]">Press kit</a>
                            </nav>
                        </div>

                        <div>
                            <nav className="flex flex-col items-center sm:items-start">
                                <h6 className="text-lg font-bold mb-2 text-white">Company</h6>
                                <a className=" text-[#D1D1D1]">Terms of use</a>
                                <a className=" text-[#D1D1D1]">Privacy policy</a>
                                <a className=" text-[#D1D1D1]">Cookie policy</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="flex flex-col-reverse sm:flex-row mt-8 text-center sm:text-left">
                    <p className="mt-4 mr-8 sm:mt-0">&copy; Postiz, 2024. All rights reserved.</p>
                    <div className="flex justify-center sm:justify-start">
                        <p className="mr-4">Designed by</p>
                        <p>Peppermint</p>
                    </div>
                </div>
            </div>

        </div>




    );
};

export default Footer;
