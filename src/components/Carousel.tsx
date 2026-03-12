import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
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
        subtext: 'Secure your future in India\'s top engineering institutions. We provide end-to-end guidance from entrance exam counseling to final seat allotment.',
        features: ['100% Placement Assistance', 'Top Tier University Tie-ups', 'Direct Admission Options'],
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920',
    },
    {
        id: 2,
        tag: 'Medical Pathways',
        headline: 'Medical Admissions',
        subtext: 'Get admission into premier medical institutions. Complete support navigating the complex application and counseling processes.',
        features: ['NEET Counseling Support', 'NRI & Management Quota', 'Top Medical Colleges'],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920',
    },
    {
        id: 3,
        tag: 'Postgraduate Programs',
        headline: 'MBA Admissions 2026',
        subtext: 'Accelerate your career with a top-tier MBA program. Let us simplify your admission process while you focus on your preparation.',
        features: ['IIM & Top B-School Prep', 'Profile Building Strategies', 'GD / PI Preparation'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920',
    },
    {
        id: 4,
        tag: 'Postgraduate Programs',
        headline: 'MCA Admissions',
        subtext: 'Step into the world of advanced computing. Direct and entrance-based admission assistance.',
        features: ['TS ICET / NIMCET Guidance', 'Direct Management Quota', 'Top IT Placements'],
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920',
    }
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className="carousel-wrapper">
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === current ? 'active' : ''}`}
                    >
                        <div className="slide-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                        <div className="slide-overlay">
                            <div className="container slide-content">
                                <span className="slide-tag">{slide.tag}</span>
                                <h2>{slide.headline}</h2>
                                <p>{slide.subtext}</p>
                                <ul className="slide-features">
                                    {slide.features.map((feature, i) => (
                                        <li key={i}>
                                            <CheckCircle2 size={20} className="feature-icon" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn btn-primary slide-btn">Apply Now</Link>
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
