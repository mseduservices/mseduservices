import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import { Reveal } from '../components/Reveal';

const Contact = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>Contact Us | MS Educational Services</title>
                <meta name="description" content="Get in touch with MS Educational Services for expert admission guidance in Hyderabad." />
            </Helmet>

            <section className="section bg-light">
                <div className="container text-center">
                    <Reveal>
                        <h1 className="section-heading">Contact Us</h1>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="section-subheading">We're here to answer all your admission-related queries.</p>
                    </Reveal>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <Reveal>
                            <h2 className="section-heading" style={{ fontSize: '1.75rem' }}>Get In Touch</h2>
                        </Reveal>
                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <Reveal delay={0.2}>
                                <div>
                                    <strong>Email:</strong>
                                    <p><a href="mailto:msedifysolutions@gmail.com" style={{ color: 'var(--color-accent)' }}>msedifysolutions@gmail.com</a></p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.3}>
                                <div>
                                    <strong>Phone numbers:</strong>
                                    <p>+91 9154236206</p>
                                    <p>+91 9666236206</p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <div>
                                    <strong>Head Office (Hyderabad):</strong>
                                    <p style={{ color: 'var(--color-text-light)' }}>2-43/3 Pillar Number 1565, Sainagar Colony, Near Shivaji Statue, Dilsukhnagar, Hyderabad – 500060</p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.5}>
                                <div>
                                    <strong>Branch Office (Narayanpet):</strong>
                                    <p style={{ color: 'var(--color-text-light)' }}>1-6-14, Above Bank of Maharashtra, Opposite Manohar Theatre, Civil Lane, Narayanpet – 509210</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <Reveal initialX={40} delay={0.4}>
                        <div>
                            <ContactForm />
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Contact;
