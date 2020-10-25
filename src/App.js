import React from 'react';
import GlobalStyles from './globalStyles';
import { NavBar } from './components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <NavBar />
      </div>
    </Router>
  );
};

export default App;
