import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';

const SocialMediaReport = () => {
    return (
        <div className="p-4 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Social Media Analytics & Reporting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <div className=" bg-[#1A1919] rounded-lg p-6">

                    <h1 className="text-xl font-bold mb-2">Postiz - Scheduling & Publishing</h1>
                    <div>
                        <p className=' text-lg font-semibold mt-4 ms-2'>Social networks for auto-publishing.</p>
                        <ul>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Instragram
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />FaceBook
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Tiwtter
                            </p>
                           
                        </ul>
                    </div>
                    <div>
                        <p className='text-lg font-semibold my-2 ms-2'>Essentials</p>
                        <ul>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Notes
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Video Publishing
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Save as Draft
                            </p>
                            
                        </ul>
                    </div>
                    <div>
                        <p className='text-lg font-semibold my-2 ms-2'>Tag users On</p>
                        <ul>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Instragram
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />FaceBook
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Linkedin
                            </p>
                            
                        </ul>
                    </div>
                    <div>
                        <p className='text-lg font-semibold my-2 ms-2'>Scheduling views supported</p>
                        <ul>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Day
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Week
                            </p>
                            
                            
                        </ul>
                    </div>
                </div>

            {/* Buffer Social Media & Publishing */}
                <div className=" bg-[#1A1919] rounded-lg p-6">

                    <h1 className="text-xl font-bold mb-2">Buffer - Scheduling & Publishing</h1>
                    <div>
                        <p className=' text-lg font-semibold mt-4 ms-2'>Social networks for auto-publishing.</p>
                        <ul>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Instragram
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />FaceBook
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Tiwtter
                            </p>
                            
                           
                        </ul>
                    </div>
                    <div>
                        <p className='text-lg font-semibold my-2 ms-2'>Essentials</p>
                        <ul>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Notes
                            </p>
                            <p className="flex items-center">
                                <RxCross2 className="text-red-500 mr-1" />Video Publishing
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Save as Draft
                            </p>
                           
                            
                        </ul>
                    </div>
                    <div>
                        <p className='text-lg font-semibold my-2 ms-2'>Tag users On</p>
                        <ul>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Instragram
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />FaceBook
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Linkedin
                            </p>
                            
                        </ul>
                    </div>
                    <div>
                        <p className='text-lg font-semibold my-2 ms-2'>Scheduling views supported</p>
                        <ul>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Day
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Week
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Month
                            </p>
                            <p className="flex items-center">
                                <TiTick className="text-green-500 mr-1" />Year
                            </p>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaReport;