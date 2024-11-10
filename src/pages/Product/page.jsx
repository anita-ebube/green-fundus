import React from 'react';
import { Layout } from '../../components/Layout/page';
import PayGo from '../../assets/images/payGo.png';

export const Product = () => {
  return (
    <Layout>
      <div className='bg-brandPrimary h-[140px] lg:h-[170px] flex justify-center items-center'>
        <h2 className='text-white  lg:text-4xl sm:text-3xl font-bold pt-16'>
          Our Products
        </h2>
      </div>

      <div className='md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-start gap-12 mt-16 mb-44 lg:my-16 px-4 md:px-0'>
        <div className='md:w-7/12'>
          <h2 className='lg:text-4xl text-2xl text-neutralGrey font-bold mb-6'>
            PAYGO - Microinsurance
          </h2>
          <p className='text-base leading-relaxed text-neutralGrey mb-8'>
            The Pay-As-You-Go Microinsurance Platform helps farmers protect their animals by adding small insurance fees when they buy feed or medicine. They can use a phone app to track payments, make claims if needed, and even improve their credit score.
          </p>
          <button className='bg-brandPrimary px-5 py-3 rounded-sm text-neutralSilver hover:bg-[#448847]'><a target="_blank" href="https://pay-go-gamma.vercel.app/">Know More</a></button>
        </div>

        {/* Image section */}
        <div className='w-full md:w-5/12'>
          <img src={PayGo} alt="PayGo Logo" className='w-full h-auto object-contain rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105' />
        </div>
      </div>
    </Layout>
  );
}
