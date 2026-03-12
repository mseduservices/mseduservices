import { useState } from 'react';
import './AssociatedColleges.css';
import { MapPin, Building, ChevronDown, ChevronUp } from 'lucide-react';

import siddharthaImg from '../assets/Siddhartha Institute of Technology and Sciences (Autonomous).jpeg';
import brilliantImg from '../assets/Brilliant Group of Institutions (Autonomous Colleges).webp';
import stMarysImg from '../assets/St. Mary’s Group of Institutions (Autonomous).jpg';
import arjunImg from '../assets/Arjun College of Technology and Sciences (Autonomous).jpg';

const colleges = [
    {
        id: 1,
        name: "Siddhartha Institute of Technology and Sciences (SISG) – Autonomous",
        location: "Narapally, Ghatkesar, Medchal–Malkajgiri District, Telangana",
        image: siddharthaImg,
        details: [],
        description: "Siddhartha Institute of Technology and Sciences (SISG) is a well-established autonomous engineering college known for its strong academic standards and modern infrastructure. The institution focuses on quality technical education, research, and industry-oriented learning. With experienced faculty, advanced laboratories, and career-focused training programs, SISG helps students build successful careers in engineering and technology."
    },
    {
        id: 2,
        name: "Brilliant Group of Autonomous Institutions",
        location: "Abdullapurmet, Hayathnagar, Ranga Reddy District, Telangana",
        image: brilliantImg,
        details: [
            "BRIG – Brilliant Institute of Engineering and Technology",
            "BRIL – Brilliant Institute of Engineering & Technology (Integrated Campus / Learning Campus)",
            "KNRR – Kommuri Pratap Reddy Institute of Technology"
        ],
        description: "The Brilliant Group of Institutions is a reputed educational group offering quality engineering and technical education. The group includes multiple autonomous institutions such as BRIG, BRIL, and KNRR, providing students with modern learning facilities, experienced faculty, and industry exposure. The colleges focus on innovation, skill development, and career opportunities for students in various engineering and professional courses."
    },
    {
        id: 3,
        name: "St. Mary’s Group of Autonomous Institutions",
        location: "Deshmukhi, Yadadri Bhuvanagiri District, Telangana",
        image: stMarysImg,
        details: [
            "SMED – St. Mary’s Engineering College",
            "SMCD – St. Mary’s College of Engineering & Technology"
        ],
        description: "St. Mary’s Group of Institutions is one of the well-known autonomous educational groups offering professional courses in engineering and technology. With institutions like St. Mary’s Engineering College (SMED) and St. Mary’s College of Engineering & Technology (SMCD), the group provides quality education, modern infrastructure, and placement opportunities to prepare students for successful careers."
    },
    {
        id: 4,
        name: "Arjun Institute of Technology and Sciences (ARJN) – Autonomous",
        location: "Batasingaram, Hayathnagar, Ranga Reddy District, Telangana",
        image: arjunImg,
        details: [],
        description: "Arjun Institute of Technology and Sciences (ARJN) is an autonomous engineering institution committed to providing quality technical education and skill-based learning. The college focuses on academic excellence, practical knowledge, and industry exposure to prepare students for the modern technology-driven world. With modern facilities and experienced faculty, ARJN helps students achieve their academic and career goals."
    }
];

const AssociatedColleges = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    return (
        <section className="section associated-colleges-section">
            <div className="container">
                <div className="text-center mb-10">
                    <h2 className="section-heading">Our Associated Colleges</h2>
                    <p className="section-subheading text-gray">We are proud to partner with top autonomous institutions for a brighter future.</p>
                </div>
                
                <div className="colleges-accordion-stack">
                    {colleges.map((college) => {
                        const isExpanded = expandedId === college.id;
                        return (
                            <div 
                                key={college.id} 
                                className={`college-accordion-item ${isExpanded ? 'active' : ''}`}
                                onClick={() => toggleExpand(college.id)}
                            >
                                <div className="accordion-header">
                                    <div className="accordion-title-area">
                                        <div className="college-avatar">
                                            <img src={college.image} alt={college.name} />
                                        </div>
                                        <div>
                                            <h3 className="accordion-title">{college.name}</h3>
                                            <div className="college-location-row">
                                                <MapPin size={14} className="location-icon" />
                                                <span>{college.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="expand-btn" aria-label="Toggle Details">
                                        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                    </button>
                                </div>
                                
                                <div className={`accordion-body ${isExpanded ? 'open' : ''}`}>
                                    <div className="accordion-content">
                                        <div className="accordion-image-large">
                                            <img src={college.image} alt={college.name} />
                                        </div>
                                        
                                        {college.details.length > 0 ? (
                                            <div className="college-details-list">
                                                <p className="college-description-text">{college.description}</p>
                                                <h4 className="details-title mt-4"><Building size={16} /> Campuses & Institutes:</h4>
                                                <ul className="details-list">
                                                    {college.details.map((detail, idx) => (
                                                        <li key={idx}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <div className="college-details-list">
                                                <p className="college-description-text">{college.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AssociatedColleges;
