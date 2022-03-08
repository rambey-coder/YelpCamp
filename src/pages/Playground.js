import React from 'react';
import './Playground.css';
import { Link } from 'react-router-dom';

const Playground = () => {
  return (
    <div className="play-container">
        <div className="nav-container">
                <div className="logo-search">
                    <img src="./Logo.svg" alt="camp-logo" className='nav-logo'/>

                    <Link to='/' className='home-link'>
                        Home                    
                    </Link>
                </div>

                <div className="login-container">
                    <Link to='/Login-page' className='login-link'>
                        Login
                    </Link>

                    <Link to='/create-account' className='account-link'>
                        Create Account
                    </Link>
                </div>
            </div>

            <div className="add-new-camp">
                <h1>Add New Campground</h1>
                
                <form action="#" method="get" className='submt-input'>
                    <div className="float-input">
                            <input type="text" className='user' />
                            
                            <label htmlFor="user" className='label'>Capmpground Name</label>
                        </div>
                        <div className="float-input">
                            <input type="text" className='user' />

                            <label htmlFor="user" className='label'>Price</label>
                        </div>
                        <div className="float-input">
                            <input type="text" className='user' />

                            <label htmlFor="user" className='label'>Image URL</label>
                        </div>
                        <div className="float-input">
                            <textarea type="textarea" className='user text-area'  rows="10" cols="100" />

                            <label htmlFor="user" className='label'>Description</label>
                        </div>
                    <Link to='/' className='login-home'>Add Campground</Link>
                  </form>
            </div>
    </div>
  )
}

export default Playground