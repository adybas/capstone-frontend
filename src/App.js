import React from 'react';
import { Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      < Navbar />
      < Route path="/" component={Home} />
      < Footer />
    </div>
  );
}

export default App;
