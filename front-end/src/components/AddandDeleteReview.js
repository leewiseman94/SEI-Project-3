import axios from 'axios'
import React, { useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getTokenFromLocalStorage, userIsAuthenticated } from './helpers/auth'





const AddandDeleteReview = () => {
  let { id } = useParams()
  id = id.replace(' ', '')
  // const idArray = id.split('')
  // idArray.pop()
  // const newId = idArray.join('')
  const [error, setError] = useState({
    subject: '',
    comments: '',
    rating: '',
  })
  const [choseRating, setChoseRating] = useState(false)
  const history = useHistory()
  const [formData, setFormData] = useState({
    subject: '',
    comments: '',
    rating: '',
  })

  if (!userIsAuthenticated()) {
    history.push('/')
  }

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  const handleRatingClick = (event) => {
    if (event.target.classList.contains('rating')) {
      const newFormData = { ...formData, [event.target.name]: event.target.value }
      setFormData(newFormData)
    } else if (event.target.parentElement.classList.contains('rating')) {
      const newFormData = { ...formData, [event.target.parentNode.attributes.name.value]: event.target.parentNode.attributes.value.value }
      setFormData(newFormData)
    }
    setChoseRating(true)
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post(`/api/recipes/${id}/reviews`, formData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      history.push(`/recipes/${id}`)
      
    } catch (err) {
      console.log(err.response.data.errors)
      setError(err.response.data.errors)
    }
  }
  // console.log('form data', formData)

  return (
    <section id="review">

      <form className="review column is-offset-one-third box" onSubmit={handleSubmit}>
        <div className="close-review-popup" >
          <Link to={`/recipes/${id}`}>
          <i className="far fa-times-circle"></i></Link>
        </div>

        <div className="form-field-container is-flex is-flex-direction-column is-align-items-center">
          <div className="title is-5 mb-5">Rate & Review</div>
          <input 
          className={`input ${error["reviews.0.subject"] && 'is-danger' } `} 
          id="review-form" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          type="text" 
          placeholder="Title" />
          {error["reviews.0.subject"] && <p className="is-danger subtitle mt-1 mb-1 ml-0 ">You need to put a title</p>}
          <br />

          <div class="field">
            <div class="control ">

              <textarea 
              className={`textarea is-medium ${error["reviews.0.comments"] && 'is-danger' } `} 
              id="review-form"
              name="comments" 
              value={formData.comments} 
              onChange={handleChange} 
              placeholder="Type your comment here"></textarea>
              {error["reviews.0.comments"] && <p className="is-danger subtitle mt-1 mb-1 ml-0">You need to put a comment</p>}
            </div>

          </div>

          <br />

          <div className="is-flex is-flex-direction-row">
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="1">
              <i className="far fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="2">
              <i className="far fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="3">
              <i className="far fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="4">
              <i className="far fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>
            <div className="rating" id="rating-1" onClick={handleRatingClick} name="rating" value="5">
              <i className="far fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "yellow"}
                onMouseOut={({ target }) => target.style.color = "black"}></i>
            </div>
          {choseRating && <p className="title is-5 mt-1 mb-1 ml-0 pl-6">{formData.rating}</p>}
          </div>
          <div className="is flex is-justify-content-flex-start">
          {error["reviews.0.rating"] && <p className="is-danger subtitle mt-1 mb-1 ml-0">You need to choose a rating</p>}
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