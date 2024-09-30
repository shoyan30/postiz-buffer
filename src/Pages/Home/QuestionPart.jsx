import React from 'react';
import doodle from '../../assets/logo/Doodle.png'
const QuestionPart = () => {
    return (
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
    );
};

export default QuestionPart;
