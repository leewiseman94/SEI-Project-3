import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Login = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  })
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/login', formData)
      history.push('/')
    } catch (err) {
      setError(true)
    }
  }
  const handleClick = () => {
    history.push('/')
  }

  return (
    <form className='column is-offset-one-third box mt-6' onSubmit={handleSubmit}>
    <div>
      <i className="far fa-window-close" onClick={handleClick}></i>
      <div className='subtitle' id='signuptext'> Login</div>
    </div>
    <hr/>
    <div className='title is-5 mb-5'>Welcome to Platester</div>
      <div className='field mb-0'>
      <p className='control'>
      <input className = 'input py-5' id='signupinput1'
      placeholder = 'Email'
      name='email'
      value={formData.email}
      onChange={handleChange} />
      </p>
      </div>
      {error && <p className='is-danger'>Your username or password are incorrect</p>}
      <div className='field mb-4'>
      <p className='control'>
      <input className = 'input py-5' id='signupinput2'
      placeholder = 'Password'
      name='password'
      value={formData.password}
      onChange={handleChange}/>
      </p>
      </div>
      {error && <p className='is-danger'>Your username or password are incorrect</p>}
      <div className='field mb-4'>
        <p className='control'>
          <button type='submit' className='button is-danger' id='submit'>Log in</button>
        </p>
      </div>
    </form>
  )
}


export default Login