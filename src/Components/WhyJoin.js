import React from 'react';
import '../Css/whyjoin.css';
import { FaBullhorn, FaChartLine, FaUsers, FaPeopleCarry, FaEye, FaClock, FaShieldAlt } from 'react-icons/fa';
import { Layout, Row, Col, Button, Card, Typography, List } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const JoinTheClub = () => {
    const { Content } = Layout;
    const { Title, Paragraph } = Typography;
    
    const categories = [
        { id: 1, name: 'Startup Agencies' },
        { id: 2, name: 'Hospitality' },
        { id: 3, name: 'E-commerce' },
        { id: 4, name: 'Retail' }
    ];

    const marketerNeeds = [
        { id: 1, icon: <FaBullhorn />, title: 'Marketing Strategies', description: 'Effective strategies tailored to your business needs.' },
        { id: 2, icon: <FaChartLine />, title: 'Growth Analytics', description: 'Detailed analytics to track your growth.' },
        { id: 3, icon: <FaUsers />, title: 'Customer Engagement', description: 'Boost customer engagement with personalized approaches.' }
    ];

    const uniqueTopics = [
        { id: 1, icon: <FaPeopleCarry />, title: 'Bring Teams Together', description: 'Foster collaboration and teamwork with our solutions.', color: '#FF6347' },
        { id: 2, icon: <FaEye />, title: 'Get the Big Picture', description: 'Gain insights with comprehensive data visualization tools.', color: '#4682B4' },
        { id: 3, icon: <FaClock />, title: 'Make Time for Teams', description: 'Efficient time management tools for your team.', color: '#32CD32' },
        { id: 4, icon: <FaShieldAlt />, title: 'Stay Safe and Sound', description: 'Ensure security and compliance with our robust measures.', color: '#FFD700' }
    ];

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
                        <CheckOutlined style={{ color: 'gray', marginRight: 8 }} />
                        {item}
                    </List.Item>
                )}
            />
        </Card>
    );

    return (
        <div className="join-club-container">
            <h1>Join the club</h1>
            <p>Welcome to our community! Here’s why you should join us:</p>

            <div className="categories-container">
                {categories.map(category => (
                    <div className="category-item" key={category.id}>
                        {category.name}
                    </div>
                ))}
            </div>

            <div className="marketer-needs-container">
                <h2>Marketer needs are unique</h2>
                <p>Discover how we cater to your specific marketing needs:</p>

                <div className="needs-row">
                    {marketerNeeds.map(need => (
                        <div className="need-item" key={need.id}>
                            <div className="icon-circle">
                                {need.icon}
                            </div>
                            <div className="need-content">
                                <h3>{need.title}</h3>
                                <p>{need.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="unique-topics-container">
                <div className="unique-topics-row">
                    {uniqueTopics.map(topic => (
                        <div className="topic-item" key={topic.id}>
                            <div className="topic-icon" style={{ backgroundColor: topic.color }}>
                                {topic.icon}
                            </div>
                            <div className="topic-content">
                                <h3>{topic.title}</h3>
                                <p>{topic.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="vendor-management-container">
                <div className="vendor-management-row">
                    <div className="vendor-management-content">
                        <h2>You already manage your vendor library and perks for free. <strong>Why pay us to help?</strong></h2>
                        <p>Because <strong>we are not just a list of deals</strong> we are a venture capital management software designed to save you more than money.</p>
                    </div>
                    <div className="vendor-management-image">
                        <img src={require(`../images/pay.jpg`)} alt="Vendor Management" />
                    </div>
                </div>
            </div>

            <Content style={{ padding: '0px', textAlign: 'center' }}>
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
        </div>
    );
};

export default JoinTheClub;
