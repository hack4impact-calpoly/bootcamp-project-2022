import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'

function App() {
  return (
    <div className="whole-home">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
