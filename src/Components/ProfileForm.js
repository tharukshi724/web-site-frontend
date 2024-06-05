import React from 'react';
import '../Css/profileInformation.css';

const ProfileForm = () => {
  return (
    <div className="form-container">
      <h2>Profile Information</h2>
      <form>
        <div className="form-columns">
          <div className="form-section left-column">
            <div className="profile-pic-container">
              <div className="profile-pic">
                <input type="file" id="profilePic" name="profilePic" accept="image/*" />
                <label htmlFor="profilePic" className="upload-button">+</label>
              </div>
              <label className="profile-pic-label">Profile Picture</label>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name"  />
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
              <input type="text" id="tagline" name="tagline"  />
            </div>
            <div className="form-group">
              <label htmlFor="companyDescription">Company Description:</label>
              <textarea id="companyDescription" name="companyDescription" ></textarea>
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="keyProducts">Key Products/Services:</label>
              <textarea id="keyProducts" name="keyProducts" ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="targetAudience">Target Audience:</label>
              <textarea id="targetAudience" name="targetAudience" ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="usp">Unique Selling Proposition (USP):</label>
              <textarea id="usp" name="usp" ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="companySize">Company Size:</label>
              <input type="number" id="companySize" name="companySize"  />
            </div>
            <div className="form-group">
              <label htmlFor="geographicReach">Geographic Reach:</label>
              <textarea id="geographicReach" name="geographicReach" ></textarea>
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="partnershipGoals">Partnership Goals:</label>
              <textarea id="partnershipGoals" name="partnershipGoals" ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="previousCollaborations">Previous Collaborations:</label>
              <textarea id="previousCollaborations" name="previousCollaborations" ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="idealPartnerProfile">Ideal Partner Profile:</label>
              <textarea id="idealPartnerProfile" name="idealPartnerProfile" ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="marketingChannels">Marketing Channels:</label>
              <textarea id="marketingChannels" name="marketingChannels" ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="collaborationPreferences">Collaboration Preferences:</label>
              <textarea id="collaborationPreferences" name="collaborationPreferences" ></textarea>
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;