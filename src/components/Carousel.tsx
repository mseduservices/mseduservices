import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import './Carousel.css';

interface Slide {
    id: number;
    tag: string;
    headline: string;
    subtext: string;
    features: string[];
    image: string;
}

const slides: Slide[] = [
    {
        id: 1,
        tag: 'Engineering Admissions',
        headline: 'B.Tech Admissions 2026',
        subtext: 'Start your engineering journey at India\'s top universities and colleges with expert admission guidance.',
        features: ['Top University Tie-Ups', 'Direct & Management Quota Admissions', 'Career Guidance & Counseling', '100% Placement Support'],
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920',
    },
    {
        id: 2,
        tag: 'Medical Admissions',
        headline: 'Medical Admissions 2026',
        subtext: 'Get expert support to secure admission in leading medical colleges across India.',
        features: ['NEET Counseling Assistance', 'NRI & Management Quota Admissions', 'Guidance for Top Medical Colleges', 'Complete Admission Support'],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920',
    },
    {
        id: 3,
        tag: 'MBA Admissions',
        headline: 'MBA Admissions 2026',
        subtext: 'Advance your career with top MBA programs and business schools across India.',
        features: ['Top B-School Admission Guidance', 'Profile Building & Career Planning', 'Management Quota Options', 'Placement-Focused Programs'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920',
    },
    {
        id: 4,
        tag: 'MCA Admissions',
        headline: 'MCA Admissions 2026',
        subtext: 'Build a strong career in software development and advanced computing.',
        features: ['Direct Admission Support', 'Top Universities & Colleges', 'Industry-Ready Curriculum', 'High-Demand IT Career Opportunities'],
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920',
    }
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    const updateSlideWidth = () => {
        if (trackRef.current) {
            const firstSlide = trackRef.current.querySelector('.slide') as HTMLElement;
            if (firstSlide) setSlideWidth(firstSlide.offsetWidth);
        }
    };

    useEffect(() => {
        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);
        return () => window.removeEventListener('resize', updateSlideWidth);
    }, []);

    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="carousel-wrapper">
            <div
                ref={trackRef}
                className="carousel-track"
                style={{ transform: `translateX(-${current * slideWidth}px)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === current ? 'active' : ''}`}
                    >
                        <div className="slide-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                        <div className="slide-overlay">
                            <div className="container slide-content">
                                <AnimatePresence mode='wait'>
                                    {index === current && (
                                        <motion.div
                                            key={`content-${slide.id}`}
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <motion.span variants={itemVariants} className="slide-tag">
                                                {slide.tag}
                                            </motion.span>
                                            
                                            <motion.h2 variants={itemVariants}>
                                                {slide.headline}
                                            </motion.h2>
                                            
                                            <motion.p variants={itemVariants}>
                                                {slide.subtext}
                                            </motion.p>
                                            
                                            <motion.ul variants={itemVariants} className="slide-features">
                                                {slide.features.map((feature, i) => (
                                                    <motion.li 
                                                        key={i}
                                                        variants={{
                                                            hidden: { x: -20, opacity: 0 },
                                                            visible: { x: 0, opacity: 1 }
                                                        }}
                                                    >
                                                        <CheckCircle2 size={20} className="feature-icon" />
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                            
                                            <motion.div variants={itemVariants} className="slide-cta-group">
                                                <Link to="/contact" className="btn btn-primary slide-btn">📞 Apply Now</Link>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous Slide">
                <ChevronLeft size={32} />
            </button>
            <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next Slide">
                <ChevronRight size={32} />
            </button>

            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
