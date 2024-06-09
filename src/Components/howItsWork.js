import React from 'react';
import '../Css/howItsWork.css';

const sections = [
  {
    title: "Create your domain",
    description: "You can create your own custom domain easily.",
    imgSrc: "path/to/your/image1.png"
  },
  {
    title: "Opt in to the Rise course catalog",
    description: "Choose from a variety of courses.",
    imgSrc: "path/to/your/image2.png"
  },
  {
    title: "Invite people to Rise",
    description: "Add users to your domain.",
    imgSrc: "path/to/your/image3.png"
  },
  {
    title: "Build from scratch",
    description: "Create custom courses.",
    imgSrc: "path/to/your/image4.png"
  },
  {
    title: "Use prebuilt content",
    description: "Utilize prebuilt templates.",
    imgSrc: "path/to/your/image5.png"
  },
  {
    title: "Import third-party training",
    description: "Add external training materials.",
    imgSrc: "path/to/your/image6.png"
  },
  {
    title: "Deliver training and track learners",
    description: "Manage and monitor your learners.",
    imgSrc: "path/to/your/image7.png"
  },
  {
    title: "Discover and learn",
    description: "Explore the resources available.",
    imgSrc: "path/to/your/image8.png"
  },
  {
    title: "Analyze the impact",
    description: "View detailed reports.",
    imgSrc: "path/to/your/image9.png"
  },
  {
    title: "Integrations",
    description: "Connect with other services.",
    imgSrc: "path/to/your/image10.png"
  }
];

const HowItWorksPage = () => {
  return (
    <div className="how-it-works">
    

      <div className="intro">
        <h1>How Its works</h1>
        <p>Transform your business through better training with Rise.</p>
        <button>Get Started</button>
      </div>

      {sections.map((section, index) => (
        <section key={index} className="section">
          <div className="content">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
          <div className="image">
          <img src={require('../images/before.png')}  alt='quote' className='hwItsWorkImg' />
            {/* <img src={section.imgSrc} alt={section.title} /> */}
          </div>
        </section>
      ))}

  
    </div>
  );
};

export default HowItWorksPage;
