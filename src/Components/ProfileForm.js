import React,{useState} from 'react';
import '../Css/profileInformation.css';

const ProfileForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [currentSection, setCurrentSection] = useState('profile');

  const handleNavigationClick = (section) => {
    setShowForm(section);
    setShowForm(section === 'profile'); 
  };

  return (
    <div className="form-container">
      <header>Profile Information</header>
      <nav className="side-nav">
        <ul>
          <li><a href="#dashboard" onClick={() => handleNavigationClick('profile')}>Dashboard</a></li>
          <li><a href="#subscriptions" onClick={() => handleNavigationClick('profile')}>Opportunities List</a></li>
          <li><a href="#orders" onClick={() => handleNavigationClick('proposals')}>Proposals</a></li>
          <li><a href="#billing" onClick={() => handleNavigationClick('profile')}>Change Password</a></li>
        </ul>
      </nav>
      {showForm ? (
      <form>
        <div className="form-columns">
          <div className="form-section left-column">
            <div className="profile-pic-container">
              <div className="profile-pic">
                <input type="file" id="profilePic" name="profilePic" accept="image/*" />
                <label htmlFor="profilePic" className="upload-button">+</label>
              </div>
              <label className="profile-pic-label">Profile Picture</label>
              <div className="toggle-container">
                <label htmlFor="anonymous">Anonymous</label>
                <label className="switch">
                  <input type="checkbox" id="anonymous" name="anonymous" />
                  <span className="slider"></span>
                </label>
              </div>
             
            </div>
          </div>

          <div className="form-section right-column">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="industry">Industry:</label>
              <select id="industry" name="industry">
                <option value="ecommerce">eCommerce</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="saas">SaaS</option>
                <option value="marketing">Marketing</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tagline">Tagline/Slogan:</label>
              <input type="text" id="tagline" name="tagline" />
            </div>
            <div className="form-group">
              <label htmlFor="companyDescription">Company Description:</label>
              <textarea id="companyDescription" name="companyDescription" />
            </div>
            <div className="form-group">
              <label htmlFor="keyProducts">Key Products/Services:</label>
              <textarea id="keyProducts" name="keyProducts" />
            </div>
            <div className="form-group">
              <label htmlFor="targetAudience">Target Audience:</label>
              <textarea id="targetAudience" name="targetAudience" />
            </div>
            <div className="form-group">
              <label htmlFor="usp">Unique Selling Proposition (USP):</label>
              <textarea id="usp" name="usp" />
            </div>
          </div>

          <div className="form-section right-column">
            <div className="form-group">
              <label htmlFor="companySize">Company Size:</label>
              <input type="number" id="companySize" name="companySize" />
            </div>
            <div className="form-group">
              <label htmlFor="geographicReach">Geographic Reach:</label>
              <textarea id="geographicReach" name="geographicReach" />
            </div>
            <div className="form-group">
              <label htmlFor="partnershipGoals">Partnership Goals:</label>
              <textarea id="partnershipGoals" name="partnershipGoals" />
            </div>
            <div className="form-group">
              <label htmlFor="previousCollaborations">Previous Collaborations:</label>
              <textarea id="previousCollaborations" name="previousCollaborations" />
            </div>
            <div className="form-group">
              <label htmlFor="idealPartnerProfile">Ideal Partner Profile:</label>
              <textarea id="idealPartnerProfile" name="idealPartnerProfile" />
            </div>
            <div className="form-group">
              <label htmlFor="marketingChannels">Marketing Channels:</label>
              <textarea id="marketingChannels" name="marketingChannels" />
            </div>
            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information:</label>
              <textarea id="additionalInfo" name="additionalInfo" />
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
        ) : (
          <div className="proposals-section">
          <table>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend Developer</td>
                <td>Tech Company</td>
                <td className="button-container">
                  <button className="view-button">View</button>
                  <button className="accept-button">Accept</button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        )}
         {currentSection === 'subscriptions' && (
        <div>
          {/* Display current subscription information */}
          <p>Current subscription: Premium Plan</p>
          {/* Buttons to cancel or pause subscription */}
          <button>Cancel Subscription</button>
          <button>Pause Subscription</button>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
