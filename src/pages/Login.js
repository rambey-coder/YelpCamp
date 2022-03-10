import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';




const Login = () => {
    const [value, setValue] = useState(false);
    const togglePassword = () => {
        setValue(!value)
    }

    // const validate = values => {
    //     const errors = {}

    //     if(!values.username) {
    //         errors.username = 'required'
    //     } else if(values.username.length < 6){
    //         errors.username = 'Must be 6 characters'
    //     }

    //     if(!values.password) {
    //         errors.password = 'required'
    //     } else if(values.password.length < 8){
    //         errors.password = 'Must be 8 characters'
    //     }

    //     return errors;
       
    // }

    const formik = useFormik ({
        initialValues: {
            username: '',
            password: ''
        },
        // validate,

        validationSchema: Yup.object({
            username: Yup.string().max(6, 'Must be 6 characters or more').required('Required'),

            password: Yup.string().max(8, 'Must be 6 characters').required('Required')
        }),

        onSubmit: (values) => {
            alert('submmission successfully') 
        }
    })

    const navigate = useNavigate()

    const handlenavigate = () => {
         if(formik.values.username !== '' || formik.values.password !== ''){
            navigate('/')
         } else {
             alert('fields are empty')
         }
    }

    
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
                   
                    <Link to='/Search-Page' className='back-link'>
                    <i className="fas fa-angles-left"/>
                    Back to campground
                    </Link>
                </div>

                <div className="login-content">
                    <h1>Start exploring camps from all around the world.</h1>
                  <form action="#" method="get" className='submt-input' onSubmit={formik.handleSubmit}>
                    <div className="float-input">
                            <input type="text" 
                            className='user' 
                            name='username' 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}/>

                            {formik.touched.username && formik.errors.username ? <p className='error'>{formik.errors.username}</p> : ''}
                            
                            <label htmlFor="user" className='label'>Username</label>
                        </div>
                        <div className="float-input">
                            <input type={value ? "text" : "password"}
                            className='user'
                            name='password' 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}/>

                            {formik.touched.password && formik.errors.password ?
                             <p className='error'>{formik.errors.password}</p> : ''}

                            <label htmlFor="user" className='label'>Password</label>
                            
                            <i className={value ? "fas fa-eye shown" : 'fas fa-eye-slash shown'}
                            onClick={togglePassword}/>
                        </div>
                    {/* <Link to='/' className='login-home'>Login</Link> */}
                    <button className='login-home' type='submit' onClick={handlenavigate}>Login</button>
                  </form>

                    <p>Not a user yet?</p> <Link to='/create-account'>Create an account</Link>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Login