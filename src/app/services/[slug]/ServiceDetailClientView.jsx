'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaChevronRight, FaQuestionCircle } from 'react-icons/fa';
import ProjectInquiryModal from '@/components/ProjectInquiryModal';

export default function ServiceDetailClientView({ service, allServices }) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const otherServices = allServices.filter((s) => s.slug !== service.slug);

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
            href="/services"
            className="text-xs sm:text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            ← All Services
          </Link>
          <button
            onClick={() => setIsInquiryOpen(true)}
            className="bg-neutral-950 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-1.5 rounded-full hover:bg-neutral-800 active:scale-[0.97] transition-all shadow-sm cursor-pointer"
          >
            Start
          </button>
        </nav>
      </header>

      {/* ─── Main Content ─── */}
      <main className="pt-32 sm:pt-36 pb-20 px-6 sm:px-10 md:px-16 lg:px-20 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-6">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-neutral-900 transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-neutral-950 font-semibold uppercase">{service.slug}</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-neutral-200 pb-12 mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono font-bold text-neutral-400">
              {service.num}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
              {service.eyebrow}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-950 tracking-tight leading-[1.12] mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 font-medium leading-relaxed max-w-3xl mb-8">
            {service.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-medium px-7 py-3.5 rounded-full transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              <span>Inquire for {service.shortTitle}</span>
              <FaArrowRight size={11} />
            </button>
            <div className="text-xs text-neutral-500 px-4 py-2 border border-neutral-200 rounded-full bg-neutral-50">
              📍 Palakkad, Kerala • Serving India & Globally
            </div>
          </div>
        </div>

        {/* ─── Overview Section ─── */}
        <section className="mb-16 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Overview & Engineering Approach
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
            {service.overview}
          </p>
        </section>

        {/* ─── Core Deliverables ─── */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
            What I Deliver & Build
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 space-y-2 hover:border-neutral-400 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-neutral-950 flex-shrink-0" size={14} />
                  <h3 className="text-base font-bold text-neutral-950 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Tech Stack ─── */}
        <section className="mb-16 p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
            Technology Stack & Tools
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 bg-neutral-50 border border-neutral-200 text-neutral-800 text-xs sm:text-sm font-mono rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ─── Process & Workflow ─── */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
            Engineering Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.workflow.map((flow, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-neutral-200 bg-white space-y-2 relative"
              >
                <span className="text-xs font-mono font-bold text-neutral-400 block">
                  {flow.step}
                </span>
                <h3 className="text-sm font-bold text-neutral-950 tracking-tight">
                  {flow.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FAQs ─── */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="mb-16 border-t border-neutral-200 pt-12">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-neutral-50/60 border border-neutral-200/80 space-y-2"
                >
                  <div className="flex items-start gap-2.5">
                    <FaQuestionCircle size={15} className="text-neutral-500 mt-0.5 flex-shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ─── Next Steps CTA Banner ─── */}
        <section className="p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to build your {service.shortTitle.toLowerCase()}?
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Direct consultation for companies in Palakkad, Kerala, across India, and international teams.
            </p>
          </div>
          <button
            onClick={() => setIsInquiryOpen(true)}
            className="px-7 py-3.5 bg-white text-neutral-950 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-sm active:scale-[0.98] cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            Send Inquiry →
          </button>
        </section>

        {/* ─── Explore Other Services ─── */}
        <section className="border-t border-neutral-200 pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
            Explore Other Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="p-5 rounded-xl border border-neutral-200 hover:border-neutral-900 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-neutral-400">{other.num}</span>
                  <FaChevronRight size={10} className="text-neutral-400 group-hover:translate-x-1 group-hover:text-black transition-all" />
                </div>
                <h3 className="text-sm font-bold text-neutral-950 group-hover:text-black mb-1">
                  {other.title}
                </h3>
                <p className="text-xs text-neutral-500 line-clamp-2">
                  {other.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-neutral-200 py-10 px-6 sm:px-10 md:px-16 lg:px-20 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div>© 2026 Rohith Sunilkumar. Palakkad, Kerala.</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-black transition-colors">
            All Services
          </Link>
          <a
            href="https://www.linkedin.com/in/rohith-sunilkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>

      {/* ─── Inquiry Modal ─── */}
      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialService={service.title}
      />
    </div>
  );
}
