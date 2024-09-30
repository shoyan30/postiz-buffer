import React from 'react';
import postiz from '../../assets/logo/logo.jpg'
const PlatFormComparison = () => {
    return (
        <div className="p-4 relative">
            <h2 className="text-2xl font-bold mb-6 text-center">Platform Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <div className="bg-gradient-to-r from-[#24005E] to-[#5608D5] border rounded-lg p-6">
                    <img src="" alt="" className="mb-4 mx-auto" />
                    <h1 className="text-xl font-bold mb-2">Postiz</h1>
                    <p>Postiz helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.</p>
                </div>

                {/* VS Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]">
                    <button className="w-16 h-16 bg-black text-white font-bold rounded-2xl">
                        VS
                    </button>
                </div>

                <div className="border rounded-lg p-6">
                    <img src="" alt="" className="mb-4 mx-auto" />
                    <h1 className="text-xl font-bold mb-2">Buffer</h1>
                    <p>Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.</p>
                </div>
            </div>
        </div>
    );
};

export default PlatFormComparison;
