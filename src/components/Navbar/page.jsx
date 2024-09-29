import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png"
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })

    const navItems = [
        {
            link: "About Us",
            path: "about"
            
        },
        {
            link: "Vision",
            path: "vision"
        },
        {
            link: "Services",
            path: "services"
        },
        {
            link:"Gallery",
            path: "gallery"
        },
        {
            link: "Product",
            path: "product"
        },
        {
            link: "Core Values",
            path: "values"
        },
    ];
    return (
        <header className='w-full bg-neutralSilver md:bg-white fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0  bg-white duration-300" : ""} `}>
                <div className='flex justify-between items-center text-base gap-3'>
                    <a href="#" className='text-2xl font-semibold flex items-center space-x-3'><img src={Logo} alt="" className='h-10 inline-block items-center' /></a>
                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        {
                            navItems.map(({ link, path }) => (<Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-brandPrimary hover:text-brandSecondary first:font-medium'>{link}</Link>
                            ))}
                    </ul>

                    <div className='space-x-12 hidden lg:flex item-center'>
                        
                        <button className='bg-brandPrimary text-neutralSilver py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey'> Contact Us</button>
                    </div>

                    <div className='md:hidden'>
                        <button
                        onClick={toggleMenu}
                         className='text-neutralGrey focus:text-grey-100 focus:outline'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />
                                ) : (<FaBars className='h-6 w-6' />)
                            }</button>
                    </div>
                </div>

                <div className={`space-y-4 px-4 mt-16 py- bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => (<Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-900 hover:text-brandPrimary first:font-medium'>{link}</Link>
                        ))}
                </div>
            </nav>
        </header>
    )
}
