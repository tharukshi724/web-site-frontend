import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaCopy } from 'react-icons/fa';
import '../Css/JobPostForm.css';

const JobPostForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [workplaceType, setWorkplaceType] = useState('');
  const [designerType, setDesignerType] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [applicationLink, setApplicationLink] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyWebsite, setCompanyWebsite] = useState('');

  const handleLogoChange = (e) => {
    setCompanyLogo(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className='jobPostMain'>
    <div className="bannerNew">
        <h1>Post a job on Dribbble</h1>
        <p>The #1 job board for hiring designers and creative professionals.</p>
      </div>
    <div className="job-post-container">
      
      <div className="job-post-card">
        <div className="job-post-header">
          <h2>Tell us about your role</h2>
         
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Job title *
            <input
              type="text"
              placeholder="e.g. Senior Product Designer"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </label>

          <label>
            Add your job description *
            <textarea
              placeholder="Body"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            ></textarea>
          </label>

          <label>
            Job location
            <input
              type="text"
              placeholder="If left blank, location will be set to 'Remote'"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </label>

          <label>
            Workplace type *
            <input
              type="text"
              placeholder="Workplace type"
              value={workplaceType}
              onChange={(e) => setWorkplaceType(e.target.value)}
              required
            />
          </label>

          <label>
            What type of designer are you looking for? *
            <input
              type="text"
              placeholder="Designer type"
              value={designerType}
              onChange={(e) => setDesignerType(e.target.value)}
              required
            />
          </label>

          <label>
            Employment type *
            <input
              type="text"
              placeholder="Employment type"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              required
            />
          </label>

          <label>
            Where can people apply? *
            <input
              type="url"
              placeholder="e.g. https://greenhouse.io/f73jf7wh"
              value={applicationLink}
              onChange={(e) => setApplicationLink(e.target.value)}
              required
            />
          </label>

          <h2>COMPANY INFORMATION</h2>

          <label>
            What's your company name? *
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </label>

          <label>
            Your company logo *
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              required
            />
            {companyLogo && <img src={companyLogo} alt="Company Logo" className="company-logo-preview" />}
          </label>

          <label>
            Your company website *
            <input
              type="url"
              placeholder="e.g. https://domain.com"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
              required
            />
          </label>

          <div className="form-actions">
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="continue-button">Continue</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default JobPostForm;
