import { MapPin, Building2 } from 'lucide-react';
import './OtherStateUniversities.css';

// Import logos
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

// Newly added logos
import aakashLogo from '../assets/Aakash Institute logo .jpeg';
import harshaLogo from '../assets/Harsha Institutions logo .jpeg';
import invertisLogo from '../assets/Invertis University logo.png';
import hindusthanLogo from '../assets/Hindusthan Institute of Technology logo.jpeg';
import dhanalakshmiLogo from '../assets/Dhanalakshmi Srinivasan University logo.jpeg';

const universities = [
    {
        name: "Sandip University",
        location: "Nashik, Maharashtra",
        description: "Sandip University is a modern private university known for its strong focus on innovation, industry-oriented education, and research. The university offers a wide range of undergraduate and postgraduate programs in engineering, management, law, and science with advanced infrastructure and experienced faculty.",
        logo: sandipLogo
    },
    {
        name: "Marwadi University",
        location: "Rajkot, Gujarat",
        description: "Marwadi University is a leading private university offering quality education in engineering, management, law, pharmacy, and computer applications. The university is known for its global exposure, modern campus facilities, and strong placement support.",
        logo: marwadiLogo
    },
    {
        name: "P P Savani University",
        location: "Surat, Gujarat",
        description: "P P Savani University provides industry-oriented education with programs in engineering, management, design, and liberal arts. The university focuses on skill development, innovation, and preparing students for global career opportunities.",
        logo: ppSavaniLogo
    },
    {
        name: "ITM University Gwalior",
        location: "Gwalior, Madhya Pradesh",
        description: "ITM University is known for its quality academic programs and research-driven learning environment. The university offers programs in engineering, management, science, pharmacy, and architecture with modern laboratories and experienced faculty.",
        logo: itmLogo
    },
    {
        name: "Sanskriti University",
        location: "Agra, Uttar Pradesh",
        description: "Sanskriti University offers diverse programs in engineering, management, medical sciences, agriculture, and humanities. The university focuses on practical learning, innovation, and holistic student development.",
        logo: sanskritiLogo
    },
    {
        name: "Aakash Institute",
        location: "Bangalore",
        description: "Aakash Institute is one of India's well-known educational institutions providing coaching and academic programs. It is recognized for quality teaching, experienced faculty, and strong academic results.",
        logo: aakashLogo
    },
    {
        name: "Harsha Institutions",
        location: "Bangalore",
        description: "Harsha Institutions offer professional education in engineering, management, nursing, and allied sciences. The institution focuses on academic excellence and practical knowledge for student career growth.",
        logo: harshaLogo
    },
    {
        name: "Graphic Era University",
        location: "Uttarakhand",
        description: "Graphic Era University is a reputed institution known for excellence in engineering, management, and technology education. The university offers modern infrastructure, research facilities, and strong placement opportunities.",
        logo: graphicEraLogo
    },
    {
        name: "Invertis University",
        location: "Bareilly, Uttar Pradesh",
        description: "Invertis University provides programs in engineering, management, law, pharmacy, and journalism. The university focuses on skill-based learning and industry exposure.",
        logo: invertisLogo
    },
    {
        name: "East Point Group of Institutions",
        location: "Bangalore",
        description: "East Point Group of Institutions offers professional education in engineering, management, medical sciences, and pharmacy. The campus provides modern facilities and career-oriented training for students.",
        logo: eastPointLogo
    },
    {
        name: "Vellore Institute of Technology Chennai",
        location: "Chennai, Tamil Nadu",
        description: "VIT Chennai is a part of the prestigious VIT group known for high academic standards, advanced research, and excellent placement records in engineering and technology programs.",
        logo: vitLogo
    },
    {
        name: "Hindusthan College of Engineering and Technology",
        location: "Pollachi Main Road, Malumichampatti, Coimbatore, Tamil Nadu – 641032",
        description: "Hindusthan College of Engineering and Technology (HiCET) is one of the well-known engineering institutions in Coimbatore, Tamil Nadu. Established with a vision to provide quality technical education, the college offers a wide range of undergraduate and postgraduate programs in engineering, technology, and management.",
        logo: hindusthanLogo
    },
    {
        name: "Dhanalakshmi Srinivasan University",
        location: "Tamil Nadu",
        description: "Dhanalakshmi Srinivasan University offers programs in engineering, medicine, pharmacy, management, and agriculture with modern infrastructure and experienced faculty.",
        logo: dhanalakshmiLogo
    },
    {
        name: "Ganpat University",
        location: "Mehsana, Gujarat",
        description: "Ganpat University is a well-known private university offering programs in engineering, pharmacy, management, and computer applications with strong industry collaboration.",
        logo: ganpatLogo
    },
    {
        name: "S-VYASA University",
        location: "Bangalore",
        description: "S-VYASA University is a renowned deemed university focusing on yoga, health sciences, and research-based education. It integrates traditional knowledge with modern scientific approaches.",
        logo: svyasaLogo
    },
    {
        name: "Guru Kashi University",
        location: "Punjab",
        description: "Guru Kashi University offers a wide range of professional programs in engineering, agriculture, management, and humanities with modern facilities and career-focused training.",
        logo: guruKashiLogo
    }
];

const OtherStateUniversities = () => {
    return (
        <section className="section pt-0 pb-12 other-state-univ-section">
            <div className="container">
                <div className="text-center mb-10">
                    <h2 className="section-heading">Top Associated Universities</h2>
                    <p className="section-subheading text-gray">Explore detailed information about our highly-rated partner institutions across India.</p>
                </div>
                
                <div className="other-univ-grid">
                    {universities.map((uni, idx) => (
                        <div key={idx} className="other-univ-card">
                            <div className="other-univ-logo-wrapper">
                                {uni.logo ? (
                                    <img src={uni.logo} alt={`${uni.name} logo`} className="other-univ-logo" />
                                ) : (
                                    <div className="other-univ-logo-placeholder">
                                        <Building2 size={40} className="text-gray" />
                                    </div>
                                )}
                            </div>
                            <div className="other-univ-content">
                                <h3 className="other-univ-title">{uni.name}</h3>
                                <div className="other-univ-location">
                                    <MapPin size={16} className="location-icon" />
                                    <span>{uni.location}</span>
                                </div>
                                <p className="other-univ-desc">{uni.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherStateUniversities;
