import React from "react";

function CaseStudyCard({ title, image, link }) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={link} className="btn btn-primary" onClick={e => e.preventDefault()}>
          Coming Soon
        </a>
      </div>
    </div>
  );
}

export default CaseStudyCard;
