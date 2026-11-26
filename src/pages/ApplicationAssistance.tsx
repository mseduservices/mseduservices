
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Bell, Download, Monitor, Award, CalendarCheck, ListChecks, School } from 'lucide-react';
import assistanceImg from '../assets/Application Assistance.png';
import '../components/Timeline.css';

const ApplicationAssistance = () => {
    const flowSteps = [
        {
            title: "Step 1: Notification & Application Registration",
            description: "Official notification is released. Submit online application form and pay the exam fee.",
            icon: <Bell size={28} />
        },
        {
            title: "Step 2: Hall Ticket Download",
            description: "Download hall ticket from the official website before the exam.",
            icon: <Download size={28} />
        },
        {
            title: "Step 3: Entrance Examination (CBT)",
            description: "Attend the computer-based entrance test CAT/CBT.",
            icon: <Monitor size={28} />
        },
        {
            title: "Step 4: Result & Rank Card",
            description: "Check results and download the official rank card.",
            icon: <Award size={28} />
        },
        {
            title: "Step 5: Counseling Registration & Certificate Verification",
            description: "Register for counseling, pay fee, book a slot, and complete document verification.",
            icon: <CalendarCheck size={28} />
        },
        {
            title: "Step 6: Web Options Entry & Seat Allotment",
            description: "Enter web options during Phase 1, Phase 2, or Final Phase to select preferred colleges and branches. Seats are allotted.",
            icon: <ListChecks size={28} />
        },
        {
            title: "Step 7: College Reporting & Admission Confirmation",
            description: "Report to the allotted college to submit documents and pay the tuition fee.",
            icon: <School size={28} />
        }
    ];

    return (
        <div className="admission-page">
            <Helmet>
                <title>Application Assistance | MS Educational Services</title>
                <meta name="description" content="End-to-end application assistance including web options, certificate verification, and fee reimbursement." />
            </Helmet>

            <section
                className="admission-hero has-banner"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920')" }}
            >
                <div className="container text-center">
                    <h1 className="section-title">Complete Application Assistance</h1>
                    <p className="section-subtitle">We hold your hand through the entire complex counseling and admission process.</p>
                </div>
            </section>

            <section className="section pb-0">
                <div className="container">
                    <div className="admission-intro-grid">
                        <div className="admission-intro-content">
                            <h2 className="section-heading mb-4">Why Do You Need Assistance?</h2>
                            <div className="text-muted leading-relaxed text-lg">
                                <p>Securing a good rank is only half the battle. The admission counseling process—involving multi-stage web options, rigorous document verification, and seat allocation algorithms—is notoriously complex and stressful for students and parents alike.</p>
                                <p className="mt-4">Even a minor mistake in option entry order or a missing document during verification can cost you a seat in a premier institution. <strong>MS Educational Services</strong> provides 100% genuine, end-to-end guidance to ensure you successfully navigate this maze and claim the seat you deserve.</p>
                            </div>
                        </div>
                        <div className="admission-intro-image">
                            <img src={assistanceImg} alt="Application Assistance" className="w-full h-auto" style={{ maxHeight: '400px', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="timeline-section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-heading">Our 7-Step Assistance Process</h2>
                    </div>
                    <div className="timeline">
                        {flowSteps.map((step, idx) => (
                            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-icon">
                                    {step.icon}
                                </div>
                                <div className="timeline-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-dark text-white features-banner">
                <div className="container text-center">
                    <h2 className="mb-6 text-white" style={{ fontSize: '2.5rem' }}>Don't Risk Your College Seat</h2>
                    <p className="text-light-blue mb-10 text-lg max-w-2xl mx-auto">Get expert helping eyes on your application. Contact us today to secure your admission process.</p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Book Free Consultation</Link>
                </div>
            </section>
        </div>
    );
};

export default ApplicationAssistance;
