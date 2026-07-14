import { FaGithub, FaExternalLinkAlt, FaRocket, FaLaptop, FaMobileAlt, FaComments, FaDollarSign, FaStore, FaUserCheck } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiSocketdotio, SiTailwindcss, SiExpress, SiFlutter, SiMysql, SiDart, SiSqlite } from 'react-icons/si';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.05 });

    const projects = [
        {
            title: 'Smart City Civic Issue Management Platform',
            subtitle: 'Urban Infrastructure Platform',
            description: 'Comprehensive citizen engagement platform enabling residents to report civic issues with department routing and real-time communication.',
            icon: <FaRocket className="text-5xl" />,
            gradient: 'from-blue-400 via-cyan-400 to-teal-400',
            technologies: [
                { name: 'React', icon: <SiReact />, color: 'bg-cyan-50 text-cyan-700 border-cyan-100' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-50 text-green-700 border-green-100' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
                { name: 'Socket.io', icon: <SiSocketdotio />, color: 'bg-purple-50 text-purple-700 border-purple-100' },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-sky-50 text-sky-700 border-sky-100' },
            ],
            features: [
                'Geospatial Issue Tracking',
                'Real-time Department Messaging',
                'Analytics Dashboard',
                'Role-based Access Control',
                'Automatic Priority Assignment',
            ],
            impact: 'Streamlined civic issue reporting with automatic priority assignment and department routing, enabling efficient resource allocation and faster resolution times.',
            github: 'https://github.com/rohith-sunilkumar',
            live: null,
        },
        {
            title: 'DevMatch - Developer Networking Platform',
            subtitle: 'Professional Connections Platform',
            description: 'Social networking platform for developers featuring professional profile matching, developer connections, and real-time communications.',
            icon: <FaLaptop className="text-5xl" />,
            gradient: 'from-purple-400 via-pink-400 to-rose-400',
            technologies: [
                { name: 'React', icon: <SiReact />, color: 'bg-cyan-50 text-cyan-700 border-cyan-100' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-50 text-green-700 border-green-100' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
                { name: 'Socket.io', icon: <SiSocketdotio />, color: 'bg-purple-50 text-purple-700 border-purple-100' },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-sky-50 text-sky-700 border-sky-100' },
            ],
            features: [
                'Profile Matching Algorithm',
                'Real-time Chat & Alerts',
                'Social Feed & Interactions',
                'Admin Management Systems',
                'Advanced Search & Filters',
            ],
            impact: 'Facilitates developer recommendations based on skills and interests, enabling meaningful professional connections and collaboration opportunities.',
            github: 'https://github.com/rohith-sunilkumar',
            live: null,
        },
        {
            title: 'Real-Time Communication Platform',
            subtitle: 'WebRTC Video & Messaging client',
            description: 'Advanced communication suite supporting group chat messaging, online presence, read receipts, and real-time peer-to-peer media streams.',
            icon: <FaComments className="text-5xl" />,
            gradient: 'from-indigo-400 via-blue-400 to-cyan-400',
            technologies: [
                { name: 'React', icon: <SiReact />, color: 'bg-cyan-50 text-cyan-700 border-cyan-100' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-50 text-green-700 border-green-100' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
                { name: 'Socket.io', icon: <SiSocketdotio />, color: 'bg-purple-50 text-purple-700 border-purple-100' },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-sky-50 text-sky-700 border-sky-100' },
            ],
            features: [
                'WebRTC Voice & Video Calls',
                'Screen Sharing & Group Chat',
                'Online Presence & Status',
                'Read Receipts & File Sharing',
                'Push Notification Alerts',
            ],
            impact: 'Proves real-time engineering by establishing direct peer connections and high-throughput websocket rooms for enterprise messaging.',
            github: 'https://github.com/rohith-sunilkumar',
            live: null,
        },
        {
            title: 'Offline-First Personal Finance Tracker',
            subtitle: 'Flutter & SQLite Mobile App',
            description: 'Feature-rich mobile financial application built with Flutter/Dart, prioritizing offline local performance and automatic expense tracking.',
            icon: <FaDollarSign className="text-5xl" />,
            gradient: 'from-teal-400 via-emerald-400 to-green-400',
            technologies: [
                { name: 'Flutter', icon: <SiFlutter />, color: 'bg-blue-50 text-blue-700 border-blue-100' },
                { name: 'Dart', icon: <SiDart />, color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
                { name: 'SQLite', icon: <SiSqlite />, color: 'bg-sky-50 text-sky-700 border-sky-100' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-50 text-green-700 border-green-100' },
            ],
            features: [
                'Expense Categorization',
                'Budgets & Recurring Transactions',
                'Interactive Financial Charts',
                'SQLite Storage & Cloud Sync',
                'Biometric Lock & PDF Reports',
            ],
            impact: 'Demonstrates serious mobile architecture by optimizing local storage SQLite performance, securing biometric authentication, and creating data reports.',
            github: 'https://github.com/rohith-sunilkumar',
            live: null,
        },
        {
            title: 'Hyperlocal Service Marketplace App',
            subtitle: 'Service Booking Platform',
            description: 'On-demand services app connecting clients with local verified professionals (plumbers, cleaners, mechanics) in real-time.',
            icon: <FaStore className="text-5xl" />,
            gradient: 'from-orange-400 via-amber-400 to-yellow-500',
            technologies: [
                { name: 'Flutter', icon: <SiFlutter />, color: 'bg-blue-50 text-blue-700 border-blue-100' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-50 text-green-700 border-green-100' },
                { name: 'Express.js', icon: <SiExpress />, color: 'bg-gray-50 text-gray-700 border-gray-150' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
            ],
            features: [
                'Customer and Provider Roles',
                'Maps & Geolocation Booking',
                'Real-time Booking Status',
                'Integrated Payment Systems',
                'Reviews, Chat & Notifications',
            ],
            impact: 'Bridges customer and provider roles through real-time communication, geolocated maps, and automated reservation scheduling.',
            github: 'https://github.com/rohith-sunilkumar',
            live: null,
        },
        {
            title: 'Field Workforce Management App',
            subtitle: 'Enterprise Management System',
            description: 'Business productivity mobile application designed for companies with off-site staff, delivering GPS tracking and manager reporting.',
            icon: <FaUserCheck className="text-5xl" />,
            gradient: 'from-pink-500 via-indigo-500 to-purple-650',
            technologies: [
                { name: 'Flutter', icon: <SiFlutter />, color: 'bg-blue-50 text-blue-700 border-blue-100' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-50 text-green-700 border-green-100' },
                { name: 'Express.js', icon: <SiExpress />, color: 'bg-gray-50 text-gray-700 border-gray-150' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
            ],
            features: [
                'GPS Attendance & Geofencing',
                'Task Assignments & Photo Proof',
                'Offline Mode & Background Sync',
                'Manager Dashboards & Reports',
            ],
            impact: 'Optimizes workforce efficiency with geofenced boundaries, automatic offline uploads, and robust dashboard reporting.',
            github: 'https://github.com/rohith-sunilkumar',
            live: null,
        },
    ];

    return (
        <section ref={sectionRef} id="projects" className="min-h-screen flex items-center justify-center py-16">
            <div className="w-full px-4 sm:px-8 lg:px-12">
                
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-3">Featured Projects</h2>
                    <p className="text-gray-650 text-lg font-light max-w-2xl mx-auto">
                        Full-stack and mobile applications featuring real-time communication, offline performance, and modern architectures
                    </p>
                </div>

                {/* Projects Grid - Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group bg-gray-50/95 rounded-3xl shadow-sm hover:shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:border-purple-300 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-20'
                            }`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Project Thumbnail */}
                            <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                                <div className="relative z-10 text-white drop-shadow-md transform group-hover:scale-110 transition-transform duration-500">
                                    {project.icon}
                                </div>
                                {/* Floating Orbs */}
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/15 rounded-full blur-xl animate-pulse-slow"></div>
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/15 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5 flex flex-col justify-between h-[calc(100%-10rem)] min-h-[350px]">
                                <div className="space-y-3.5">
                                    {/* Title */}
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-purple-700 transition-colors">{project.title}</h3>
                                        <p className="text-xs font-semibold text-purple-650 font-mono mt-0.5">{project.subtitle}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                                        {project.description}
                                    </p>

                                    {/* Features */}
                                    <div>
                                        <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Key Features</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {project.features.map((feature, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-0.5 bg-purple-50 text-purple-700 rounded-full text-[10px] font-medium border border-purple-100"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Impact Box */}
                                    <div className="p-3 bg-blue-50/50 rounded-xl border-l-4 border-blue-400">
                                        <p className="text-[11px] text-gray-650 font-light leading-relaxed">
                                            <span className="font-semibold text-blue-600">Impact:</span> {project.impact}
                                        </p>
                                    </div>
                                </div>

                                {/* Tech Stack & CTA row */}
                                <div className="pt-4 border-t border-gray-150 mt-4 space-y-4">
                                    {/* Tech Stack */}
                                    <div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex items-center gap-1 px-2.5 py-1 ${tech.color} rounded-lg text-[10px] font-medium border transition-transform hover:scale-105`}
                                                >
                                                    <span>{tech.icon}</span>
                                                    <span>{tech.name}</span>
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
                                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-950 text-white rounded-xl font-bold text-xs hover:bg-black transition-all duration-300 hover:scale-105 shadow-md shadow-gray-900/10"
                                            >
                                                <FaGithub /> GitHub
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-xl font-bold text-xs hover:shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                <FaExternalLinkAlt /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="text-center mt-10 animate-fade-in">
                    <a 
                        href="https://github.com/rohith-sunilkumar" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-850 rounded-full font-bold border border-gray-300 hover:border-gray-400 hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                        <FaGithub size={20} /> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
