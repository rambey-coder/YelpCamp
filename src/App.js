import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Campsearch from './pages/Campsearch';
import Login from './pages/Login';
import Account from './pages/Account';
import Playground from './pages/Playground';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Search-Page' element={<Campsearch />}/>
        <Route path='/Login-page' element={<Login />}/>
        <Route path='/create-account' element={<Account />} />
        <Route path='/add-play-ground' element={<Playground />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
