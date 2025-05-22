import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import HowIWork from './pages/HowIWork';
import CaseStudies from './pages/CaseStudies';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="page-container">  {/* Wrap all content here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-i-work" element={<HowIWork />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
