import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import ugImg from '../../assets/Undergraduate  student.PNG';

const Undergraduate = () => {
    const categories = [
        {
            title: "B.Tech Computer Science & IT",
            courses: [
                "Computer Science Engineering (CSE)",
                "CSE – Artificial Intelligence",
                "CSE – Data Science",
                "CSE – Cyber Security",
                "Artificial Intelligence & Machine Learning (AIML)",
                "Artificial Intelligence & Data Science (AIDS)",
                "Information Technology (IT)",
                "Internet of Things (IoT)",
                "Software Engineering",
                "Cloud Computing",
                "Blockchain Technology"
            ]
        },
        {
            title: "Core Engineering",
            courses: [
                "Electronics & Communication Engineering (ECE)",
                "Electrical & Electronics Engineering (EEE)",
                "Mechanical Engineering",
                "Civil Engineering"
            ]
        },
        {
            title: "Degree Courses (UG)",
            courses: [
                "Bachelor of Business Administration (BBA) - General, Finance, Marketing, HR",
                "Bachelor of Computer Applications (BCA)",
                "B.Sc Computer & New-Age (CS, Data Science, AI, Cyber Security)",
                "Bachelor of Arts (BA) - History, Econ, PolSci, Journalism, English",
                "Bachelor of Commerce (B.Com) - General, Computers, Honours, Finance, Taxation",
                "B.Sc - MPC, MSCS, MECs, Life Sciences (BiPC)"
            ]
        },
        {
            title: "Other Professional Degrees",
            courses: [
                "BSW (Social Work)",
                "BHM (Hotel Management)",
                "BTTM (Tourism Management)",
                "B.Pharmacy",
                "BA LLB (5 Years)",
                "LLB (3 Years)"
            ]
        }
    ];

    const description = (
        <>
            <p>Starting your undergraduate journey is a critical step towards building a successful career. At MS EDIFY SOLUTIONS, we provide expert counseling to help you choose the right bachelor's degree program that aligns with your passions and career goals.</p>
            <p className="mt-4">Whether you are aiming for top-tier Engineeering institutions, looking to explore new-age B.Sc programs in AI and Data Science, or pursuing a traditional BA / B.Com / BBA degree, our dedicated team will guide you through the entire admission process, including navigating state entrance exams like EAPCET and JEE.</p>
        </>
    );

    return (
        <AdmissionPageTemplate
            title="Undergraduate Admissions"
            subtitle="Comprehensive guidance for B.Tech, Degree, and Professional UG courses."
            bannerImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
            description={description}
            imageSrc={ugImg}
            categories={categories}
        />
    );
};

export default Undergraduate;
