import React from 'react';
import '../Css/contact.css';
import Footer from './Footer';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact US</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name*" required />
        <input type="email" placeholder="Email*" required />
        <select required>
          <option value="" disabled selected>Select a Topic*</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>
        <input type="text" placeholder="Subject*" required />
        <textarea placeholder="Message*" required></textarea>
        <button type="submit">Send</button>
      </form>
      
    </div>
  );
};

export default ContactForm;
