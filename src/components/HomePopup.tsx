import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';
import './HomePopup.css';

const HomePopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after a slight delay to let the page load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="home-popup-overlay">
            <div className="home-popup-content">
                <button
                    className="home-popup-close"
                    onClick={() => setIsVisible(false)}
                    aria-label="Close popup"
                >
                    <X size={20} color="#333" />
                </button>

                <div className="home-popup-body">
                    <div className="home-popup-header">
                        <h2>Looking for Admissions?</h2>
                        <p>Get free expert counseling today.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default HomePopup;
