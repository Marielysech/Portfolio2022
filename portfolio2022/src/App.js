import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import SiteContent from './pages/SiteContent';


function App() {
  return (
    <Router>
      <SiteContent />
    </Router>
  );
}

export default App;
