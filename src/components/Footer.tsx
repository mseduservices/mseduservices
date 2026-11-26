import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import logoImg from '../assets/logo.jpeg';
import './Footer.css';

const Footer = () => {
    const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'cancellation' | null>(null);

    const closeModal = () => setActiveModal(null);

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col about-col">
                    <img src={logoImg} alt="MS Educational Services" className="footer-logo" />
                    <p className="footer-desc">
                        For Your Bright Future. Providing expert admission consultancy and comprehensive support since 2019.
                    </p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/ms.eduservicesofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <InstagramIcon size={24} fill="colored" />
                        </a>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="footer-links">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul>
                        <li><Link to="/"><ChevronRight size={16} /> Home</Link></li>
                        <li><Link to="/about"><ChevronRight size={16} /> About Us</Link></li>
                        <li><Link to="/admissions/btech"><ChevronRight size={16} /> B.Tech Admissions</Link></li>
                        <li><Link to="/admissions/medical"><ChevronRight size={16} /> Medical Admissions</Link></li>
                        <li><Link to="/application-assistance"><ChevronRight size={16} /> Application Assistance</Link></li>
                        <li><Link to="/abroad"><ChevronRight size={16} /> Abroad Admissions</Link></li>
                        <li><Link to="/contact"><ChevronRight size={16} /> Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3 className="footer-heading">Contact Info</h3>
                    <div className="contact-item">
                        <Phone size={20} className="contact-icon" />
                        <div>
                            <p><a href="tel:9154236206">+91 9154236206</a></p>
                            <p><a href="tel:9666236206">+91 9666236206</a></p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <Mail size={20} className="contact-icon" />
                        <p><a href="mailto:msedifysolutions@gmail.com">msedifysolutions@gmail.com</a></p>
                    </div>
                </div>

                <div className="footer-col locations-col">
                    <h3 className="footer-heading">Our Locations</h3>
                    <div className="contact-item">
                        <MapPin size={24} className="contact-icon location-icon" />
                        <div>
                            <strong>Head Office:</strong>
                            <p>2-43/3 Pillar Number 1565,<br />Sainagar Colony, Near Shivaji Statue,<br />Dilsukhnagar, Hyderabad – 500060</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <MapPin size={24} className="contact-icon location-icon" />
                        <div>
                            <strong>Branch Office:</strong>
                            <p>1-6-14, Above Bank of Maharashtra,<br />Opposite Manohar Theatre,<br />Civil Lane, Narayanpet – 509210</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-legal-inline">
                        <button className="text-link-inline" onClick={() => setActiveModal('terms')}>Terms and Conditions</button>
                        <span className="separator">|</span>
                        <button className="text-link-inline" onClick={() => setActiveModal('privacy')}>Privacy Policy</button>
                        <span className="separator">|</span>
                        <button className="text-link-inline" onClick={() => setActiveModal('cancellation')}>Cancellation and Return Policy</button>
                    </div>
                    <p className="footer-copyright mt-2">
                        Copyright {new Date().getFullYear()} &copy; <span className="highlight-text">MS Educational Services</span>, Developed & Maintained by: <a href="https://partha-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className="highlight-text" style={{textDecoration: 'none'}}>Partha saradhi</a>
                    </p>
                </div>
            </div>

            {/* Legal Modals */}
            <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms and Conditions">
                <h4>Introduction</h4>
                <p>Welcome to MS Educational Services. By accessing our website and utilizing our consultancy services, you agree to comply with and be bound by the following terms and conditions.</p>

                <h4>Our Services</h4>
                <p>MS Educational Services provides educational consultancy, admission guidance, and application assistance. We do not guarantee admission to any specific university, as final decisions rest exclusively with the educational institutions.</p>

                <h4>User Responsibilities</h4>
                <ul>
                    <li>You must provide accurate and complete information during the counseling and application process.</li>
                    <li>You are responsible for meeting all deadlines set by respective universities and examining bodies.</li>
                    <li>Any forged or fraudulent documents submitted by the student will lead to immediate termination of our services without a refund.</li>
                </ul>

                <h4>Limitation of Liability</h4>
                <p>MS Educational Services shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our guidance. Our liability is limited strictly to the service fees paid to us.</p>
            </Modal>

            <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
                <h4>Data Collection</h4>
                <p>We collect personal information such as, but not limited to: your name, contact numbers, email address, educational history, and identification documents necessary for the university admission process.</p>

                <h4>Use of Information</h4>
                <p>Your data is used exclusively to facilitate your educational applications, contact you regarding admission updates, and improve our consultancy services. We do not sell your personal data to third parties.</p>

                <h4>Data Security</h4>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure. However, no data transmission over the internet is completely secure.</p>

                <h4>Third-Party Sharing</h4>
                <p>We only share essential information with relevant universities, colleges, and examination boards as required to process your applications.</p>
            </Modal>

            <Modal isOpen={activeModal === 'cancellation'} onClose={closeModal} title="Cancellation and Return Policy">
                <h4>Cancellation of Services</h4>
                <p>Students may cancel their consultancy engagement with MS Educational Services at any time by providing a written notice via email.</p>

                <h4>Refund/Return Policy</h4>
                <ul>
                    <li><strong>Before Application Submission:</strong> If you cancel before we have commenced the formal application process or slot booking on your behalf, a partial refund may be issued, minus administrative fees.</li>
                    <li><strong>After Application Submission:</strong> Once applications, counseling slot bookings, or institutional fees have been processed, <strong>no refunds</strong> will be issued by MS Educational Services.</li>
                    <li><strong>University Fees:</strong> Any tuition fees, application fees, or deposits paid directly to a university or college are subject to the respective institution's refund policy. MS Educational Services has no control over university refunds.</li>
                </ul>

                <h4>Processing Time</h4>
                <p>Approved refunds for our consultancy fees will be processed within 14-21 business days to the original method of payment.</p>
            </Modal>
        </footer>
    );
};

export default Footer;
