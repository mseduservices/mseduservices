import { MapPin, Building2, CheckCircle2 } from 'lucide-react';
import './OtherStateUniversities.css';

// Private Universities Logos
import anuragLogo from '../assets/Anurag University logo .jpeg';
import mallaReddyLogo from '../assets/Malla Reddy University logo.png';
import mahindraLogo from '../assets/Mahindra University logo.png';
import srLogo from '../assets/SR University logo.png';
import shadanLogo from "../assets/Shadan Women's University logo.png";
import icfaiLogo from '../assets/ICFAI Foundation for Higher Education logo .jpeg';
import gitamLogo from '../assets/GITAM University Hyderabad logo.png';
import symbiosisLogo from '../assets/Symbiosis International University logo .png';

// Govt Universities Logos
import osmaniaLogo from '../assets/Osmania University logo.jpeg';
import jntuLogo from '../assets/Jawaharlal Nehru Technological University logo.png';
import kakatiyaLogo from '../assets/Kakatiya University logo.jpeg';
import mahatmaGandhiLogo from '../assets/Mahatma Gandhi University logo.jpeg';
import palamuruLogo from '../assets/Palamuru University logo.jpeg';
import satavahanaLogo from '../assets/Satavahana University logo.jpeg';
import telanganaLogo from '../assets/Telangana University logo.jpeg';
import ambedkarLogo from '../assets/Dr. B. R. Ambedkar Open University logo.jpeg';

const privateUniversities = [
    {
        name: "Anurag University",
        location: "Venkatapur, Ghatkesar, Hyderabad",
        description: "Anurag University is one of the leading private universities in Telangana offering programs in engineering, management, pharmacy, and technology. The university focuses on innovation, research, and industry-oriented education with modern infrastructure and experienced faculty.",
        logo: anuragLogo
    },
    {
        name: "Malla Reddy University",
        location: "Maisammaguda, Kompally, Hyderabad",
        description: "Malla Reddy University provides high-quality education in engineering, management, agriculture, sciences, and health sciences. The university emphasizes skill development, practical learning, and career-oriented training.",
        logo: mallaReddyLogo
    },
    {
        name: "Mahindra University",
        location: "Bahadurpally, Hyderabad",
        description: "Mahindra University is known for its global academic standards and innovative curriculum. The university offers programs in engineering, management, law, and humanities with strong industry collaborations.",
        logo: mahindraLogo
    },
    {
        name: "SR University",
        location: "Warangal, Telangana",
        description: "SR University provides quality education in engineering, management, and science programs. The university focuses on research, technology innovation, and strong placement support.",
        logo: srLogo
    },
    {
        name: "Shadan Women's University",
        location: "Khairatabad, Hyderabad",
        description: "Shadan Women's University is dedicated to empowering women through quality higher education in multiple disciplines including science, management, and professional studies.",
        logo: shadanLogo
    },
    {
        name: "ICFAI Foundation for Higher Education",
        location: "Donthanapally, Shankarpally",
        description: "ICFAI Foundation for Higher Education is a well-known institution offering programs in management, engineering, law, and liberal arts with a strong focus on research and industry exposure.",
        logo: icfaiLogo
    },
    {
        name: "GITAM University Hyderabad",
        location: "Rudraram, Hyderabad",
        description: "GITAM Hyderabad provides programs in engineering, management, pharmacy, and sciences with modern facilities and industry-oriented learning.",
        logo: gitamLogo
    },
    {
        name: "Symbiosis International University Hyderabad",
        location: "Mamidipally, Hyderabad",
        description: "Symbiosis Hyderabad campus offers globally recognized programs in management, liberal arts, and professional studies with international exposure and modern campus facilities.",
        logo: symbiosisLogo
    }
];

const govtUniversities = [
    {
        name: "Osmania University",
        location: "Hyderabad",
        description: "Osmania University is one of the oldest and most prestigious universities in India offering a wide range of undergraduate, postgraduate, and research programs across various disciplines.",
        logo: osmaniaLogo
    },
    {
        name: "Jawaharlal Nehru Technological University (JNTU)",
        location: "Hyderabad",
        description: "JNTU is a leading technological university affiliated with many engineering colleges in Telangana and known for its strong focus on engineering and technology education.",
        logo: jntuLogo,
        colleges: [
            "JNTUH College of Engineering Hyderabad - Kukatpally, Hyderabad",
            "JNTUH College of Engineering Sultanpur - Sultanpur, Sangareddy District",
            "JNTUH College of Engineering Jagtial - Jagtial, Telangana",
            "JNTUH College of Engineering Manthani - Manthani, Peddapalli District",
            "JNTUH College of Engineering Wanaparthy - Wanaparthy, Telangana"
        ]
    },
    {
        name: "Kakatiya University",
        location: "Warangal",
        description: "Kakatiya University offers diverse academic programs in arts, science, commerce, engineering, and management while promoting research and innovation.",
        logo: kakatiyaLogo
    },
    {
        name: "Mahatma Gandhi University",
        location: "Nalgonda",
        description: "Mahatma Gandhi University provides quality higher education with various academic programs and research opportunities.",
        logo: mahatmaGandhiLogo
    },
    {
        name: "Palamuru University",
        location: "Mahbubnagar",
        description: "Palamuru University focuses on higher education and research across arts, science, and professional courses.",
        logo: palamuruLogo
    },
    {
        name: "Satavahana University",
        location: "Karimnagar",
        description: "Satavahana University offers undergraduate, postgraduate, and research programs in multiple academic disciplines.",
        logo: satavahanaLogo
    },
    {
        name: "Telangana University",
        location: "Nizamabad",
        description: "Telangana University provides quality education in arts, science, commerce, and professional studies.",
        logo: telanganaLogo
    },
    {
        name: "Dr. B. R. Ambedkar Open University",
        location: "Hyderabad",
        description: "Dr. B. R. Ambedkar Open University provides flexible distance education programs for students across various disciplines.",
        logo: ambedkarLogo
    }
];

const renderUniversityCard = (uni: any, idx: number) => (
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
            
            {/* If JNTU, we also render its nested colleges */}
            {uni.colleges ? (
                <div style={{ flex: 1 }}>
                    <p className="other-univ-desc" style={{ marginBottom: '1rem', borderBottom: 'none', paddingBottom: 0 }}>{uni.description}</p>
                    <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Constituent Engineering Colleges:</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {uni.colleges.map((college: string, cIdx: number) => (
                                <li key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>
                                    <CheckCircle2 size={16} className="text-secondary" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span>{college}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p className="other-univ-desc">{uni.description}</p>
            )}
        </div>
    </div>
);

const TelanganaStateUniversities = () => {
    return (
        <section className="section pt-0 pb-12 other-state-univ-section">
            <div className="container">
                <div className="mb-12">
                    <h2 className="section-heading mb-6" style={{ fontSize: '2rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Private Universities in Telangana</h2>
                    <div className="other-univ-grid">
                        {privateUniversities.map(renderUniversityCard)}
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="section-heading mb-6" style={{ fontSize: '2rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Top Government State Universities in Telangana</h2>
                    <div className="other-univ-grid">
                        {govtUniversities.map(renderUniversityCard)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TelanganaStateUniversities;
