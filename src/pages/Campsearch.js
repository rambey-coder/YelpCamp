import React, { useState } from 'react'
import './Campsearch.css';
import { Link } from 'react-router-dom';

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

// const item1 = [
//     {
//         Image: './Latik Riverside.jpg',
//         Tittle: 'Latik Riverside',
//         Description: "Philippines is one of the most dazzling countries in all Asia.",
//         button: "View Campground"
//     },
//     {
//         Image: './Buloy Springs.jpg',
//         Tittle: 'Buloy Springs',
//         Description: "This is one of the best beach camping sites, beautiful and pristine.",
//         button: "View Campground"
//     },
//     {
//         Image: './Seven.jpg',
//         Tittle: 'Seven Sisters Waterfall',
//         Description: "The Seven Sisters is the 39th tallest waterfall in Norway",
//         button: "View Campground"
//     }
// ]

const Campsearch = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    const [searches, setSearches] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setSearches(e.target.value)
    }
  return (
    <>
        <div className="search-container-general">

            <div className="nav-container">
                <div className="logo-search">
                    <img src="./Logo.svg" alt="camp-logo" className='nav-logo'/>

                    <Link to='/' className='home-link'>
                        Home                    
                    </Link>
                </div>

                <div className={click ? "login-container active" : "login-container"}>
                    <Link to='/Login-page' className='login-link'>
                        Login
                    </Link>

                    <Link to='/create-account' className='account-link'>
                        Create Account
                    </Link>
                </div>

                <div className="icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : "fas fa-bars"}/>
                </div>

            </div>

            <div className="searchbar-container">
                <h1>Welcome to YelpCamp!</h1>
                <p>View our hand-picked campgrounds from all over <br /> the world, or add your own.</p>

                <div className="search-input">
                    <input type="search" placeholder='Search for Camps' className='searching' onChange={handleChange}/>
                    <button>
                        Search
                    </button>
                </div>

                <Link to='/add-play-ground' className='addplay'>Or add your own campground</Link>
            </div>

            <div className="search-content">
               {
                   items 
                   .filter((i) => i.Tittle.toLowerCase().includes(searches))
                   .map((result, index) => {
                       return (
                           <div className="results" key={index}>
                               <img src={result.Image} alt="camping" className='image-camp'/>
                               <h4>{result.Tittle}</h4>
                               <p>{result.Description}</p>

                               <Link to='/camp-page' className='ground-link'>
                                   {result.button}
                               </Link>
                           </div>
                       )
                   })
               }
            </div>

            {/* <div className="search-container1">
            {
                   item1 
                   .filter((i) => i.Tittle.toLowerCase().includes(searches))
                   .map((result, index) => {
                       return (
                           <div className="results" key={index}>
                               <img src={result.Image} alt="camping" className='image-camp'/>
                               <h4>{result.Tittle}</h4>
                               <p>{result.Description}</p>

                               <Link to='/camp-page' className='ground-link'>
                                   {result.button}
                               </Link>
                           </div>
                       )
                   })
               }
            </div> */}
            <div className="logo-search">
                    <img src="./Logo.svg" alt="camp-logo" className='nav-logo'/>
                </div>
        </div>
    </>
    )
}

export default Campsearch