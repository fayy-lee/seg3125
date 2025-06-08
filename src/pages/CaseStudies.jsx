import React from 'react';

const caseStudies = [
  { id: 1, title: 'Service Site', image: '/images/service.jpg', link: 'https://service-site-seg3125.vercel.app/' },
  { id: 2, title: 'Design 2', image: '/images/game.jpg' },
  { id: 3, title: 'Design 3', image: '/images/ecommerce.jpg' },
  { id: 4, title: 'Design 4', image: '/images/analytics.png' },
];

const CaseStudies = () => {
  return (
    <div className="page-container case-studies-section">
      <h1>Case Studies</h1>
      <div className="case-studies-container">
        {caseStudies.map(({ id, title, image, link }) => (
          link ? (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>Click and see!</p>
            </a>
          ) : (
            <div key={id} className="case-study-card">
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>Coming Soon!</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
