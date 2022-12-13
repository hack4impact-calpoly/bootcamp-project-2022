import React from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import About from './components/About';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <About/>
      </header>
    </div>
  );
}

export default App;
