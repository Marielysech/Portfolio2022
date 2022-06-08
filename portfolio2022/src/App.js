import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Contact from './pages/Contact';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import Stack from './pages/Stack';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Stack />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
