// src/KnowledgeBase.js

import React from 'react';
import '../Css/knowledgeBase.css';

const KnowledgeBase = () => {
  return (
    <div className="help-page">
      <div className="main-content">
        <h1 className="help-title">How can we help?</h1>
        <div className="search-container">
          <input type="text" placeholder="Search for articles..." />
        </div>
        <div className="sections">
          <div className="section">
            <h2>Overview</h2>
            <p>Get to know the Paved platform.</p>
            <p>9 articles</p>
          </div>
          <div className="section">
            <h2>Advertisers</h2>
            <p>Resources for Advertisers</p>
            <p>46 articles</p>
          </div>
          <div className="section">
            <h2>Publishers</h2>
            <p>Resources for Publishers</p>
            <p>62 articles</p>
          </div>
        </div>
        <div className="popular-articles">
          <h2>Most Popular Articles</h2>
          <ul>
            <li><a href="#article1">Find Newsletters to Sponsor in the Paved Marketplace</a></li>
            <li><a href="#article2">Marketplace: Getting Started a Publisher</a></li>
            <li><a href="#article3">Targeting for Ad Network Campaigns</a></li>
            <li><a href="#article4">Ad Network: Getting Started for Publishers</a></li>
            <li><a href="#article5">Track Campaign Activity on Paved</a></li>
            <li><a href="#article6">ESP Guides for Ad Network HTML Placement</a></li>
            <li><a href="#article7">Performance Tips for the Ad Network</a></li>
            <li><a href="#article8">Ad Network FAQs for Publishers</a></li>
            <li><a href="#article9">Marketplace FAQs for Advertisers</a></li>
            <li><a href="#article10">Booker Overview</a></li>
          </ul>
        </div>
      </div>
    
    </div>
  );
}

export default KnowledgeBase;
