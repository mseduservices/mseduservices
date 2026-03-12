import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>Contact Us | MS EDIFY SOLUTIONS</title>
                <meta name="description" content="Get in touch with MS EDIFY SOLUTIONS for expert admission guidance in Hyderabad." />
            </Helmet>

            <section className="section bg-light">
                <div className="container text-center">
                    <h1 className="section-heading">Contact Us</h1>
                    <p className="section-subheading">We're here to answer all your admission-related queries.</p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h2 className="section-heading" style={{ fontSize: '1.75rem' }}>Get In Touch</h2>
                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <strong>Email:</strong>
                                <p><a href="mailto:msedifysolutions@gmail.com" style={{ color: 'var(--color-accent)' }}>msedifysolutions@gmail.com</a></p>
                            </div>
                            <div>
                                <strong>Phone numbers:</strong>
                                <p>+91 9154236206</p>
                                <p>+91 9666236206</p>
                            </div>
                            <div>
                                <strong>Head Office (Hyderabad):</strong>
                                <p style={{ color: 'var(--color-text-light)' }}>2-43/3 Pillar Number 1565, Sainagar Colony, Near Shivaji Statue, Dilsukhnagar, Hyderabad – 500060</p>
                            </div>
                            <div>
                                <strong>Branch Office (Narayanpet):</strong>
                                <p style={{ color: 'var(--color-text-light)' }}>1-6-14, Above Bank of Maharashtra, Opposite Manohar Theatre, Civil Lane, Narayanpet – 509210</p>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Contact;
