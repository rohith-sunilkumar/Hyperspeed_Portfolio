import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Experience = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

    const experiences = [
        {
            title: 'MERN Stack Intern',
            company: 'Softronics',
            location: 'Palakkad',
            period: 'May 2025',
            type: 'Internship',
            description: [
                'Completed an intensive 6-month training program focused on industry-standard full-stack development practices',
                'Gained hands-on, project-based experience in building real-world applications',
                'Worked with MongoDB, Express.js, React.js, and Node.js to create full-stack web applications',
                'Collaborated with team members on various projects using Git and Agile methodologies',
                'Developed responsive and user-friendly interfaces following modern design principles',
            ],
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Git'],
        },
    ];

    return (
        <section ref={sectionRef} id="experience" className="min-h-screen flex items-center justify-center py-24 px-4">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className={`section-title text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>Experience</h2>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`glass-card mb-8 hover:shadow-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                                }`}
                            style={{ transitionDelay: `${200 + index * 200}ms` }}
                        >
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-100 mb-2">{exp.title}</h3>
                                    <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
                                        <FaBriefcase />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 md:text-right">
                                    <div className="flex items-center gap-2 text-gray-300 text-base">
                                        <FaCalendar />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300 text-base">
                                        <FaMapMarkerAlt />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Type Badge */}
                            <div className="mb-4">
                                <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-base font-semibold">
                                    {exp.type}
                                </span>
                            </div>

                            {/* Description */}
                            <div className="mb-5">
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-200 text-lg">
                                            <span className="text-purple-500 mt-1">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-base font-semibold text-gray-300 mb-3">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-800/70 backdrop-blur-sm rounded-full text-base text-gray-200 border border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Timeline Decoration */}
                    <div className={`relative mt-10 p-6 glass-card text-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`} style={{ transitionDelay: '400ms' }}>
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                        <h3 className="text-xl font-bold gradient-text mb-2">Looking for Opportunities</h3>
                        <p className="text-gray-300 text-sm">
                            I'm currently seeking full-time positions where I can contribute my skills and continue growing as a developer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
