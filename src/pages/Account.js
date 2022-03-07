import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Account = () => {
  return (
    <div className="login-page-container">

        <div className="login-right">
            <div className="sub-right">
                <h3>"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added" </h3>

                <div className="login-image-container">
                    <img src="./natural-light.jpg" alt="quote" />
                    <span>
                        <h5>May Andrews</h5>
                        <p>Professional Heiker</p>
                    </span>
                </div>
            </div>
        </div>

        <div className="login-left">
            <div className="sub-login">
                <div className="login-nav">
                    <img src="./Logo.svg" alt="" />
                    <Link to='/Search-Page' className='back-link'>Back to campground</Link>
                </div>

                <div className="login-content">
                    <h1>Start exploring camps from all around the world.</h1>
                    <form action="#" method="get" className='submit-input'>
                        <div className="float-input">
                            <input type="text" className='user' />
                            
                            <label htmlFor="user" className='label'>Username</label>
                        </div>
                        <div className="float-input">
                            <input type="email" className='user' />
                            
                            <label htmlFor="user" className='label'>Email</label>
                        </div>
                        <div className="float-input">
                            <input type="password" className='user' />

                            <label htmlFor="user" className='label'>Password</label>
                        </div>
                        <Link to='/' className='login-home'>Create an account</Link>
                    </form>

                    <p>Already a user?</p> <Link to='/Login-page'>Sign in</Link>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Account