import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import '../Css/footer.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
        <div className="row">
            <div className="footer-col">
                <h4>company</h4>
                <ul>
                <li><Link to="/about-us">about us</Link></li>
                <li><Link to="/our-services">How It Works</Link></li>
                <li><Link to="/privacy-policy">privacy policy</Link></li>
                <li><Link to="/ContactForm">Contact</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>get help</h4>
                <ul>
                <li><Link to="/FAQ">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/Resources">Resources</Link></li>
              <li><Link to="/KnowledgeBase">KnowledgeBase</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Web Site</h4>
                <ul>
                <li><Link to="/">Home</Link></li>
              <li><Link to="/PartnershipOpportunities">Opportunity</Link></li>
              <li><Link to="/JobPosting">View opportunity</Link></li>
              <li><Link to="/ProfileForm">Profile</Link></li>
                   
                </ul>
            </div>
            <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                <Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link to="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link to="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                </div>
            </div>
        </div>
    </div>
</footer>

  );
}

export default Footer;
