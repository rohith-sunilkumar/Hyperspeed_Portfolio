'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import ProjectInquiryModal from '../components/ProjectInquiryModal';
import SiteIntroOverlay from '../components/SiteIntroOverlay';

export default function Home() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  // Global Page Scroll Progress for top progress bar
  const { scrollYProgress: globalScrollProgress } = useScroll();

  // Section Refs for scroll-driven parallax
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // ── Page 1: Hero Parallax ──
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroEyebrowY = useTransform(heroProgress, [0, 1], ['0px', '-20px']);
  const heroHeadlineY = useTransform(heroProgress, [0, 1], ['0px', '-35px']);
  const heroSubY = useTransform(heroProgress, [0, 1], ['0px', '-55px']);
  const heroCtasY = useTransform(heroProgress, [0, 1], ['0px', '-70px']);
  const heroWatermarkY = useTransform(heroProgress, [0, 1], ['0px', '-90px']);

  // ── Page 2: Services Parallax (WHAT I BUILD) ──
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ['start end', 'end start'],
  });
  const servicesHeaderY = useTransform(servicesProgress, [0, 1], ['25px', '-20px']);
  const card1Y = useTransform(servicesProgress, [0, 1], ['35px', '-25px']);
  const card2Y = useTransform(servicesProgress, [0, 1], ['15px', '-10px']);
  const card3Y = useTransform(servicesProgress, [0, 1], ['45px', '-35px']);
  const card4Y = useTransform(servicesProgress, [0, 1], ['25px', '-15px']);
  const servicesWatermarkY = useTransform(servicesProgress, [0, 1], ['60px', '-50px']);

  // ── Page 3: About Parallax (CONFIDENTIAL CLIENT WORK) ──
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  });
  const aboutHeadingY = useTransform(aboutProgress, [0, 1], ['35px', '-20px']);
  const aboutTextY = useTransform(aboutProgress, [0, 1], ['20px', '-10px']);
  const pillar1Y = useTransform(aboutProgress, [0, 1], ['40px', '-20px']);
  const pillar2Y = useTransform(aboutProgress, [0, 1], ['20px', '-10px']);
  const pillar3Y = useTransform(aboutProgress, [0, 1], ['45px', '-25px']);
  const aboutWatermarkY = useTransform(aboutProgress, [0, 1], ['70px', '-50px']);

  // ── Page 4: Contact Parallax (Have a software idea?) ──
  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ['start end', 'end end'],
  });
  const contactPromptY = useTransform(contactProgress, [0, 1], ['45px', '0px']);
  const contactWatermarkY = useTransform(contactProgress, [0, 1], ['45px', '0px']);

  const openInquiry = (service = '') => {
    setSelectedService(service);
    setIsInquiryModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;
      const scrollPos = currentScroll + window.innerHeight / 3;
      const sections = ['home', 'services', 'about', 'contact'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const cards = [
    {
      num: '01',
      title: 'Web Applications',
      slug: 'web-applications',
      desc: 'CRMs, dashboards, portals and SaaS platforms.',
      parallaxY: card1Y,
    },
    {
      num: '02',
      title: 'Mobile Applications',
      slug: 'mobile-applications',
      desc: 'Android and iOS applications with Flutter.',
      parallaxY: card2Y,
    },
    {
      num: '03',
      title: 'Business Software',
      slug: 'business-software',
      desc: 'Sales, operations, bookings and workflow systems.',
      parallaxY: card3Y,
    },
    {
      num: '04',
      title: 'Backend & APIs',
      slug: 'backend-and-apis',
      desc: 'Secure APIs, databases, integrations and automation.',
      parallaxY: card4Y,
    },
  ];

  const pillars = [
    {
      title: 'Business-focused',
      desc: 'I design around actual workflows and requirements.',
      parallaxY: pillar1Y,
    },
    {
      title: 'End-to-end',
      desc: 'Frontend, backend, database, deployment and maintenance.',
      parallaxY: pillar2Y,
    },
    {
      title: 'Production-minded',
      desc: 'Security, performance, reliability and maintainability are considered from the start.',
      parallaxY: pillar3Y,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#ffffff] text-[#0a0a0a] font-sans antialiased selection:bg-neutral-900 selection:text-white md:snap-y md:snap-proximity overflow-x-hidden">
      {/* ─── Site Entrance Intro Overlay (Greetings -> Signature Video) ─── */}
      <SiteIntroOverlay />

      {/* ─── Ultra-Thin Scroll Progress Bar at very top ─── */}
      <motion.div
        style={{ scaleX: globalScrollProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-950 origin-left z-50 pointer-events-none"
      />

      {/* ─── Persistent Top Navigation (Full 100% width) ─── */}
      <header className="fixed top-0 left-0 right-0 z-40 w-full bg-white/90 backdrop-blur-md px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-5 flex items-center justify-between border-b border-neutral-100/70 transition-all">
        {/* Brand Logo */}
        <button
          onClick={scrollToTop}
          className="text-base sm:text-lg font-bold tracking-tight text-neutral-950 uppercase hover:opacity-80 transition-opacity text-left cursor-pointer"
        >
          ROHITH
        </button>

        {/* Nav links with animated slide indicator + Pill CTA */}
        <nav className="flex items-center gap-5 sm:gap-8">
          {navLinks.map((link) => (
            <div key={link.id} className="relative py-1">
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.id === 'home') {
                    scrollToTop();
                  } else {
                    scrollToSection(link.id);
                  }
                }}
                className={`text-xs sm:text-sm transition-colors cursor-pointer relative z-10 ${
                  activeSection === link.id
                    ? 'text-neutral-950 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-950 font-normal'
                }`}
              >
                {link.label}
              </a>

              {/* Animated active indicator pill below active nav link */}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-neutral-950 rounded-full"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
            </div>
          ))}

          {/* Solid Black Pill Button */}
          <button
            onClick={() => openInquiry()}
            className="bg-neutral-950 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-1.5 rounded-full hover:bg-neutral-800 active:scale-[0.97] transition-all shadow-sm cursor-pointer ml-1"
          >
            Start
          </button>
        </nav>
      </header>

      {/* ─── Page 1: HERO (Smooth Parallax on Scroll) ─── */}
      <section
        ref={heroRef}
        id="home"
        className="relative w-full min-h-screen md:h-screen flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-28 pb-8 md:pb-12 md:snap-start overflow-hidden"
      >
        {/* Architectural Watermark */}
        <motion.div
          style={{ y: heroWatermarkY }}
          className="absolute -right-6 top-1/4 select-none pointer-events-none text-[18vw] font-bold text-neutral-950/[0.025] leading-none tracking-tighter"
        >
          01
        </motion.div>

        <div className="my-auto py-6 relative z-10">
          {/* Eyebrow */}
          <motion.span
            style={{ y: heroEyebrowY }}
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600 block mb-5"
          >
            FULL-STACK SOFTWARE DEVELOPER
          </motion.span>

          {/* Headline */}
          <motion.h1
            style={{ y: heroHeadlineY }}
            className="text-4xl min-[480px]:text-5xl sm:text-6xl md:text-[4.75rem] lg:text-[5.25rem] font-bold text-neutral-950 tracking-tight leading-[1.12] md:leading-[1.1] mb-6 max-w-5xl"
          >
            <span className="block">I build software</span>
            <span className="block mt-1 sm:mt-1.5">for businesses.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{ y: heroSubY }}
            className="text-base sm:text-lg md:text-xl text-neutral-500 font-normal max-w-2xl leading-relaxed mb-9"
          >
            Web apps, mobile applications and custom business systems — from idea and architecture to production.
          </motion.p>

          {/* CTAs */}
          <motion.div style={{ y: heroCtasY }} className="flex items-center gap-6">
            <button
              onClick={() => openInquiry()}
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 active:scale-[0.98] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all shadow-sm group cursor-pointer"
            >
              <span>Start a project</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-xs sm:text-sm font-medium text-neutral-950 hover:text-neutral-600 transition-colors cursor-pointer"
            >
              View services
            </a>
          </motion.div>
        </div>

        {/* Divider line at bottom of Page 1 */}
        <div className="border-t border-neutral-200/90 w-full relative z-10" />
      </section>

      {/* ─── Page 2: WHAT I BUILD (Staggered Parallax Transitions) ─── */}
      <section
        ref={servicesRef}
        id="services"
        className="relative w-full min-h-screen md:h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-20 pb-12 md:snap-start overflow-hidden"
      >
        {/* Architectural Watermark */}
        <motion.div
          style={{ y: servicesWatermarkY }}
          className="absolute -left-6 top-1/4 select-none pointer-events-none text-[18vw] font-bold text-neutral-950/[0.025] leading-none tracking-tighter"
        >
          02
        </motion.div>

        <div className="w-full relative z-10">
          <div className="flex items-center justify-between mb-6">
            <motion.span
              style={{ y: servicesHeaderY }}
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600 block"
            >
              WHAT I BUILD
            </motion.span>
            <Link
              href="/services"
              className="text-xs font-semibold text-neutral-950 hover:text-neutral-500 transition-colors flex items-center gap-1.5"
            >
              <span>Explore all services</span>
              <span>→</span>
            </Link>
          </div>

          {/* 4 Cards Grid with Staggered Parallax Transitions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
            {cards.map((card) => (
              <motion.div
                key={card.num}
                style={{ y: card.parallaxY }}
                className="h-full"
              >
                <Link
                  href={`/services/${card.slug}`}
                  className="bg-[#0f0f0f] border border-neutral-900 rounded-lg p-6 md:p-7 flex flex-col justify-between h-full min-h-[230px] md:min-h-[260px] hover:border-neutral-700 hover:-translate-y-1 transition-all duration-300 group shadow-sm block text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] sm:text-xs font-mono text-neutral-400">
                        {card.num}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500 group-hover:text-white transition-colors flex items-center gap-1">
                        <span>Details</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight mb-2.5 group-hover:text-neutral-200 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t border-neutral-900/60 mt-4 text-[11px]">
                    <span className="text-neutral-300 group-hover:text-white font-medium transition-colors flex items-center gap-1">
                      <span>View individual page</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openInquiry(card.title);
                      }}
                      className="font-mono text-neutral-400 hover:text-white px-2 py-0.5 rounded border border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer"
                      title="Quick Inquiry"
                    >
                      Inquire
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Page 3: CONFIDENTIAL CLIENT WORK (Transitions & Parallax) ─── */}
      <section
        ref={aboutRef}
        id="about"
        className="relative w-full min-h-screen md:h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-20 pb-12 md:snap-start overflow-hidden"
      >
        {/* Architectural Watermark */}
        <motion.div
          style={{ y: aboutWatermarkY }}
          className="absolute -right-6 top-1/4 select-none pointer-events-none text-[18vw] font-bold text-neutral-950/[0.025] leading-none tracking-tighter"
        >
          03
        </motion.div>

        <div className="w-full space-y-12 md:space-y-16 relative z-10">
          {/* CONFIDENTIAL CLIENT WORK */}
          <div>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600 block mb-4">
              CONFIDENTIAL CLIENT WORK
            </span>

            <motion.h2
              style={{ y: aboutHeadingY }}
              className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-neutral-950 tracking-tight leading-[1.22] md:leading-[1.2] mb-5 max-w-4xl"
            >
              <span className="block">Client projects stay private.</span>
              <span className="block mt-1.5 sm:mt-2">Capabilities stay public.</span>
            </motion.h2>

            <motion.p
              style={{ y: aboutTextY }}
              className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-3xl leading-relaxed"
            >
              Much of my production work is covered by confidentiality requirements, so this portfolio focuses on the kind of software I build and how I approach engineering.
            </motion.p>
          </div>

          {/* WHY WORK WITH ME with Transition Columns */}
          <div>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600 block mb-6">
              WHY WORK WITH ME
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
              {pillars.map((item, idx) => (
                <motion.div
                  key={idx}
                  style={{ y: item.parallaxY }}
                  className="space-y-2.5 transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-500 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Page 4: HAVE A SOFTWARE IDEA? & FOOTER (Parallax Transitions) ─── */}
      <section
        ref={contactRef}
        id="contact"
        className="relative w-full min-h-screen md:h-screen flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-24 pb-10 md:pb-14 md:snap-start overflow-hidden"
      >
        {/* Architectural Watermark */}
        <motion.div
          style={{ y: contactWatermarkY }}
          className="absolute -left-6 top-1/4 select-none pointer-events-none text-[18vw] font-bold text-neutral-950/[0.025] leading-none tracking-tighter"
        >
          04
        </motion.div>

        <div /> {/* Top spacing flex helper */}

        {/* Center prompt with Parallax Entry */}
        <motion.div
          style={{ y: contactPromptY }}
          className="my-auto py-8 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight mb-4">
            Have a software idea?
          </h2>
          <button
            onClick={() => openInquiry()}
            className="inline-flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold text-neutral-950 hover:text-neutral-600 transition-colors group cursor-pointer"
          >
            <span>Tell me what you&apos;re building</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </button>

          {/* Direct Local & Global Contact Strip for Crawlers, AIs & Clients */}
          <div className="mt-8 pt-6 border-t border-neutral-200/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-600">
            <span className="inline-flex items-center gap-1.5 font-medium text-neutral-900">
              📍 Palakkad, Kerala 678001
            </span>
            <span className="text-neutral-300">•</span>
            <a href="tel:+919526321140" className="hover:text-neutral-950 transition-colors font-medium">
              📞 +91 95263 21140
            </a>
            <span className="text-neutral-300">•</span>
            <a href="mailto:rohith.sunilkumar09@gmail.com" className="hover:text-neutral-950 transition-colors">
              ✉️ rohith.sunilkumar09@gmail.com
            </a>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">Serving Palakkad, Kerala, India & Worldwide</span>
          </div>
        </motion.div>

        {/* Bottom divider and footer */}
        <div className="w-full relative z-10">
          <div className="border-t border-neutral-200/90 mb-6 sm:mb-8 w-full" />

          <footer className="grid grid-cols-1 md:grid-cols-12 gap-8 text-neutral-500 w-full pb-4">
            {/* Left Column */}
            <div className="md:col-span-5 space-y-1.5">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950">
                ROHITH SUNILKUMAR
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Full-Stack Application & Web Developer based in <strong className="text-neutral-900 font-semibold">Palakkad, Kerala (PIN 678001)</strong>. Designing bespoke web applications, mobile apps, and business software for local enterprises and global clients.
              </p>
              <div className="flex items-center gap-4 pt-2 text-xs text-neutral-500">
                <a
                  href="https://www.linkedin.com/in/rohith-sunilkumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 transition-colors underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/rohith-sunilkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 transition-colors underline"
                >
                  GitHub
                </a>
                <a
                  href="/llms.txt"
                  target="_blank"
                  className="font-mono text-[11px] text-neutral-400 hover:text-neutral-800"
                >
                  llms.txt
                </a>
              </div>
              <p className="text-[11px] text-neutral-400 pt-1">
                © 2026 Rohith Sunilkumar. All rights reserved.
              </p>
            </div>

            {/* Middle Column: Services */}
            <div className="md:col-span-4 space-y-1.5 text-xs">
              <span className="font-semibold text-neutral-900 block uppercase tracking-wider text-[11px]">Specialized Services</span>
              <ul className="space-y-1 text-neutral-600">
                <li>
                  <Link href="/services/web-applications" className="hover:text-neutral-950 transition-colors">
                    Web Applications Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-applications" className="hover:text-neutral-950 transition-colors">
                    Mobile Applications (Flutter)
                  </Link>
                </li>
                <li>
                  <Link href="/services/business-software" className="hover:text-neutral-950 transition-colors">
                    Custom Business Software & ERP
                  </Link>
                </li>
                <li>
                  <Link href="/services/backend-and-apis" className="hover:text-neutral-950 transition-colors">
                    Backend & Scalable APIs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column: Navigation */}
            <div className="md:col-span-3 flex flex-col gap-2 text-xs">
              <span className="font-semibold text-neutral-900 block uppercase tracking-wider text-[11px]">Navigation</span>
              <div className="flex flex-col gap-1.5 text-neutral-600">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Home
                </a>
                <Link href="/services" className="hover:text-neutral-950 transition-colors">
                  Services Overview
                </Link>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  About
                </a>
                <button
                  onClick={() => openInquiry()}
                  className="text-left hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {/* ─── Project Inquiry Modal ─── */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
