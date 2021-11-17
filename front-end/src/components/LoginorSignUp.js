import axios from 'axios'
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'


const LoginOrSignUp = ({ isShowLoginOrRegister, handleLoginClick, handleLoginOrRegister }) => {
  const [isShowLogin, setIsShowLogin] = useState(false)
  const [isShowRegister, setIsShowRegister] = useState(false)

  const [formData, setFormData ] = useState({
    email: ''
    })

  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
 
    try {
      await axios.post('/api/users', formData)
      setIsShowLogin(true)
    } catch (err) {
      console.log(err)
      if (formData.email === ''){
        setError(true)
      } else {
        setIsShowRegister(true)
      }
    }
  }

  // const handleClick = () => {
  //   history.push('/')
  // }

  const handleLoginPopup = () => {
    handleLoginClick()
    setError(false)
  }

  const handleLoginOrRegisterPopup = (showLoginOrRegister, showLogin, showRegister) => {
    handleLoginOrRegister(showLoginOrRegister)
    setIsShowLogin(showLogin)
    setIsShowRegister(showRegister)
  }

  return (
    <div className={`${isShowLoginOrRegister ? '' : 'hide'} login-background`}>
      <div className={`${isShowLoginOrRegister && !isShowLogin && !isShowRegister  ? '' : 'hide'} login-popup`}>
        <form className='form-container' onSubmit={handleSubmit} id='form'>
          <div className="close-login-popup" onClick={handleLoginPopup}>
            <i className="far fa-times-circle login-close-icon"></i>
          </div>
          <div className='form-field-container'>
            <div className='subtitle is-4' id='signuptext'>Login or Sign Up</div>
            <hr className='mt-4 mb-5'/>
            <div className='title is-6 mb-5'>Welcome to Platester</div>
            <div className='field mb-0'>
              <p className='control pb-2'>
              <input 
              className={`input py-5 ${error ? 'is-danger py-5' : 'py-5'}`}
              placeholder = 'Email'
              name='email'
              value={formData.email}
              onChange={handleChange} />
              </p>
            </div>
            {error && <p className='is-danger subtitle mt-1 mb-1 ml-0'>this field is required</p>}
            <div className='field mb-4'>
              <p className='control'>
                <button type='submit' className='button is-danger' id='submit'>Continue</button>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className={`${isShowLoginOrRegister && isShowLogin && !isShowRegister  ? '' : 'hide'} loginOrRegister-popup`}>
        <Login handleLoginOrRegisterPopup={handleLoginOrRegisterPopup} emailData={formData.email} />
      </div>
      <div className={`${isShowLoginOrRegister && !isShowLogin && isShowRegister  ? '' : 'hide'} loginOrRegister-popup`}>
        <Register handleLoginOrRegisterPopup={handleLoginOrRegisterPopup} emailData={formData.email}/>
      </div>
    </div>
    
  )

}

export default LoginOrSignUp