import React from 'react'
import Client from '../../assets/images/client.png'
export const Clients = () => {
  return (
    <div>
        <div className='text-center py-10'>
                <h2 className='text-4xl text-neutralGrey font-semibold mb-2'>Our Client</h2>
                <p className='text-neutralGrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, temporibus?</p>

                <div className='my-12 flex flex-wrap justify-between items-center gap-5'>
                    <img src={Client} alt="" className='w-20' />
                    <img src={Client} alt="" className='w-20' />
                    <img src={Client} alt="" className='w-20' />
                    <img src={Client} alt="" className='w-20' />
                    <img src={Client} alt="" className='w-20' />
                </div>
            </div>
    </div>
  )
}
