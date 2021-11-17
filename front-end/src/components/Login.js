/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useState, useEffect } from 'react'


const Login = ({ handleLoginOrRegisterPopup, emailData }) => {
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  })
  
  useEffect(() => {
    setFormData({ ...formData, email : emailData })
  }, [emailData])

  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const setItemToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      setItemToLocalStorage(data.token)
      handleLoginOrRegisterPopup(false, false, false)
    } catch (err) {
      setError(true)
    }
  }
 
  const handleLoginClose = () => {
    handleLoginOrRegisterPopup(false, false, false)
  }

  const handleLoginBack = () => {
    handleLoginOrRegisterPopup(true, false, false)
  }


  return (
    <form className='column is-offset-one-third box' onSubmit={handleSubmit} id='form'>
      <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
        <div className="close-login-popup" onClick={handleLoginBack}>
          <i className="fas fa-long-arrow-alt-left"></i>
        </div>
        <div className="close-login-popup" onClick={handleLoginClose}>
              <i className="far fa-times-circle login-close-icon"></i>
        </div>
      </div>
      <div className='subtitle is-4' id='signuptext'> Login</div>


    <hr className='mt-4 mb-5'/>
    <div className='title is-6 mb-5'>Welcome to Platester</div>
      <div className='field mb-0'>
      <p className='control'>
      <input  id='signupinput1'
      className={`input ${error ? 'is-danger py-5' : 'py-5'}`} 
      placeholder = 'Email'
      name='email'
      value={formData.email}
      onChange={handleChange} />
      </p>
      </div>
      {error && <p className='is-danger subtitle mt-1 mb-1 ml-0'>Your username or password are incorrect</p>}
      <div className='field mb-0'>
      <p className='control'>
      <input  id='signupinput2' type='password'
      className={`input ${error ? 'is-danger py-5' : 'py-5'}`} 
      placeholder = 'Password'
      name='password'
      value={formData.password}
      onChange={handleChange}/>
      </p>
      </div>
      {error && <p className='is-danger subtitle mt-1 mb-1 ml-0'>Your username or password are incorrect</p>}
      <div className='field mb-4 mt-4'>
        <p className='control'>
          <button type='submit' className='button is-danger' id='submit'>Log in</button>
        </p>
      </div>
    </form>

  )
}


export default Login