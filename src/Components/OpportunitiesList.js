import React, { useState } from 'react';
import "../Css/jobList.css"
import { FiDollarSign } from 'react-icons/fi'
const PartnershipOpportunities = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [opportunitiesPerPage] = useState(6);
    const [opportunities, setOpportunities] = useState([
        { id: 1, company: 'Company A', opportunity: 'Opportunity 1', salary: '$100,000', country: 'United State', tags: ['Copywriter', 'Technical'], posted: '2d' },
        { id: 2, company: 'Company B', opportunity: 'Opportunity 2', salary: '$90,000', country: 'Japan', tags: ['Voice'], posted: '3d' },
        { id: 3, company: 'Company C', opportunity: 'Opportunity 3', salary: '$110,000', country: 'America', tags: ['Technical'], posted: '1d' },
        { id: 4, company: 'Company D', opportunity: 'Opportunity 4', salary: '$95,000', country: 'United State', tags: ['Copywriter'], posted: '5d' },
        { id: 5, company: 'Company E', opportunity: 'Opportunity 5', salary: '$105,000', country: 'Japan', tags: ['Voice', 'Technical'], posted: '2d' },
        { id: 6, company: 'Company F', opportunity: 'Opportunity 6', salary: '$98,000', country: 'America', tags: ['Copywriter'], posted: '4d' },
        { id: 7, company: 'Company G', opportunity: 'Opportunity 7', salary: '$102,000', country: 'United State', tags: ['Technical'], posted: '1d' },
        { id: 8, company: 'Company H', opportunity: 'Opportunity 8', salary: '$115,000', country: 'United State', tags: ['Voice'], posted: '3d' },
        { id: 9, company: 'Company I', opportunity: 'Opportunity 9', salary: '$120,000', country: 'United State', tags: ['Copywriter'], posted: '2d' },
        { id: 10, company: 'Company J', opportunity: 'Opportunity 10', salary: '$88,000', country: 'United State', tags: ['Technical'], posted: '5d' },
        { id: 11, company: 'Company K', opportunity: 'Opportunity 11', salary: '$94,000', country: 'United State', tags: ['Voice'], posted: '4d' },
        { id: 12, company: 'Company L', opportunity: 'Opportunity 12', salary: '$112,000', country: 'United State', tags: ['Copywriter'], posted: '3d' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const indexOfLastOpportunity = currentPage * opportunitiesPerPage;
    const indexOfFirstOpportunity = indexOfLastOpportunity - opportunitiesPerPage;
    const currentOpportunities = opportunities.slice(indexOfFirstOpportunity, indexOfLastOpportunity);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const filteredOpportunities = currentOpportunities.filter(opportunity =>
        opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opportunity.opportunity.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="partnership-opportunities">
            <h1>Partnership Opportunities</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search opportunities..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button onClick={() => console.log('Search button clicked')}>Search</button>
            </div>
            <div className="opportunity-list">
                {filteredOpportunities.map(opportunity => (
                    <div className="opportunity-card" key={opportunity.id}>
                        <div className='imageContent'>
                        <img src={require(`../images/logo.jpg`)} className='jobIcon' />
                        <div className="opportunity-details">
                            <p className='jobName'>{opportunity.opportunity}</p>
                            <p>RedDesign Health</p>
                            <div className='btnContainer'>
                                <div className='roundBtn'>{opportunity.country}</div>
                                <div className='roundBtn'>{opportunity.salary}</div>
                            </div>
                        </div>


                        </div>
                      
                        <div className="tags-column">
                            {opportunity.tags.map(tag => (
                                <div className="tag" key={tag}>{tag}</div>
                            ))}
                        </div>
                        <div className="posted-column">
                            <p>{opportunity.posted}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='paginationContent'>
                <Pagination
                    opportunitiesPerPage={opportunitiesPerPage}
                    totalOpportunities={opportunities.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

const Pagination = ({ opportunitiesPerPage, totalOpportunities, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalOpportunities / opportunitiesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={currentPage === number ? 'active' : ''}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PartnershipOpportunities;
