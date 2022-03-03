import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
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
