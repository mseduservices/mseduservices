import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
    GraduationCap, BookOpen, Scroll, Briefcase, Globe,
    CheckCircle2, Star, PhoneCall, HeartPulse, Map, Leaf
} from 'lucide-react';
import heroImg from '../assets/student(Women).png';
import aboutImg from '../assets/student(men).png';
import assistImg from '../assets/Application Assistance.png';
import formImg from '../assets/Undergraduate  student.PNG';
import WhatsAppIcon from '../components/WhatsAppIcon';
import Carousel from '../components/Carousel';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import CountUp from '../components/CountUp';
import VideoTestimonials from '../components/VideoTestimonials';
import HomePopup from '../components/HomePopup';
import AssociatedColleges from '../components/AssociatedColleges';
import eastPointLogo from '../assets/East Point Group of Institutions logo .webp';
import ganpatLogo from '../assets/Ganpat University logo.png';
import graphicEraLogo from '../assets/Graphic Era logo.jpeg';
import itmLogo from '../assets/ITM University(logo).jpeg';
import marwadiLogo from '../assets/Marwadi University(logo).webp';
import ppSavaniLogo from '../assets/P P Savani University(logo).webp';
import svyasaLogo from '../assets/S-VYASA logo.svg';
import sandipLogo from '../assets/Sandip University(logo).jpeg';
import sanskritiLogo from '../assets/Sanskriti University (logo).webp';
import guruKashiLogo from '../assets/gurukashiuniversity logo.webp';
import vitLogo from '../assets/vit logo.png';
import './Home.css';

const services = [
    { icon: <GraduationCap size={40} />, title: "Undergraduate Admissions", desc: "Top B.Tech, B.Pharmacy & Degree colleges.", link: "/admissions/undergraduate" },
    { icon: <BookOpen size={40} />, title: "Postgraduate Admissions", desc: "M.Tech, M.Pharmacy & PG degrees.", link: "/admissions/postgraduate" },
    { icon: <Scroll size={40} />, title: "Diploma Admissions", desc: "Direct admission in Polytechnic colleges.", link: "/admissions/diploma" },
    { icon: <HeartPulse size={40} />, title: "Medical", desc: "Expert guidance for NEET & medical admissions.", link: "/admissions/medical" },
    { icon: <Map size={40} />, title: "Other State University", desc: "Explore universities across India.", link: "/admissions/other-state" },
    { icon: <Leaf size={40} />, title: "Agriculture", desc: "Admissions into top agriculture universities.", link: "/admissions/agriculture" },
    { icon: <Briefcase size={40} />, title: "MBA / MCA Admissions", desc: "Premium institutions across Telangana.", link: "/admissions/mba" },
    { icon: <Globe size={40} />, title: "Abroad Admissions", desc: "Study in UK, Uzbekistan & more.", link: "/abroad" },
];

const assistanceItems = [
    "Processing Fee Assistance",
    "Slot Booking Support",
    "Certificate Verification Guidance",
    "Option Entry & Web Options Support",
    "Seat Allotment Guidance",
    "Free Hostel Facility Assistance",
];

