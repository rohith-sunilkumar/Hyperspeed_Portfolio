import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaBrain, FaRobot } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiSocketdotio, SiTensorflow, SiOpenai, SiJsonwebtokens, SiHuggingface } from 'react-icons/si';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

    const skillCategories = [
        {
            title: 'Frontend Ecosystem',
            skills: [
                { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400', bg: 'bg-gray-800/30', border: 'border-cyan-500/30' },
                { name: 'JavaScript (ES6+)', icon: <FaJs />, color: 'text-yellow-400', bg: 'bg-gray-800/30', border: 'border-yellow-500/30' },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400', bg: 'bg-gray-800/30', border: 'border-teal-500/30' },
                { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500', bg: 'bg-gray-800/30', border: 'border-orange-500/30' },
                { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500', bg: 'bg-gray-800/30', border: 'border-blue-500/30' },
            ],
        },
        {
            title: 'Backend & Architecture',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', bg: 'bg-gray-800/30', border: 'border-green-500/30' },
                { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-200', bg: 'bg-gray-800/50', border: 'border-gray-700' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600', bg: 'bg-gray-800/30', border: 'border-green-500/30' },
                { name: 'REST APIs', icon: <FaDatabase />, color: 'text-purple-500', bg: 'bg-gray-800/30', border: 'border-purple-500/30' },
                { name: 'JWT Auth', icon: <SiJsonwebtokens />, color: 'text-pink-500', bg: 'bg-gray-800/30', border: 'border-pink-500/30' },
            ],
        },
        {
            title: 'AI & Real-Time',
            skills: [
                { name: 'Socket.io', icon: <SiSocketdotio />, color: 'text-gray-200', bg: 'bg-gray-800/50', border: 'border-gray-700' },
                { name: 'OpenAI API', icon: <SiOpenai />, color: 'text-teal-600', bg: 'bg-gray-800/30', border: 'border-teal-500/30' },
                { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-500', bg: 'bg-gray-800/30', border: 'border-orange-500/30' },
                { name: 'Hugging Face', icon: <SiHuggingface />, color: 'text-yellow-500', bg: 'bg-gray-800/30', border: 'border-yellow-500/30' },
            ],
        },
        {
            title: 'Tools & DevOps',
            skills: [
                { name: 'Git & GitHub', icon: <FaGitAlt />, color: 'text-orange-600', bg: 'bg-gray-800/30', border: 'border-orange-500/30' },
                { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500', bg: 'bg-gray-800/30', border: 'border-orange-500/30' },
            ],
        },
    ];

    return (
        <section ref={sectionRef} id="skills" className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Proficiency</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                        A comprehensive toolset for building scalable, high-performance web applications with a focus on modern MERN stack and AI integration.
                    </p>
                </div>

                <div className="grid gap-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className={`transition-all duration-700 ${isVisible
                                ? 'opacity-100 translate-x-0'
                                : categoryIndex % 2 === 0
                                    ? 'opacity-0 -translate-x-20'
                                    : 'opacity-0 translate-x-20'
                                }`}
                            style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className={`group flex flex-col items-center justify-center p-6 rounded-2xl border ${skill.border} ${skill.bg} hover:bg-gray-700/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default ${isVisible
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-75'
                                            }`}
                                        style={{
                                            transitionDelay: `${categoryIndex * 150 + skillIndex * 80}ms`,
                                            transitionDuration: '500ms'
                                        }}
                                    >
                                        <div className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-sm`}>
                                            {skill.icon}
                                        </div>
                                        <h4 className="font-semibold text-gray-200 text-sm md:text-base text-center group-hover:text-gray-100 transition-colors">
                                            {skill.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
