import axios from 'axios'
import React, { useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getTokenFromLocalStorage } from './helpers/auth'





const AddandDeleteReview = () => {
  const { id } = useParams()
  const [error, setError] = useState(false)
  const history = useHistory()
  const [formData, setFormData] = useState({
    subject: '',
    comments: '',
    rating: 0
  })

  const handleChange = (event) => {
    console.log(event.target)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
    console.log(newFormData)
  }
  const handleRatingClick = (event) => {
    console.log(event)
    if (event.target.classList.contains('rating')) {
      const newFormData = { ...formData, [event.target.name]: event.target.value }
      setFormData(newFormData)
    } else if (event.target.parentElement.classList.contains('rating')) {
      const newFormData = { ...formData, [event.target.parentNode.attributes.name.value]: event.target.parentNode.attributes.value.value }
      setFormData(newFormData)
      console.log(newFormData)
    }

  }

  
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      
      console.log(formData)
      const { data } = await axios.post(`/api/recipes/${id}/reviews`, formData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      console.log(data)
      history.push(`/api/recipes/${id}`)
      
      console.log(id)
    } catch (err) {
      console.log(err.response)
      setError(true)
    }
  }
  // console.log('form data', formData)

  return (
    <section className="review">

      <form className="review column is-offset-one-third box" onSubmit={handleSubmit}>
        <div className="close-review-popup" >
          <Link to={`/recipes/${id}`}>
          <i className="far fa-times-circle"></i></Link>
        </div>

        <div className="form-field-container is-flex is-flex-direction-column is-align-items-center">
          <div className="title is-5 mb-5">Rate & Review</div>
          <input 
          className="input" 
          id="review-form" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          type="text" 
          placeholder="Title" />
          {error && <p className="is-danger subtitle mt-1 mb-1 ml-0 ">You need to put a title</p>}
          <br />

          <div class="field">
            <div class="control ">

              <textarea 
              className="textarea is-medium" 
              id="review-form"
              name="comments" 
              value={formData.comments} 
              onChange={handleChange} 
              placeholder="Type your comment here"></textarea>
              {error && <p className="is-danger subtitle mt-1 mb-1 ml-0">You need to put a comment</p>}
            </div>

          </div>

          <br />

          <div className="is-flex is-flex-direction-row">
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="1">
              <i className="fas fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="2">
              <i className="fas fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="3">
              <i className="fas fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="4">
              <i className="fas fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="5">
              <i className="fas fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>

          </div>
          <div className="is flex is-justify-content-flex-start">
          {error && <p className="is-danger subtitle mt-1 mb-1 ml-0">You need to choose a rating</p>}
          </div>
        </div>
        <br />
        <div>
          <input className="button is-danger has-text-white" id="submit-review" type="submit" value="Submit"></input>
        </div>
        <br />
      </form>
    </section>
  )
}

export default AddandDeleteReview