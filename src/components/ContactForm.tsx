import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // Make sure to replace this URL with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwsG2D66TodtyimvZAUJ2qWxU5wnwJcz43HhzymxwMsqUxzZyt4dL4MK5NUz3jpi_JY-Q/exec';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus('submitting');

        try {
            // Using FormData because Google forms/scripts prefer it or URLSearchParams
            const formBody = new FormData();
            formBody.append('name', formData.name);
            formBody.append('category', formData.category);
            formBody.append('phone', formData.phone);
            formBody.append('message', formData.message);

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                // For Google Apps Script, no-cors is often required to avoid preflight errors,
                // but it means you can't read the response properly.
                mode: 'no-cors',
                body: formBody
            });

            // Since it's no-cors, we assume success if the fetch completes
            setStatus('success');
            setFormData({ name: '', category: '', phone: '', message: '' });

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div className="contact-form-wrapper">
            <h3 className="form-title">Send Us a Message</h3>

            {status === 'success' ? (
                <div className="form-success-message">
                    <h4>Thank you for your message!</h4>
                    <p>Our team will get back to you shortly.</p>
                    <button className="btn btn-secondary mt-4" onClick={() => setStatus('idle')}>Submit another query</button>
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                    />
                    <select
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className="form-input form-select"
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="B Tech">B Tech</option>
                        <option value="Other State university">Other State university</option>
                        <option value="Telangana State university">Telangana State university</option>
                        <option value="Medical">Medical</option>
                        <option value="MBA">MBA</option>
                        <option value="MCA">MCA</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Degree">Degree</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message / Query"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                    ></textarea>

                    {status === 'error' && (
                        <p className="form-error-message">Something went wrong. Please try again later.</p>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary form-submit-btn"
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
