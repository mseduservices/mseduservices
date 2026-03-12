import React from 'react';
import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import degreeImg from '../../assets/Undergraduate  student.PNG';

const Degree: React.FC = () => {
    return (
        <AdmissionPageTemplate
            title="Degree Admissions"
            subtitle="Undergraduate Degree Programs (B.Sc, B.Com, B.A)"
            bannerImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920"
            description={
                <>
                    <p>
                        Discover a wide range of undergraduate degree programs tailored to your interests. Whether you are inclined
                        towards Sciences, Commerce, or Arts, we help you find the best colleges to build a strong academic foundation.
                    </p>
                    <p>
                        From traditional degrees to modern specialized courses, our guidance ensures you select a path that aligns
                        with your career goals and aspirations.
                    </p>
                </>
            }
            imageSrc={degreeImg} // Using specific asset
            categories={[
                {
                    title: 'Commerce & Management',
                    courses: ['B.Com (General)', 'B.Com (Computers)', 'BBA', 'BBM']
                },
                {
                    title: 'Sciences',
                    courses: ['B.Sc Mathematics', 'B.Sc Physics', 'B.Sc Computer Science', 'B.Sc Life Sciences']
                },
                {
                    title: 'Arts & Humanities',
                    courses: ['B.A Economics', 'B.A Political Science', 'B.A English', 'B.A Mass Communication']
                }
            ]}
        />
    );
};

export default Degree;
