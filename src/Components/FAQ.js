import '../Css/FAQ.css';
import React, { useEffect } from 'react';

const FAQ = () => {
  
 

    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; ++i) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");
        console.log("Hiii")
        let panel = this.nextElementSibling;
        // panel.classList.toggle("active");
         console.log("panel.style.display",panel.style.display)
        if(panel.style.display === "block"){
          panel.style.display = "none";
        }else{
          panel.style.display = "block";
        }
      });
    }

   
 

  return (
    <div className="wrapper">
      <h1>Frequently Asked Questions</h1>
      <div className="faq">
        <button className="accordion">
          What is first?
          <i></i>
        </button>
        <div className="panel">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
      <div className="faq">
        <button className="accordion">
          What is second?
          <i></i>
        </button>
        <div className="panel">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
      <div className="faq">
        <button className="accordion">
          What is third?
          <i></i>
        </button>
        <div className="panel">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
      <div className="faq">
        <button className="accordion">
          What is fourth?
          <i></i>
        </button>
        <div className="panel">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
