import { FaGithub, FaExternalLinkAlt, FaRocket, FaBrain, FaComments, FaShoppingCart } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTensorflow, SiSocketdotio, SiTailwindcss, SiExpress, SiRedux } from 'react-icons/si';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.05 });

    const projects = [
        {
            title: 'ShopHub - E-Commerce Platform',
            subtitle: 'Full-Stack MERN Marketplace',
            description: 'Comprehensive, production-ready e-commerce platform with multi-role system featuring customer portal, seller dashboard, and admin panel with modern UI/UX and robust backend architecture.',
            icon: <FaShoppingCart className="text-5xl" />,
            gradient: 'from-orange-400 via-red-400 to-pink-400',
            technologies: [
                { name: 'React 18', icon: <SiReact />, color: 'bg-cyan-100 text-cyan-700' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-100 text-green-700' },
                { name: 'Express.js', icon: <SiExpress />, color: 'bg-gray-100 text-gray-700' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-emerald-100 text-emerald-700' },
                { name: 'Redux Toolkit', icon: <SiRedux />, color: 'bg-purple-100 text-purple-700' },
                { name: 'Tailwind', icon: <SiTailwindcss />, color: 'bg-sky-100 text-sky-700' },
            ],
            features: [
                'Multi-Role System (Customer/Seller/Admin)',
                'Shopping Cart & Secure Checkout',
                'Seller Analytics Dashboard',
                'JWT-Based RBAC Authentication',
                'Real-time Inventory Management',
            ],
            impact: 'Scalable e-commerce solution with role-based access control, comprehensive order tracking, seller analytics with CSV export, and production-ready features demonstrating full-stack expertise.',
            github: 'https://github.com',
            live: null,
        },
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

                {/* Projects Grid - Single Row */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8 group/container">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group/card bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl border border-gray-700/30 overflow-hidden transition-all duration-500 lg:group-hover/container:[&:not(:hover)]:flex-[0.8] lg:hover:flex-[1.5] lg:flex-1 hover:scale-105 hover:-translate-y-2 hover:shadow-purple-500/20 hover:border-purple-500/50 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-20'
                                }`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Project Thumbnail */}
                            <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                                <div className="relative z-10 text-white drop-shadow-lg transform group-hover/card:scale-110 transition-transform duration-500">
                                    {project.icon}
                                </div>
                                {/* Floating Orbs */}
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full blur-xl animate-pulse-slow"></div>
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-100 mb-1">{project.title}</h3>
                                <p className="text-sm font-medium text-purple-400 mb-2">{project.subtitle}</p>

                                {/* Description */}
                                <p className="text-gray-300 text-sm leading-relaxed mb-3 font-light line-clamp-3 group-hover/card:line-clamp-none">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-3">
                                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Key Features</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {project.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full text-xs font-medium border border-purple-500/50"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Impact Box */}
                                <div className="mb-3 p-2 bg-blue-900/20 rounded-xl border-l-3 border-l-4 border-blue-400">
                                    <p className="text-xs text-gray-200 font-light leading-relaxed">
                                        <span className="font-semibold text-blue-400">Impact:</span> {project.impact}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech, i) => (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-1 px-2 py-1 ${tech.color} rounded-lg text-xs font-medium transition-transform hover:scale-105`}
                                            >
                                                <span className="text-xs">{tech.icon}</span>
                                                <span className="text-xs">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex gap-2">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900 text-white rounded-xl font-semibold text-xs hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-xs hover:shadow-lg transition-all duration-300 hover:scale-105"
                                        >
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


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
