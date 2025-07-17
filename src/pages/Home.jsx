import React from 'react';

const Home = () => {
  return (
    <div className="page-container landing flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-6">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg max-w-xl text-gray-700">
        Hi there! I'm glad you're here. This portfolio was created as part of SEG 3125 (Analysis and Design of User Interfaces) to showcase my work, creativity, and growth throughout the course.
      </p>
      <p className="text-md max-w-lg text-gray-600">
        Want to get to know me better? Learn more under <strong>About</strong>.<br />
        Curious about what I’ve built? Explore my work under <strong>Case Studies</strong>.
      </p>
    </div>
  );
};

export default Home;
