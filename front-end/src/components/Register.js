import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


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
      console.log(err.response.data.errors.passwordConfirmation.message)
      setErrors(err.response.data.errors)
    }

  }
  return (
    <form className='column is-half is-offset-one-quarter box' onSubmit={handleSubmit}>
      <i class="far fa-window-close"></i>
    <div className='title'> Login or Sign Up</div>
    <div className='subtitle'>Welcome to Platester</div>
    <div className='field'>
      <label className='label'>Full Name</label>
      <div className='control'>
      <input className = 'input'
      placeholder = 'Full Name'
      name='fullName'
      value={formData.fullName}
      onChange={handleChange} />
      </div>
      <label className='label'>Username</label>
      <div className='control'>
      <input className = 'input'
      placeholder = 'Username'
      name='username'
      value={formData.username}
      onChange={handleChange} />
      </div>
      {errors.username && <p className='is-danger'>Username must be unique </p>}
      <label className='label'>Email</label>
      <div className='control'>
      <input className = 'input'
      placeholder = 'Email'
      name='email'
      value={formData.email}
      onChange={handleChange} />
      </div>
      {errors.email && <p className='is-danger'>Email must be unique</p>}
      <label className='label'>Password</label>
      <div className='control'>
      <input className = 'input'
      placeholder = 'Password'
      name='password'
      value={formData.password}
      onChange={handleChange}/>
      </div>
      {errors.password && <p className='is-danger'>{errors.password}</p>}
      <label className='label'>Password Confirmation</label>
      <div className='control'>
      <input className = 'input'
      placeholder = 'Password Confirmation'
      name='passwordConfirmation'
      value={formData.passwordConfirmation}
      onChange={handleChange} />
      </div>
      {errors.passwordConfirmation && <p className='is-danger'>{errors.passwordConfirmation.message}</p>}
      <button type='submit'>Submit</button>
    </div>
    </form>
  )

}

export default Register