import React from 'react';
import btechImg from '../../assets/B.Tech Admissions.PNG';
import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';

const BTech: React.FC = () => {
    return (
        <AdmissionPageTemplate
            title="B.Tech Admissions"
            subtitle="Engineering Your Future"
            bannerImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
            description={
                <>
                    <p>
                        Pursue a career in Engineering and Technology with our comprehensive B.Tech admission assistance.
                        We guide you through the entrance exams, counseling rounds, and final college selection to ensure
                        you secure a seat in top-tier institutions.
                    </p>
                    <p>
                        Whether you are aiming for Computer Science, Electronics, Mechanical, or emerging fields like AI and Data Science,
                        our personalized counseling helps you make the right choice for a successful engineering career.
                    </p>
                </>
            }
            imageSrc={btechImg} // Using specific asset
            categories={[
                {
                    title: 'Computer Science & Engineering',
                    courses: ['B.Tech CSE', 'B.Tech AI & Data Science', 'B.Tech Cyber Security', 'B.Tech IT']
                },
                {
                    title: 'Core Engineering',
                    courses: ['B.Tech Mechanical', 'B.Tech Civil', 'B.Tech Electrical', 'B.Tech Electronics & Comm.']
                },
                {
                    title: 'Specialized Fields',
                    courses: ['B.Tech Aerospace', 'B.Tech Biotechnology', 'B.Tech Chemical', 'B.Tech Robotics']
                }
            ]}
        />
    );
};

export default BTech;
