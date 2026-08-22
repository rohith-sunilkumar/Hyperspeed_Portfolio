'use client';

import { FaGithub, FaExternalLinkAlt, FaRocket, FaLaptop, FaMobileAlt, FaComments, FaDollarSign, FaStore, FaUserCheck } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiSocketdotio, SiTailwindcss, SiExpress, SiFlutter, SiMysql, SiDart, SiSqlite } from 'react-icons/si';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FlipCard } from './animate-ui/components/community/flip-card';
import DepthCarousel from './DepthCarousel';

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
                { name: 'React', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Socket.io', icon: <SiSocketdotio /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            ],
            features: [
                'Geospatial Issue Tracking',
                'Real-time Department Messaging',
                'Analytics Dashboard',
                'Role-based Access Control',
                'Automatic Priority Assignment',
            ],
            impact: 'Streamlined civic issue reporting with automatic priority assignment and department routing for faster resolution times.',
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
                { name: 'React', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Socket.io', icon: <SiSocketdotio /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            ],
            features: [
                'Profile Matching Algorithm',
                'Real-time Chat & Alerts',
                'Social Feed & Interactions',
                'Admin Management Systems',
                'Advanced Search & Filters',
            ],
            impact: 'Facilitates developer recommendations based on skills and interests, enabling meaningful professional connections.',
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
                { name: 'React', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Socket.io', icon: <SiSocketdotio /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            ],
            features: [
                'WebRTC Voice & Video Calls',
                'Screen Sharing & Group Chat',
                'Online Presence & Status',
                'Read Receipts & File Sharing',
                'Push Notification Alerts',
            ],
            impact: 'Establishes direct peer connections and high-throughput websocket rooms for enterprise messaging.',
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
                { name: 'Flutter', icon: <SiFlutter /> },
                { name: 'Dart', icon: <SiDart /> },
                { name: 'SQLite', icon: <SiSqlite /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
            ],
            features: [
                'Expense Categorization',
                'Budgets & Recurring Transactions',
                'Interactive Financial Charts',
                'SQLite Storage & Cloud Sync',
                'Biometric Lock & PDF Reports',
            ],
            impact: 'Optimizes local storage SQLite performance, securing biometric authentication, and generating PDF data reports.',
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
                { name: 'Flutter', icon: <SiFlutter /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
            ],
            features: [
                'Customer and Provider Roles',
                'Maps & Geolocation Booking',
                'Real-time Booking Status',
                'Integrated Payment Systems',
                'Reviews, Chat & Notifications',
            ],
            impact: 'Bridges customer and provider roles through real-time communication and automated reservation scheduling.',
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
                { name: 'Flutter', icon: <SiFlutter /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
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

    const carouselItems = projects.map((project, index) => ({
        content: <FlipCard project={project} index={index} />
    }));

    return (
        <section ref={sectionRef} id="projects" className="min-h-screen flex items-center justify-center py-20 bg-[#fdfbf8] overflow-hidden">
            <div className="w-full px-4 sm:px-8 lg:px-12">
                
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
                    <h2 className="text-4xl md:text-5xl font-medium text-[#000000] mb-3 tracking-tight">
                        Featured <span className="font-serif italic text-[#2d62ff]">projects</span>
                    </h2>
                    <p className="text-[#7b7b7a] text-base md:text-lg font-normal max-w-2xl mx-auto">
                        Interactive 3D depth carousel featuring full-stack MERN & Flutter applications
                    </p>
                </div>

                {/* Depth Carousel Component */}
                <div className={`w-full max-w-6xl mx-auto h-[520px] relative transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <DepthCarousel
                        items={carouselItems}
                        cardWidth={340}
                        cardHeight={460}
                        depth={220}
                        spread={100}
                        tilt={18}
                        tiltDirection="right"
                        perspective={1400}
                        visibleCards={4}
                        falloff={0.2}
                        blur={4}
                        autoplay={true}
                        autoplayDelay={3600}
                        loop={true}
                        showControls={true}
                        showIndicators={true}
                    />
                </div>

                {/* View More */}
                <div className="text-center mt-12 animate-fade-in">
                    <a 
                        href="https://github.com/rohith-sunilkumar" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#fdfbf8] text-[#000000] rounded-[100px] font-medium text-sm border border-[#d9d9d9] hover:border-[#000000] hover:bg-[#000000] hover:text-[#fdfbf8] transition-all duration-200"
                    >
                        <FaGithub size={18} /> View more on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
