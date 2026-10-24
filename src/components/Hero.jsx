'use client';

import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiNextdotjs, SiGit } from 'react-icons/si';
import heroImg from '../assets/image.png';

/* ─── Apple-style greetings ─── */
const greetings = [
    { text: 'Hello', lang: 'English' },
    { text: 'नमस्ते', lang: 'Hindi' },
    { text: 'Hola', lang: 'Spanish' },
    { text: 'Bonjour', lang: 'French' },
    { text: 'こんにちは', lang: 'Japanese' },
    { text: '안녕하세요', lang: 'Korean' },
    { text: 'Ciao', lang: 'Italian' },
    { text: 'مرحبا', lang: 'Arabic' },
    { text: '你好', lang: 'Chinese' },
    { text: 'Olá', lang: 'Portuguese' },
    { text: 'Hallo', lang: 'German' },
    { text: 'Welcome', lang: 'Final' },
];

const Hero = () => {
    const [introPhase, setIntroPhase] = useState('greeting'); // 'greeting' | 'fading' | 'done'
    const [currentGreeting, setCurrentGreeting] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);
    const heroSectionRef = useRef(null);
    const intervalRef = useRef(null);

    /* Track desktop viewport width */
    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    /* Track scroll position inside pinned section for parallax transformations */
    useEffect(() => {
        const handleScroll = () => {
            if (!heroSectionRef.current) return;
            const rect = heroSectionRef.current.getBoundingClientRect();
            const totalScrollable = heroSectionRef.current.offsetHeight - window.innerHeight;
            if (totalScrollable <= 0) return;
            const currentScroll = -rect.top;
            const progress = Math.min(1, Math.max(0, currentScroll / totalScrollable));
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* Cycle through greetings */
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentGreeting(prev => {
                if (prev >= greetings.length - 1) {
                    clearInterval(intervalRef.current);
                    // Hold on "Welcome" briefly, then fade out
                    setTimeout(() => setIntroPhase('fading'), 800);
                    setTimeout(() => {
                        setIntroPhase('done');
                        setMounted(true);
                    }, 1600);
                    return prev;
                }
                return prev + 1;
            });
        }, 280);

        return () => clearInterval(intervalRef.current);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const techStack = [
        { icon: <SiReact />, name: 'React', color: 'text-cyan-500' },
        { icon: <SiNodedotjs />, name: 'Node.js', color: 'text-green-600' },
        { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-500' },
        { icon: <SiExpress />, name: 'Express', color: 'text-gray-700' },
        { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-500' },
        { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-teal-500' },
    ];

    return (
        <section ref={heroSectionRef} id="home" className="relative h-[200vh] w-full bg-[#fdfbf8]">

            {/* ═══════════════════════════════════════════════
                APPLE-STYLE INTRO OVERLAY
            ═══════════════════════════════════════════════ */}
            {introPhase !== 'done' && (
                <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#fdfbf8] transition-all duration-700 ease-in-out ${
                    introPhase === 'fading'
                        ? 'opacity-0 scale-105'
                        : 'opacity-100 scale-100'
                }`}>
                    <div className="text-center relative">
                        {/* Greeting text */}
                        <h1
                            key={currentGreeting}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight animate-greeting-in text-[#000000]"
                        >
                            {greetings[currentGreeting].text}
                        </h1>

                        {/* Subtle dot below */}
                        <div className="mt-8 flex justify-center gap-2">
                            {greetings.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-[100px] transition-all duration-200 ${
                                        i === currentGreeting
                                            ? 'bg-[#2d62ff] scale-125'
                                            : i < currentGreeting
                                                ? 'bg-[#7b7b7a]'
                                                : 'bg-[#d9d9d9]'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ═══════════════════════════════════════════════
                PINNED HERO CONTENT (Stays pinned in viewport while scrolling)
            ═══════════════════════════════════════════════ */}
            <div className={`sticky top-0 h-screen w-full flex items-end pt-16 pb-0 relative overflow-hidden transition-opacity duration-400 bg-[#fdfbf8] ${
                introPhase === 'done' ? 'opacity-100' : 'opacity-0'
            }`}>
                {/* Subtle background grid pattern */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}></div>

                {/* Giant Background Watermark Text: DEVELOPER */}
                <div 
                    className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0 transition-transform duration-75 ease-out"
                    style={{
                        transform: `translateY(${scrollProgress * -25}px)`,
                    }}
                >
                    <span 
                        className="text-[15vw] lg:text-[17vw] font-black uppercase tracking-tight leading-none whitespace-nowrap font-sans transition-all duration-150"
                        style={{
                            color: '#000000',
                            opacity: 0.9 - scrollProgress * 0.84, // 0.9 (bold black) -> 0.06 (watermark)
                        }}
                    >
                        DEVELOPER
                    </span>
                </div>

                <div className="w-full h-full px-4 sm:px-8 lg:px-12 relative z-10 flex items-end pb-0">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end w-full h-full">

                        {/* Left Content Column (Fades in & slides from left as scroll progresses) */}
                        <div 
                            className="lg:col-span-6 order-2 lg:order-1 space-y-8 pb-12 transition-all duration-100 ease-out"
                            style={{
                                opacity: introPhase === 'done' ? Math.max(0, scrollProgress) : 0,
                                transform: `translateX(${(1 - scrollProgress) * -60}px)`,
                                pointerEvents: scrollProgress > 0.2 ? 'auto' : 'none',
                            }}
                        >
                            {/* Headline */}
                            <div>
                                <h1 className="text-4xl min-[360px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-[#000000] leading-[1.05] font-sans">
                                    Rohith
                                    <br />
                                    <span className="font-serif italic font-normal text-[#2d62ff]">Sunilkumar</span>
                                </h1>
                                <p className="mt-4 text-sm md:text-base font-medium text-[#7b7b7a] tracking-widest uppercase">
                                    Full stack developer | Flutter developer
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-[#333333] leading-relaxed max-w-lg font-normal">
                                I craft <span className="font-medium text-[#000000]">performant web applications</span> with
                                the MERN stack, bringing ideas to life through clean architecture,
                                secure APIs, and pixel-perfect interfaces.
                            </p>

                            {/* Tech stack row */}
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-xs font-medium text-[#7b7b7a] uppercase tracking-widest">Tech stack</span>
                                <div className="h-4 w-px bg-[#d9d9d9]"></div>
                                <div className="flex gap-3">
                                    {techStack.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="text-2xl text-[#333333] hover:text-[#2d62ff] hover:scale-110 transition-all duration-200 cursor-default"
                                            title={tech.name}
                                        >
                                            {tech.icon}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile-only Social row */}
                            <div className="flex lg:hidden items-center gap-5 pt-1">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                    className="text-[#7b7b7a] hover:text-[#2d62ff] transition-colors duration-200" title="GitHub">
                                    <FaGithub size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/rohith-sunilkumar/" target="_blank" rel="noopener noreferrer"
                                    className="text-[#7b7b7a] hover:text-[#2d62ff] transition-colors duration-200" title="LinkedIn">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#000000] text-[#fdfbf8] rounded-[100px] font-medium text-sm hover:bg-[#2d62ff] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                                >
                                    View my work
                                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                                <a
                                    href="/resume.pdf"
                                    download="Rohith_Resume.pdf"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#fdfbf8] text-[#333333] rounded-[100px] font-medium text-sm border border-[#d9d9d9] hover:border-[#000000] hover:text-[#000000] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                                >
                                    <FaDownload className="text-xs" /> Resume
                                </a>
                            </div>

                            {/* Social row (desktop only) */}
                            <div className="hidden lg:flex items-center gap-5 pt-2">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                    className="text-[#7b7b7a] hover:text-[#2d62ff] transition-colors duration-200" title="GitHub">
                                    <FaGithub size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/rohith-sunilkumar/" target="_blank" rel="noopener noreferrer"
                                    className="text-[#7b7b7a] hover:text-[#2d62ff] transition-colors duration-200" title="LinkedIn">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Right / Center Photo Column (Flush at bottom edge with 0 gap) */}
                        <div className="lg:col-span-6 order-1 lg:order-2 relative flex items-end justify-center h-full">

                            <div 
                                className="relative flex items-end justify-center w-full h-[70vh] sm:h-[78vh] lg:h-[84vh] transition-transform duration-100 ease-out"
                                style={{
                                    transform: isDesktop 
                                        ? `translateX(calc(-25vw * ${1 - scrollProgress})) scale(${1 + (1 - scrollProgress) * 0.04})`
                                        : `scale(${1 + (1 - scrollProgress) * 0.04})`,
                                }}
                            >
                                {/* Full Size Cutout Photo flush to bottom-0 */}
                                <img
                                    src={heroImg?.src || heroImg}
                                    alt="Rohith Sunilkumar"
                                    className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out"
                                />
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;
