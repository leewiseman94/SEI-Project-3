import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const LoginOrSignUp = ({ isShowLogin, handleLoginClick }) => {
  const history = useHistory()

  const [formData, setFormData ] = useState({
    username: '',
    email: ''
    })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/users', formData)
      history.push('/login')
    } catch (err) {
      console.log(err)
      history.push('/register')
    }
  }

  // const handleClick = () => {
  //   history.push('/')
  // }

  const handleLoginPopup = () => {
    handleLoginClick()
  }

  return (
    <div className={`${isShowLogin ? '' : 'hide'} login-background`}>
      <div className={`${isShowLogin ? '' : 'hide'} login-popup`}>
        <form className='form-container' onSubmit={handleSubmit} id='form'>
          <div className="close-login-popup" onClick={handleLoginPopup}>
            <i className="far fa-times-circle login-close-icon"></i>
          </div>
          <div className='form-field-container'>
            <div className='subtitle is-4' id='signuptext'>Login or Sign Up</div>
            <hr className='mt-4 mb-5'/>
            <div className='title is-6 mb-5'>Welcome to Platester</div>
            <div className='field mb-4'>
              <p className='control pb-2'>
              <input className = 'input py-5'
              placeholder = 'Email'
              name='email'
              value={formData.email}
              onChange={handleChange} />
              </p>
            </div>
            <div className='field mb-4'>
              <p className='control'>
                <button type='submit' className='button is-danger' id='submit'>Continue</button>
              </p>
            </div>
          </div>
          
        </form>
      </div>
    </div>
    
  )

}

export default LoginOrSignUp