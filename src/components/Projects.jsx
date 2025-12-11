import { FaGithub, FaExternalLinkAlt, FaRocket, FaBrain, FaComments } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTensorflow, SiSocketdotio, SiTailwindcss } from 'react-icons/si';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.05 });

    const projects = [
        {
            title: 'Smart City Civic Issue Management',
            subtitle: 'AI-Powered Urban Infrastructure Platform',
            description: 'Comprehensive citizen engagement platform enabling residents to report civic issues with intelligent automation and real-time communication.',
            icon: <FaRocket className="text-5xl" />,
            gradient: 'from-blue-400 via-cyan-400 to-teal-400',
            technologies: [
                { name: 'React 18', icon: <SiReact />, color: 'bg-cyan-100 text-cyan-700' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-100 text-green-700' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-emerald-100 text-emerald-700' },
                { name: 'TensorFlow', icon: <SiTensorflow />, color: 'bg-orange-100 text-orange-700' },
                { name: 'Socket.io', icon: <SiSocketdotio />, color: 'bg-purple-100 text-purple-700' },
                { name: 'Tailwind', icon: <SiTailwindcss />, color: 'bg-sky-100 text-sky-700' },
            ],
            features: [
                'AI Image Classification (85-92% accuracy)',
                'Real-time Department Messaging',
                'Geospatial Issue Tracking',
                'Analytics Dashboard with Recharts',
                'Role-based Access Control',
            ],
            impact: 'Streamlined civic issue reporting with automatic priority assignment and department routing, enabling efficient resource allocation and faster resolution times.',
            github: 'https://github.com',
            live: null,
        },
        {
            title: 'Finding - Developer Networking',
            subtitle: 'AI-Powered Professional Connections',
            description: 'Social networking platform for developers featuring intelligent skill matching using Hugging Face transformers and real-time communication.',
            icon: <FaBrain className="text-5xl" />,
            gradient: 'from-purple-400 via-pink-400 to-rose-400',
            technologies: [
                { name: 'React 18', icon: <SiReact />, color: 'bg-cyan-100 text-cyan-700' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-100 text-green-700' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-emerald-100 text-emerald-700' },
                { name: 'Socket.IO', icon: <SiSocketdotio />, color: 'bg-purple-100 text-purple-700' },
                { name: 'Hugging Face', icon: <FaBrain />, color: 'bg-yellow-100 text-yellow-700' },
                { name: 'Tailwind', icon: <SiTailwindcss />, color: 'bg-sky-100 text-sky-700' },
            ],
            features: [
                'AI Skill Matching with Transformers',
                'Real-time Chat & Notifications',
                'Social Posts & Interactions',
                'Advanced Search & Filters',
                'Portfolio Showcase',
            ],
            impact: 'Intelligent developer recommendations based on skills and interests, enabling meaningful professional connections and collaboration opportunities.',
            github: 'https://github.com',
            live: null,
        },
        {
            title: 'Real-Time Chat Application',
            subtitle: 'Enterprise-Grade Messaging Platform',
            description: 'Full-stack MERN application with real-time messaging, JWT authentication with OTP verification, and WebRTC voice/video calling.',
            icon: <FaComments className="text-5xl" />,
            gradient: 'from-indigo-400 via-blue-400 to-cyan-400',
            technologies: [
                { name: 'React', icon: <SiReact />, color: 'bg-cyan-100 text-cyan-700' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-100 text-green-700' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-emerald-100 text-emerald-700' },
                { name: 'Socket.IO', icon: <SiSocketdotio />, color: 'bg-purple-100 text-purple-700' },
                { name: 'Tailwind', icon: <SiTailwindcss />, color: 'bg-sky-100 text-sky-700' },
            ],
            features: [
                'Real-time Messaging & Typing',
                'Group Chat Functionality',
                'Voice/Video Calls (WebRTC)',
                'OTP Email Verification',
                'Read Receipts & Status',
            ],
            impact: 'Scalable messaging platform with enterprise-grade security, modern communication features, and seamless user experience.',
            github: 'https://github.com',
            live: null,
        },
    ];

    return (
        <section ref={sectionRef} id="projects" className="min-h-screen flex items-center justify-center py-16 px-4">
            <div className="max-w-7xl mx-auto w-full">
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-3">Featured Projects</h2>
                    <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
                        Full-stack applications with AI integration, real-time features, and modern architectures
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    {projects.slice(0, 2).map((project, index) => (
                        <div
                            key={index}
                            className={`group bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl border border-gray-700/30 overflow-hidden transition-all duration-700 hover:scale-[1.02] ${isVisible
                                ? 'opacity-100 translate-x-0 scale-100'
                                : index % 2 === 0
                                    ? 'opacity-0 -translate-x-20 scale-95'
                                    : 'opacity-0 translate-x-20 scale-95'
                                }`}
                            style={{ transitionDelay: `${200 + index * 200}ms` }}
                        >
                            {/* Project Thumbnail */}
                            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                                <div className="relative z-10 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                                    {project.icon}
                                </div>
                                {/* Floating Orbs */}
                                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse-slow"></div>
                                <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-100 mb-1">{project.title}</h3>
                                <p className="text-base font-medium text-purple-400 mb-3">{project.subtitle}</p>

                                {/* Description */}
                                <p className="text-gray-300 text-base leading-relaxed mb-4 font-light">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Key Features</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500/50"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Impact Box */}
                                <div className="mb-4 p-3 bg-blue-900/20 rounded-xl border-l-3 border-l-4 border-blue-400">
                                    <p className="text-sm text-gray-200 font-light leading-relaxed">
                                        <span className="font-semibold text-blue-400">Impact:</span> {project.impact}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-5">
                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-1.5 px-2.5 py-1.5 ${tech.color} rounded-lg text-xs font-medium transition-transform hover:scale-105`}
                                            >
                                                <span className="text-sm">{tech.icon}</span>
                                                <span>{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            <FaGithub /> GitHub Repo
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                                        >
                                            <FaExternalLinkAlt /> View Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Third Project - Full Width */}
                {projects.slice(2, 3).map((project, index) => (
                    <div
                        key={index + 2}
                        className={`group bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl border border-gray-700/30 overflow-hidden transition-all duration-700 hover:scale-[1.01] mb-8 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                            }`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        <div className="grid md:grid-cols-5 gap-0">
                            {/* Project Thumbnail */}
                            <div className={`md:col-span-2 relative h-64 md:h-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                                <div className="relative z-10 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                                    {project.icon}
                                </div>
                                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse-slow"></div>
                                <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                            </div>

                            {/* Card Content */}
                            <div className="md:col-span-3 p-6">
                                <h3 className="text-2xl font-bold text-gray-100 mb-1">{project.title}</h3>
                                <p className="text-base font-medium text-purple-400 mb-3">{project.subtitle}</p>
                                <p className="text-gray-300 text-base leading-relaxed mb-4 font-light">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Features</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.features.map((feature, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-100">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-400">
                                    <p className="text-xs text-gray-700 font-light leading-relaxed">
                                        <span className="font-semibold text-blue-700">Impact:</span> {project.impact}
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <div key={i} className={`flex items-center gap-1.5 px-2.5 py-1.5 ${tech.color} rounded-lg text-xs font-medium transition-transform hover:scale-105`}>
                                                <span className="text-sm">{tech.icon}</span>
                                                <span>{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                            <FaGithub /> GitHub Repo
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                                            <FaExternalLinkAlt /> View Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Technical Expertise */}
                <div className={`bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-700/30 p-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`} style={{ transitionDelay: '800ms' }}>
                    <h3 className="text-2xl font-bold gradient-text text-center mb-6">Technical Expertise Demonstrated</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-4 rounded-2xl bg-blue-900/20 border border-blue-500/30">
                            <div className="text-4xl mb-3">🤖</div>
                            <h4 className="font-semibold text-gray-100 mb-2">AI Integration</h4>
                            <p className="text-xs text-gray-300 font-light">TensorFlow, OpenAI GPT-4, Hugging Face transformers</p>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-purple-900/20 border border-purple-500/30">
                            <div className="text-4xl mb-3">⚡</div>
                            <h4 className="font-semibold text-gray-100 mb-2">Real-time Systems</h4>
                            <p className="text-xs text-gray-300 font-light">Socket.IO, WebRTC for instant messaging</p>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-pink-900/20 border border-pink-500/30">
                            <div className="text-4xl mb-3">🔒</div>
                            <h4 className="font-semibold text-gray-100 mb-2">Security & Scale</h4>
                            <p className="text-xs text-gray-300 font-light">JWT authentication, scalable architecture</p>
                        </div>
                    </div>
                </div>

                {/* View More */}
                <div className="text-center mt-8 animate-fade-in">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-purple-300 rounded-full font-semibold border-2 border-purple-500/50 hover:border-purple-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <FaGithub size={20} /> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
