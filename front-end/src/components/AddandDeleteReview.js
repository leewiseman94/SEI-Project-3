/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getTokenFromLocalStorage, userIsAuthenticated } from './helpers/auth'





const AddandDeleteReview = ({ id, setAddAReview, setReviews, setRating }) => {
  id = id.replace(' ', '')
  const [error, setError] = useState(false)
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
      await axios.post(`/api/recipes/${id}/reviews`, formData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      history.push(`/recipes/${id}`)
      const { data } = await axios.get(`/api/recipes/${id}`)
      setAddAReview(false)
      setReviews(data.reviews)
      setRating(data.averageRating)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="column is-full" id='leaveareview'>
                <div className="is-flex is-flex-direction-column" id="users-review-section">
                  <div className="is-flex is-flex-direction-column">
                    <div className="user-icon-review">
                      <i className="fas fa-user fa-2x" id="user-icon-review"></i>
                    </div>
                    <br/>
                  <div className="review-content">
                    <h3 className="title is-5">Rate & Review</h3>
                    <input 
                      className={`input ${error && formData.subject === '' && 'is-focused' } `} 
                      id="review-form" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      type="text" 
                      placeholder="Title" />
                      {/* {error["reviews.0.subject"] && <p className="is-danger subtitle mt-1 mb-1 ml-0 ">You need to put a title</p>}                            </div> */}
                      {error && formData.subject === '' && <p className="is-danger subtitle mt-1 mb-1 ml-0 ">You need to put a title</p>}                            </div>
                      <br />

                      <textarea 
                        className={`textarea ${error && formData.comments === '' && 'is-focused' } `} 
                        id="review-form"
                        name="comments" 
                        value={formData.comments} 
                        onChange={handleChange} 
                        placeholder="Type your comment here"></textarea>
                        {/* {error["reviews.0.comments"] && <p className="is-danger subtitle mt-1 mb-1 ml-0">You need to put a comment</p>} */}
                        {error && formData.comments === '' && <p className="is-danger subtitle mt-1 mb-1 ml-0">You need to put a comment</p>}
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
                          {choseRating && <p className="title is-5 mt-1 mb-1 ml-0 pl-6">{formData.rating}</p>}
                        </div>
                          <div className="is flex is-justify-content-flex-start">
                            {/* {error["reviews.0.rating"] && <p className="is-danger subtitle mt-1 mb-1 ml-0">You need to choose a rating</p>} */}
                            {error && formData.rating === '' && <p className="is-danger subtitle mt-1 mb-1 ml-0">You need to choose a rating</p>}
                          </div>
                        </div>
                        <br />
                        <div>
                          <input className="button is-danger has-text-white" id="submit-review" type="submit" value="Submit"></input>
                        </div>
                        <br />
                        <hr />
                        <br />
                    </div>
                  </div>
                  </form>
  )
}

export default AddandDeleteReview