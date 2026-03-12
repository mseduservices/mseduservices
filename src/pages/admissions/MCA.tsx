import React from 'react';
import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import mcaImg from '../../assets/MCA student.PNG';

const MCA: React.FC = () => {
    return (
        <AdmissionPageTemplate
            title="MCA Admissions"
            subtitle="Master of Computer Applications"
            bannerImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920"
            description={
                <>
                    <p>
                        Step into the advanced world of computing and IT with an MCA degree. We assist you in navigating
                        the admissions process for top universities, ensuring a smooth transition into software development,
                        systems analysis, and IT management.
                    </p>
                    <p>
                        Our expert counselors provide guidance on entrance exams like NIMCET and state-level ICETs, helping you
                        secure placements in leading tech colleges.
                    </p>
                </>
            }
            imageSrc={mcaImg} // Using specific asset
            categories={[
                {
                    title: 'Software Development',
                    courses: ['Application Programming', 'Web Technologies', 'Mobile App Development']
                },
                {
                    title: 'Systems & Networking',
                    courses: ['Cloud Computing', 'Network Security', 'Database Administration']
                },
                {
                    title: 'Advanced Technologies',
                    courses: ['Artificial Intelligence', 'Data Science', 'Machine Learning']
                }
            ]}
        />
    );
};

export default MCA;
