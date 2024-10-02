import React from 'react'
import MissionImg from "../../assets/images/icon/mission.png"
import Vision from "../../assets/images/icon/vision.png"
export const Mission = () => {
    const services = [
        {
            id: 1,
            title: "Mission",
            description: "Empower marginalized farmers with innovative agric solutions and technology, enhancing livelihoods, food security, and sustainable development.",
            image: MissionImg,
        },
        {
            id: 2,
            title: "Vision",
            description: "Empower marginalized farmers through innovative sustainable agriculture and water management solutions",
            image: Vision
        },


    ]
    return (
        <div id="vision" className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto mt-28'>

            <div className='lg:mt-14 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-1'>
                {services.map(service => (
                    <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-30 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='h-10 w-14 mx-auto'>
                                <img src={service.image} alt={service.name} className='mt-5 h-10' />
                            </div>

                            <h4 className='text-2xl font-bold text-neutralGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
