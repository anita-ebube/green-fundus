import React from 'react'
import { Navbar } from '../Navbar/page'
import { Footer } from '../Footer/page'

export const Layout = ({children}) => {
    return (

        <div id='gallery ' className='flex flex-col min-h-[100vh]'>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
        </div>

    )
}
