import React from 'react';
import './styles/resources.css'

const Resources = () => {
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

      <section className="partner-directory">
        <div className="filters">
          <select>
            <option value="">All Location</option>
          </select>
          <select>
            <option value="">All Specialization</option>
          </select>
          <select>
            <option value="">All Vertical Expertise</option>
          </select>
          <select>
            <option value="">All Language</option>
          </select>
          <input type="text" placeholder="Search by name, service or phrases" />
          <select>
            <option value="top-rated">Top rated</option>
          </select>
        </div>

        <div className="partners">
          <div className="partner-card">
            <h3>Let us match you</h3>
            <p>Mixpanel will do all the work to connect you with the best Certified Partner.</p>
            <button className="get-matched">Get matched</button>
          </div>

          <div className="partner-card">
            <h3>Mentat Analytics</h3>
            <p>Mentat is a consulting agency providing a wide range of analytics and data science services with a specialty in product analytics.</p>
            <span className="rating">★★★★★ (36)</span>
          </div>

          <div className="partner-card">
            <h3>The Product Alliance</h3>
            <p>The initial hour of consultation - on us! The Product Alliance is a boutique consulting firm with the absolute goal of being our clients' closest advisor.</p>
            <span className="rating">★★★★★ (29)</span>
          </div>

          <div className="partner-card">
            <h3>Growth Analytics Marketing</h3>
            <p>Why should you work with Growth Analytics Marketing (GAM)? We provide a bespoke service suitable for businesses with unique qualities.</p>
            <span className="rating">★★★★★ (18)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
