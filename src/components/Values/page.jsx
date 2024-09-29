import React from 'react'
import Collaboration from "../../assets/images/icon/collaboration.png"
import Sustainability from "../../assets/images/icon/sustainability.png"
import Excellence from "../../assets/images/icon/excellence.png"
import Innovation from "../../assets/images/icon/innovation.png"
import Integrity from "../../assets/images/icon/integrity.png"
export const Values = () => {
    const values = [
        {
            id: 1,
            title: "Sustainability",
            description: "Commitment to long-term environmental and economic sustainability in all our initiatives.",
            image: Sustainability
        },
        {
            id: 2,
            title: "Excellence",
            description: " Striving for the highest quality in every aspect of our work.",
            image: Excellence
        },
        {
            id: 3,
            title: "Collaboration",
            description: " Working together with farmers, communities, governments, and other stakeholders to achieve common goals.",
            image: Collaboration
        },
        {
            id: 4,
            title: "Innovation",
            description: "Leveraging technology, innovative solutions, and expert consultancy to drive progress and improvement, demonstrating a value on creativity and forward thinking",
            image: Innovation
        },
        {
            id: 5,
            title: "Integrity",
            description: "Upholding the highest ethical standards in all our operations and interactions.",
            image: Integrity
        }
        
    ]
    return (
        <div id="values" className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
            

            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralGrey font-semibold mb-3'>Core Values</h2>
                <p className='text-neutralGrey'>our core values are the foundation of everything we do</p>
            </div>

            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {values.map(values => (
                    <div key={values.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-30 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                        <div className=' h-14 w-14 mx-auto '>
                            <img src={values.image} alt={values.name} className='mt-5' />
                        </div>
                        
                            <h4 className='text-2xl font-bold text-neutralGrey mb-2 px-2'>{values.title}</h4>
                            <p className='text-sm text-neutralGrey'>{values.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
