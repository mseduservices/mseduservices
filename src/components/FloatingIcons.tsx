import { useState, useEffect } from 'react';
import { PhoneCall, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './FloatingIcons.css';

const FloatingIcons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="floating-icons-container">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="floating-icon scroll-top-icon"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={28} />
                </button>
            )}
            <a
                href="https://wa.me/9154236206"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-icon whatsapp-icon"
                aria-label="Chat on WhatsApp"
            >
                <WhatsAppIcon size={30} />
            </a>
            <a
                href="tel:9154236206"
                className="floating-icon phone-icon"
                aria-label="Call Us"
            >
                <PhoneCall size={30} />
            </a>
        </div>
    );
};

export default FloatingIcons;
