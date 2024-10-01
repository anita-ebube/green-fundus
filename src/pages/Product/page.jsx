import React from 'react'
import { Layout } from '../../components/Layout/page';

export const Product = () => {
  return (
    <Layout >
      <div className='bg-brandPrimary h-[150px] lg:h-[200px]'>
        <h2 className='text-white lg:text-4xl sm:text-3xl flex justify-center items-center pt-24 lg:pt-28'>Our Products</h2>
      </div>
      <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-start items-start gap-12 my-32'>
        <div className='order-1 md:order-2 md:w-9/12 mx-auto'>
          <h2 className='lg:text-4xl text-2xl text-neutralGrey font-semibold mb-8'>PAYGO -Microinsurance</h2>
          <p className='text-sm text-neutralGrey mb-8'>
            The pay-As-You-Go Microinsurance Platform helps farmers protect their aanimals by adding small insurance fees when they buy feed or medicine. They can use a phone app to track payements, make claims if needed, even improve their credit
          </p>
          <button className='bg-brandPrimary px-5 py-3 rounded-sm text-neutralSilver hover:bg-[#448847]'><a href="">Know More</a></button>
        </div>
        <div className='order-2 md:order-1'>
          <img src="" alt="Sustainable Agricultural Solutions" />
        </div>
      </div>

    </ Layout>
  )
}
