import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaBriefcase } from 'react-icons/fa';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center animate-fade-in">
                    {/* Name and Title */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
                        Hi, I'm <span className="gradient-text">Rohith</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 font-semibold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Full-Stack MERN Developer
                    </p>
                    <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up font-light" style={{ animationDelay: '0.2s' }}>
                        Building scalable web applications with <span className="font-semibold text-purple-400">AI integration</span>,
                        <span className="font-semibold text-blue-400"> real-time features</span>, and
                        <span className="font-semibold text-pink-400"> modern architectures</span>
                    </p>

                    {/* Key Highlights */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/70 backdrop-blur-sm rounded-full shadow-md border border-purple-500/50">
                            <FaCode className="text-purple-400" />
                            <span className="text-sm font-medium text-gray-200">MERN Stack Expert</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/70 backdrop-blur-sm rounded-full shadow-md border border-blue-500/50">
                            <FaBriefcase className="text-blue-400" />
                            <span className="text-sm font-medium text-gray-200">Softronics Intern</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/70 backdrop-blur-sm rounded-full shadow-md border border-pink-500/50">
                            <span className="text-pink-400 font-bold">🤖</span>
                            <span className="text-sm font-medium text-gray-200">AI Integration</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-primary flex items-center justify-center gap-2"
                        >
                            <FaEnvelope /> Get In Touch
                        </button>
                        <a
                            href="/resume.pdf"
                            download="Rohith_Resume.pdf"
                            className="btn-secondary flex items-center justify-center gap-2"
                        >
                            <FaDownload /> Download Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center text-gray-200 hover:text-purple-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700"
                            title="GitHub"
                        >
                            <FaGithub size={22} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center text-gray-200 hover:text-blue-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700"
                            title="LinkedIn"
                        >
                            <FaLinkedin size={22} />
                        </a>
                        <a
                            href="mailto:rohith.sunilkumar960@gmail.com"
                            className="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center text-gray-200 hover:text-pink-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700"
                            title="Email"
                        >
                            <FaEnvelope size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
