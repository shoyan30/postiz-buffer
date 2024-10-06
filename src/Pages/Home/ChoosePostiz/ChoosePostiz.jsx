import React from 'react';
import line from '../../../assets/logo/choos logo.png'
import { PiCaretDoubleRightBold } from 'react-icons/pi';
const ChoosePostiz = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between bg-[#3C1AC9] h-auto sm:h-[282px] lg:h-[282px] mt-4 rounded-lg'>
            <div className='px-8 flex-1 flex flex-col items-center justify-center text-center md:items-start md:text-left'>
                <h2 className='text-3xl font-bold text-white'>
                    Choose <span className='text-[#F471FF]'>Postiz</span> to enhance your <br />social media approach!
                </h2>
                <p className='text-white mt-2'>
                    <small>Easily design, schedule, and optimize captivating content for all your channels.</small>
                </p>
            </div>
            <div className='p-4 md:mr-24 flex items-center'>
                <img className='mr-8 mt-8' src={line} alt="" />
                <button className="btn rounded-2xl">
                    Get Started<PiCaretDoubleRightBold />
                </button>
            </div>
        </div>
    );
};

export default ChoosePostiz;
