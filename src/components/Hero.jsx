import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiNextdotjs, SiGit } from 'react-icons/si';
import SplitText from './SplitText';
import CircularText from './CircularText';
import me from '../assets/me.jpeg';

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
    const intervalRef = useRef(null);

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

    const orbitIcons = [
        { icon: <SiReact />, name: 'React', color: 'text-cyan-500' },
        { icon: <SiNodedotjs />, name: 'Node.js', color: 'text-green-600' },
        { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-500' },
        { icon: <SiExpress />, name: 'Express', color: 'text-gray-700' },
        { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-600' },
        { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-teal-500' },
        { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-gray-900' },
        { icon: <SiGit />, name: 'Git', color: 'text-orange-600' },
    ];

    return (
        <section id="home" className="min-h-screen relative overflow-hidden">

            {/* ═══════════════════════════════════════════════
                APPLE-STYLE INTRO OVERLAY
            ═══════════════════════════════════════════════ */}
            {introPhase !== 'done' && (
                <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-all duration-700 ease-in-out ${
                    introPhase === 'fading'
                        ? 'opacity-0 scale-110'
                        : 'opacity-100 scale-100'
                }`}>
                    <div className="text-center relative">
                        {/* Greeting text */}
                        <h1
                            key={currentGreeting}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight animate-greeting-in"
                            style={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #a855f7 50%, #ec4899 75%, #3b82f6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            {greetings[currentGreeting].text}
                        </h1>

                        {/* Subtle dot below */}
                        <div className="mt-8 flex justify-center gap-1.5">
                            {greetings.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                        i === currentGreeting
                                            ? 'bg-purple-500 scale-125'
                                            : i < currentGreeting
                                                ? 'bg-gray-300'
                                                : 'bg-gray-200'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ═══════════════════════════════════════════════
                MAIN HERO CONTENT (revealed after intro)
            ═══════════════════════════════════════════════ */}
            <div className={`min-h-screen flex items-center pt-20 pb-12 relative transition-all duration-1000 ${
                introPhase === 'done' ? 'opacity-100' : 'opacity-0'
            }`}>
                {/* Subtle background grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}></div>

                {/* Accent blobs */}
                <div className="absolute top-32 -left-20 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>

                <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className={`order-2 lg:order-1 space-y-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                            {/* Headline */}
                            <div>
                                <h1 className="text-4xl min-[360px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                                    Rohith
                                    <br />
                                    <span className="gradient-text">Sunilkumar</span>
                                </h1>
                                <p className="mt-4 text-lg font-medium text-gray-500 tracking-wide uppercase">
                                    Full Stack Developer | Flutter Developer
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                I craft <span className="font-semibold text-gray-900">performant web applications</span> with
                                the MERN stack, bringing ideas to life through clean architecture,
                                secure APIs, and pixel-perfect interfaces.
                            </p>

                            {/* Tech stack row */}
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Tech Stack</span>
                                <div className="h-4 w-px bg-gray-300"></div>
                                <div className="flex gap-3">
                                    {techStack.map((tech, i) => (
                                        <div
                                            key={i}
                                            className={`text-2xl ${tech.color} hover:scale-125 transition-transform duration-300 cursor-default`}
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
                                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300" title="GitHub">
                                    <FaGithub size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/rohithsunilkumar" target="_blank" rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300" title="LinkedIn">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-xl font-semibold shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    View My Work
                                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                                <a
                                    href="/resume.pdf"
                                    download="Rohith_Resume.pdf"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <FaDownload className="text-sm" /> Resume
                                </a>
                            </div>

                            {/* Social row (desktop only) */}
                            <div className="hidden lg:flex items-center gap-5 pt-2">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300" title="GitHub">
                                    <FaGithub size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/rohithsunilkumar" target="_blank" rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300" title="LinkedIn">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className={`orbit-container order-1 lg:order-2 relative flex items-center justify-center pt-14 pb-14 lg:pt-0 lg:pb-0 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                            {/* Spinning orbit ring with icons */}
                            <div 
                                className="absolute inset-0 m-auto animate-spin-slow"
                                style={{
                                    width: 'calc(var(--orbit-radius) * 2)',
                                    height: 'calc(var(--orbit-radius) * 2)',
                                }}
                            >
                                {orbitIcons.map((item, i) => {
                                    const angle = (360 / orbitIcons.length) * i;
                                    return (
                                        <div
                                            key={i}
                                            className="absolute top-1/2 left-1/2"
                                            style={{
                                                transform: `rotate(${angle}deg) translateX(var(--orbit-radius)) rotate(-${angle}deg)`,
                                                marginTop: 'var(--orbit-item-margin)',
                                                marginLeft: 'var(--orbit-item-margin)',
                                            }}
                                        >
                                            {/* Counter-rotate so icons stay upright */}
                                            <div
                                                className="animate-counter-spin"
                                                title={item.name}
                                            >
                                                <div className={`w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg shadow-gray-200/80 border border-gray-100 flex items-center justify-center text-xl ${item.color} hover:scale-125 hover:shadow-xl transition-all duration-300 cursor-default`}>
                                                    {item.icon}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Photo container - Round */}
                            <div className="relative group z-10">
                                <div className="absolute -inset-2 bg-black rounded-full opacity-[0.05] group-hover:opacity-[0.08] blur-xl transition-opacity duration-700"></div>
                                <div 
                                    className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-gray-300/50"
                                    style={{
                                        width: 'var(--profile-size)',
                                        height: 'var(--profile-size)',
                                    }}
                                >
                                    <img
                                        src={me}
                                        alt="Rohith Sunilkumar"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
