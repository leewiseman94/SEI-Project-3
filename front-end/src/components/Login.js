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
  return (
    <form className='column is-half is-offset-one-quarter box' onSubmit={handleSubmit}>
    <i class="far fa-window-close"></i>
    <div className='field'>
      <label className='label'>Email</label>
      <div className='control'>
      <input className = 'input'
      placeholder = 'Email'
      name='email'
      value={formData.email}
      onChange={handleChange} />
      </div>
      {error && <p className='is-danger'>Your username or password are incorrect</p>}
      <label className='label'>Password</label>
      <div className='control'>
      <input className = 'input'
      placeholder = 'Password'
      name='password'
      value={formData.password}
      onChange={handleChange}/>
      </div>
      {error && <p className='is-danger'>Your username or password are incorrect</p>}
      <button type='submit'>Log in</button>
    </div>
    </form>
  )
}


export default Login