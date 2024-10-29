import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "home", url: "/" },
        // { link: "About Us", path: "about", url: "" },
        { link: "Gallery", path: "gallery", url: "/gallery" },
        { link: "Products", path: "product", url: "/product" },
    ];

    return (
        <header id='navbar' className='w-full bg-white fixed top-0 left-0 right-0 z-50'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-white duration-300 shadow-md" : ""}`}>
                <div className='flex justify-between items-center text-base gap-3'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={Logo} alt="Logo" className='h-10 inline-block' />
                    </a>
                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        {navItems.map(({ link, path, url }) => (
                            <li key={path}>
                                {url ? (
                                    <a href={url} className='block text-base text-brandPrimary hover:text-brandSecondary first:font-medium'>
                                        {link}
                                    </a>
                                ) : (
                                    <Link 
                                        to={path} 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-100}  // Offset to account for sticky navbar
                                        duration={500}
                                        className='block text-base text-brandPrimary hover:text-brandSecondary first:font-medium cursor-pointer'
                                    >
                                        {link}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button className='bg-brandPrimary text-neutralSilver py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey'>
                            Contact Us
                        </button>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-neutralGrey focus:text-grey-100 focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                <ul className={`space-y-4 px-4 mt-16 py-4 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path, url }) => (
                        <li key={path}>
                            {url ? (
                                <a href={url} className='block text-base text-neutralSilver my-5 first:font-medium'>
                                    {link}
                                </a>
                            ) : (
                                <Link 
                                    to={path} 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-100}  // Adjust the offset for smooth scroll
                                    duration={500}
                                    className='block text-base text-neutralSilver hover:text-brandPrimary first:font-medium cursor-pointer'
                                >
                                    {link}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
