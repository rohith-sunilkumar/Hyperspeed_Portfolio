import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaBook } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

    const educationDetails = {
        degree: 'Diploma in Computer Engineering',
        institution: "St.Mary's Polytechnic College Palakkad",
        location: 'Palakkad, Kerala',
        period: 'September 2022 – May 2025',
        description: 'Focused on core computer engineering fundamentals including object-oriented programming, database schemas, computer networks, and modern software architectures. Gained extensive hands-on web and mobile development experience through multiple academic projects.',
        highlights: [
            'Strong foundation in problem-solving & data structures',
            'Advanced exposure to modern HTML5, CSS3, ES6+ JavaScript',
            'Full lifecycle hands-on web development projects',
            'Object-oriented programming expertise',
            'Data structures and algorithms complexity analysis',
        ],
        subjects: [
            'Programming in C/Java',
            'Database Management Systems',
            'Computer Network Architectures',
            'Software Engineering Practices',
            'Web Technology Frameworks',
            'Data Structures & Algorithms',
        ],
    };

    return (
        <section ref={sectionRef} id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="w-full px-4 sm:px-8 lg:px-12">
                
                {/* Section Title */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-3">About & Education</h2>
                    <p className="text-gray-650 text-lg font-light max-w-2xl mx-auto">
                        My background, professional values, and academic foundation in computer science
                    </p>
                </div>

                {/* Main Content Grid - Minimal and borderless */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    
                    {/* Left Column: Bio (Directly on page, no box) */}
                    <div className={`lg:col-span-5 space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                                My Story
                            </h3>
                            <p className="text-base text-gray-700 leading-relaxed font-light">
                                I'm a passionate <span className="font-semibold gradient-text">Full Stack Developer & Flutter Developer</span> dedicated to building scalable, user-focused, and high-performance web and mobile applications.
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed font-light">
                                I specialize in React.js, Next.js, Node.js, Express.js, MongoDB, and Flutter. Currently working as a Full Stack Engineer at <span className="font-semibold text-purple-600">Dcoode</span>, I develop responsive interfaces, secure APIs, and cross-platform mobile apps that deliver real business value.
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed font-light">
                                I enjoy solving real-world problems through clean, maintainable code, leveraging modern DevOps practices and continuous learning.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Education details (Directly on page, no box) */}
                    <div className={`lg:col-span-7 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="space-y-6">
                            {/* Degree Header */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-850 flex items-center gap-2 mb-4">
                                    <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                                    Education
                                </h3>
                                
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 font-medium">
                                    <FaGraduationCap className="text-purple-600 text-lg" />
                                    <span>{educationDetails.degree}</span>
                                </div>

                                <h4 className="text-xl font-bold text-gray-800">
                                    {educationDetails.institution}
                                </h4>

                                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-500 mt-2 pb-4 border-b border-gray-150">
                                    <span className="flex items-center gap-1.5 font-medium">
                                        <FaCalendar className="text-[10px]" />
                                        {educationDetails.period}
                                    </span>
                                    <span className="flex items-center gap-1.5 font-medium">
                                        <FaMapMarkerAlt className="text-[10px]" />
                                        {educationDetails.location}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                                {educationDetails.description}
                            </p>

                            {/* Highlights Section */}
                            <div>
                                <h5 className="flex items-center gap-2 text-base font-bold text-gray-850 mb-3">
                                    <FaBook className="text-purple-600 text-sm" />
                                    Key Highlights
                                </h5>
                                <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-2.5">
                                    {educationDetails.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-gray-600">
                                            <span className="text-purple-600 mt-1 flex-shrink-0 text-sm">▹</span>
                                            <span className="text-xs md:text-sm font-light">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Subjects Grid */}
                            <div>
                                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                    Core Subjects
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {educationDetails.subjects.map((subject, i) => (
                                        <span
                                            key={i}
                                            className="px-3.5 py-1.5 bg-gray-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200 hover:border-purple-400 hover:scale-105 transition-all duration-300"
                                        >
                                            {subject}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
