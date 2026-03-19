import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import InstagramIcon from './InstagramIcon';
import logoImg from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const handleLogoClick = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 400); // match animation duration
    };

    return (
        <header className="site-header">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-container">
                    <div className="top-bar-left">
                        <a href="tel:+919666236206" className="top-contact"><Phone size={14} /> +91 9666236206</a>
                        <span className="divider">|</span>
                        <a href="mailto:msedifysolutions@gmail.com" className="top-contact"><Mail size={14} /> msedifysolutions@gmail.com</a>
                        <span className="divider hide-mobile">|</span>
                        <a href="https://wa.me/919154236206" className="top-contact whatsapp-link hide-mobile"><WhatsAppIcon size={14} /> 9154236206</a>
                    </div>
                    <div className="top-bar-right">
                        <a href="https://www.instagram.com/ms.eduservicesofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="top-contact" target="_blank" rel="noopener noreferrer"><InstagramIcon size={14} fill="colored" /> ms.eduservicesofficial</a>
                        <span className="divider">|</span>
                        <Link to="/about">About Us</Link>
                        <span className="divider">|</span>
                        <Link to="/contact">Contact Us</Link>
                        <span className="divider">|</span>
                        <Link to="/contact" className="enroll-link">Enroll Now</Link>
                    </div>
                </div>
            </div>

            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-container">
                    <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
                        <img src={logoImg} alt="MS EDIFY SOLUTIONS" className={isAnimating ? 'logo-animate' : ''} />
                        <span className="logo-text">
                            <span className="logo-text-black">MS</span>
                            <span className="logo-text-blue">EDIFY</span>
                            <span className="logo-text-black">SOLUTIONS</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="navbar-links desktop-only">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                        <div className="nav-dropdown">
                            <span className="dropdown-trigger">
                                Admissions <ChevronDown size={16} />
                            </span>
                            <div className="dropdown-content">
                                <Link to="/admissions/btech">B Tech</Link>
                                <Link to="/admissions/other-state">Other State university</Link>
                                <Link to="/admissions/telangana-state">Telangana State university</Link>
                                <Link to="/admissions/medical">Medical</Link>
                                <Link to="/admissions/mba">MBA</Link>
                                <Link to="/admissions/mca">MCA</Link>
                                <Link to="/admissions/diploma">Diploma</Link>
                                <Link to="/admissions/degree">Degree</Link>
                                <Link to="/admissions/agriculture">Agriculture</Link>
                                <Link to="/admissions/undergraduate">Undergraduate</Link>
                                <Link to="/admissions/postgraduate">Postgraduate</Link>
                            </div>
                        </div>
                        <Link to="/application-assistance" className={location.pathname === '/application-assistance' ? 'active' : ''}>Application Assistance</Link>
                        <Link to="/abroad" className={location.pathname === '/abroad' ? 'active' : ''}>Abroad Admissions</Link>
                    </div>

                    {/* Mobile menu button */}
                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <div className="container mobile-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <div className="mobile-dropdown">
                                <span className="mobile-dropdown-title">Admissions</span>
                                <div className="mobile-dropdown-links">
                                    <Link to="/admissions/btech">B Tech</Link>
                                    <Link to="/admissions/other-state">Other State university</Link>
                                    <Link to="/admissions/telangana-state">Telangana State university</Link>
                                    <Link to="/admissions/medical">Medical</Link>
                                    <Link to="/admissions/mba">MBA</Link>
                                    <Link to="/admissions/mca">MCA</Link>
                                    <Link to="/admissions/diploma">Diploma</Link>
                                    <Link to="/admissions/degree">Degree</Link>
                                    <Link to="/admissions/agriculture">Agriculture</Link>
                                    <Link to="/admissions/undergraduate">Undergraduate</Link>
                                    <Link to="/admissions/postgraduate">Postgraduate</Link>
                                </div>
                            </div>
                            <Link to="/application-assistance">Application Assistance</Link>
                            <Link to="/abroad">Abroad Admissions</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/contact" className="btn btn-primary mobile-enroll">Enroll Now</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
