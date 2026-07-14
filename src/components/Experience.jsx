import { useRef, useEffect, useCallback, useState } from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './MagicBento.css';

const DEFAULT_PARTICLE_COUNT = 8;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255'; // Purple tint
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 0.7);
    box-shadow: 0 0 6px rgba(${color}, 0.4);
    pointer-events: none;
    z-index: 5;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 80,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 3,
          rotateY: 3,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = e => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.03;
        const magnetY = (y - centerY) * 0.03;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = e => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.25) 0%, rgba(${glowColor}, 0.1) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 10;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.08) 0%,
        rgba(${glowColor}, 0.04) 15%,
        rgba(${glowColor}, 0.02) 25%,
        rgba(${glowColor}, 0.01) 40%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: multiply;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = e => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.magic-bento-card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        cards.forEach(card => {
          card.style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardElement = card;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.magic-bento-card').forEach(card => {
        card.style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const Experience = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.05 });
    const gridRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const experiences = [
        {
            title: 'Full Stack Engineer',
            company: 'Dcoode',
            location: 'Ottappalam, Kerala, India',
            period: 'April 2026 - Present',
            type: 'Full-time',
            description: [
                'Design, build, and maintain highly scalable and user-focused web and mobile applications.',
                'Utilize React.js, Next.js, Node.js, Express.js, and MongoDB to develop robust and high-performance web systems.',
                'Develop and launch cross-platform native mobile applications using Flutter and Dart.',
                'Implement secure server configurations, REST APIs, and integrated cloud deployment workflows.',
            ],
            technologies: ['React.js', 'Next.js', 'Flutter', 'Node.js', 'Express.js', 'MongoDB', 'DevOps', 'Git'],
        },
        {
            title: 'Mern Stack Trainee',
            company: 'Zecser Business LLP',
            location: 'Kollam, Kerala, India',
            period: 'January 2026 - March 2026',
            type: 'Apprenticeship',
            description: [
                'Trained on enterprise-level web application design using MERN stack technologies.',
                'Developed modular components and optimized backend APIs for seamless communication.',
                'Gained experience with routing, state management, and relational/NoSQL databases.',
            ],
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
        },
        {
            title: 'Mern Stack Developer Intern',
            company: 'Softroniics',
            location: 'Palakkad, Kerala, India',
            period: 'May 2025 - November 2025',
            type: 'Internship',
            description: [
                'Collaborated with a development team to design and build scalable web applications using MongoDB, Express.js, React.js, and Node.js.',
                'Implemented secure user authentication and optimized RESTful APIs to enhance client-server functionality.',
                'Participated in code reviews and agile development sprints, contributing to successful delivery cycles.',
                'Troubleshot and debugged front-end and back-end issues to ensure responsive, high-performance user experiences.',
            ],
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git', 'Agile'],
        },
        {
            title: 'Summer Internship (Python)',
            company: 'Softroniics',
            location: 'Palakkad, Kerala, India',
            period: 'April 2024 - April 2024',
            type: 'Internship',
            description: [
                'Completed an intensive summer program focusing on full-stack Python web development.',
                'Built web application prototypes and interactive interfaces using Python, HTML, and CSS.',
                'Gained practical exposure to Git version control, documentation standards, and collaborative workflows.',
            ],
            technologies: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
        },
    ];

    return (
        <section ref={sectionRef} id="experience" className="min-h-screen flex items-center justify-center py-24">
            <div className="w-full px-4 sm:px-8 lg:px-12 relative">
                
                {/* Section Title */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-3">Professional Experience</h2>
                    <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
                        My employment timeline, software engineering roles, and industrial milestones
                    </p>
                </div>

                {/* Global Spotlight effect for bento grid */}
                <GlobalSpotlight
                    gridRef={gridRef}
                    disableAnimations={isMobile}
                    enabled={true}
                    spotlightRadius={DEFAULT_SPOTLIGHT_RADIUS}
                    glowColor={DEFAULT_GLOW_COLOR}
                />

                {/* Bento Grid layout */}
                <div className="card-grid bento-section" ref={gridRef}>
                    {experiences.map((exp, index) => (
                        <ParticleCard
                            key={index}
                            className={`magic-bento-card magic-bento-card--border-glow transition-all duration-700 ${
                                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                            }`}
                            style={{
                                '--glow-color': DEFAULT_GLOW_COLOR,
                                transitionDelay: `${200 + index * 100}ms`
                            }}
                            disableAnimations={isMobile}
                            particleCount={DEFAULT_PARTICLE_COUNT}
                            glowColor={DEFAULT_GLOW_COLOR}
                            enableTilt={true}
                            clickEffect={true}
                            enableMagnetism={true}
                        >
                            {/* Card Content Wrapper */}
                            <div className="magic-bento-card__content h-full flex flex-col justify-between">
                                
                                {/* Header */}
                                <div>
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                                                <FaBriefcase className="text-purple-600 shrink-0 text-lg" />
                                                {exp.title}
                                            </h3>
                                            <p className="text-base font-semibold text-purple-650 mt-1">{exp.company}</p>
                                        </div>
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold border border-purple-200">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Dates & Location */}
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm text-gray-500 mb-5 pb-3 border-b border-gray-100">
                                        <span className="flex items-center gap-1.5">
                                            <FaCalendar className="text-[10px]" />
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <FaMapMarkerAlt className="text-[10px]" />
                                            {exp.location}
                                        </span>
                                    </div>

                                    {/* Description list */}
                                    <ul className="space-y-2.5 mb-6 text-sm text-gray-650 leading-relaxed font-light">
                                        {exp.description.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="text-purple-600 mt-1 flex-shrink-0 text-xs">▹</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies Badges */}
                                <div>
                                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 bg-gray-100/80 text-purple-700 rounded-full text-xs font-medium border border-purple-100 hover:border-purple-300 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </ParticleCard>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default Experience;
