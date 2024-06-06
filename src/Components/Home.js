import React, { useState } from 'react';
import { Layout, Menu, Input, Row, Col, Drawer, Button, Carousel,Typography, Card,List,Switch } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CheckOutlined } from '@ant-design/icons';

import '../Css/Home.css';
import 'swiper/css';
import 'antd/dist/reset.css';


const { Header, Content } = Layout;
const { Search } = Input;
const { Title, Paragraph } = Typography;

const features = [
  'Feature 1',
  'Feature 2',
  'Feature 3',
  'Feature 4'
];
const PackageCard = ({ title, price, buttonText }) => (
  <Card style={{ width: 300, height: 400, textAlign: 'flex-start' }}>
    <Title level={4}>{title}</Title>
    <Paragraph>{price}</Paragraph>
    <Button type="primary" style={{ margin: '20px 0' }}>{buttonText}</Button>
    <List
      dataSource={features}
      renderItem={item => (
        <List.Item>
          <CheckOutlined style={{ color: 'gray', marginRight: 8,  }} />
          {item}
        </List.Item>
      )}
    />
  </Card>
);
const Home = () => {
  const [visible, setVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState(['1']);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (e) => {
    setSelectedKey([e.key]);
  };
  const slidesPerView = window.innerWidth < 768 ? 1 : 5; 
  const slidesPerViewSecond = window.innerWidth < 768 ? 1 : 2; 
  const slidesPerViewThird = window.innerWidth < 768 ? 1 : 4; 
  const [isAnnually, setIsAnnually] = useState(false);

  const handleSwitchChange = (checked) => {
    setIsAnnually(checked);
  };

  return (
    <Layout className="layout">
      <Header className='header'>
        <div className="logo" />
        <div className="desktop-menu">
          <Menu
            mode="horizontal"
            selectedKeys={selectedKey}
            onClick={handleMenuClick}
            className='menu'
          >
            <Menu.Item key="1"><Link to="#about-us">About Us</Link></Menu.Item>
            <Menu.Item key="2"><Link to="#resources">Resources</Link></Menu.Item>
            <Menu.Item key="3"><Link to="#news">News</Link></Menu.Item>
            <Menu.Item key="4"><Link to="#how-it-works">How It Works</Link></Menu.Item>
            <Menu.Item key="5" className="right-menu" style={{marginLeft:'auto'}}><Link to="/Login">Log In</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/Signup">Sign Up</Link></Menu.Item>
          </Menu>
        </div>
        <div className="mobile-menu">
          <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <Menu
              mode="vertical"
              selectedKeys={selectedKey}
              onClick={handleMenuClick}
            >
              <Menu.Item key="1"><a href="#about-us">About Us</a></Menu.Item>
              <Menu.Item key="2"><a href="#resources">Resources</a></Menu.Item>
              <Menu.Item key="3"><a href="#news">News</a></Menu.Item>
              <Menu.Item key="4"><a href="#how-it-works">How It Works</a></Menu.Item>
              <Menu.Item key="5"><a href="#login">Log In</a></Menu.Item>
              <Menu.Item key="6"><a href="#sign-up">Sign Up</a></Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </Header>
      <Content>
        <div>
          <Row gutter={20} className="site-layout-content" >
            <Col  xs={24} sm={24} md={12} lg={12} xl={12} className='leftContent'>
              <h6 className='mainhead'>Supercharge your brand's success </h6>
              <h6 className='subMidTitle'>with collaborative partnerships!</h6>
              <h6 className='subHead'>Join forces to drive revenue, attract followers, and skyrocket growth!"</h6> 
              <div className='serchContent'>
              <Search
                placeholder="Search for partnership marketing opportunities"
                enterButton
                size="large"
                style={{ boxShadow: 'none' }}
                
              />
              </div>
             
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
            <div className="banner" />
            </Col>
          </Row>
        </div>
      </Content>
      {/* ///second section */}
 
      <Content>
        <div>
          <Row gutter={20} className="siteBanner" >
            <Col  xs={24} sm={24} md={12} lg={12} xl={12} className='leftContent '>
              <h6 className='mainheadSecond'>Collaborate with Us </h6>
              <h6 className='subMidTitleSecond'>Helping brands increase revenue</h6>
              <h6 className='subHeadSecond'>Join forces to drive revenue, "</h6> 
              <Button type="primary" className='btnLearn'>Learn More</Button>
              <div className='serchContent'>
           
              </div>
             
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
            <div className="bannerSecond" />
            </Col>
          </Row>
        </div>
      </Content>
        
     {/* third Section */}
        <div className="swiper-section">
      <h2>Our Success Stories</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        className="carousel"
      >
        <SwiperSlide className="carousel-item">
        <div className="card-container">
      <div className="card">
      <div className="cardImg" />
        <div className="card-content-Home">
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
        <div className="card-content">
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
        <div className="card-content">
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
        <div className="card-content">
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
        <div className="card-content">
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
        <div className="card-content">
          <p  className='cardTitle'>Text Content Here</p>
          <p className='cardContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod .</p>
         
        </div>
      </div>
    </div>
        </SwiperSlide>
      </Swiper>
    </div>

    {/* fourth Section */}
    <div className="swiper-section-second">
      <h2 className='blueContentHead'>Marketers and SEO specialists all over the world 💕 us </h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerViewSecond}
        navigation
        pagination={{ clickable: true }}
        className="carousel"
      >
        <SwiperSlide className="carousel-item">
        
      <div className="cardSecond">
     
        <div className="card-content-second">
          <div className='cardOwnerDetail'>
            <img src= {require(`../images/Avater.jpg`)} className='avaterImg'/>
            <div className='nameContent'>
              <p className='ownername'>Alex Ostegjhghfrjfrgchjgf</p>
              <p className='positionText'>CEO IT Agency</p>
            </div>
          </div>
         
        <p className='cardContentTextSecond'>I loved the [PRODUCT]. The best thing about it is that it [PRODUCT FEATURE]. I will be purchasing more in the future.</p>
        </div>
      </div>
   
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
        
        <div className="cardSecond">
       
          <div className="card-content-second">
            <div className='cardOwnerDetail'>
              <img src= {require(`../images/Avater.jpg`)} className='avaterImg'/>
              <div className='nameContent'>
                <p className='ownername'>Alex Ostegjhghfrjfrgchjgf</p>
                <p className='positionText'>CEO IT Agency</p>
              </div>
            </div>
           
          <p className='cardContentTextSecond'>I loved the [PRODUCT]. The best thing about it is that it [PRODUCT FEATURE]. I will be purchasing more in the future.</p>
          </div>
        </div>
     
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
        
        <div className="cardSecond">
       
          <div className="card-content-second">
            <div className='cardOwnerDetail'>
              <img src= {require(`../images/Avater.jpg`)} className='avaterImg'/>
              <div className='nameContent'>
                <p className='ownername'>Alex Ostegjhghfrjfrgchjgf</p>
                <p className='positionText'>CEO IT Agency</p>
              </div>
            </div>
           
          <p className='cardContentTextSecond'>I loved the [PRODUCT]. The best thing about it is that it [PRODUCT FEATURE]. I will be purchasing more in the future.</p>
          </div>
        </div>
     
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
        
        <div className="cardSecond">
       
          <div className="card-content-second">
            <div className='cardOwnerDetail'>
              <img src= {require(`../images/Avater.jpg`)} className='avaterImg'/>
              <div className='nameContent'>
                <p className='ownername'>Alex Ostegjhghfrjfrgchjgf</p>
                <p className='positionText'>CEO IT Agency</p>
              </div>
            </div>
           
          <p className='cardContentTextSecond'>I loved the [PRODUCT]. The best thing about it is that it [PRODUCT FEATURE]. I will be purchasing more in the future.</p>
          </div>
        </div>
     
          </SwiperSlide>
          <SwiperSlide className="carousel-item">
        
        <div className="cardSecond">
       
          <div className="card-content-second">
            <div className='cardOwnerDetail'>
              <img src= {require(`../images/Avater.jpg`)} className='avaterImg'/>
              <div className='nameContent'>
                <p className='ownername'>Alex Ostegjhghfrjfrgchjgf</p>
                <p className='positionText'>CEO IT Agency</p>
              </div>
            </div>
           
          <p className='cardContentTextSecond'>I loved the [PRODUCT]. The best thing about it is that it [PRODUCT FEATURE]. I will be purchasing more in the future.</p>
          </div>
        </div>
     
          </SwiperSlide>
      
        
      </Swiper>
    </div>
     
     {/* fifth section */}
     <div className="swiper-section-white">
      
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerViewThird}
        navigation
        pagination={{ clickable: true }}
        className="carousel"
      >
        <SwiperSlide className="carousel-item">
        <div className='arrowCradConatainer'>
        <img src= {require(`../images/quote.png`)} className='quoteImg'/>
        <p> This is a good segue to use after a project or presentation. The person’s response will often clue you in on their thoughts. Then, you can expand on the areas of improvement you noticed.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
        <div className='arrowCradConatainer'>
        <img src= {require(`../images/quote.png`)} className='quoteImg'/>
        <p> This is a good segue to use after a project or presentation. The person’s response will often clue you in on their thoughts. Then, you can expand on the areas of improvement you noticed.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
        <div className='arrowCradConatainer'>
        <img src= {require(`../images/quote.png`)} className='quoteImg'/>
        <p> This is a good segue to use after a project or presentation. The person’s response will often clue you in on their thoughts. Then, you can expand on the areas of improvement you noticed.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
        <div className='arrowCradConatainer'>
        <img src= {require(`../images/quote.png`)} className='quoteImg'/>
        <p> This is a good segue to use after a project or presentation. The person’s response will often clue you in on their thoughts. Then, you can expand on the areas of improvement you noticed.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
        <div className='arrowCradConatainer'>
        <img src= {require(`../images/quote.png`)} className='quoteImg'/>
        <p> This is a good segue to use after a project or presentation. The person’s response will often clue you in on their thoughts. Then, you can expand on the areas of improvement you noticed.</p>
        </div>
        </SwiperSlide>

      </Swiper>
    </div>

    {/* sixth section */}
    <Content>
        <div>
          <Row gutter={20} className="siteBanner siteBannerSecond" >
            <Col  xs={24} sm={24} md={12} lg={12} xl={12} className='leftContent leftFour'>
              <h6 className='mainheadSecondSixth'>Website Monetization for Publishers </h6>
              <Button type="primary" className='btnLearn'>Sign Up for Free</Button>
              <div className='serchContent'>
           
              </div>
             
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
            <div className="bannerThird" />
            </Col>
          </Row>
        </div>
      </Content>

      {/* sventh Section */}
      <Content style={{ padding: '50px', textAlign: 'center' }}>
    
      <Row gutter={16} justify="center">
     
        <Col>
          <PackageCard title="Starter" price="Free" buttonText="Get Started for Free" />
        </Col>
        <Col>
          <PackageCard title="Pro" price="$49/month" buttonText="Get Started with Pro" />
        </Col>
        <Col>
          <PackageCard title="Premier" price="$99/month" buttonText="Get Started with Premier" />
        </Col>
        <Col>
          <PackageCard title="Enterprise" price="Contact us" buttonText="Get Started with Enterprise" />
        </Col>
      </Row>
    </Content>
    </Layout>
  );
};

export default Home;
