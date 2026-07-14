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

    const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

    const scrollToSection = (section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md border-gray-200/50' : 'bg-transparent border-transparent'
                }`}
        >
            <div className="w-full px-4 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('home')}>
                        Fullstack Developer
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 animate-slide-down">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-300"
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
