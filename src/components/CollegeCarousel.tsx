import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CollegeCarousel.css';

interface College {
    name: string;
    image: string;
}

const colleges: College[] = [
    { name: "IIT Hyderabad", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop" },
    { name: "NIT Warangal", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop" },
    { name: "VIT Vellore", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1374&auto=format&fit=crop" },
    { name: "SRM University", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1470&auto=format&fit=crop" },
    { name: "KL University", image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486&auto=format&fit=crop" },
    { name: "GITAM University", image: "https://images.unsplash.com/photo-1592284344465-950c4c4784a0?q=80&w=1469&auto=format&fit=crop" }
];

const CollegeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [visibleCards, setVisibleCards] = useState(3);

    // Responsive visible cards
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };
        handleResize(); // Initial setup
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, colleges.length - visibleCards);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, [maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };

    // Auto-advance
    useEffect(() => {
        if (isHovered) return;

        const autoPlayTimer = setInterval(nextSlide, 3500); // Automatically move every 3.5s

        return () => clearInterval(autoPlayTimer);
    }, [isHovered, nextSlide]);

    return (
        <section className="section college-carousel-section">
            <div className="container">
                <div className="text-center mb-8">
                    <h2 className="section-heading">Our Associated Colleges</h2>
                    <p className="section-subheading">
                        We are proud to see our students studying in reputed colleges across India.
                        Here are some glimpses of the colleges where our students have secured admissions.
                    </p>
                </div>

                <div
                    className="carousel-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Arrows */}
                    <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous slide">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next slide">
                        <ChevronRight size={24} />
                    </button>

                    {/* Image Track */}
                    <div className="carousel-track-wrapper">
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                        >
                            {colleges.map((college, idx) => (
                                <div
                                    className="carousel-slide"
                                    key={idx}
                                    style={{ width: `${100 / visibleCards}%` }}
                                >
                                    <div className="college-card">
                                        <img src={college.image} alt={college.name} className="college-image" />
                                        <div className="college-overlay">
                                            <h3 className="college-name">{college.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="carousel-dots">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollegeCarousel;
