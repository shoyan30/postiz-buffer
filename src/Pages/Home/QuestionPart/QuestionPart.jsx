import React from 'react';
import doodle from '../../../assets/logo/Doodle.png'
import { PiCaretDoubleRightBold } from 'react-icons/pi';
const QuestionPart = () => {
    return (
        <div>
            <div className='p-4 sm:mt-28'>
                <div className='grid sm:grid-cols-2'>

                    <div className=' text-3xl sm:p-18 p-8'>
                        <h1>Frequently <br /> Asked <br /> Question</h1>
                        <div className='m-4'>
                            <img src={doodle} alt="" />
                        </div>
                    </div>



                    <div >
                        <div className="collapse sm:w-full collapse-arrow bg-[#1A1919]">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>Hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow mt-4 bg-[#1A1919]">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>Hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow mt-4 bg-[#1A1919]">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>Hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto flex flex-col justify-center items-center p-6 
                       w-full max-w-[804px] h-auto sm:h-[300px] lg:h-[343px] sm:w-[90%]'>
                <h2 className='text-4xl sm:text-6xl mb-4 text-center'>
                    Ready to get started?
                </h2>
                <p className='text-center mb-6'>
                    Elevate your social media planning and achieve new heights of efficiency and effectiveness with Postiz.
                </p>
                <button className="btn rounded-3xl">
                    Get Started<PiCaretDoubleRightBold />
                </button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default QuestionPart;
