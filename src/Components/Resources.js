import React, { useState } from 'react';
import Select from 'react-select';
import '../Css/resources.css';
import logo2 from '../images/logo2.jpg';
import logo5 from '../images/logo5.jpg';



const locationOptions = [
  { value: 'all', label: 'All Location' },
  // Add more location options as needed
];

const specializationOptions = [
  { value: 'all', label: 'All Specialization' },
  // Add more specialization options as needed
];

const verticalExpertiseOptions = [
  { value: 'all', label: 'All Vertical Expertise' },
  { value: 'saas', label: 'SaaS' },
  { value: 'consumer-tech', label: 'Consumer Tech' },
  { value: 'fintech', label: 'FinTech' },
  { value: 'media-entertainment', label: 'Media & Entertainment' },
  { value: 'retail-commerce', label: 'Retail & Commerce' },
  // Add more options as needed
];

const languageOptions = [
  { value: 'all', label: 'All Language' },
  // Add more language options as needed
];

const sortOptions = [
  { value: 'top-rated', label: 'Sort by Top rated' },
  // Add more sort options as needed
];

const Resources = () => {
  const [location, setLocation] = useState(locationOptions[0]);
  const [specialization, setSpecialization] = useState(specializationOptions[0]);
  const [verticalExpertise, setVerticalExpertise] = useState(verticalExpertiseOptions[0]);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [sort, setSort] = useState(sortOptions[0]);

  return (
    <div className="container">
      <section className="header">
        <h1>Hire A Mixpanel Expert</h1>
        <p>
          Unlock the power of product analytics with a Mixpanel Expert. All consultancies,
          agencies, and freelancers in our directory have been trained by Mixpanel and earned
          a Certified Partner badge.
        </p>
        <button className="become-partner">Become a Partner</button>
      </section>

      <section className="filters">
        <div className="row">
          <Select
            value={location}
            onChange={setLocation}
            options={locationOptions}
            className="custom-select"
            placeholder="Select Location"
          />
          <Select
            value={specialization}
            onChange={setSpecialization}
            options={specializationOptions}
            className="custom-select"
            placeholder="Select Specialization"
          />
          <Select
            value={verticalExpertise}
            onChange={setVerticalExpertise}
            options={verticalExpertiseOptions}
            className="custom-select"
            placeholder="Select Vertical Expertise"
          />
          <Select
            value={language}
            onChange={setLanguage}
            options={languageOptions}
            className="custom-select"
            placeholder="Select Language"
          />
        </div>
        <div className="row search-sort-row">
          <input type="text" placeholder="Search by name, service or phrases" className="search-bar" />
          <Select
            value={sort}
            onChange={setSort}
            options={sortOptions}
            className="custom-select sort-by"
            placeholder="Sort by"
          />
        </div>
      </section>

      <section className="partner-directory">
        <div className="partners">
          <div className="partner-card">
            <h3>Let us match you</h3>
            <p>Mixpanel will do all the work to connect you with the best Certified Partner.</p>
            <img src={logo5} alt="Partner Image"/>
            <button className="get-matched">Get matched</button>
          </div>

          <div class="partner-card">
          <img src={logo2} alt="Partner Image"/>
          <h3>Partner Name</h3>
          <p>The initial hour of consultation - on us! The Product Alliance is a boutique consulting firm with the absolute goal of being our clients' closest advisor</p>
          <span class="rating">⭐⭐⭐⭐⭐(29)</span>
        </div>

          <div className="partner-card">
          <img src={logo2} alt="Partner Image"/>
            <h3>The Product Alliance</h3>
            <p>The initial hour of consultation - on us! The Product Alliance is a boutique consulting firm with the absolute goal of being our clients' closest advisor.</p>
            <span class="rating">⭐⭐⭐⭐⭐(29)</span>
          </div>

          <div className="partner-card">
          <img src={logo2} alt="Partner Image"/>
            <h3>The Product Alliance</h3>
            <p>The initial hour of consultation - on us! The Product Alliance is a boutique consulting firm with the absolute goal of being our clients' closest advisor.</p>
            <span class="rating">⭐⭐⭐⭐⭐(29)</span>
          </div>
          <div className="partner-card">
          <img src={logo5} alt="Partner Image"/>
            <h3>The Product Alliance</h3>
            <p>The initial hour of consultation - on us! The Product Alliance is a boutique consulting firm with the absolute goal of being our clients' closest advisor.</p>
            <span class="rating">⭐⭐⭐⭐⭐(29)</span>
          </div>
          <div className="partner-card">
          <img src={logo5}  alt="Partner Image"/>
            <h3>The Product Alliance</h3>
            <p>The initial hour of consultation - on us! The Product Alliance is a boutique consulting firm with the absolute goal of being our clients' closest advisor.</p>
            <span class="rating">⭐⭐⭐⭐⭐(29)</span>
          </div>
          <div className="partner-card">
          <img src={logo5}  alt="Partner Image"/>
            <h3>The Product Alliance</h3>
            <p>The initial hour of consultation - on us! The Product Alliance is a boutique consulting firm with the absolute goal of being our clients' closest advisor.</p>
            <span class="rating">⭐⭐⭐⭐⭐(29)</span>
          </div>
          <div className="partner-card">
          <img src={logo5}  alt="Partner Image"/>
            <h3>The Product Alliance</h3>
            <p>The initial hour of consultation - on us! The Product Alliance is a boutique consulting firm with the absolute goal of being our clients' closest advisor.</p>
            <span class="rating">⭐⭐⭐⭐⭐(29)</span>
          </div>
          <div className="partner-card">
          <img src={logo5}  alt="Partner Image"/>
            <h3>The Product Alliance</h3>
            <p>The initial hour of consultation - on us! The Product Alliance is a boutique consulting firm with the absolute goal of being our clients' closest advisor.</p>
            <span class="rating">⭐⭐⭐⭐⭐(29)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
