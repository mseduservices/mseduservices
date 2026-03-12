import React from 'react';
import AdmissionPageTemplate from '../../components/AdmissionPageTemplate';
import mbaImg from '../../assets/MBA.PNG';

const MBA: React.FC = () => {
    return (
        <AdmissionPageTemplate
            title="MBA Admissions"
            subtitle="Mastering Business Administration"
            bannerImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
            description={
                <>
                    <p>
                        Accelerate your corporate career with a Master of Business Administration. We provide end-to-end support
                        for securing admission into premier B-Schools, guiding you through entrance exams like CAT, MAT, ICET,
                        group discussions, and personal interviews.
                    </p>
                    <p>
                        Choose from a wide range of specializations including Finance, Marketing, Human Resources, and Operations,
                        and build the leadership skills required for the modern business world.
                    </p>
                </>
            }
            imageSrc={mbaImg} // Using specific asset
            categories={[
                {
                    title: 'Core Specializations',
                    courses: ['MBA Finance', 'MBA Marketing', 'MBA Human Resources', 'MBA Operations']
                },
                {
                    title: 'Emerging Fields',
                    courses: ['MBA Business Analytics', 'MBA Digital Marketing', 'MBA Supply Chain Management']
                },
                {
                    title: 'Industry Specific',
                    courses: ['MBA Healthcare Management', 'MBA Rural Management', 'MBA Agri-Business']
                }
            ]}
        />
    );
};

export default MBA;
