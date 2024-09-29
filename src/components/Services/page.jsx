import React from 'react'
import Consultancy from "../../assets/images/consultancy.jpeg"
import Solutions from "../../assets/images/solutions.jpg"
import Sanitation from "../../assets/images/sanitation.jpg"
export const Services = () => {
    return (
        <div id='services'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <h4 className='text-4xl text-neutralGrey font-semibold text-center mt-20'>Our Services</h4>
                <p className='text-neutralGrey text-center mb-20'>GreenFundus offers the following services</p>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-start items-start gap-12'>
                    <div>
                        <img src={Solutions} alt="" />
                    </div>
                    <div className='md:w-9/12 mx-auto'>
                        <h2 className='text-4xl text-neutralGrey font-semibold mb-8'>Sustainable Agricultural Solutions:</h2>
                        <ol className='text-sm text-neutralGrey mb-8'>
                            <li>Development and promotion of eco-friendly farming practices.</li>
                            <li className='py-5'>Provision of high-quality seeds, fertilizers, and other agricultural inputs.</li>
                            <li>Training and support for farmers on modern agricultural techniques.</li>
                        </ol>
                        <button className='bg-brandPrimary px-5 py-3 rounded-sm text-neutralSilver hover:bg-[#448847]'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto mt-32 '>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-start items-start gap-12'>

                    <div >
                        <h2 className='text-4xl text-neutralGrey font-semibold mb-8'>Advanced Water Sanitation</h2>
                        <ol className='text-sm text-neutralGrey mb-8'>
                            <li>Implementation of water purification and sanitation systems.</li>
                            <li className='py-5'>Education programs on water conservation and hygiene practices.</li>
                            <li>Support for community-led water management initiatives.</li>
                        </ol>
                        <button className='bg-brandPrimary px-5 py-3 rounded-sm text-neutralSilver hover:bg-[#448847]'>Learn More</button>
                    </div>
                    <div className='md:w-9/12 mx-auto'>
                        <img src={Sanitation} alt="" className='' />
                    </div>
                </div>
            </div>

            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto mt-32 '>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-start items-start gap-12'>
                    <div>
                        <img src={Consultancy} alt="" />
                    </div>
                    <div className='md:w-9/12 mx-auto'>
                        <h2 className='text-4xl text-neutralGrey font-semibold mb-8'>Agribusiness Consultancy</h2>
                        <ol className='text-sm text-neutralGrey mb-8'>
                            <li>Expert advice on agribusiness planning and development.</li>
                            <li className='py-5'>Market analysis and business strategy services.</li>
                            <li>Support for the establishment and growth of agribusiness enterprises.</li>
                        </ol>
                        <button className='bg-brandPrimary px-5 py-3 rounded-sm text-neutralSilver hover:bg-[#448847]'>Learn More</button>
                    </div>

                </div>
            </div>
            {/* <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8 '>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralGrey font-semibold mb-4 md:w-2/3'>
                            Lorem ipsum dolor sit amet <br /><span>consectetur adipisicing.</span></h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis deleniti fugiat non iusto incidunt. Odit, reprehenderit quibusdam voluptas ratione illum temporibus nihil veniam eos, accusamus repellat voluptate assumenda distinctio dolor ipsum earum, qui corporis impedit voluptatibus unde harum possimus cum labore doloribus omnis. Porro voluptatibus, rerum ea soluta officiis commodi.</p>
                    </div>
                </div>
                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center'>
                            <img src={Client} alt="" className='h-24' />
                            <div>
                                <h4 className='text-2xl text-neutralGrey font-semibold'>2,245,341</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, ipsam?</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img src={Client} alt="" className='h-24' />
                            <div>
                                <h4 className='text-2xl text-neutralGrey font-semibold'>2,245,341</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, ipsam?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
