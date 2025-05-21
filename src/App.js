import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import About from './components/About.jsx';
import HowIWork from './components/HowIWork.jsx';
import CaseStudy1 from './components/CaseStudy1.jsx';
import CaseStudy2 from './components/CaseStudy2.jsx';
import CaseStudy3 from './components/CaseStudy3.jsx';

import AppContext from './AppContext';
import routesConfig from './data/routes.json';  // Updated import

const componentMap = {
  About,
  HowIWork,
  CaseStudy1,
  CaseStudy2,
  CaseStudy3,
};

function App() {
  const [globalState, setGlobalState] = useState({});

  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      <BrowserRouter>
        <Routes>
          {routesConfig.routes.map(({ path, component, headerTitle }) => {
            const Component = componentMap[component];
            if (!Component) return null;

            return (
              <Route
                key={path}
                path={path}
                element={<Component header={headerTitle} />}
              />
            );
          })}
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
