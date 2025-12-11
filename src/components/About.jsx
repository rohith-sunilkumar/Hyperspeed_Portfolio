import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import me from '../assets/me.jpeg';

const About = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

    const highlights = [
        {
            icon: <FaCode size={28} />,
            title: 'Clean Code',
            description: 'Writing maintainable and scalable code following best practices',
        },
        {
            icon: <FaLightbulb size={28} />,
            title: 'Problem Solver',
            description: 'Turning complex problems into simple, elegant solutions',
        },
        {
            icon: <FaRocket size={28} />,
            title: 'Fast Learner',
            description: 'Constantly learning and adapting to new technologies',
        },
    ];

    return (
        <section ref={sectionRef} id="about" className="min-h-screen flex items-center justify-center py-16 px-4">
            <div className="max-w-6xl mx-auto w-full">
                {/* Section Title */}
                <h2 className={`text-3xl md:text-4xl font-bold gradient-text mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    About Me
                </h2>

                {/* Main Content - Flex Column on Mobile, Grid on Desktop */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center mb-12">
                    {/* Profile Image - Shows FIRST on Mobile (after heading), Right on Desktop */}
                    <div className={`order-1 md:order-2 flex items-center justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        <div className="relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <img
                                    src={me}
                                    alt="Rohith Sunilkumar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content - Shows SECOND on Mobile (after image), Left on Desktop */}
                    <div className={`order-2 md:order-1 flex items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        <div className="w-full bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                            <p className="text-base text-gray-100 mb-4 leading-relaxed">
                                I'm a passionate <span className="font-semibold gradient-text">MERN Stack Developer</span> with experience in building modern web applications.
                                I completed an intensive 6-month training program at <span className="font-semibold text-purple-400">Softronics, Palakkad</span>,
                                where I gained hands-on, project-based experience in industry-standard full-stack development practices.
                            </p>
                            <p className="text-base text-gray-100 mb-4 leading-relaxed">
                                I specialize in creating responsive, user-friendly applications using the latest technologies.
                                My goal is to build products that not only look great but also provide exceptional user experiences.
                            </p>
                            <p className="text-base text-gray-100 leading-relaxed">
                                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                                or learning about the latest trends in web development.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-lg text-center p-6 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${400 + index * 150}ms` }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-100 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-200 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
