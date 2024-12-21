'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsHeaderTransparent(true);
            } else {
                setIsHeaderTransparent(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                isHeaderTransparent ? 'bg-transparent' : `${isDarkMode ? 'dark:bg-gray-800' : 'bg-transparent'}`
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4">
                 <Link href="/" className={`text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 ${isHeaderTransparent ? 'hidden md:block' : ''}`}>
                     My Portfolio
                 </Link>
                <div className={`hidden md:flex items-center gap-4 ${isHeaderTransparent ? 'hidden' : ''}`}>
                    <Link href="/about" className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                        About
                    </Link>
                    <Link href="/projects" className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                        Projects
                    </Link>
                   <Link href="/contact" className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                        Blog
                    </Link>
                     <Link href="/blog" className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                         Contact
                        </Link>
                </div>


                <div
                    className={`absolute top-1 right-1 flex items-center gap-4`}
                >
                    <button
                        className=" border-none  cursor-pointer transition-colors duration-300 flex items-center md:mt-1"
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={`w-6 h-6 ${isHeaderTransparent ? (isDarkMode ? 'text-white' : 'text-black') : 'text-gray-900 dark:text-white'}`}

                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={`w-6 h-6 ${isHeaderTransparent ? (isDarkMode ? 'text-white' : 'text-black') : 'text-gray-900 dark:text-white'}`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                />
                            </svg>
                        )}
                    </button>
                     <button
                        onClick={toggleMenu}
                        className="md:hidden border-none cursor-pointer transition-colors duration-300 flex items-center"
                    >
                         <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-6 h-6 ${isHeaderTransparent ? (isDarkMode ? 'text-white' : 'text-black') : 'text-gray-900 dark:text-white'}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className={`md:hidden absolute top-12 right-0 z-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800">
                        <Link href="/about" className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                            About
                        </Link>
                        <Link href="/projects" className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                            Projects
                        </Link>
                       <Link href="/contact" className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                            Blog
                        </Link>
                         <Link href="/blog" className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                             Contact
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}