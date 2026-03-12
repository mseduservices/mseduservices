import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import pgImg from '../../assets/mba students.png';

const Postgraduate = () => {
    const categories = [
        {
            title: "Management & Business",
            courses: [
                "MBA (Finance, Marketing, HR)",
                "MBA (Business Analytics)",
                "MBA (International Business)",
                "MBA (Healthcare Management)",
                "MBA (Operations Management)",
                "PGDM (Post Graduate Diploma in Management)"
            ]
        },
        {
            title: "Computer & IT",
            courses: [
                "MCA (Master of Computer Applications)",
                "M.Sc Computer Science",
                "M.Sc Data Science",
                "M.Sc Artificial Intelligence",
                "M.Sc Cyber Security",
                "M.Sc Information Technology"
            ]
        },
        {
            title: "Engineering & Technology",
            courses: [
                "M.Tech – Computer Science Engineering",
                "M.Tech – Artificial Intelligence / Data Science",
                "M.Tech – Cyber Security",
                "M.Tech – VLSI Design / Embedded Systems",
                "M.Tech – Structural / Power Systems",
                "M.Tech – Thermal / Machine Design",
                "M.Tech – All Specializations"
            ]
        },
        {
            title: "Medical & Health Sciences",
            courses: [
                "MD (Doctor of Medicine)",
                "MS (Master of Surgery)",
                "MDS (Master of Dental Surgery)",
                "MPT (Master of Physiotherapy)",
                "M.Sc Nursing",
                "MPH (Master of Public Health)",
                "MHA (Master of Hospital Administration)",
                "M.Pharmacy",
                "Pharm.D (Post Baccalaureate)"
            ]
        },
        {
            title: "Agriculture & Sciences",
            courses: [
                "M.Sc Agriculture / Horticulture / Forestry",
                "M.Tech Agricultural Engineering",
                "MA (All Specializations)",
                "M.Com",
                "M.Sc (All Groups)",
                "MSW (Master of Social Work)",
                "LLM (Master of Law)"
            ]
        }
    ];

    const description = (
        <>
            <p>Taking your education to the next level with a Postgraduate degree opens up leadership opportunities, higher salary potential, and deep specialization in your chosen field. We assist students in securing admissions into premier master's programs across the country.</p>
            <p className="mt-4">From elite MBA and PGDM programs that shape future business leaders, to highly specialized M.Tech, MCA, and M.Sc degrees in cutting-edge technologies like Cyber Security and Artificial Intelligence, MS EDIFY SOLUTIONS ensures you find the perfect university fit for your postgraduate aspirations.</p>
        </>
    );

    return (
        <AdmissionPageTemplate
            title="Postgraduate Admissions"
            subtitle="Advance your career with master's degrees in engineering, management, medical, and sciences."
            bannerImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920"
            description={description}
            imageSrc={pgImg}
            categories={categories}
        />
    );
};

export default Postgraduate;
