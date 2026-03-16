import { Helmet } from 'react-helmet-async';
import { Reveal } from '../components/Reveal';
import srinivasRao from '../assets/srinivas Roa.jpg';
import './About.css';
const About = () => {
    return (
        <div className="page-content">
            <Helmet>
                <title>About Us | MS EDIFY SOLUTIONS</title>
                <meta name="description" content="Learn more about MS EDIFY SOLUTIONS, a trusted educational consultancy since 2019." />
            </Helmet>

            <div className="container about-container" style={{ marginTop: '3rem' }}>
                {/* About Section */}
                <Reveal>
                    <div>
                        <h2 className="about-block-title">About MS EDIFY SOLUTIONS</h2>
                        <p className="about-block-text">
                            Driven by a vision to aid, assist and guide students in their quest for higher education, MS EDIFY SOLUTIONS started operations in 2019 in Telangana. Today, our deep commitment and missionary zeal to create awareness among students about courses, colleges, and career opportunities that await them continues to drive us forward. Our elite service of counseling for students during admission time has been applauded by prominent persons, eminent academicians, and parents. We have conducted Academic camps and Career Guidance programs in multiple districts of Telangana & Andhra Pradesh states to create awareness among rural and urban students. More than thousands of students have been positively impacted by our services to date. Our research in Education and journey towards positive excellence continues, with newer services and value additions being offered to our patrons each year.
                        </p>
                    </div>
                </Reveal>

                {/* Director Section */}
                <div style={{ marginTop: '4rem' }}>
                    <Reveal>
                        <h2 className="about-block-title">Director</h2>
                    </Reveal>
                    <div className="director-wrap">
                        <Reveal initialY={30} delay={0.4}>
                            <img src={srinivasRao} alt="Srinivasa Rao - Founder and Director" />
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div>
                                <p className="about-block-text">
                                    <strong>Mr. Srinivasa Rao</strong>, with his in-depth exposure and deep insights and knowledge pertaining to Engineering / Professional Education, is a professional with wide contacts across the education domain, colleges of Telangana, AP, and PAN INDIA. It is his personal and professional ethos that makes MS EDIFY a dependable, reliable, and trustworthy consultancy. He has steered MS EDIFY to success year after year, in offering professional support services in general and technical education in particular. He personally addresses and counsels students for choosing the suitable course and selection of the right college, clarifies students / parents doubts and advises them the best choices they can choose and prioritize the options during admission times. With his profound knowledge, Mr. Srinivasa Rao introduced innovative student and college connect programs, facilitating students to meet and interact with representatives of hundreds of PAN INDIA colleges.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Objectives and Mission */}
                <div className="grid-2-col" style={{ marginTop: '4rem' }}>
                    <Reveal initialY={30}>
                        <div>
                            <h2 className="about-block-title">Objectives</h2>
                            <p className="about-block-text">
                                MS EDIFY has been dedicated to the cause of Education since inception. Our core objectives are to provide support services for improving the performance of technical education and to transform into a data hub for all the aspirants of technical and professional education (Engineering, MBA, MCA, Medical, Degree Colleges and more). We aim to provide all Human Resource (HR) solutions to professional institutions. We intend to be the bridge between Industry and Academia for planning and implementing programs and projects that would benefit both. Our efforts in these directions have been promising and portend greater things to come.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal initialY={30} delay={0.2}>
                        <div>
                            <h2 className="about-block-title">Our Mission</h2>
                            <p className="about-block-text">
                                MS EDIFY has been striving to promote a knowledge society. Towards this end, we are giving our best to achieving excellence in Engineering and Professional Education. Fully aligned with the vision and policies of the State and Central government we have been committedly working with strategic planners to transform engineering education that would create and shape quality professionals and technocrats. We seek to ensure that they are endowed with the capabilities and competencies to meet both national and global requirements. MS Educational Consultants work with the motto of serving the society in the fields of Engineering, Medical, Business Management and professional education.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>

        </div>
    );
};

export default About;
