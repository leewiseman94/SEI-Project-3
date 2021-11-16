import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const AddandDeleteReview = () => {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    subject: '',
    comment: '',
    rating: 0
  })

  const handleChange = (event) => {
    console.log(event.target)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
    console.log(newFormData)
  }
  const handleRatingClick = (event) => {
    console.log(event.target)
    if (event.target.classList.contains('rating')) {
      const newFormData = { ...formData, [event.target.name]: event.target.value }
      setFormData(newFormData)
      console.log(newFormData)
    } else if (event.target.parentElement.classList.contains('rating')) {
      console.log(event.target.parentNode.name)
      const newFormData = { ...formData, [event.target.parentElement.name]: event.target.parentElement.value }
      setFormData(newFormData)
      console.log(newFormData)
    }
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post(`/api/recipes/${id}/reviews`)

    } catch (err) {
      console.log(err)
    }
  }


  return (
    <section className="review">

      <form className="review column is-offset-one-third box" onSubmit={handleSubmit}>
        <div className="close-review-popup" >
          <i className="far fa-times-circle"></i>
        </div>

        <div className="form-field-container is-flex is-flex-direction-column is-align-items-center">
          <div className="title is-5 mb-5">Rate & Review</div>
          <input className="input" id="review-form" name="subject" onChange={handleChange} type="text" placeholder="Title" />
          <br />

          <div class="field">
            <div class="control">

              <textarea className="textarea is-medium" name="comment" onChange={handleChange} placeholder="Type your comment here"></textarea>

            </div>
          </div>

          <br />

          <div className="is-flex is-flex-direction-row">
            <div className="rating" onClick={handleRatingClick} name="rating" value="1">

              <i className="far fa-star fa-2x" onMouseOver={({ target }) => target.style.color = "black"}
                onMouseOut={({ target }) => target.style.color = "yellow"}></i>

            </div>
            <div>
              <i className="far fa-star fa-2x"></i>
            </div>
            <div>
              <i className="far fa-star fa-2x"></i>
            </div>
            <div>
              <i className="far fa-star fa-2x"></i>
            </div>
            <div>
              <i className="far fa-star fa-2x"></i>
            </div>
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