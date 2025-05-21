import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { endpoints } from './constants/endpoints';

import About from './components/About';
import HowIWork from './components/HowIWork';
import CaseStudy1 from './components/CaseStudy1';
import CaseStudy2 from './components/CaseStudy2';
import CaseStudy3 from './components/CaseStudy3';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<About header="About Me" />} />
      <Route path="/how-i-work" element={<HowIWork header="How I Work" />} />
      <Route path="/case-study-1" element={<CaseStudy1 header="Case Study 1" />} />
      <Route path="/case-study-2" element={<CaseStudy2 header="Case Study 2" />} />
      <Route path="/case-study-3" element={<CaseStudy3 header="Case Study 3" />} />
    </Routes>
  </Router>
);

export default App;
