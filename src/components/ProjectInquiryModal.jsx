'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaEnvelope, FaPhone, FaArrowRight, FaCheckCircle, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ProjectInquiryModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'Web Applications',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          service: 'Web Applications',
          message: '',
        });
      }, 2500);
    }, 1000);
  };

  const services = [
    'Web Applications',
    'Mobile Applications',
    'Business Software',
    'Backend & APIs',
    'Other / Advisory',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="relative w-full max-w-xl bg-white border border-neutral-200 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <FaTimes size={16} />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto text-2xl">
              <FaCheckCircle />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
              Message Received
            </h3>
            <p className="text-neutral-500 text-sm max-w-sm mx-auto">
              Thank you for reaching out. I will review your project requirements and respond within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 block mb-1">
                Start a project
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Tell me what you&apos;re building.
              </h2>
              <p className="text-neutral-500 text-sm mt-1.5 leading-relaxed">
                Direct consultation for web apps, mobile systems, and business software.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Scope / Area
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(val) => setFormData((prev) => ({ ...prev, service: val }))}
                >
                  <SelectTrigger className="w-full h-11 px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors">
                    <SelectValue placeholder="Select a scope" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-neutral-200 rounded-xl shadow-xl z-[100] min-w-[var(--radix-select-trigger-width)]">
                    {services.map((svc) => (
                      <SelectItem
                        key={svc}
                        value={svc}
                        className="rounded-lg py-2.5 px-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900 cursor-pointer transition-colors"
                      >
                        {svc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Project Details
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Briefly describe your objectives, timeline, or key technical challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 px-6 bg-neutral-950 hover:bg-neutral-800 active:scale-[0.99] text-white text-sm font-medium rounded-full flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending inquiry...</span>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <FaArrowRight size={11} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500">
              <div className="flex items-center gap-4">
                <a
                  href="mailto:rohith.sunilkumar09@gmail.com"
                  className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-black font-medium transition-colors"
                >
                  <FaEnvelope size={12} />
                  <span>rohith.sunilkumar09@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/rohithsunilkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedin size={14} />
                </a>
                <a
                  href="https://github.com/rohith-sunilkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                  title="GitHub"
                >
                  <FaGithub size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
