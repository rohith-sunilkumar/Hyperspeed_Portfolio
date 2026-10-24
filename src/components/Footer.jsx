'use client';

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
            link: 'https://www.linkedin.com/in/rohith-sunilkumar/',
        },
    ];

    return (
        <footer id="contact" className="bg-[#000000] text-[#fdfbf8] border-t border-[#333333] py-16 px-4 md:px-8 relative overflow-hidden">
            
            <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
                
                {/* Main Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Contact details & Socials */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="text-[10px] font-mono text-[#2d62ff] font-medium uppercase tracking-widest">
                                Get in touch
                            </span>
                            <h2 className="text-3xl md:text-4xl font-medium text-[#fdfbf8] mt-2 mb-4 leading-tight">
                                Let&apos;s build something <span className="font-serif italic text-[#2d62ff]">great</span>
                            </h2>
                            <p className="text-[#999999] text-sm md:text-base font-normal leading-relaxed">
                                I&apos;m open to discussing new development opportunities, open-source projects, or consulting engagements. Feel free to reach out.
                            </p>
                        </div>

                        {/* Contact details list */}
                        <div className="space-y-4">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex items-center gap-3.5">
                                    <div className="w-9 h-9 rounded-[13px] bg-[#121212] border border-[#333333] text-[#2d62ff] flex items-center justify-center text-sm shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <span className="text-[9px] text-[#7b7b7a] block leading-none uppercase tracking-wider">{info.title}</span>
                                        {info.link ? (
                                            <a href={info.link} className="font-medium text-[#fdfbf8] hover:text-[#2d62ff] transition-colors text-xs md:text-sm mt-0.5 inline-block">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="font-medium text-[#fdfbf8] text-xs md:text-sm mt-0.5 inline-block">
                                                {info.value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social connections */}
                        <div className="space-y-2.5">
                            <div className="flex gap-3">
                                {socials.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 bg-[#121212] border border-[#333333] hover:border-[#2d62ff] hover:text-[#2d62ff] rounded-[100px] text-xs font-medium transition-all duration-200"
                                    >
                                        {social.icon}
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact form */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="bg-[#121212] border border-[#333333] p-6 md:p-8 rounded-[16px] space-y-5">
                            <h3 className="text-xl font-medium text-[#fdfbf8] flex items-center gap-2.5 mb-2">
                                <span className="w-2 h-2 bg-[#ee4b2b] rounded-[100px]"></span>
                                Send me a message
                            </h3>

                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-[#999999] mb-2">
                                    Your name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-[13px] bg-[#000000] border border-[#333333] focus:border-[#2d62ff] focus:outline-none transition-all text-[#fdfbf8] placeholder-[#7b7b7a] text-xs"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-[#999999] mb-2">
                                    Email address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-[13px] bg-[#000000] border border-[#333333] focus:border-[#2d62ff] focus:outline-none transition-all text-[#fdfbf8] placeholder-[#7b7b7a] text-xs"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-[#999999] mb-2">
                                    Your message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="3"
                                    className="w-full px-4 py-3 rounded-[13px] bg-[#000000] border border-[#333333] focus:border-[#2d62ff] focus:outline-none transition-all resize-none text-[#fdfbf8] placeholder-[#7b7b7a] text-xs"
                                    placeholder="Tell me about your project or just say hi..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#2d62ff] hover:bg-[#fdfbf8] hover:text-[#000000] text-[#fdfbf8] py-3.5 rounded-[100px] font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs shadow-sm"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-3.5 h-3.5 border-2 border-[#fdfbf8] border-t-transparent rounded-[100px] animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="text-[10px]" />
                                        Send message
                                    </>
                                )}
                            </button>

                            {/* Success Message Banner */}
                            {submitStatus === 'success' && (
                                <div className="p-3.5 bg-[#121212] border border-[#2d62ff] text-[#2d62ff] rounded-[13px] flex items-center gap-2.5 animate-slide-down">
                                    <FaCheckCircle className="text-base flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-xs">Message sent successfully!</p>
                                        <p className="text-[10px] text-[#999999] mt-0.5">I&apos;ll get back to you as soon as possible.</p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                </div>

                {/* Bottom row: Divider, Vincent Van Gogh Quote & Copyright */}
                <div className="pt-8 border-t border-[#333333] flex flex-col items-center justify-center space-y-4">
                    {/* Vincent Van Gogh Quote */}
                    <div className="max-w-xl text-center">
                        <p className="text-[#999999] font-serif italic text-xs md:text-sm leading-relaxed">
                            &ldquo;Great things are done by a series of small things brought together.&rdquo;
                        </p>
                        <p className="text-[9px] font-medium text-[#7b7b7a] mt-1 font-mono uppercase tracking-widest">
                            — Vincent Van Gogh
                        </p>
                    </div>

                    <div className="w-10 h-px bg-[#333333]"></div>

                    {/* Copyright notice */}
                    <div className="text-center text-[10px] text-[#7b7b7a] font-normal">
                        <p>© {currentYear} Rohith Sunilkumar. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
