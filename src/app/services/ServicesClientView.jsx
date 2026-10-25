'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FaArrowRight, FaCheckCircle, FaLaptopCode, FaMobileAlt, FaDatabase, FaCogs } from 'react-icons/fa';
import ProjectInquiryModal from '@/components/ProjectInquiryModal';

const iconMap = {
  'web-applications': <FaLaptopCode size={22} className="text-neutral-900" />,
  'mobile-applications': <FaMobileAlt size={22} className="text-neutral-900" />,
  'business-software': <FaCogs size={22} className="text-neutral-900" />,
  'backend-and-apis': <FaDatabase size={22} className="text-neutral-900" />,
};

export default function ServicesClientView({ services }) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openInquiry = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsInquiryOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#ffffff] text-[#0a0a0a] font-sans antialiased selection:bg-neutral-900 selection:text-white">
      {/* ─── Persistent Header ─── */}
      <header className="fixed top-0 left-0 right-0 z-40 w-full bg-white/90 backdrop-blur-md px-6 sm:px-10 md:px-16 lg:px-20 py-5 flex items-center justify-between border-b border-neutral-100/70 transition-all">
        <Link
          href="/"
          className="text-base sm:text-lg font-bold tracking-tight text-neutral-950 uppercase hover:opacity-80 transition-opacity"
        >
          ROHITH
        </Link>

        <nav className="flex items-center gap-5 sm:gap-8">
          <Link
            href="/"
            className="text-xs sm:text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            ← Home
          </Link>
          <span className="text-xs sm:text-sm font-semibold text-neutral-950">
            Services
          </span>
          <button
            onClick={() => openInquiry()}
            className="bg-neutral-950 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-1.5 rounded-full hover:bg-neutral-800 active:scale-[0.97] transition-all shadow-sm cursor-pointer"
          >
            Start
          </button>
        </nav>
      </header>

      {/* ─── Hero Section ─── */}
      <main className="pt-32 sm:pt-36 pb-20 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-6">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="text-neutral-950 font-semibold">SERVICES</span>
        </div>

        {/* Title Area */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 block mb-4">
            ENGINEERING SERVICES & CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 tracking-tight leading-[1.12] mb-6">
            Software built for scale, performance, and real business workflows.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-500 leading-relaxed max-w-3xl mb-8">
            Specialized engineering for web platforms, mobile systems, custom ERPs, and resilient backend architectures. Based in Palakkad, Kerala — collaborating with founders and enterprises across India and globally.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => openInquiry('Web Applications')}
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-medium px-6 py-3.5 rounded-full transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              <span>Discuss a project</span>
              <FaArrowRight size={11} />
            </button>
            <div className="flex items-center gap-2 text-xs text-neutral-500 px-4 py-2 border border-neutral-200 rounded-full bg-neutral-50/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for new projects Q4 2026</span>
            </div>
          </div>
        </div>

        {/* ─── Services Detailed Grid ─── */}
        <div className="space-y-12 sm:space-y-16">
          {services.map((svc) => (
            <div
              key={svc.slug}
              id={svc.slug}
              className="border border-neutral-200 rounded-2xl p-6 sm:p-10 md:p-12 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-neutral-100">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {svc.num}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                      {svc.eyebrow}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
                    {svc.title}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {svc.overview}
                  </p>
                </div>

                {/* Quick CTA Actions */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-950 rounded-xl text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>View Specifications</span>
                    <FaArrowRight size={10} />
                  </Link>
                  <button
                    onClick={() => openInquiry(svc.title)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs sm:text-sm font-medium transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Inquire for {svc.shortTitle}</span>
                  </button>
                </div>
              </div>

              {/* Deliverables Sub-grid */}
              <div className="pt-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-5">
                  Core Deliverables & Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {svc.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-100/80 space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <FaCheckCircle size={13} className="text-neutral-950 flex-shrink-0" />
                        <h4 className="text-sm font-bold text-neutral-900 tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed pl-5">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-8 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-neutral-400 mr-2 uppercase tracking-wider">
                  Technologies:
                </span>
                {svc.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-neutral-200 text-neutral-800 text-xs font-mono rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Geographic Reach & Collaboration ─── */}
        <div className="mt-20 p-8 sm:p-12 bg-neutral-950 text-white rounded-3xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
              GEOGRAPHIC SCOPE & DELIVERY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Based in Palakkad, Kerala. Built for clients worldwide.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Whether you are a startup in Palakkad, an enterprise across Kerala and India, or an international team seeking high-caliber remote engineering, I provide transparent communication, structured git sprints, and direct technical advisory.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => openInquiry('Web Applications')}
                className="px-6 py-3 bg-white text-neutral-950 rounded-full text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
              >
                Start Consultation →
              </button>
              <Link
                href="/"
                className="px-6 py-3 border border-neutral-800 text-neutral-300 rounded-full text-xs sm:text-sm font-semibold hover:border-neutral-600 hover:text-white transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-neutral-200 py-10 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div>© 2026 Rohith Sunilkumar. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <a
            href="https://www.linkedin.com/in/rohith-sunilkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={() => openInquiry()}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      </footer>

      {/* ─── Inquiry Modal ─── */}
      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
