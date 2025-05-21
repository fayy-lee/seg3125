import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import HowIWork from './components/HowIWork';
import CaseStudy1 from './components/CaseStudy1';
import CaseStudy2 from './components/CaseStudy2';
import CaseStudy3 from './components/CaseStudy3';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/how-i-work" element={<HowIWork />} />
      <Route path="/case-study-1" element={<CaseStudy1 />} />
      <Route path="/case-study-2" element={<CaseStudy2 />} />
      <Route path="/case-study-3" element={<CaseStudy3 />} />
    </Routes>
  </Router>
);

export default App;
