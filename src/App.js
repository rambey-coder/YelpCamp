import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
      <Home />
    </Router>
    </>
  );
}

export default App;
