import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import medicalImg from '../../assets/Medical.png';

const Medical = () => {
    const categories = [
        {
            title: "Undergraduate Medical (UG)",
            courses: [
                "MBBS (Bachelor of Medicine & Surgery)",
                "BDS (Bachelor of Dental Surgery)",
                "BAMS (Ayurveda) / BHMS (Homeopathy)",
                "BUMS (Unani) / BNYS (Naturopathy & Yoga)",
                "BPT (Physiotherapy)",
                "B.Sc Nursing / Post Basic B.Sc Nursing",
                "GNM (General Nursing & Midwifery)"
            ]
        },
        {
            title: "Paramedical Courses (UG)",
            courses: [
                "B.Sc Medical Lab Technology (MLT)",
                "B.Sc Radiology & Imaging Technology",
                "B.Sc Operation Theatre Technology (OTT)",
                "B.Sc Anesthesia / Cardiac Care Technology",
                "B.Sc Dialysis / Respiratory Therapy",
                "B.Sc Emergency & Trauma Care",
                "B.Sc Optometry / Perfusion Technology"
            ]
        },
        {
            title: "Allied Health Sciences (UG)",
            courses: [
                "B.Sc Microbiology / Biotechnology",
                "B.Sc Biochemistry / Nutrition & Dietetics",
                "B.Sc Psychology / Forensic Science",
                "B.Sc Public Health"
            ]
        },
        {
            title: "Pharmacy Courses (UG)",
            courses: [
                "D.Pharmacy",
                "B.Pharmacy",
                "Pharm.D"
            ]
        }
    ];

    const description = (
        <>
            <p>A career in medicine and healthcare requires immense dedication, and getting into the right college is the foundational step. We offer extensive counseling and admission services for students aiming for MBBS, BDS, and various Allied Health Science programs.</p>
            <p className="mt-4">Our experts demystify the complex medical admission process, providing clarity on NEET counseling, state quotas, management seats, and institution rankings. Let MS EDIFY SOLUTIONS help you secure a seat in India's top medical and paramedical colleges.</p>
        </>
    );

    return (
        <AdmissionPageTemplate
            title="Medical & Health Sciences"
            subtitle="Expert counseling and admission support for MBBS, BDS, Pharmacy, and Paramedical courses."
            bannerImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
            description={description}
            imageSrc={medicalImg}
            categories={categories}
        />
    );
};

export default Medical;
