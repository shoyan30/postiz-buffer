import React from 'react';
import line from '../../../assets/logo/Line 2.png'
import { PiCaretDoubleRightBold } from 'react-icons/pi';
const BannerTitle = () => {
    return (
        <div className='mx-auto mt-10 flex flex-col justify-center items-center p-6 
                        max-w-[804px]'>
            <h2 className='text-4xl sm:text-6xl mb-4 text-center'>
                Postiz and Buffer comparison
            </h2>
            <div className='ms-16 sm:ms-48'>
                <img src={line} alt="" />
            </div>
            <p className='text-center mb-6'>
                Postiz's superior scheduling flow, competitor tracking, and client management make it the best Buffer alternative.
            </p>
            <button className="btn rounded-2xl">
                Get Started<PiCaretDoubleRightBold />
            </button>
        </div>
    );
};

export default BannerTitle;
