'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'Skills', 'Experience', 'Projects', 'Contact'];

    const scrollToSection = (section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            // note: bramvanvugt.com header navigation hidden at top (scroll 0) and smoothly revealed on scroll
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b ${
                isScrolled
                    ? 'bg-[#fdfbf8]/95 backdrop-blur-md shadow-sm border-[#d9d9d9] translate-y-0 opacity-100 pointer-events-auto'
                    : '-translate-y-full opacity-0 pointer-events-none border-transparent'
            }`}
        >
            <div className="w-full px-4 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center h-16">
                    <div 
                        className="text-xl min-[360px]:text-2xl font-medium tracking-tight text-[#000000] cursor-pointer font-sans" 
                        onClick={() => scrollToSection('home')}
                    >
                        Fullstack <span className="font-serif italic text-[#2d62ff]">Developer</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-[#333333] hover:text-[#2d62ff] font-medium text-sm transition-colors duration-200 relative group py-1"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2d62ff] group-hover:w-full transition-all duration-200"></span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#333333] hover:text-[#2d62ff] transition-colors p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#fdfbf8] backdrop-blur-md shadow-lg border-b border-[#d9d9d9] animate-slide-down">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left px-4 py-2.5 text-[#333333] hover:bg-[#2d62ff]/10 hover:text-[#2d62ff] rounded-[13px] font-medium transition-all duration-200"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
