import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

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
            value: 'rohith.sunilkumar960@gmail.com',
            link: 'mailto:rohith.sunilkumar960@gmail.com',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+91 XXXXX XXXXX',
            link: 'tel:+91XXXXXXXXXX',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Palakkad, Kerala',
            link: null,
            gradient: 'from-orange-500 to-red-500',
        },
    ];

    const socialLinks = [
        {
            icon: <FaGithub size={20} />,
            name: 'GitHub',
            link: 'https://github.com',
            color: 'hover:bg-gray-800',
        },
        {
            icon: <FaLinkedin size={20} />,
            name: 'LinkedIn',
            link: 'https://linkedin.com',
            color: 'hover:bg-blue-600',
        },
    ];

    return (
        <section ref={sectionRef} id="contact" className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Let's Work Together</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    {/* Left Side - Contact Info */}
                    <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        {/* Contact Cards */}
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl bg-gray-800/40 backdrop-blur-md border border-gray-700/40 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <span className="text-xl">{info.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-100 mb-1">{info.title}</h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-300 text-sm">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/40 p-6">
                            <h4 className="font-bold text-gray-100 mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                                Connect With Me
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${social.color}`}
                                        title={social.name}
                                    >
                                        {social.icon}
                                        <span className="text-sm">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Quote */}
                        <div className="mt-8 p-6 bg-blue-900/20 rounded-2xl border-l-4 border-blue-500">
                            <p className="text-gray-200 italic text-sm leading-relaxed">
                                "Great things are done by a series of small things brought together." - Vincent Van Gogh
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        <form onSubmit={handleSubmit} className="bg-gray-800/40 backdrop-blur-md rounded-3xl border border-gray-700/40 p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2">
                                <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                                Send Me a Message
                            </h3>

                            <div className="space-y-5">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border-2 border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-gray-100 placeholder-gray-500"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border-2 border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-gray-100 placeholder-gray-500"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border-2 border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none text-gray-100 placeholder-gray-500"
                                        placeholder="Tell me about your project or just say hi..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="text-xl" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 border-2 border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-slide-down">
                                        <FaCheckCircle className="text-2xl flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold">Message sent successfully!</p>
                                            <p className="text-sm">I'll get back to you as soon as possible.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
