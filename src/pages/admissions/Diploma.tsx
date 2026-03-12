import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import diplomaImg from '../../assets/Diploma student.PNG';

const Diploma = () => {
    const categories = [
        {
            title: "Engineering Diploma",
            courses: [
                "Computer Engineering",
                "Civil / Mechanical / Electrical",
                "Electronics & Communication Engineering",
                "Information Technology",
                "Automobile / Chemical Engineering",
                "Mining / Metallurgical Engineering",
                "Production / Mechatronics Engineering",
                "Instrumentation Engineering"
            ]
        },
        {
            title: "Computer & IT",
            courses: [
                "Diploma in Computer Applications",
                "Diploma in Computer Science",
                "Diploma in Artificial Intelligence",
                "Diploma in Data Science / Cyber Security",
                "Diploma in Software Development / Web Designing"
            ]
        },
        {
            title: "Medical & Paramedical",
            courses: [
                "Medical Lab Technology (DMLT)",
                "Radiology / Operation Theatre Technology",
                "Dialysis / Anesthesia / Cardiac Care Technology",
                "Physiotherapy / Nursing (GNM)",
                "Pharmacy (D.Pharmacy)",
                "Health Inspector"
            ]
        },
        {
            title: "Agriculture & Allied Fields",
            courses: [
                "Diploma in Agriculture",
                "Diploma in Horticulture",
                "Diploma in Dairy Technology",
                "Diploma in Fisheries"
            ]
        },
        {
            title: "Management & Commerce",
            courses: [
                "Diploma in Business Administration",
                "Diploma in Accounting / Banking",
                "Diploma in Hotel Management"
            ]
        }
    ];

    const description = (
        <>
            <p>Diploma courses offer a fast-track, highly practical route into the workforce. Focusing on hands-on skills rather than just theoretical knowledge, these programs are ideal for students looking to enter their chosen industry quickly and efficiently.</p>
            <p className="mt-4">We guide students into top polytechnic and specialized colleges offering diplomas in core engineering, cutting-edge software development, vital medical lab technologies, and even agriculture. Secure direct admissions and build a strong technical foundation with MS EDIFY SOLUTIONS.</p>
        </>
    );

    return (
        <AdmissionPageTemplate
            title="Diploma Courses"
            subtitle="Skill-oriented diploma programs across technical, medical, and management fields."
            bannerImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920"
            description={description}
            imageSrc={diplomaImg}
            categories={categories}
        />
    );
};

export default Diploma;
