import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your other components (no need to include .jsx extension)
import About from './components/About';
import HowIWork from './components/HowIWork';
import CaseStudy1 from './components/CaseStudy1';
import CaseStudy2 from './components/CaseStudy2';
import CaseStudy3 from './components/CaseStudy3';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/how-i-work" component={HowIWork} />
        <Route path="/case-study-1" component={CaseStudy1} />
        <Route path="/case-study-2" component={CaseStudy2} />
        <Route path="/case-study-3" component={CaseStudy3} />
      </Switch>
    </Router>
  );
};

export default App;
