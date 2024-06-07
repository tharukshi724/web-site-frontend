import React, { useState } from 'react';
import '../Css/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is first?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," },
    { question: "What is second?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," },
    { question: "What is third?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," },
    { question: "What is fourth?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," },
  ];

  return (
    <div className="wrapper">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className={`faq ${activeIndex === index ? 'active' : ''}`} key={index}>
          <button className="accordion" onClick={() => handleToggle(index)}>
            {faq.question}
            <i>{activeIndex === index ? '-' : '+'}</i>
          </button>
          <div className="panel" style={{ display: activeIndex === index ? 'block' : 'none' }}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
