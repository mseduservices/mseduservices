import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import otherStateImg from '../../assets/student(men).png';
import OtherStateUniversities from '../../components/OtherStateUniversities';

const OtherState = () => {
    const description = (
        <>
            <p>Sometimes the perfect university for your specific academic goals lies just across state borders. We assist students in identifying and securing admissions in top-rated universities and autonomous colleges scattered across India.</p>
            <p className="mt-4">Our far-reaching network spans highly reputed institutions in states like Karnataka, Maharashtra, Tamil Nadu, and more. We simplify the complexities of out-of-state applications, ensuring you understand the domicile rules, national entrance requirements, and application timelines.</p>
        </>
    );

    return (
        <AdmissionPageTemplate
            title="Other State University Admissions"
            subtitle="Broaden your horizons by applying to top ranking universities across India."
            bannerImage="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920"
            description={description}
            imageSrc={otherStateImg}
        >
            <OtherStateUniversities />
        </AdmissionPageTemplate>
    );
};

export default OtherState;
