import React from 'react';

const caseStudies = [
  { id: 1, title: 'Service Site', image: '/images/service.jpg', link: 'https://service-site-seg3125.vercel.app/' },
  { id: 2, title: 'Game Site', image: '/images/game.png', link: 'https://shadowshift-memory-game.vercel.app/' },
  { id: 3, title: 'Design 3', image: '/images/ecommerce.png', link: 'https://ecommerce-site-six-sand.vercel.app/' },
  { id: 4, title: 'Design 4', image: '/images/analytics.png', link: 'https://veg-dash.vercel.app/' },
];

const CaseStudies = () => {
  return (
    <div className="page-container case-studies-section">
      <h1>Case Studies</h1>
      <div className="case-studies-container">
        {caseStudies.map(({ id, title, image, link }) => (
          <a
            key={id}
            href={link || '#'}
            target={link ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="case-study-card"
            style={{ textDecoration: 'none', color: 'inherit', pointerEvents: link ? 'auto' : 'none' }}
          >
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Click and see!</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
