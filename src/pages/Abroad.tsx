
import AdmissionPageTemplate from '../components/AdmissionPageTemplate';
import abroadImg from '../assets/Abroad Admissions .png';

const Abroad = () => {
    const categories = [
        {
            title: "Study in the United Kingdom (UK)",
            courses: [
                "World-renowned universities and academic excellence.",
                "1-year Master's programs saving time and tuition fees.",
                "Graduate Route (Post-Study Work Visa) opportunities.",
                "Diverse range of specializations in Business, IT, Engineering & Healthcare.",
                "Expert guidance on university selection, SOPs, and UKVI visa processing."
            ]
        },
        {
            title: "Study MBBS in Uzbekistan",
            courses: [
                "Highly affordable medical education with low living costs.",
                "Universities recognized by WHO, NMC (MCI), and FAIMER.",
                "100% English medium instruction. No local language barrier for studies.",
                "Excellent clinical exposure with state-of-the-art hospital infrastructure.",
                "Direct admission process with guaranteed safe accommodation for students."
            ]
        },
        {
            title: "Comprehensive Overseas Support",
            courses: [
                "Profile evaluation & expert university shortlisting.",
                "Assistance with IELTS, TOEFL, GRE, and GMAT planning.",
                "Scholarship tracking and financial documentation support.",
                "Pre-departure briefings and post-arrival assistance."
            ]
        }
    ];

    const description = (
        <>
            <p>Studying abroad is a transformative life experience that provides global exposure, world-class education, and vastly improved career prospects. However, the international application process can be daunting without expert guidance.</p>
            <p className="mt-4">From shortlisting universities in the UK that match your profile, to facilitating direct MBA and MBBS admissions in affordable, globally-recognized institutions in Uzbekistan, MS EDIFY SOLUTIONS acts as your trusted partner. We handle everything from visa documentation and SOP writing to tracking your scholarship applications.</p>
        </>
    );

    return (
        <AdmissionPageTemplate
            title="Abroad Admissions"
            subtitle="Your gateway to global education. Expert consulting for studying in the UK, Uzbekistan, and beyond."
            bannerImage="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=80&w=1920"
            description={description}
            imageSrc={abroadImg}
            categories={categories}
        />
    );
};

export default Abroad;
