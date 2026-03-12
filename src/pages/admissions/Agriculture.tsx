import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import agricultureImg from '../../assets/Agriculture student.PNG';

const Agriculture = () => {
    const categories = [
        {
            title: "Agriculture & Horticulture",
            courses: [
                "B.Sc Agriculture",
                "B.Sc (Hons.) Agriculture",
                "B.Sc Horticulture",
                "M.Sc Agriculture",
                "M.Sc Horticulture",
            ]
        },
        {
            title: "Engineering & Technology",
            courses: [
                "B.Tech Agricultural Engineering",
                "M.Tech Agricultural Engineering",
                "B.Tech Dairy Technology",
                "B.Sc Food Technology"
            ]
        },
        {
            title: "Forestry & Allied Fields",
            courses: [
                "B.Sc Forestry",
                "M.Sc Forestry",
                "B.F.Sc (Bachelor of Fisheries Science)",
                "B.V.Sc & AH (Veterinary Science & Animal Husbandry)"
            ]
        }
    ];

    const description = (
        <>
            <p>With the global focus shifting towards sustainable farming and food security, Agriculture and Allied fields have emerged as highly rewarding career paths. These degree programs combine biology, technology, and management.</p>
            <p className="mt-4">We facilitate admissions into prestigious ICAR-approved institutions and state agriculture universities. Whether you're interested in B.Sc Agriculture, Food Technology, or Veterinary Sciences, we'll guide you through the specialized entrance exams and admission criteria.</p>
        </>
    );

    return (
        <AdmissionPageTemplate
            title="Agriculture Admissions"
            subtitle="Pursue a career in agriculture, forestry, dairy, and food technology."
            bannerImage="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1920"
            description={description}
            imageSrc={agricultureImg}
            categories={categories}
        />
    );
};

export default Agriculture;
