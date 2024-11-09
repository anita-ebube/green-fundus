import React from 'react';

export const Team= () => {
    return (
        <div id='services'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto lg:my-10 lg:mb-40 mb-48'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-start items-start gap-12'>
                    <div className='order-1 md:order-2 md:w-9/12 mx-auto'>
                        <p>Our company is committed to delivering innovative and sustainable solutions
                        that meet the evolving needs of our clients. With a strong emphasis on quality
                        and integrity, we strive to make a positive impact in every project we undertake.</p>
                       
                    </div>
                    <div className='order-2 md:order-1'>
                        <img src={AboutImg} alt="Sustainable Agricultural Solutions" className='' />
                    </div>
                </div>
            
            </div>
        </div>
    );
};
