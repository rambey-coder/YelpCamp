import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-general-container">

        <div className="tablet-logo-container">
                <img src="./Logo.svg" alt="yelpcamp logo"  className='logo-tab'/>
            </div>

        <div className="home-container">
        {/* left container */}
        <div className='left-container'>

            <div className="cover">
            <div className="logo-container">
                <img src="./Logo.svg" alt="yelpcamp logo"  />
            </div>

            <div className="contents">
                <h1>Explore the best camps on Earth.</h1>

                <p>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>

                <div className="checks">

                <img src="./Checkmark.svg" alt="" className='checkmark'/>
                <p> Add your own camp suggestions.</p>
                
                </div>
                <div className="checks">

                <img src="./Checkmark.svg" alt="" className='checkmark'/>
                <p> Leave reviews and experiences.</p>

                </div>
                <div className="checks">

                <img src="./Checkmark.svg" alt="" className='checkmark'/>
                <p>See locations for all camps.</p>

                </div>

                <div>
                <Link to='/searchpage' className='home-btn'>
                    View Campgrounds
                </Link>
                </div>

                <p>Partnered with:</p>

                <div className="patner-logo">
                    <img src="./Airbnb.svg" alt="Airbnb Logo" />

                    <img src="./Booking.svg" alt="Booking" />

                    <img src="./Plum Guide.svg" alt="Plum Guide" />
                </div>
               
            </div>
            </div>

        </div>

        {/* right container */}
        <div className="right-container">
            {/* <img src="./Hero-Image.jpg" alt="camp-image" /> */}
            <div className="image-container"></div>
        </div>
    </div>
    </div>
  )
}

export default Home