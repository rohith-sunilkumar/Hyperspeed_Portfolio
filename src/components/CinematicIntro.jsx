import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CinematicIntro = ({ onComplete }) => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const welcomeRef = useRef(null);
    const glintRef = useRef(null);
    const lightRaysRef = useRef(null);
    const transitionRef = useRef(null);
    const part1Ref = useRef(null);
    const part2Ref = useRef(null);
    const gridRef = useRef(null);
    const fogRef = useRef(null);
    const scanlinesRef = useRef(null);

    useEffect(() => {

        // Particle system setup
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let lastFrameTime = 0;
        const targetFPS = 30;
        const frameInterval = 1000 / targetFPS;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.3 + 0.2; // Reduced max opacity
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around screen
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(167, 139, 250, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles - reduced from 80 to 40
        const particles = Array.from({ length: 40 }, () => new Particle());

        // Animation loop for particles with frame throttling
        const animateParticles = (currentTime) => {
            animationFrameId = requestAnimationFrame(animateParticles);

            const elapsed = currentTime - lastFrameTime;
            if (elapsed < frameInterval) return;

            lastFrameTime = currentTime - (elapsed % frameInterval);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
        };
        animateParticles(0);

        // GSAP Timeline
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => {
                    onComplete();
                }, 100);
            }
        });

        // Get individual letters
        const letters = titleRef.current.querySelectorAll('.letter');

        // Animation sequence
        tl.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: 'power2.inOut' }
        )
            .fromTo(gridRef.current,
                { opacity: 0, y: 50 },
                { opacity: 0.4, y: 0, duration: 1.0, ease: 'power2.out' },
                0.2
            )
            .fromTo(fogRef.current,
                { opacity: 0 },
                { opacity: 0.6, duration: 1.2, ease: 'power2.out' },
                0.4
            )
            .fromTo(lightRaysRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 0.6, scale: 1, duration: 0.8, ease: 'power2.out' },
                0.3
            )
            .fromTo(letters,
                {
                    opacity: 0,
                    scale: 0.5,
                    y: 50,
                    rotationX: -90
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 1.0,
                    stagger: 0.1,
                },
                1.0
            )
            .to(titleRef.current,
                {
                    scale: 1.05,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power1.inOut'
                },
                3.2
            )
            .fromTo(subtitleRef.current,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                },
                2.8
            )
            // Fade out Part 1
            .to(part1Ref.current,
                {
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.inOut'
                },
                4.0
            )
            // Fade in Part 2 (Welcome message)
            .fromTo(part2Ref.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.0,
                    ease: 'power2.out'
                },
                4.5
            )
            // Hold welcome message (extended duration)
            .to({}, { duration: 3.5 }, 5.5)
            // Final white flash transition
            .to(transitionRef.current,
                {
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.in'
                },
                9.0
            )
            .to(containerRef.current,
                {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.inOut'
                },
                9.4
            );

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            tl.kill();
        };
    }, [onComplete]);



    return (
        <div
            ref={containerRef}
            className="cinematic-intro"
        >
            {/* Holographic Grid Floor */}
            <div ref={gridRef} className="holo-grid" />

            {/* Fog/Mist Effect */}
            <div ref={fogRef} className="cyber-fog" />

            {/* Particle Canvas */}
            <canvas
                ref={canvasRef}
                className="particle-canvas"
            />



            {/* PART 1: Name Introduction */}
            <div ref={part1Ref} className="intro-part">
                <div className="cinematic-title-container">
                    <h1 ref={titleRef} className="cinematic-title">
                        <div className="title-line">
                            {'HI'.split('').map((letter, index) => (
                                <span
                                    key={index}
                                    className={`letter ${letter === ' ' ? 'space' : ''}`}
                                    data-text={letter}
                                >
                                    {letter === ' ' ? '\u00A0' : letter}
                                </span>
                            ))}
                        </div>
                        <div className="title-line">
                            {"I'M ROHITH".split('').map((letter, index) => (
                                <span
                                    key={index + 100}
                                    className={`letter ${letter === ' ' ? 'space' : ''}`}
                                    data-text={letter}
                                >
                                    {letter === ' ' ? '\u00A0' : letter}
                                </span>
                            ))}
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <p ref={subtitleRef} className="cinematic-subtitle">
                        Full-Stack Developer
                    </p>

                    {/* Holographic Scanlines */}
                    <div ref={scanlinesRef} className="holo-scanlines" />


                </div>
            </div>

            {/* PART 2: Welcome Message */}
            <div ref={part2Ref} className="intro-part intro-part-2">
                <h2 ref={welcomeRef} className="welcome-message">
                    <span className="welcome-line">
                        {'I turn ideas into'.split('').map((letter, index) => (
                            <span
                                key={index}
                                className={`welcome-letter ${letter === ' ' ? 'space' : ''}`}
                                data-text={letter}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </span>
                    <span className="welcome-line">
                        {'responsive and reliable'.split('').map((letter, index) => (
                            <span
                                key={index + 100}
                                className={`welcome-letter ${letter === ' ' ? 'space' : ''}`}
                                data-text={letter}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </span>
                    <span className="welcome-line">
                        {'web applications'.split('').map((letter, index) => (
                            <span
                                key={index + 200}
                                className={`welcome-letter ${letter === ' ' ? 'space' : ''}`}
                                data-text={letter}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </span>
                </h2>
            </div>

            {/* Transition Flash */}
            <div ref={transitionRef} className="transition-flash" />
        </div>
    );
};

export default CinematicIntro;
