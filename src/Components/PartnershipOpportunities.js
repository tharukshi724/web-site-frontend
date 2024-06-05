import React from 'react';
import '../Css/partnership.css';
import { FaShareAlt, FaTwitter, FaCopy } from 'react-icons/fa';

const JobPosting = () => {
  return (
    <div className="job-posting-container">
      <div className="job-posting-content">
        <header>
          <h1>Senior Product Designer, Growth</h1>
          <div className="share-buttons">
            <button>
              <FaShareAlt color="#007bff"  /> Share
            </button>
            <button>
              <FaTwitter color="#1da1f2 "/> Tweet
            </button>
            <button>
              <FaCopy color="#28a745" /> Copy
            </button>
          </div>
        </header>

        <section className="company-info">
        
          <p>Customer.io is looking for a Senior Product Designer to join our product design team. We’re working hard to build a product that enables companies to communicate authentically with their customers in inventive and flexible ways. You'll join a team of highly skilled and empowered designers in a remote and distributed company of about 250 team members across 17 countries.</p>
        </section>

        <section className="role-description">
          <h2>Role Overview</h2>
          <p>This role will join our growth team, where you’ll envision and run experiments to help new customers get started with Customer.io more successfully. Product growth designers embrace rapid iteration and experimentation. A successful candidate will be expected to apply their prior experience and expertise in growth and activation, coupled with a creative and high-craft approach to designing product solutions.</p>
          <ul>
            <li>Work rapidly with your team to design and launch experiments, learn from the results, and iterate quickly to drive critical business metrics</li>
            <li>Create design proposals for growth experiments and collaborate with engineers, marketers and other stakeholders to shape activation strategy</li>
            <li>Develop an understanding and compassion for customers through research</li>
            <li>Participate in the team’s prioritization of work, advocating for experientially-driven solutions to tough activation problems</li>
            <li>Help shape the design team's culture and design processes, including sharing thoughtful 1:1 feedback with peers</li>
          </ul>
        </section>

        <section className="about-you">
          <h2>About You</h2>
          <ul>
            <li>You’re an experienced product designer with 3+ years of experience in a software development setting, with a minimum of 1+ years experience in a growth role</li>
            <li>You’re most comfortable in an experimentation setting, and are motivated by creating measurable business impact with your work</li>
            <li>You are comfortable approaching problems from first principles, repeatedly asking “why?” and using that insight to explore unique, innovative solutions to complex problems</li>
            <li>Your design executions display a high level of craft, and you have a strong ability to communicate the thinking behind your designs to partners and stakeholders</li>
            <li>You have a growth mindset and a willingness to receive and provide feedback, and learn from mistakes</li>
            <li>You thrive with autonomy and ownership, and are comfortable navigating ambiguity</li>
            <li>You are comfortable communicating asynchronously, including across time zones</li>
            <li>You have a passion for making complex functionality more approachable</li>
            <li>You have experience understanding complex systems and designing simple, elegant user interfaces for them</li>
          </ul>
        </section>

        <section className="requirements">
          <h2>Requirements</h2>
          <ul>
            <li>1+ year(s) prior experience in a growth design role, preferably for a B2B product</li>
            <li>Able to commit to at least 3 hrs of working overlap with the Americas (GMT-8 to GMT-5 timezone)</li>
            <li>Familiarity designing within the constraints of a design system and how interfaces are built from components</li>
            <li>Experience conducting your own user research to gather customer insights and incorporate it into your design decision-making</li>
            <li>Experience with tools like Mixpanel, Amplitude, or Fullstory</li>
            <li>Proficiency with Figma</li>
          </ul>
        </section>

        <section className="benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Unlimited PTO - we encourage at least 20 vacation days (in addition to holidays and sick days) so that you can unwind, unplug, and recharge</li>
            <li>16 weeks paid parental leave (including adoption and foster care)</li>
            <li>100% paid insurance premiums for you and your dependents</li>
            <li>401k retirement matching - up to 5% dollar-for-dollar match to retirement contributions</li>
            <li>$1,500 annual healthy lifestyle budget (for gym memberships, classes, fitness equipment)</li>
            <li>$250/monthly Remote Work Stipend to be used for home internet, cell phone, and other miscellaneous remote work costs</li>
            <li>$300/month co-working space rental reimbursement</li>
            <li>$2,000/yearly professional education budget for conferences, courses, workshops, books, etc.</li>
            <li>$1,500 home office budget to make sure your working space is ergonomic and just what you need to do your best work!</li>
            <li>One month sabbatical after five years at Customer.io</li>
          </ul>
        </section>

        <section className="application">
          <h2>How to Apply</h2>
          <p>Apply at the link below and tell us why you're interested in the position! We plan to respond to all applicants with a status update about your application.</p>
          <ol>
            <li>30-minute intro call with a Recruiter</li>
            <li>45 minute video call with the Hiring Manager</li>
            <li>1 hour video call with a Senior Product Designer</li>
            <li>1 hour video call with a Senior Product Designer(s) - Portfolio Walkthrough</li>
            <li>45 min video call with a cross-functional Product Manager</li>
            <li>45 min video call with a cross-functional Engineering Manager</li>
          </ol>
          <button className="apply-button">Apply for this position</button>
        </section>
      </div>
      <aside className="job-summary-card">
        <div className="card-content">
        <img src= {require(`../images/logo.jpg`)} className='avaterImg'/>
         
          <h2>Customer.io</h2>
          <ul>
            <li><strong>Job Type:</strong> Full-time</li>
            <li><strong>Location:</strong> Portland, OR (Remote Friendly)</li>
            <li><strong>Date Posted:</strong> May 19, 2024</li>
          </ul>
          <button className="apply-button">Apply for this position</button>
        </div>
      </aside>
    </div>
  );
};

export default JobPosting;
