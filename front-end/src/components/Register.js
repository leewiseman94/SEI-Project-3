import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
  const history = useHistory()

  const [formData, setFormData ] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
    })

    const [ errors, setErrors] = useState ({
      fullName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/register', formData)
      history.push('/login')
    } catch (err) {
      setErrors(err.response.data.errors)
    }

  }

  const handleClick = () => {
    history.push('/')
  }

  return (
    <form className='column is-offset-one-third box ' onSubmit={handleSubmit} id='form'>
    <div className="close-login-popup" onClick={handleClick}>
      <i className="far fa-window-close" id='close'></i>
    <div className='subtitle is-4 ' id='signuptext'> Sign up</div>
    <Link to='/account'><i className="fas fa-long-arrow-alt-left"></i></Link>
    </div>
    <hr className='mt-4 mb-5'/>
    <div className='title is-6 mb-5'>Welcome to Platester</div>
      <div className='field mb-0'>
      <p className='control'>
      <input id='signupinput1'
      className={`input ${errors.username ? 'is-danger py-5' : 'py-5'}`} 
      placeholder = 'Full Name'
      name='fullName'
      value={formData.fullName}
      onChange={handleChange} />
      </p>
      </div>
      {errors.username && <p className='is-danger subtitle mt-1 mb-1 ml-0'></p>}
      <div className='field mb-0'>
      <p className='control'>
      <input id='signupinput'
      className={`input ${errors.username ? 'is-danger py-5' : 'py-5'}`} 
      placeholder = 'Username'
      name='username'
      value={formData.username}
      onChange={handleChange} />
      </p>
      </div>
      {errors.username && <p className='is-danger subtitle mt-1 mb-1 ml-0'>username must be unique </p>}
      <div className='field mb-0'>
      <p className='control'>
      <input  id='signupinput'
      className={`input ${errors.email ? 'is-danger py-5' : 'py-5'}`} 
      placeholder = 'Email'
      name='email'
      value={formData.email}
      onChange={handleChange} />
      </p>
      </div>
      {errors.email && <p className='is-danger subtitle mt-1 mb-1 ml-0'>email must be unique</p>}
      <div className='field mb-0'>
      <p className='control'>
      <input id='signupinput'
      className={`input ${errors.password ? 'is-danger py-5' : 'py-5'}`} 
      placeholder = 'Password'
      name='password'
      value={formData.password}
      onChange={handleChange}/>
      </p>
      </div>
      {errors.password && <p className='is-danger subtitle mt-1 mb-1 ml-0'>{errors.password.message}</p>}
      <div className='field mb-0'>
      <p className='control'>
      <input id='signupinput2'
      className={`input ${errors.passwordConfirmation ? 'is-danger py-5' : 'py-5'}`} 
      placeholder = 'Password Confirmation'
      name='passwordConfirmation'
      value={formData.passwordConfirmation}
      onChange={handleChange} />
      </p>
      </div>
      {errors.passwordConfirmation && <p className='is-danger subtitle subtitle mt-1 mb-1 ml-0'>{errors.passwordConfirmation.message}</p>}
      <div className='field mb-4 mt-4'>
        <p className='control'>
          <button type='submit' className='button is-danger' id='submit'>Sign Up </button>
        </p>
      </div>
    </form>
  )
}

export default Register