import React from 'react';
import '../Css/AboutUs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Layout, Typography, Row,Col, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AboutUs = () => {
    const slidesPerView = window.innerWidth < 768 ? 1 : 5; 
    return (
        <Layout className="about-us-container">
            <Content className="bannerNewAbout">
                <Title level={2}>We are Breezy. And we make your Partnership discovery a breeze.</Title>
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

            <div className="swiper-section">
     
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        className="carousel"
      >
        <SwiperSlide className="carousel-item">
        <div className="card-container">
      <div className="card">
      <div className="cardImg" />
        <div className="card-content-About ">
          <p className='cardTitle'>Text Content Here</p>
        <p className='cardContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod .</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
      
        <SwiperSlide className="carousel-item">
        <div className="card-container">
      <div className="card">
      <div className="cardImg" />
        <div className="ard-content-About ">
          <p className='cardTitle'>Text Content Here</p>
          <p className='cardContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod .</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
        <div className="card-container">
      <div className="card">
      <div className="cardImg" />
        <div className="ard-content-About ">
          <p  className='cardTitle'>Text Content Here</p>
          <p className='cardContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod .</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
        <div className="card-container">
      <div className="card">
      <div className="cardImg" />
        <div className="card-content-About ">
          <p  className='cardTitle'>Text Content Here</p>
          <p className='cardContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod .</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
        <div className="card-container">
      <div className="card">
      <div className="cardImg" />
        <div className="card-content-About ">
          <p  className='cardTitle'>Text Content Here</p>
          <p className='cardContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod .</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
        <div className="card-container">
      <div className="card">
      <div className="cardImg" />
        <div className="card-content-About ">
          <p  className='cardTitle'>Text Content Here</p>
          <p className='cardContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod .</p>
         
        </div>
      </div>
    </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <Content>
        <div>
          <Row gutter={0} className="siteBannerAbout" >
            <Col  xs={24} sm={24} md={12} lg={12} xl={12} className='leftContentAbout '>
              <h6 className='mainheadSecondAbout'>Collaborate with Us </h6>
              <h6 className='mainheadSecondAbout'>Helping brands increase revenue</h6>
              <h6 className='subHeadSecond'>Join forces to drive revenue, "</h6> 
              <Button type="primary" className='btnLearnAbout' > Sign Up For Free <LoginOutlined /></Button>
              <div className='serchContent'>
           
              </div>
             
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
            <div className="bannerSecond" />
            </Col>
          </Row>
        </div>
      </Content>

      <Content>
        <div>
          <Row gutter={50} className="siteBannerAboutSecond" >
            <Col  xs={24} sm={24} md={12} lg={12} xl={12} className='leftContentAboutSecond '>
              <strong className='mainheadSecondAbout'>Life Before Breezy </strong>
              <Paragraph className='aboutbefore'>
                    Breezy is designed for businesses and individuals who are looking to streamline their partnership discovery process. 
                    Breezy is designed for businesses and individuals who are looking to streamline their partnership discovery process. 
                </Paragraph>
             
             
             
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
            <div className="aboutFirstBanner" />
            </Col>
          </Row>
        </div>
      </Content>

      <Content>
        <div>
          <Row gutter={50} className="siteBannerAboutSecond" >
           
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
            <div className="aboutSecondBanner" />
            </Col>
            <Col  xs={24} sm={24} md={12} lg={12} xl={12} className='leftContentAboutAfter '>
              <strong className='mainheadSecondAbout'>Life After Breezy </strong>
              <Paragraph className='aboutafter'>
                    Breezy is designed for businesses and individuals who are looking to streamline their partnership discovery process. 
                    Breezy is designed for businesses and individuals who are looking to streamline their partnership discovery process. 
                </Paragraph>
             
             
             
            </Col>
          </Row>
        </div>
      </Content>
      <Content>
        <div className='joinSection'>
            <h1><strong> Join Breezy</strong></h1>
        <Paragraph className='joinText'>
                    Join Breezy today and be part of a network that brings businesses and individuals together for seamless partnership opportunities. 
                    Click to learn more about how Breezy can transform your partnership discovery process.
                </Paragraph>
        </div>
      </Content>
        </Layout>
    );
};

export default AboutUs;