const stats = [
    { value: 8, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "K+", label: "Students Guided" },
    { value: 50, suffix: "+", label: "Associated Institutions" },
    { value: 20, suffix: "+", label: "Panel Experts" },
    { value: 99, suffix: "%", label: "Success Rate" }
];

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Home | MS EDIFY SOLUTIONS</title>
                <meta name="description" content="MS EDIFY SOLUTIONS: Expert admission consultancy for B.Tech, MBA, Medical, and Abroad Admissions in Hyderabad." />
                <meta name="keywords" content="EAPCET Admissions in Hyderabad, MBA Admissions in Telangana, Management Quota Admissions, PGECET Admission Guidance, Study in UK Consultancy Hyderabad" />
            </Helmet>

            <HomePopup />

            {/* Hero Section */}
            <Carousel />

            {/* Services Grid Section */}
            <section className="admission-services-section">
                <div className="admission-hero bg-light">
                    <div className="container admission-hero-container">
                        <div className="admission-hero-content">
                            <h2 className="admission-hero-title">Find Your Path</h2>
                            <p className="admission-hero-subtitle justify-mobile">Discover the next steps in your educational journey!</p>
                            <Link to="/contact" className="btn btn-primary btn-book-appointment">Book An Appointment</Link>
                        </div>
                        <div className="admission-hero-image">
                            {/* Place the user's 3D image in the public folder named image1.png */}
                            <img src={heroImg} alt="3D Educational Journey" className="hero-illustration" />
                        </div>
                    </div>
                </div>

                <div className="admission-cards-wrapper">
                    <div className="container">
                        <div className="admission-cards-marquee">
                            <div className="admission-cards-track">
                                {[...Array(2)].map((_, groupIndex) => (
                                    <div key={groupIndex} className="admission-cards-group">
                                        {services.map((svc, idx) => (
                                            <Link to={svc.link} key={`service-${groupIndex}-${idx}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <ServiceCard
                                                    icon={svc.icon}
                                                    title={svc.title}
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="admission-footer-text">
                            <p>
                                At MS EDIFY SOLUTIONS, our expert consultants are determined to help you apply to institutions that align with your potential and aspirations.
                            </p>
                            <Link to="/about" className="btn btn-primary btn-learn-more mt-4">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>



            {/* About Preview */}
            <section className="section about-dark-section">
                <div className="container about-preview">
                    <div className="about-content">
                        <h2 className="section-heading">About MS EDIFY SOLUTIONS</h2>
                        <p className="about-text justify-mobile">
                            Established in 2019, MS EDIFY SOLUTIONS has been a trusted name in educational consultancy. We believe in providing transparent, accurate, and comprehensive admission support to students striving for top-tier education.
                        </p>
                        <p className="about-text justify-mobile">
                            From application assistance to full-cycle enrollment in B.Tech, Medical, MBA, MCA, and Abroad programs, our expert counselors are dedicated to securing your future.
                        </p>
                        <Link to="/about" className="btn btn-primary mt-4">Learn More About Us</Link>
                    </div>
                    <div className="about-image">
                        <img src={aboutImg} alt="About MS EDIFY SOLUTIONS" />
                    </div>
                </div>
            </section>

            {/* Admitted Logos Section */}
            <section className="section admitted-logos-section">
                <div className="container">
                    <h2 className="section-heading text-center mb-8" style={{ fontSize: '2.2rem', fontWeight: '700' }}>Our Students have been admitted</h2>
                </div>
                <div className="logos-slider">
                    <div className="logos-track">
                        {/* First Track - Left to Right */}
                        {[...Array(2)].map((_, groupIndex) => (
                            <div key={`track1-${groupIndex}`} className="logos-slide">
                                <img src={eastPointLogo} alt="East Point Group of Institutions" />
                                <img src={ganpatLogo} alt="Ganpat University" />
                                <img src={graphicEraLogo} alt="Graphic Era University" />
                                <img src={itmLogo} alt="ITM University" />
                                <img src={marwadiLogo} alt="Marwadi University" />
                                <img src={ppSavaniLogo} alt="P P Savani University" />
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="logos-slider mt-4">
                    <div className="logos-track reverse">
                        {/* Second Track - Right to Left */}
                        {[...Array(2)].map((_, groupIndex) => (
                            <div key={`track2-${groupIndex}`} className="logos-slide reverse">
                                <img src={svyasaLogo} alt="S-VYASA University" />
                                <img src={sandipLogo} alt="Sandip University" />
                                <img src={sanskritiLogo} alt="Sanskriti University" />
                                <img src={guruKashiLogo} alt="Guru Kashi University" />
                                <img src={vitLogo} alt="VIT" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Associated Colleges */}
            <AssociatedColleges />

            {/* Application Assistance */}
            <section className="section section-bg-alt">
                <div className="container app-assistance">
                    <div className="app-assistance-image">
                        <img src={assistImg} alt="Complete Application Assistance" />
                    </div>
                    <div className="app-assistance-content">
                        <h2 className="section-heading">Complete Application Assistance</h2>
                        <p className="mb-6 text-gray">We take the stress out of the admission procedure by guiding you meticulously at every step of the counseling process.</p>

                        <ul className="checklist">
                            {assistanceItems.map((item, idx) => (
                                <li key={idx}><CheckCircle2 className="check-icon" size={24} /> <span>{item}</span></li>
                            ))}
                        </ul>
                        <Link to="/application-assistance" className="btn btn-secondary mt-6">View Full Process</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-choose-us">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="section-heading text-white">Why Choose MS EDIFY SOLUTIONS</h2>
                        <p className="section-subheading text-light-blue">Your journey to academic excellence begins with the right guidance.</p>
                    </div>

                    <div className="stats-grid">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat-card">
                                <h3><CountUp end={stat.value} suffix={stat.suffix} duration={1.2} /></h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="features-grid mt-12">
                        <div className="feature-item">
                            <div className="feature-icon"><Star size={24} /></div>
                            <h4>Expert Counsellors</h4>
                            <p>Highly experienced professionals guiding you to the best institutions.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><CheckCircle2 size={24} /></div>
                            <h4>Transparent Process</h4>
                            <p>100% genuine guidance with no hidden fees or false promises.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><Globe size={24} /></div>
                            <h4>Multiple Locations</h4>
                            <p>Accessible branch offices in Hyderabad and Narayanpet for your convenience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading">What Our Students Say</h2>
                    </div>

                    <VideoTestimonials />

                    <div className="testimonials-marquee-container">
                        <div className="testimonials-marquee">
                            {/* First Set */}
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"Thanks to MS EDIFY SOLUTIONS, I secured a seat in a top B.Tech college through EAPCET counselling. Their guidance was invaluable!"</p>
                                <h4 className="student-name">- Rahul G.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"The MBA admission process felt overwhelming until I visited their Hyderabad office. They handled everything perfectly."</p>
                                <h4 className="student-name">- Sneha P.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"I got my visa and admission to study in the UK without any hassle. Best educational consultancy in Telangana!"</p>
                                <h4 className="student-name">- Vikram S.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"Their team helped me navigate the complex medical admission process seamlessly. Highly recommended for aspiring doctors."</p>
                                <h4 className="student-name">- Priya K.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"From university selection to visa interview prep, they were supportive at every single step for my Masters in Uzbekistan."</p>
                                <h4 className="student-name">- Amit R.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"Professional, transparent, and extremely knowledgeable about the latest engineering admission protocols."</p>
                                <h4 className="student-name">- Srinivas Rao</h4>
                            </div>

                            {/* Duplicate Set for Infinite Scroll */}
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"Thanks to MS EDIFY SOLUTIONS, I secured a seat in a top B.Tech college through EAPCET counselling. Their guidance was invaluable!"</p>
                                <h4 className="student-name">- Rahul G.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"The MBA admission process felt overwhelming until I visited their Hyderabad office. They handled everything perfectly."</p>
                                <h4 className="student-name">- Sneha P.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"I got my visa and admission to study in the UK without any hassle. Best educational consultancy in Telangana!"</p>
                                <h4 className="student-name">- Vikram S.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"Their team helped me navigate the complex medical admission process seamlessly. Highly recommended for aspiring doctors."</p>
                                <h4 className="student-name">- Priya K.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"From university selection to visa interview prep, they were supportive at every single step for my Masters in Uzbekistan."</p>
                                <h4 className="student-name">- Amit R.</h4>
                            </div>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="review-text">"Professional, transparent, and extremely knowledgeable about the latest engineering admission protocols."</p>
                                <h4 className="student-name">- Srinivas Rao</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Section */}
            <section className="section bg-light" id="contact-form-section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="section-heading">Have Questions?</h2>
                        <p className="about-text" style={{ marginBottom: '2rem' }}>
                            Fill out the form with your details and specific queries. Our expert counselors will get back to you with personalized guidance for your educational journey.
                        </p>

                        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                            <img src={formImg} alt="Contact Us form illustration" style={{ maxHeight: '250px' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-primary)' }}>
                                <PhoneCall size={24} />
                                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>+91 9154236206</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-primary)' }}>
                                <WhatsAppIcon size={24} />
                                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>+91 9666236206 (WhatsApp)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
