'use client';

import { useState } from 'react';
import { FaReact, FaNodeJs, FaBrain, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaLock, FaTimes, FaArrowRight } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiSocketdotio, SiTensorflow, SiOpenai, SiJsonwebtokens, SiHuggingface, SiTypescript, SiNextdotjs, SiBootstrap, SiFlutter, SiMysql, SiDigitalocean, SiNginx, SiVercel, SiDocker, SiGithubactions } from 'react-icons/si';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
    const [activeCategory, setActiveCategory] = useState(null);

    const skillCategories = [
        {
            title: 'Frontend Ecosystem',
            subtitle: 'User Interface & State Systems',
            icon: <FaReact className="text-3xl" />,
            gradient: 'from-cyan-400 via-teal-400 to-blue-500',
            description: 'Building client-side applications with component frameworks, typing systems, and fluid layouts.',
            skills: [
                { name: 'React.js', icon: <FaReact />, color: 'text-cyan-500' },
                { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-900' },
                { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
                { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-500' },
                { name: 'Flutter', icon: <SiFlutter />, color: 'text-blue-400' },
                { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-650' },
                { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
                { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-600' },
            ],
        },
        {
            title: 'Backend & Databases',
            subtitle: 'APIs, Schemas & Server Control',
            icon: <FaNodeJs className="text-3xl" />,
            gradient: 'from-green-400 via-emerald-500 to-teal-500',
            description: 'Architecting scalable server platforms, secure database integrations, and transactional security logic.',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
                { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-700' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
                { name: 'MySQL', icon: <SiMysql />, color: 'text-sky-600' },
                { name: 'REST APIs', icon: <FaDatabase />, color: 'text-purple-650' },
                { name: 'JWT Security', icon: <SiJsonwebtokens />, color: 'text-pink-500' },
                { name: 'API Guarding', icon: <FaLock />, color: 'text-red-500' },
            ],
        },
        {
            title: 'AI & Real-Time',
            subtitle: 'Intelligent Vectors & WebSockets',
            icon: <FaBrain className="text-3xl" />,
            gradient: 'from-purple-400 via-pink-500 to-rose-500',
            description: 'Leveraging large language models, neural network vectors, and real-time duplex connections.',
            skills: [
                { name: 'Socket.io', icon: <SiSocketdotio />, color: 'text-gray-800' },
                { name: 'OpenAI API', icon: <SiOpenai />, color: 'text-teal-600' },
                { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-500' },
                { name: 'Hugging Face', icon: <SiHuggingface />, color: 'text-yellow-600' },
            ],
        },
        {
            title: 'Tools & DevOps',
            subtitle: 'Containers, Pipelines & Cloud Platforms',
            icon: <SiDocker className="text-3xl" />,
            gradient: 'from-blue-500 via-indigo-500 to-purple-600',
            description: 'Containerizing services, deploying reverse proxies, and maintaining cloud platforms.',
            skills: [
                { name: 'Git & GitHub', icon: <FaGitAlt />, color: 'text-orange-600' },
                { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
                { name: 'CI/CD & Actions', icon: <SiGithubactions />, color: 'text-gray-900' },
                { name: 'DigitalOcean', icon: <SiDigitalocean />, color: 'text-blue-450' },
                { name: 'Nginx & PM2', icon: <SiNginx />, color: 'text-green-600' },
                { name: 'Vercel / Render', icon: <SiVercel />, color: 'text-gray-900' },
                { name: 'Postman Testing', icon: <SiPostman />, color: 'text-orange-500' },
            ],
        },
    ];

    const handleCardClick = (idx) => {
        if (activeCategory === idx) {
            setActiveCategory(null);
        } else {
            setActiveCategory(idx);
        }
    };

    const isDrawerOpen = activeCategory !== null;

    return (
        <section ref={sectionRef} id="skills" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-[#fdfbf8] transition-all duration-400">
            
            {/* Click-away backdrop to close the drawer */}
            {isDrawerOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-[#000000]/10 backdrop-blur-[1px] cursor-pointer"
                    onClick={() => setActiveCategory(null)}
                />
            )}

            <div className={`w-full px-4 sm:px-8 lg:px-12 transition-all duration-400 ease-in-out relative z-10 ${
                isDrawerOpen ? 'lg:pr-[400px] xl:pr-[460px]' : ''
            }`}>
                
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                }`}>
                    <h2 className="text-4xl md:text-5xl font-medium text-[#000000] mb-4 tracking-tight">
                        Technical <span className="font-serif italic text-[#2d62ff]">proficiency</span>
                    </h2>
                    <p className="text-[#7b7b7a] text-base md:text-lg max-w-2xl mx-auto font-normal">
                        Select a category below to explore my technical skills and toolsets
                    </p>
                </div>

                {/* 4 Bento Cards layout */}
                <div className="flex flex-wrap gap-6 justify-center w-full transition-all duration-400 ease-in-out">
                    {skillCategories.map((cat, idx) => {
                        const isActive = activeCategory === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => handleCardClick(idx)}
                                className={`text-left p-6 rounded-[16px] border flex flex-col justify-between h-64 relative overflow-hidden group transition-all duration-400 ease-in-out ${
                                    isDrawerOpen 
                                        ? 'w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]' 
                                        : 'w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]'
                                } ${
                                    isActive 
                                        ? 'bg-[#fdfbf8] border-[#2d62ff] shadow-sm scale-[1.01]' 
                                        : 'bg-[#fdfbf8] border-[#d9d9d9] hover:border-[#2d62ff] hover:scale-[1.01] shadow-sm'
                                }`}
                            >
                                <div className="relative z-10 w-full">
                                    <div className="flex items-center justify-between mb-5 w-full">
                                        {/* Icon wrapper */}
                                        <div className={`w-12 h-12 rounded-[13px] border flex items-center justify-center transition-all duration-200 ${
                                            isActive 
                                                ? 'bg-[#2d62ff] text-[#fdfbf8] border-[#2d62ff]' 
                                                : 'bg-[#fdfbf8] border-[#d9d9d9] text-[#000000] group-hover:border-[#2d62ff] group-hover:text-[#2d62ff]'
                                        }`}>
                                            {cat.icon}
                                        </div>
                                        
                                        {/* Arrow indicator */}
                                        <div className={`text-[#7b7b7a] group-hover:text-[#2d62ff] transition-all duration-200 ${
                                            isActive ? 'rotate-90 text-[#2d62ff]' : 'group-hover:translate-x-1'
                                        }`}>
                                            <FaArrowRight className="text-xs" />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-medium text-[#000000] group-hover:text-[#2d62ff] transition-colors">
                                        {cat.title}
                                    </h3>
                                    <p className="text-xs text-[#2d62ff] font-medium mt-1 font-mono">
                                        {cat.subtitle}
                                    </p>
                                </div>

                                <p className="text-xs text-[#333333] mt-4 leading-relaxed font-normal relative z-10">
                                    {cat.description}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ═══════════════════════════════════════════════
                RIGHT-SIDE SLIDE OUT DRAWER
            ═══════════════════════════════════════════════ */}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] xl:w-[460px] bg-[#fdfbf8] border-l border-[#d9d9d9] shadow-2xl z-50 flex flex-col transition-all duration-400 ease-in-out ${
                isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                {isDrawerOpen && (
                    <>
                        {/* Drawer Header */}
                        <div className="p-6 md:p-8 border-b border-[#d9d9d9] flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-mono text-[#2d62ff] font-medium uppercase tracking-widest">
                                    Skills stack
                                </span>
                                <h3 className="text-2xl font-medium text-[#000000] mt-1">
                                    {skillCategories[activeCategory].title}
                                </h3>
                                <p className="text-xs text-[#7b7b7a] font-medium font-mono mt-0.5">
                                    {skillCategories[activeCategory].subtitle}
                                </p>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={() => setActiveCategory(null)}
                                className="w-9 h-9 rounded-[100px] border border-[#d9d9d9] flex items-center justify-center text-[#7b7b7a] hover:text-[#ee4b2b] hover:border-[#ee4b2b] transition-all duration-200"
                                title="Close drawer"
                            >
                                <FaTimes size={14} />
                            </button>
                        </div>

                        {/* Drawer Body - Scrollable */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                            
                            {/* Summary description */}
                            <div className="bg-[#fdfbf8] p-5 rounded-[13px] border border-[#d9d9d9]">
                                <p className="text-sm text-[#333333] leading-relaxed font-normal">
                                    {skillCategories[activeCategory].description}
                                </p>
                            </div>

                            {/* Tools list */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-medium text-[#7b7b7a] uppercase tracking-widest">
                                    Tools & frameworks
                                </h4>
                                
                                <div className="grid grid-cols-1 gap-2.5">
                                    {skillCategories[activeCategory].skills.map((skill, sIdx) => (
                                        <div 
                                            key={sIdx}
                                            className="flex items-center justify-between p-4 bg-[#fdfbf8] border border-[#d9d9d9] hover:border-[#2d62ff] rounded-[13px] transition-all duration-200 group/item"
                                        >
                                            <div className="flex items-center gap-4">
                                                {/* Skill logo */}
                                                <div className="text-2xl text-[#000000] group-hover/item:text-[#2d62ff] transition-colors">
                                                    {skill.icon}
                                                </div>
                                                <span className="text-sm font-medium text-[#333333] group-hover/item:text-[#000000] transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>

                                            {/* Small badge */}
                                            <span className="text-[10px] bg-[#2d62ff]/10 text-[#2d62ff] px-2.5 py-0.5 rounded-[100px] font-medium opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                                                Proficient
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </section>
    );
};

export default Skills;
