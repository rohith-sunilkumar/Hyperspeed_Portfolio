'use client';

import { useState } from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaRoute, FaCheckCircle, FaFlag, FaCompass } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const experiences = [
  {
    id: 4,
    title: 'Full Stack Engineer',
    company: 'Dcoode',
    location: 'Ottappalam, Kerala, India',
    period: 'April 2026 – Present',
    type: 'Full-time',
    status: 'Current Destination',
    isCurrent: true,
    coordinates: '10.7704° N, 76.3773° E',
    description: [
      'Design, build, and maintain highly scalable and user-focused web and mobile applications.',
      'Utilize React.js, Next.js, Node.js, Express.js, and MongoDB to develop robust and high-performance web systems.',
      'Develop and launch cross-platform native mobile applications using Flutter and Dart.',
      'Implement secure server configurations, REST APIs, and integrated cloud deployment workflows.',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Flutter', 'Dart', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'MERN Stack Trainee',
    company: 'Zecser Business LLP',
    location: 'Kollam, Kerala, India',
    period: 'January 2026 – March 2026',
    type: 'Apprenticeship',
    status: 'Milestone 03',
    isCurrent: false,
    coordinates: '8.8932° N, 76.6141° E',
    description: [
      'Trained on enterprise-level web application design using MERN stack technologies.',
      'Developed modular components and optimized backend APIs for seamless communication.',
      'Gained experience with routing, state management, and relational/NoSQL databases.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'MERN Stack Developer Intern',
    company: 'Softroniics',
    location: 'Palakkad, Kerala, India',
    period: 'May 2025 – November 2025',
    type: 'Internship',
    status: 'Milestone 02',
    isCurrent: false,
    coordinates: '10.7867° N, 76.6548° E',
    description: [
      'Collaborated with a development team to design and build scalable web applications using MERN stack.',
      'Implemented secure user authentication and optimized RESTful APIs to enhance client-server functionality.',
      'Participated in code reviews and agile development sprints, contributing to successful delivery cycles.',
      'Troubleshot and debugged front-end and back-end issues to ensure responsive, high-performance user experiences.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git', 'Agile'],
  },
  {
    id: 1,
    title: 'Summer Internship (Python)',
    company: 'Softroniics',
    location: 'Palakkad, Kerala, India',
    period: 'April 2024 – April 2024',
    type: 'Internship',
    status: 'Origin Point',
    isCurrent: false,
    coordinates: '10.7867° N, 76.6548° E',
    description: [
      'Completed an intensive summer program focusing on full-stack Python web development.',
      'Built web application prototypes and interactive interfaces using Python, HTML, and CSS.',
      'Gained practical exposure to Git version control, documentation standards, and collaborative workflows.',
    ],
    technologies: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
  },
];

const Experience = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.05 });
  const [activeExpId, setActiveExpId] = useState(4); // default active Dcoode

  return (
    <section ref={sectionRef} id="experience" className="min-h-screen py-24 bg-[#fdfbf8] relative overflow-hidden">
      {/* Map Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-[#000000] 1px, transparent 1px',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-medium text-[#000000] mb-3 tracking-tight">
            Career <span className="font-serif italic text-[#2d62ff]">Roadmap</span>
          </h2>
          <p className="text-[#7b7b7a] text-base md:text-lg font-normal max-w-2xl mx-auto">
            An interactive roadmap tracing software engineering roles, milestones, and location waypoints from origin to current position.
          </p>
        </div>

        {/* Roadmap Map Overview Stats Bar */}
        <div className={`max-w-4xl mx-auto mb-16 bg-[#fdfbf8] border border-[#d9d9d9] rounded-[16px] p-4 sm:p-6 shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[#d9d9d9]/60">
            <div className="px-2">
              <span className="text-[10px] font-mono text-[#7b7b7a] uppercase tracking-wider block mb-1">Origin Point</span>
              <span className="text-sm font-medium text-[#000000] flex items-center justify-center gap-1">
                <FaFlag className="text-[#ee4b2b] text-xs" /> Palakkad
              </span>
            </div>
            <div className="px-2">
              <span className="text-[10px] font-mono text-[#7b7b7a] uppercase tracking-wider block mb-1">Current Station</span>
              <span className="text-sm font-medium text-[#2d62ff] flex items-center justify-center gap-1">
                <FaMapMarkerAlt className="text-[#2d62ff] text-xs animate-bounce" /> Ottappalam
              </span>
            </div>
            <div className="px-2">
              <span className="text-[10px] font-mono text-[#7b7b7a] uppercase tracking-wider block mb-1">Total Waypoints</span>
              <span className="text-sm font-medium text-[#000000]">4 Milestones</span>
            </div>
            <div className="px-2">
              <span className="text-[10px] font-mono text-[#7b7b7a] uppercase tracking-wider block mb-1">Career Status</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[100px] bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Active Full-time
              </span>
            </div>
          </div>
        </div>

        {/* ROADMAP TIMELINE CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Winding Curved SVG Roadmap Trail Path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="roadmap-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d62ff" stopOpacity="1" />
                <stop offset="35%" stopColor="#ee4b2b" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#2d62ff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#d9d9d9" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Glowing background aura curve */}
            <path
              d="M 500 0 C 720 120, 280 250, 500 375 C 720 500, 280 625, 500 750 C 720 875, 280 950, 500 1000"
              fill="none"
              stroke="#2d62ff"
              strokeWidth="10"
              strokeOpacity="0.12"
            />

            {/* Main Animated Curved S-Path */}
            <path
              d="M 500 0 C 720 120, 280 250, 500 375 C 720 500, 280 625, 500 750 C 720 875, 280 950, 500 1000"
              fill="none"
              stroke="url(#roadmap-gradient)"
              strokeWidth="4"
              strokeDasharray="10 8"
              className="animate-pulse"
            />
          </svg>

          {/* Mobile Curved Trail Path */}
          <svg
            className="absolute left-4 top-0 bottom-0 w-8 -translate-x-1/2 h-full pointer-events-none md:hidden z-0"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M 50 0 C 85 200, 15 400, 50 600 C 85 800, 15 900, 50 1000"
              fill="none"
              stroke="#2d62ff"
              strokeWidth="3"
              strokeDasharray="6 6"
              className="animate-pulse opacity-70"
            />
          </svg>

          {/* Experiences Waypoint Nodes */}
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeExpId === exp.id;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group cursor-pointer`}
                  onClick={() => setActiveExpId(exp.id)}
                >
                  {/* CENTRAL MAP NODE CHECKPOINT */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        exp.isCurrent
                          ? 'bg-[#2d62ff] text-[#fdfbf8] shadow-lg shadow-[#2d62ff]/40 ring-4 ring-[#2d62ff]/20 scale-110'
                          : isActive
                          ? 'bg-[#000000] text-[#fdfbf8] ring-4 ring-[#000000]/10 scale-105'
                          : 'bg-[#fdfbf8] text-[#333333] border-2 border-[#d9d9d9] group-hover:border-[#2d62ff] group-hover:text-[#2d62ff]'
                      }`}
                    >
                      {exp.isCurrent ? (
                        <FaCompass className="text-base animate-spin-slow" />
                      ) : (
                        <span className="text-xs font-mono font-bold">0{experiences.length - index}</span>
                      )}

                      {/* Radar pulse effect for current role */}
                      {exp.isCurrent && (
                        <span className="absolute inset-0 rounded-full bg-[#2d62ff] opacity-40 animate-ping pointer-events-none"></span>
                      )}
                    </div>
                  </div>

                  {/* ROADMAP CARD (Left or Right) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div
                      className={`bg-[#fdfbf8] border rounded-[16px] p-6 sm:p-8 transition-all duration-400 ${
                        isActive
                          ? 'border-[#2d62ff] shadow-lg shadow-[#2d62ff]/5 -translate-y-1'
                          : 'border-[#d9d9d9] hover:border-[#2d62ff]/60 hover:shadow-md'
                      } ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${200 + index * 120}ms` }}
                    >
                      {/* Card Waypoint Tag Header */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-[100px] border font-medium ${
                            exp.isCurrent
                              ? 'bg-[#2d62ff] text-[#fdfbf8] border-[#2d62ff]'
                              : 'bg-[#fdfbf8] text-[#7b7b7a] border-[#d9d9d9]'
                          }`}
                        >
                          {exp.status}
                        </span>

                        <span className="text-xs text-[#2d62ff] font-medium px-2.5 py-1 bg-[#2d62ff]/5 rounded-[100px] border border-[#2d62ff]/10">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-medium text-[#000000] leading-snug group-hover:text-[#2d62ff] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-base font-medium text-[#2d62ff] mt-0.5 mb-3">{exp.company}</p>

                      {/* Location & Period Map Tags */}
                      <div
                        className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#7b7b7a] mb-5 pb-3 border-b border-[#d9d9d9]/60 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="flex items-center gap-1.5 font-normal">
                          <FaCalendar className="text-[10px] text-[#2d62ff]" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 font-normal">
                          <FaMapMarkerAlt className="text-[10px] text-[#ee4b2b]" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#333333] leading-relaxed font-normal">
                        {exp.description.map((bullet, i) => (
                          <li key={i} className={`flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <span className="text-[#2d62ff] mt-1 shrink-0 text-xs">■</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-[#fdfbf8] text-[#333333] rounded-[13px] text-[10px] font-medium border border-[#d9d9d9] hover:border-[#2d62ff] hover:text-[#2d62ff] transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roadmap End Pin Banner */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#000000] text-[#fdfbf8] rounded-[100px] text-xs font-medium shadow-md">
            <FaRoute className="text-[#2d62ff] text-sm" /> Continuous Journey — Ready for Next Horizon
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
