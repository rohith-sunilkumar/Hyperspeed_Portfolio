import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaBook } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Education = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

    const education = [
        {
            degree: 'Diploma in Computer Engineering',
            institution: "St.Mary's Polytechnic College Palakkad",
            location: 'Palakkad',
            period: '2022 – 2025',
            description: 'Focused on core computer engineering subjects including programming, database management, computer networks, and software development. Gained hands-on experience in web development, object-oriented programming, and data structures through academic projects.',
            highlights: [
                'Strong foundation in problem-solving and coding',
                'Exposure to HTML, CSS, JavaScript',
                'Hands-on academic projects in web development',
                'Object-oriented programming expertise',
                'Data structures and algorithms',
            ],
            subjects: [
                'Programming',
                'Database Management',
                'Computer Networks',
                'Software Development',
                'Web Development',
                'Data Structures',
            ],
        },
    ];

    return (
        <section ref={sectionRef} id="education" className="min-h-screen flex items-center justify-center py-16 px-4">
            <div className="max-w-6xl mx-auto w-full">
                {/* Section Title */}
                <h2 className={`text-3xl md:text-4xl font-bold gradient-text mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    Education
                </h2>

                {/* Education Cards */}
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className={`bg-gray-800/40 backdrop-blur-md rounded-3xl border border-gray-700/30 shadow-xl overflow-hidden transition-all duration-700 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                                }`}
                            style={{ transitionDelay: `${200 + index * 200}ms` }}
                        >
                            {/* Header Section */}
                            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <FaGraduationCap className="text-white text-2xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white">{edu.degree}</h3>
                                            </div>
                                        </div>
                                        <p className="text-lg text-white/90 font-medium mb-2">{edu.institution}</p>
                                    </div>
                                    <div className="flex flex-col gap-2 md:text-right">
                                        <div className="flex items-center gap-2 text-white/90 md:justify-end">
                                            <FaCalendar />
                                            <span className="font-medium">{edu.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/90 md:justify-end">
                                            <FaMapMarkerAlt />
                                            <span className="font-medium">{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8">
                                {/* Description */}
                                <p className="text-gray-200 text-base leading-relaxed mb-6">
                                    {edu.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <h4 className="flex items-center gap-2 text-lg font-bold text-gray-100 mb-4">
                                        <FaBook className="text-purple-400" />
                                        Key Highlights
                                    </h4>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {edu.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-200">
                                                <span className="text-purple-500 mt-1 flex-shrink-0">▹</span>
                                                <span className="text-sm">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Subjects */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">
                                        Core Subjects
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.subjects.map((subject, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 bg-gray-800/70 backdrop-blur-sm text-purple-300 rounded-full text-sm font-medium border border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300"
                                            >
                                                {subject}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Element */}
                <div className={`mt-12 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="inline-block px-8 py-4 bg-gray-800/70 backdrop-blur-md rounded-full border border-gray-700/40 shadow-lg">
                        <p className="text-gray-200 font-medium">
                            🎓 Continuously learning and growing in the field of technology
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
