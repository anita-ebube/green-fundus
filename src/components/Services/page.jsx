import React from 'react';
import Consultancy from "../../assets/images/consultancy.jpg";
import Solutions from "../../assets/images/solutions.jpg";
import Sanitation from "../../assets/images/sanitation.jpg";

export const Services = () => {
    return (
        <div id='services'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto lg:my-10 lg:mb-40 mb-48'>
                <h4 className='text-4xl text-neutralGrey font-semibold text-center mt-20 mb-10 lg:my-20'>Our Services</h4>
               
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-start items-start gap-12'>
                    <div className='order-1 md:order-2 md:w-9/12 mx-auto'>
                        <h2 className='lg:text-4xl text-2xl text-neutralGrey font-semibold mb-8'>Sustainable Agricultural Solutions:</h2>
                        <ul className='text-sm text-neutralGrey mb-8'>
                            <li>Development and promotion of eco-friendly farming practices.</li>
                            <li className='py-5'>Provision of high-quality seeds, fertilizers, and other agricultural inputs.</li>
                            <li>Training and support for farmers on modern agricultural techniques.</li>
                        </ul>
                        <button className='bg-brandPrimary px-5 py-3 rounded-sm text-neutralSilver hover:bg-[#448847]'>Learn More</button>
                    </div>
                    <div className='order-2 md:order-1'>
                        <img src={Solutions} alt="Sustainable Agricultural Solutions" />
                    </div>
                </div>

                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row-reverse justify-start items-start gap-12 mt-32'>
                    <div className='order-1 md:order-2'>
                        <h2 className='lg:text-4xl text-2xl text-neutralGrey font-semibold mb-8'>Advanced Water Sanitation</h2>
                        <ol className='text-sm text-neutralGrey mb-8'>
                            <li>Implementation of water purification and sanitation systems.</li>
                            <li className='py-5'>Education programs on water conservation and hygiene practices.</li>
                            <li>Support for community-led water management initiatives.</li>
                        </ol>
                        <button className='bg-brandPrimary px-5 py-3 rounded-sm text-neutralSilver hover:bg-[#448847]'>Learn More</button>
                    </div>
                    <div className='order-2 md:order-1 md:w-9/12 mx-auto'>
                        <img src={Sanitation} alt="Advanced Water Sanitation" />
                    </div>
                </div>

                {/* Third Service */}
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-start items-start gap-12 mt-32'>
                    <div className='order-1 md:order-2 md:w-9/12 mx-auto'>
                        <h2 className='lg:text-4xl text-2xl text-neutralGrey font-semibold mb-8'>Agribusiness Consultancy</h2>
                        <ol className='text-sm text-neutralGrey mb-8'>
                            <li>Expert advice on agribusiness planning and development.</li>
                            <li className='py-5'>Market analysis and business strategy services.</li>
                            <li>Support for the establishment and growth of agribusiness enterprises.</li>
                        </ol>
                        <button className='bg-brandPrimary px-5 py-3 rounded-sm text-neutralSilver hover:bg-[#448847]'>Learn More</button>
                    </div>
                    <div className='order-2 md:order-1'>
                        <img src={Consultancy} alt="Agribusiness Consultancy" />
                    </div>
                </div>
            
            </div>
        </div>
    );
};
