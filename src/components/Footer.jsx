'use client';

import { useState } from 'react';
import Link from 'next/link';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const res = await fetch('/api/inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    projectType: 'Web & Application Development (Footer Contact)',
                    budget: 'Flexible',
                    description: formData.message,
                }),
            });

            const data = await res.json();
            if (res.ok && data.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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
            title: 'Phone / WhatsApp',
            value: '+91 95263 21140',
            link: 'tel:+919526321140',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location / Studio',
            value: 'Palakkad, Kerala 678001, India',
            link: 'https://maps.google.com/?q=Palakkad,+Kerala+678001',
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

                            {/* Error Message Banner */}
                            {submitStatus === 'error' && (
                                <div className="p-3.5 bg-[#1a0f0f] border border-[#ee4b2b] text-[#ee4b2b] rounded-[13px] text-xs">
                                    <p className="font-medium">Failed to send message.</p>
                                    <p className="text-[10px] text-[#999999] mt-0.5">Please contact directly via WhatsApp or phone at +91 95263 21140.</p>
                                </div>
                            )}
                        </form>
                    </div>

                </div>

                {/* Local Business Citation & Services Navigation */}
                <div className="pt-8 border-t border-[#222222] grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[#999999]">
                    <div className="space-y-2">
                        <span className="font-mono text-[10px] text-[#2d62ff] uppercase tracking-widest block font-medium">Local Software Engineering</span>
                        <p className="leading-relaxed text-[#b0b0b0]">
                            Studio based in <strong className="text-white">Palakkad, Kerala (PIN 678001)</strong>. Designing bespoke web applications, mobile apps, and enterprise software for businesses in Palakkad, across Kerala, India, and global clients.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <span className="font-mono text-[10px] text-[#2d62ff] uppercase tracking-widest block font-medium">Specialized Services</span>
                        <ul className="space-y-1.5">
                            <li><Link href="/services/web-applications" className="hover:text-white transition-colors">Web Applications Development</Link></li>
                            <li><Link href="/services/mobile-applications" className="hover:text-white transition-colors">Mobile Applications (Flutter iOS & Android)</Link></li>
                            <li><Link href="/services/business-software" className="hover:text-white transition-colors">Custom Business Software & ERP</Link></li>
                            <li><Link href="/services/backend-and-apis" className="hover:text-white transition-colors">Backend & Scalable APIs</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <span className="font-mono text-[10px] text-[#2d62ff] uppercase tracking-widest block font-medium">Business Hours & Direct Line</span>
                        <p className="leading-relaxed">
                            <span className="text-[#fdfbf8] font-medium">Hours:</span> Mon – Sat: 09:00 AM – 07:00 PM IST<br />
                            <span className="text-[#fdfbf8] font-medium">Direct Line:</span> <a href="tel:+919526321140" className="text-[#2d62ff] hover:underline">+91 95263 21140</a><br />
                            <span className="text-[#fdfbf8] font-medium">Email:</span> <a href="mailto:rohith.sunilkumar09@gmail.com" className="hover:text-white transition-colors">rohith.sunilkumar09@gmail.com</a>
                        </p>
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
