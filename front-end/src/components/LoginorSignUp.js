import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Register = () => {
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

  const handleClick = () => {
    history.push('/')
  }
  return (
    <form className='column is-offset-one-third box' onSubmit={handleSubmit} id='form'>
    <div>
      <i className="far fa-window-close" onClick={handleClick}></i>
      <div className='subtitle is-4' id='signuptext'> Login or Sign Up</div>
    </div>
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
      <button type='submit' className='button is-danger' id='submit'>Continue </button>
      </p>
      </div>
    </form>
  )

}

export default Register