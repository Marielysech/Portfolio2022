import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Contact from './pages/Contact';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import Stack from './pages/Stack';

function App() {
  return (
    <Router>
      <Intro />
    </Router>
  );
}

export default App;
