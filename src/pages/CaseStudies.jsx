import React from 'react';

const caseStudies = [
  { id: 1, title: 'Design 1', image: '/images/service.jpg' },
  { id: 2, title: 'Design 2', image: '/images/game.jpg' },
  { id: 3, title: 'Design 3', image: '/images/ecommerce.jpg' },
];

const CaseStudies = () => {
  return (
    <div className="page-container">
      <h1>Case Studies</h1>
      <div className="cards-container">
        {caseStudies.map(({ id, title, image }) => (
          <div key={id} className="case-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Coming Soon!</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
