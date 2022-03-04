import React, { useState, useEffect } from 'react'
import './Home.css';
import { Link } from 'react-router-dom'
import PuffLoader from "react-spinners/PuffLoader";


const Home = () => {
    const  [loading, setLoading] = useState(false)

    useEffect (() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 6000)
    }, [])

  return (
    <div className="home-general-container">
        {
            loading ? 

            <div className="loaders">
                <PuffLoader
                className= 'loader'
                css=''
                size={50}
                color={"#000"}
                loading={loading}
            />
            </div>
            :

            <>
            <div className="tab-logo-container">
                      <img src="./Logo.svg" alt="camp-logo" className='camp-logo' />
                  </div><div className="sub-container">
                          <div className="left-container">
                              <div className="logo-container">
                                  <img src="./Logo.svg" alt="camp-logo" />
                              </div>

                              <div className="content-container">
                                  <h1>Explore the best camps on Earth.</h1>
                                  <p>Yelp camp is a curated list of the best camping spots on Earth.Unlimited and unibaised reviews </p>

                                  <div className="checks">
                                      <img src="./Checkmark.svg" alt="checkmark" className='checkmark' />
                                      <p>Add your own camp suggestions</p>
                                  </div>

                                  <div className="checks">
                                      <img src="./Checkmark.svg" alt="checkmark" className='checkmark' />
                                      <p>Leave reviews and experiences</p>
                                  </div>

                                  <div className="checks">
                                      <img src="./Checkmark.svg" alt="checkmark" className='checkmark' />
                                      <p>See locations to all camps</p>
                                  </div>

                                  <Link to='search-page' className='home-btn'>
                                      View Campgrounds
                                  </Link>

                                  <p>Partnered with:</p>
                                  <div className="patners">
                                      <img src="./Airbnb.svg" alt="Airbnb logo" />
                                      <img src="./Booking.svg" alt="Booking.svg" />
                                      <img src="./Plum Guide.svg" alt="Plum Guide" />
                                  </div>
                              </div>
                          </div>

                          <div className="right-container">
                              <img src="./Hero-Image.jpg" alt="hero" className='hero-image' />

                              <img src="./Section Image.jpg" alt="section" className='section-image' />
                          </div>
                      </div>
                      </>
        }

    </div>
  )
}

export default Home