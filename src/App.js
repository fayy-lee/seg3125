import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import About from './components/About.jsx';
import HowIWork from './components/HowIWork.jsx';
import CaseStudy1 from './components/CaseStudy1.jsx';
import CaseStudy2 from './components/CaseStudy2.jsx';
import CaseStudy3 from './components/CaseStudy3.jsx';

import AppContext from './AppContext';

const componentMap = {
  About,
  HowIWork,
  CaseStudy1,
  CaseStudy2,
  CaseStudy3,
};

function App() {
  const [globalState, setGlobalState] = useState({});
  const [routesConfig, setRoutesConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/profile/routes.json')  // path relative to public folder root
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load routes.json');
        }
        return response.json();
      })
      .then((data) => {
        setRoutesConfig(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading routes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading routes...</div>;
  if (!routesConfig) return <div>Error loading routes configuration.</div>;

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
