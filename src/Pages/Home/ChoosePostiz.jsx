import React from 'react';

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
                <button className='bg-white text-[#3C1AC9] font-semibold py-2 px-6 rounded-2xl w-full md:w-auto'>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default ChoosePostiz;
