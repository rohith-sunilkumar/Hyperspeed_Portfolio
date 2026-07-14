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
        <section ref={sectionRef} id="skills" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden transition-all duration-500">
            
            {/* Click-away backdrop to close the drawer */}
            {isDrawerOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[1px] cursor-pointer"
                    onClick={() => setActiveCategory(null)}
                />
            )}

            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className={`w-full px-4 sm:px-8 lg:px-12 transition-all duration-500 ease-in-out relative z-10 ${
                isDrawerOpen ? 'lg:pr-[400px] xl:pr-[460px]' : ''
            }`}>
                
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Proficiency</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
                        Select a category below to explore my technical skills and toolsets
                    </p>
                </div>

                {/* 4 Bento Cards layout - Animates from 4 columns to 2 columns smoothly via Flexbox width transitions */}
                <div className="flex flex-wrap gap-6 justify-center w-full transition-all duration-500 ease-in-out">
                    {skillCategories.map((cat, idx) => {
                        const isActive = activeCategory === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => handleCardClick(idx)}
                                className={`text-left p-6 rounded-3xl border flex flex-col justify-between h-64 relative overflow-hidden group transition-all duration-500 ease-in-out ${
                                    isDrawerOpen 
                                        ? 'w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]' 
                                        : 'w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]'
                                } ${
                                    isActive 
                                        ? 'bg-gray-50 border-purple-500 shadow-xl shadow-purple-500/5 scale-[1.02]' 
                                        : 'bg-gray-50/85 border-gray-200 hover:border-purple-300 hover:bg-gray-50 hover:scale-[1.01] shadow-sm'
                                }`}
                            >
                                {/* Active Glow Overlay */}
                                {isActive && (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-[0.03]`} />
                                )}

                                <div className="relative z-10 w-full">
                                    <div className="flex items-center justify-between mb-5 w-full">
                                        {/* Icon wrapper */}
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                            isActive 
                                                ? `bg-gradient-to-br ${cat.gradient} text-white shadow-md shadow-purple-500/10 scale-110` 
                                                : 'bg-gray-200 text-gray-700 group-hover:bg-purple-100 group-hover:text-purple-700 transition-all duration-500'
                                        }`}>
                                            {cat.icon}
                                        </div>
                                        
                                        {/* Arrow indicator */}
                                        <div className={`text-gray-400 group-hover:text-purple-600 transition-all duration-300 ${
                                            isActive ? 'rotate-90 translate-x-1' : 'group-hover:translate-x-1'
                                        }`}>
                                            <FaArrowRight className="text-sm" />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                                        {cat.title}
                                    </h3>
                                    <p className="text-xs text-purple-650 font-medium mt-1 font-mono">
                                        {cat.subtitle}
                                    </p>
                                </div>

                                <p className="text-xs text-gray-500 mt-4 leading-relaxed font-light relative z-10">
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
            <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] xl:w-[460px] bg-white border-l border-gray-200 shadow-2xl z-50 flex flex-col transition-all duration-500 ease-in-out ${
                isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                {isDrawerOpen && (
                    <>
                        {/* Drawer Header */}
                        <div className="p-6 md:p-8 border-b border-gray-150 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-mono text-purple-600 font-bold uppercase tracking-widest">
                                    Skills Stack
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                                    {skillCategories[activeCategory].title}
                                </h3>
                                <p className="text-xs text-purple-650 font-medium font-mono mt-0.5">
                                    {skillCategories[activeCategory].subtitle}
                                </p>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={() => setActiveCategory(null)}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all duration-300"
                                title="Close Drawer"
                            >
                                <FaTimes size={16} />
                            </button>
                        </div>

                        {/* Drawer Body - Scrollable */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                            
                            {/* Summary description */}
                            <div className="bg-gray-55 p-5 rounded-2xl border border-gray-100">
                                <p className="text-sm text-gray-600 leading-relaxed font-light">
                                    {skillCategories[activeCategory].description}
                                </p>
                            </div>

                            {/* Tools list */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                    Tools & Frameworks
                                </h4>
                                
                                <div className="grid grid-cols-1 gap-2.5">
                                    {skillCategories[activeCategory].skills.map((skill, sIdx) => (
                                        <div 
                                            key={sIdx}
                                            className="flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 border border-gray-150 hover:border-purple-250 rounded-2xl transition-all duration-300 group/item"
                                        >
                                            <div className="flex items-center gap-4">
                                                {/* Skill logo */}
                                                <div className={`text-2xl ${skill.color} transition-transform duration-300 group-hover/item:scale-110`}>
                                                    {skill.icon}
                                                    {/* Skill name */}
                                                </div>
                                                <span className="text-sm font-semibold text-gray-700 group-hover/item:text-gray-900 transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>

                                            {/* Small badge */}
                                            <span className="text-[10px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-medium opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
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
