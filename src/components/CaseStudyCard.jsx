import React from "react";

function CaseStudyCard({ title, image, link }) {
  return (
    <div className="case-study-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Coming Soon!</p>
      {/* Or if you want a button/link */}
      {/* <a href={link} className="btn btn-primary" onClick={e => e.preventDefault()}>Coming Soon</a> */}
    </div>
  );
}

export default CaseStudyCard;
