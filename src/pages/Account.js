import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import  { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const Account = () => {
    const [value, setValue] = useState(false);
    const togglePassword = () => {
        setValue(!value)
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            username: Yup.string().max(6, 'Must be 6 characters or more').required('Required'),

            email: Yup.string().email('Invalid mail address').required('Required'),

            password: Yup.string().max(8, 'Must be 6 characters').required('Required')
        }),

        onSubmit: values => {
            // console.log(values)
            alert('account created successfully')
        }
    });

    const navigate = useNavigate()

    const handlenavigate = () => {
        if(formik.values.password !== '' || formik.values.username !== '' || formik.values.email !== '') {
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
                    <Link to='/Search-Page' className='back-link'>Back to campground</Link>
                </div>

                <div className="login-content">
                    <h1>Start exploring camps from all around the world.</h1>
                    <form action="#" method="get" className='submit-input' 
                    onSubmit={formik.handleSubmit}>
                        <div className="float-input">
                            <input type="text"
                             className='user'
                             name='username'
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.username}  />

                            {formik.touched.username &&  formik.errors.username ? <p className='error'>{formik.errors.username}</p> : '' }
                            
                            <label htmlFor="user" className='label'>Username</label>
                        </div>
                        <div className="float-input">
                            <input type="email"
                             className='user'
                             name='email'
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.email}  />

                            { formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}</p> : '' }
                            
                            <label htmlFor="user" className='label'>Email</label>
                        </div>
                        <div className="float-input">
                        <input type={value ? "text" : "password"}
                        className='user'
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} />

                            { formik.touched.password && formik.errors.password ? <p className='error'>{formik.errors.password}</p> : '' }

                            <label htmlFor="user" className='label'>Password</label>

                            <i className={value ? "fas fa-eye shown" : 'fas fa-eye-slash shown'}
                            onClick={togglePassword}/>
                        </div>
                        {/* <Link to='/' className='login-home'>Create an account</Link> */}
                        <button className="login-home" type='submit' onClick={handlenavigate}>Create an account</button>
                    </form>

                    <p>Already a user?</p> <Link to='/Login-page'>Sign in</Link>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Account