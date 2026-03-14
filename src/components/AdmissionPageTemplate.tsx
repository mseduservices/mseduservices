import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Award, ClipboardCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import './AdmissionPageTemplate.css';

interface CourseCategory {
    title: string;
    courses: string[];
}

interface AdmissionPageTemplateProps {
    title: string;
    subtitle: string;
    description?: React.ReactNode;
    imageSrc?: string;
    bannerImage?: string;
    categories?: CourseCategory[];
    children?: React.ReactNode;
}

const AdmissionPageTemplate: React.FC<AdmissionPageTemplateProps> = ({ title, subtitle, description, imageSrc, bannerImage, categories = [], children }) => {
    return (
        <div className="admission-page">
            <Helmet>
                <title>{title} | MS EDIFY SOLUTIONS</title>
                <meta name="description" content={subtitle} />
            </Helmet>

            <section
                className={`admission-hero ${bannerImage ? 'has-banner' : 'bg-light'}`}
                style={bannerImage ? { backgroundImage: `url('${bannerImage}')` } : {}}
            >
                <div className="container text-center">
                    <Reveal>
                        <h1 className="section-title">{title}</h1>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="section-subtitle">{subtitle}</p>
                    </Reveal>
                </div>
            </section>

            {(description || imageSrc) && (
                <section className="section pb-0">
                    <div className="container">
                        <div className="admission-intro-grid">
                            {description && (
                                <div className="admission-intro-content">
                                    <Reveal>
                                        <h2 className="section-heading mb-4">About the Program</h2>
                                    </Reveal>
                                    <Reveal delay={0.35}>
                                        <div className="text-muted leading-relaxed text-lg">
                                            {description}
                                        </div>
                                    </Reveal>
                                </div>
                            )}
                            {imageSrc && (
                                <div className="admission-intro-image">
                                    <Reveal initialY={30} delay={0.4}>
                                        <img src={imageSrc} alt={`${title} admissions`} className="w-full h-auto" style={{ maxHeight: '400px', objectFit: 'contain' }} />
                                    </Reveal>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {categories.length > 0 && (
                <section className="section">
                    <div className="container">
                        <div className="course-categories-grid">
                            {categories.map((cat, idx) => (
                                <Reveal key={idx} delay={0.15 * idx} initialY={20}>
                                    <div className="course-category-card">
                                        <h3>{cat.title}</h3>
                                        <ul>
                                            {cat.courses.map((course, i) => (
                                                <li key={i}><CheckCircle2 size={18} className="text-secondary" /> <span>{course}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {children}

            <section className="section bg-dark text-white features-banner">
                <div className="container">
                    <Reveal>
                        <h2 className="text-center mb-10 text-white" style={{ fontSize: '2.5rem' }}>Admission Pathways & Support</h2>
                    </Reveal>
                    <div className="features-grid-3">
                        <Reveal delay={0.2} initialY={20}>
                            <div className="feature-box">
                                <Award size={48} className="text-accent mb-4 mx-auto" />
                                <h4 className="text-white">Merit & Rank-Based</h4>
                                <p>Admissions through counseling based on entrance exam ranks and merit.</p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.35} initialY={20}>
                            <div className="feature-box">
                                <ClipboardCheck size={48} className="text-accent mb-4 mx-auto" />
                                <h4 className="text-white">Management Quota</h4>
                                <p>Direct admissions under management and NRI quotas in top institutions.</p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.5} initialY={20}>
                            <div className="feature-box">
                                <PhoneCall size={48} className="text-accent mb-4 mx-auto" />
                                <h4 className="text-white">End-to-End Support</h4>
                                <p>From university selection and application to document verification and seat allotment.</p>
                            </div>
                        </Reveal>
                    </div>
                    <div className="text-center mt-12">
                        <Reveal delay={0.7}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Get Admission Guidance</Link>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdmissionPageTemplate;
