import React from 'react';
import line from '../../assets/logo/Line 2.png'
const BannerTitle = () => {
    return (
        <div className='mx-auto flex flex-col justify-center items-center p-6 
                       w-full max-w-[804px] h-auto sm:h-[300px] lg:h-[343px] sm:w-[90%]'>
            <h2 className='text-4xl sm:text-6xl mb-4 text-center'>
                Postiz and Buffer comparison
            </h2>
            <div className='ms-16 sm:ms-48'>
                <img  src={line} alt="" />
            </div>
            <p className='text-center mb-6'>
                Postiz's superior scheduling flow, competitor tracking, and client management make it the best Buffer alternative.
            </p>
            <button className='bg-white text-black px-6 py-3 rounded-3xl'>
                Get Started
            </button>
        </div>
    );
};

export default BannerTitle;
