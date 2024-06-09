import React, { useState, useEffect } from 'react';
import '../Css/AboutUs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Layout, Typography, Row, Col, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AboutUs = () => {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 768 ? 1 : 3);

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout className="about-us-container">
            <Content className="bannerNewAbout">
                <Title level={2} className="bannerTitle">We are Breezy. And we make your Partnership discovery a breeze.</Title>
            </Content>
            <Content className="about-us-content-top">
                <Title level={3}>Who is Breezy for?</Title>
                <Paragraph>
                    Breezy is designed for businesses and individuals who are looking to streamline their partnership discovery process. 
                    Whether you are a startup seeking collaboration opportunities, a hospitality business looking to expand your network, 
                    an e-commerce platform aiming to boost sales, or a retail store wanting to enhance customer engagement, Breezy has got you covered.
                </Paragraph>
                <Paragraph>
                    Our platform provides tailored solutions that cater to the unique needs of different industries, making partnership 
                    discovery not only efficient but also enjoyable. Join Breezy today and experience the ease of finding the perfect 
                    partners for your business.
                </Paragraph>
            </Content>

            <div className="siteBannerAbout">
                <div className="leftContentAbout">
                    <Title level={2} className="mainheadSecond">Life Before Breezy</Title>
                    <Paragraph className="aboutbefore">
                        Before Breezy, businesses and individuals faced numerous challenges in finding the right partners. The process was time-consuming, often relying on outdated methods such as cold emails, manual networking, and extensive research. These traditional methods were not only inefficient but also led to missed opportunities and limited growth potential.
                    </Paragraph>
                </div>
                <div className="aboutFirstBanner" />
            </div>

            <div className="siteBannerAboutSecond">
                
                <div className="aboutSecondBanner" />
                <div className="leftContentAboutAfter">
                    <Title level={2} className="mainheadSecondAbout">Life After Breezy</Title>
                    <Paragraph className="aboutafter">
                        After Breezy, the partnership discovery process became seamless and efficient. Businesses could easily connect with potential partners through a user-friendly platform, leveraging advanced algorithms and data-driven insights. This transformation not only saved time but also maximized the potential for successful collaborations, leading to significant growth and innovation across industries.
                    </Paragraph>
                </div>
            </div>

            <div className="swiper-section">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="carousel"
                >
                    {Array.from({ length: 6 }).map((_, index) => (
                        <SwiperSlide key={index} className="carousel-item">
                            <div className="card-container">
                                <div className="card">
                                    <div className="cardImg" />
                                    <div className="card-content-About">
                                        <p className='cardTitle'>Text Content Here</p>
                                        <p className='cardContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Content className="joinSection">
                <div >
                    <p className='joinText'>Join Breezy</p>
                    <p className='joinPara'>Helping brands and retailers discover new opportunities and streamline their partnership processes.Helping brands and retailers discover new opportunities and streamline their partnership processes</p>
                  
                </div>
            </Content>
        </Layout>
    );
};

export default AboutUs;
