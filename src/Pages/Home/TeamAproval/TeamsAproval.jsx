import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';

const TeamsAproval = () => {
    return (
        <div className="p-4 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Teams & Approvals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <div className=" bg-[#1A1919] rounded-lg p-6">

                    <h1 className="text-xl font-bold mb-2">Postiz - Teams & Approvals</h1>

                    <div>
                        <p className="flex items-center">
                            <TiTick className="text-green-500 mr-1" />Approval Workflows
                        </p>
                        <p className="flex items-center">
                            <TiTick className="text-green-500 mr-1" />Assign Users to Posts
                        </p>
                        <p className="flex items-center">
                            <TiTick className="text-green-500 mr-1" />Leave Comments on Posts
                        </p>
                        <p className="flex items-center">
                            <TiTick className="text-green-500 mr-1" />Assign Users to Messages
                        </p>
                        <p className="flex items-center">
                            <TiTick className="text-green-500 mr-1" />Tag Team Members in Comments
                        </p>
                    </div>
                </div>

                {/* Buffer Social Media & Publishing */}
                <div className=" bg-[#1A1919] rounded-lg p-6">

                    <h1 className="text-xl font-bold mb-2">Buffer - Teams & Approvals</h1>
                    <div>
                        <p className="flex items-center">
                            <TiTick className="text-green-500 mr-1" />Approval Workflows
                        </p>
                        <p className="flex items-center">
                            <RxCross2 className="text-red-500 mr-1" />Assign Users to Posts
                        </p>
                        <p className="flex items-center">
                            <RxCross2 className="text-red-500 mr-1" />Leave Comments on Posts
                        </p>
                        <p className="flex items-center">
                            <RxCross2 className="text-red-500 mr-1" />Assign Users to Messages
                        </p>
                        <p className="flex items-center">
                            <RxCross2 className="text-red-500 mr-1" />Tag Team Members in Comments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamsAproval;