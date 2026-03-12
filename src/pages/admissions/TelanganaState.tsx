import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import tsImg from '../../assets/student(Women).png'; // Reusing a placeholder local image
import TelanganaStateUniversities from '../../components/TelanganaStateUniversities';

const TelanganaState = () => {

    const description = (
        <>
            <p>Telangana State boasts a robust educational ecosystem, home to some of the most prestigious universities and autonomous colleges in India. We specialize in helping local and national students navigate the diverse admission procedures unique to the state.</p>
            <p className="mt-4">From TS EAPCET, ICET, PGECET, to direct management quota admissions, our experts ensure you have accurate guidance. Whether you aim for the heritage of Osmania University or the technical excellence of JNTUH, we assist you in securing your seat efficiently.</p>
        </>
    );

    return (
        <AdmissionPageTemplate
            title="Telangana State University Admissions"
            subtitle="Secure your seat in the leading institutions across Telangana State."
            bannerImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920"
            description={description}
            imageSrc={tsImg}
        >
            <TelanganaStateUniversities />
        </AdmissionPageTemplate>
    );
};

export default TelanganaState;
