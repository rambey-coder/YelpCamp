import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Campsearch from './pages/Campsearch';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Search-Page' element={<Campsearch />}/>
        <Route path='/Login-page' element={<Login />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
