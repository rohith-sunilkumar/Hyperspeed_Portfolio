import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'rohith.sunilkumar09@gmail.com',
            link: 'mailto:rohith.sunilkumar09@gmail.com',
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+91 95263 21140',
            link: 'tel:+919526321140',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Palakkad, Kerala',
            link: null,
        },
    ];

    const socials = [
        {
            icon: <FaGithub size={16} />,
            name: 'GitHub',
            link: 'https://github.com/rohith-sunilkumar',
        },
        {
            icon: <FaLinkedin size={16} />,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/rohithsunilkumar',
        },
    ];

    return (
        <footer id="contact" className="bg-black text-gray-300 border-t border-neutral-900 py-10 px-4 md:px-8 relative overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="w-full px-4 sm:px-8 lg:px-12 space-y-8">
                
                {/* Main Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Contact details & Socials */}
                    <div className="lg:col-span-5 space-y-6">
                        <div>
                            <span className="text-[10px] font-mono text-purple-500 font-bold uppercase tracking-widest">
                                Get In Touch
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1.5 mb-3 leading-tight">
                                Let's Build Something Great
                            </h2>
                            <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                                I'm open to discussing new development opportunities, open-source projects, or consulting engagements. Feel free to reach out.
                            </p>
                        </div>

                        {/* Contact details list (Highly Compact) */}
                        <div className="space-y-3">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-neutral-900/60 border border-neutral-800 text-purple-400 flex items-center justify-center text-sm shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <span className="text-[9px] text-gray-500 block leading-none uppercase tracking-wider">{info.title}</span>
                                        {info.link ? (
                                            <a href={info.link} className="font-semibold text-white hover:text-purple-400 transition-colors text-xs md:text-sm mt-0.5 inline-block">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="font-semibold text-white text-xs md:text-sm mt-0.5 inline-block">
                                                {info.value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social connections */}
                        <div className="space-y-2.5">
                            <div className="flex gap-2.5">
                                {socials.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-neutral-900/60 border border-neutral-850 hover:border-white hover:bg-white hover:text-black rounded-lg text-[11px] font-semibold transition-all duration-300"
                                    >
                                        {social.icon}
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact form (Tighter Padding and Controls) */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="bg-neutral-900/30 border border-neutral-850 p-5 md:p-6 rounded-2xl shadow-lg space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
                                <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                                Send Me a Message
                            </h3>

                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-[10px] font-semibold text-gray-400 mb-1.5">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10 transition-all text-white placeholder-gray-650 text-xs"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-[10px] font-semibold text-gray-400 mb-1.5">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10 transition-all text-white placeholder-gray-650 text-xs"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-[10px] font-semibold text-gray-400 mb-1.5">
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="3"
                                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10 transition-all resize-none text-white placeholder-gray-650 text-xs"
                                    placeholder="Tell me about your project or just say hi..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white hover:bg-gray-100 text-black hover:scale-[1.01] active:scale-95 py-2.5 rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs shadow-md"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="text-[10px]" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {/* Success Message Banner */}
                            {submitStatus === 'success' && (
                                <div className="p-3 bg-green-950/20 border border-green-900/30 text-green-400 rounded-lg flex items-center gap-2.5 animate-slide-down">
                                    <FaCheckCircle className="text-lg flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-xs">Message sent successfully!</p>
                                        <p className="text-[10px] text-green-500 mt-0.5">I'll get back to you as soon as possible.</p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                </div>

                {/* Bottom row: Divider, Vincent Van Gogh Quote & Copyright */}
                <div className="pt-6 border-t border-neutral-900 flex flex-col items-center justify-center space-y-4">
                    {/* Vincent Van Gogh Quote */}
                    <div className="max-w-xl text-center">
                        <p className="text-gray-400 italic text-xs md:text-sm leading-relaxed">
                            "Great things are done by a series of small things brought together."
                        </p>
                        <p className="text-[9px] font-semibold text-gray-500 mt-0.5 font-mono uppercase tracking-widest">
                            — Vincent Van Gogh
                        </p>
                    </div>

                    <div className="w-10 h-px bg-neutral-900"></div>

                    {/* Copyright notice */}
                    <div className="text-center text-[10px] text-gray-500 font-light">
                        <p>© {currentYear} Rohith Sunilkumar. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
