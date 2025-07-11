import React from 'react';

const About = () => {
  return (
    <div className="page-container about-section">
      <h1>About Me</h1>
      <div className="about-content">
        <img src="/images/profile.png" alt="Profile" className="about-image" />
        <div className="about-text">
          <p>Hi! I'm Fay Lee, a 3rd-year Computer Science student at the University of Ottawa. I’m passionate about UI/UX design, web development, and creating seamless user experiences.</p>
          <p>Currently, I’m learning new design concepts through my UI design course and working on projects that showcase my skills and style.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
