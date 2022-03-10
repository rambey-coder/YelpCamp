import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import Home from './components/Home';
import Campsearch from './pages/Campsearch';
import Login from './pages/Login';
import Account from './pages/Account';
import Playground from './pages/Playground';
import CampPage from './pages/CampPage';

const items = [
  {
      Image: './Mount-Ulap.png',
      Tittle: 'Mount Ulap',
      Description: "One of the most famous hikes in Benguet Mt Ulap Itogon",
      button: "View Campground"
  },
  {
      Image: './Calagus Islands.jpg',
      Tittle: 'Calagus Islands',
      Description: "A paradise of islands that can rival the white sand beauty of Boracay",
      button: "View Campground"
  },
  {
      Image: './Onay Beach.jpg',
      Tittle: 'Onay Beach',
      Description: "This is one of the best camping sites, beautiful and pristine.",
      button: "View Campground"
  },
  {
      Image: './Latik Riverside.jpg',
      Tittle: 'Latik Riverside',
      Description: "Philippines is one of the most dazzling countries in all Asia.",
      button: "View Campground"
  },
  {
      Image: './Buloy Springs.jpg',
      Tittle: 'Buloy Springs',
      Description: "This is one of the best beach camping sites, beautiful and pristine.",
      button: "View Campground"
  },
  {
      Image: './Seven.jpg',
      Tittle: 'Seven Sisters Waterfall',
      Description: "The Seven Sisters is the 39th tallest waterfall in Norway",
      button: "View Campground"
  }
];

function App() {
  const [direct, setDirect ] = useState();
  // console.log(direct)
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Search-Page' element={<Campsearch items = {items }
        setDirect = { setDirect } />}/>
        <Route path='/Login-page' element={<Login />}/>
        <Route path='/create-account' element={<Account />} />
        <Route path='/add-play-ground' element={<Playground />}/>
        <Route path='/camp-page' element={<CampPage direct = {direct}/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
