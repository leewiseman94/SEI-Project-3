/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import recipeMethod from '../assets/recipeMethod.PNG'
import cookingTime from '../assets/cookingTime.PNG'
import prepTime from '../assets/prepTime.PNG'
import ingredientsIMG from '../assets/ingredientsIMG.PNG'
import difficultyIMG from '../assets/difficultyIMG.PNG'
import servingSize from '../assets/servingSize.PNG'
import { getPayload } from './helpers/auth'
import { getTokenFromLocalStorage } from './helpers/auth'
import { userIsAuthenticated } from './helpers/auth'
import AddandDeleteReview from './AddandDeleteReview'


const RecipeShow = () => {
  const [recipe, setRecipe] = useState([])
  const [owner, setOwner] = useState([])
  const [deleteOptions, setDeleteOptions] = useState(false)
  let { id } = useParams()
  id = id.replace(' ', '')
  const history = useHistory()
  const [error, setError] = useState(false)
  const [liked, setLiked] = useState(false)
  const [addaReview, setAddAReview] = useState(false)
  const [rating, setRating] = useState()
  const [reviews, setReviews] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes/${id}`)
        setRecipe(data)
        setOwner(data.owner)
        recipeLiked(data)
        setReviews(data.reviews)
        setRating(data.averageRating)
        window.scrollTo(0, 0)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const userIsOwner = (currentUserId) => {
    const payload = getPayload()
    if (!payload) return false
    return currentUserId === payload.sub
  }

  const displayDelete = () => {
    setDeleteOptions(!deleteOptions)
  }

  const handleClose = () => {
    setDeleteOptions(false)
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/recipes/${id}`, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
      history.push('/recipes')
    } catch (err) {
      setError(true)
    }
  }
  const getUserData = async () => {
    try {
      const token = window.localStorage.getItem('token')
      if (!token) throw new Error()
      if (!userIsAuthenticated()) throw new Error()
      const header = { "Authorization": `Bearer ${token}` }
      const { data } = await axios.get('/api/profile', { headers: header })
      return data
    } catch (err) {
      console.log(err)
    }
  }

  const recipeLiked = async (data) => {
    const user = await getUserData()
    if (!user) return false
    if (!data.likedBy.includes(user._id)) {
      setLiked(false)
      return false
    }
    setLiked(true)
    return true
  }

  const likeRecipe = async (event) => {
    const user = await getUserData()
    try {
      const { data } = await axios.get(`/api/recipes/${id}`)
      if (event.target.classList.contains('liked') || event.target.parentElement.classList.contains('liked')) {
        const index = data.likedBy.indexOf(user._id)
        data.likedBy.splice(index, 1)
      } else {
        if (data.likedBy) data.likedBy = [...data.likedBy, user._id]
        if (!data.likedBy) data.likedBy = [user._id]
      }

      if (!data) throw new Error()
      const token = window.localStorage.getItem('token')
      if (!token) throw new Error()
      if (!userIsAuthenticated()) throw new Error()
      const header = { "Authorization": `Bearer ${token}` }
      const response = await axios.put(`/api/recipes/${id}`, data, { headers: header })
      if (!response) throw new Error()
      setLiked(!liked)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteReview = async(reviewId, review) => {
  
    try {
      
      await axios.delete(`/api/recipes/${id}/reviews/${reviewId}`, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      const index = reviews.indexOf(review)
      const newReviewsArray = [...reviews.splice(index, 1)]
      setReviews([...reviews])
      history.push(`/recipes/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  const addReview = () => {
    setAddAReview(!addaReview)
  }

  return (

    <>
        
      <section className="section pt-0" id="recipe-show">
      <nav className="breadcrumb" aria-label="breadcrumbs" id="master-breadcrumb">
        <ul>
          <li><a href="/recipes" className="has-text-grey">Recipes&nbsp;&nbsp;&nbsp;</a></li>
          <li class="is-active"><a href={`/recipes/${recipe.name}`} className="has-text-grey" aria-current="page">{recipe.name}</a></li>
        </ul>
      </nav>
        <div className="container">
          <section className="section recipe-subtitle is-flex-direction-column">
            <div>
              <h2 className="title has-text-grey" id="recipe-title">{recipe.name}</h2>
              <div className="container show-links">
                <h6 className="show-rating" id="recipe-show-rating"><i className="fas fa-utensils"></i>&nbsp;{recipe.course} · {recipe.difficulty} · <i className="far fa-star"></i>Rating: {rating} </h6>
                <div className="save-share">
                  <Link to="/share" className={`${liked ? 'liked' : ''} show-share-button`}>
                    <i className="far fa-share-square"></i>Share
                  </Link>
                  {userIsAuthenticated() &&
                    <div onClick={(event) => likeRecipe(event)} className={`${liked ? 'liked' : ''} show-like-button`}>
                      <i className="far fa-heart" id="show-heart-icon"></i>{liked ? 'Saved' : 'Save'}
                    </div>
                  }
                </div>
              </div>
              <div className="edit-delete-container">
                {userIsOwner(owner._id) &&
                  <>
                    <hr />
                    <div className="field is-grouped is-flex is-justify-content-center is-align-items-center	">
                      <p className='control'>
                    <Link to={`/recipes/${id}/edit`}><button id="edit-button" className='button is-danger pl-6 pr-6'>Edit Recipe</button></Link>
                    </p>
                    <br />
                    <p className='control'>
                    <button className='button is-danger pl-6 pr-6' id="delete-button" onClick={displayDelete}>Delete Recipe</button>
                    </p>
                    </div>
                    {deleteOptions &&
                      <div className='is-flex is-align-items-center mt-4 is-flex-direction-column'>
                        <div className='subtitle is-5 pt-5'>Are you Sure you want to delete your recipe?</div>
                        <div className='field is-grouped is-justify-content-center '>
                          <p className='control'>
                            <button className='button is-danger pl-6 pr-6' onClick={handleDelete}>Yes</button>
                          </p>
                          <p className='control'>
                            <button className='button is-danger pl-6 pr-6' onClick={handleClose}>No</button>
                          </p>
                          {error && <p className='is-danger'>Something went wrong</p>}
                        </div>
                      </div>

                    }
                    <hr />
                  </>
                }
              </div>

            </div>

          </section>

          <div className="columns">
            <div className="column is-half" id='recipeImage'>
              <figure className="image" >
                <img className="image" id="" src={recipe.image} alt={recipe.name}></img>
              </figure>

            </div>
            <div className="column is-half" id="recipe-show-method-half">
              <p className="desc">{recipe.description}</p>
              <hr />
              <div className="recipe-info">
                <img src={recipeMethod} className="method-icon" alt="method-icon" width="40px"></img>
                <h4 className="method-title">Method</h4>

              </div>

              <div className="recipe-steps">
                <hr />
                {recipe.method &&
                  recipe.method.map((step, index) => {
                    return (
                      <>
                        <h6 className="steps" key={index}>Step {index + 1}</h6>
                        <p>{step}</p>
                        <br />
                      </>
                    )

                  })}

              </div>
              <br />
              <div className="container nutrition-info ">
                <div className="info is-flex">
                  <div className="info" id='nutritionalcard'>
                    {recipe.nutritionalInfo &&
                      recipe.nutritionalInfo.map((nutritionalInfo) => {
                        return (
                          <>
                            <div className="card nutritional p-3 mb-3" >
                              
                                <p className="nutri-p">{nutritionalInfo}</p>
                              
                            </div>
                            <br />
                          </>
                        )

                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container recipe-info" >


            <div className="columns" id="icon-info-bar">

              <div className="column is-one-quarter" id="icon-info">

                <hr />
                <div className="icon-info-space">
                  <div className="info-icons">
                    <img src={prepTime} className="method-icon" alt="method-icon" width="40px"></img>
                    <h4 className="title-prep is-6">Prep Time</h4>
                  </div>
                  <div className="extra-info">
                    <p className="subtitle method">{recipe.prepTime}</p>
                  </div>

                </div>


                <div>
                  <div className="info-icons">
                    <img src={cookingTime} className="method-icon" alt="method-icon" width="40px"></img>
                    <h4 className="title-prep is-6">Cook Time</h4>
                  </div>
                  <div className="extra-info">
                    <p className="subtitle method">{recipe.cookingTime}</p>
                  </div>
                </div>
                <hr />
              </div>


              <div className="column is-one-quarter" id="icon-info2">

                <hr />
                <div className="icon-info-space" id="diff-icons">
                  <div className="info-icons">
                    <img src={difficultyIMG} className="method-icon" alt="method-icon" width="40px"></img>
                    <h4 className="title-prep is-6">Difficulty</h4>
                  </div>
                  <div className="extra-info">
                    <p className="subtitle method">{recipe.difficulty}</p>
                  </div>
                </div>

                <div className="serving-icon">
                  <div className="info-icons">
                    <img src={servingSize} className="method-icon" alt="method-icon" width="40px"></img>
                    <h4 className="title-prep is-6">Serves</h4>
                  </div>
                  <div className="extra-info">
                    <p className="subtitle method">{recipe.servingSize}</p>
                  </div>
                </div>
                <hr />
              </div>

              <div className="column is-half" id="ingredients-container">
                <br />

                <div className="card" id="ingredients-list">
                  <div className="card-content">
                    <div className="content">
                      <div className="buttons recipe-info">
                        <button className="button is-danger" id="ingredients-button" onClick={() => setVisible(!visible)}>
                          <img src={ingredientsIMG} className="method-icon" alt="method-icon" width="40px"></img>
                          <h5 className="method-title has-text-white">Ingredients</h5>
                        </button>

                      </div>
                      <br />

                      {visible &&
                        recipe.ingredients &&
                        recipe.ingredients.map((ingredients) => {
                          return (
                            <>
                              <p key={ingredients}>{ingredients}</p>
                            </>
                          )

                        })}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <section className="is-flex is-flex-direction-column">
            <div className="is-flex " id="review-section">
              <div className="button-container">

                {/* <Link to={`/recipes/${id}/reviews`}><button className="button is-danger has-text-white" id="click-review" onClick={addReview}>Leave a review</button></Link> */}
                {userIsAuthenticated() && <button className="button is-danger has-text-white" id="click-review" onClick={addReview}>Leave a review</button>}
              </div>
              <div className="is-flex is-flex-direction-column">
                <div>
                  <h4 className="title is-5">Overall rating</h4>
                </div>
                <br/>
                <div className="is-flex is-align-self-center">
                  <p className="has-text-grey"><i className="fas fa-star"></i>&nbsp;{rating}</p>
                </div>
              </div>
            </div>
            <hr />

            {addaReview && <AddandDeleteReview id={id} setAddAReview= {setAddAReview} addaReview={addaReview} setReviews={setReviews} setRating={setRating}/>}


              <div className="column is-full">
                <div className="is-flex is-flex-direction-column" id="users-review-section">

                  {reviews &&
                reviews.map((review) => {
                  if (userIsOwner(review.owner)) {
                    return (
                      <>

                        <div className="is-flex">
                            <div className="user-icon-review">
                              <i className="fas fa-user fa-2x" id="user-icon-review"></i>
                              <h4>{ }</h4>
                            </div>
                            <div className="review-content">
                              <h3 key={review._id} className="title is-5 has-text-grey">{review.subject}</h3>
                              <p className="has-text-grey">{review.comments}</p>
                            </div>
                            
                            {/* <p className="has-text-grey subtitle is-7">{review.createdAt}</p> */}
                            
                          </div>
                          <div className="is-flex is-justify-content-flex-end">
                        <button className='button' id="delete-review-button"onClick={() => deleteReview(review._id, review)}>Delete</button>
                        </div>
                          <hr />
                        <br />

                      </>
                    )
                  }
                
                    return (
                      <>
                        <div className="is-flex">
                            <div className="user-icon-review">
                              <i className="fas fa-user fa-2x" id="user-icon-review"></i>
                              <h4>{ }</h4>
                            </div>
                            <div className="review-content">
                              <h3 key={review._id} className="title is-5 has-text-grey">{review.subject}</h3>
                              <p className="has-text-grey">{review.comments}</p>
                            </div>
                            {/* <div> */}
                            {/* <p className="has-text-grey subtitle is-7">{review.createdAt}</p> */}
                            {/* </div> */}
                          </div>
                          <hr />
                      </>
                    )

                })}

                </div>
              </div>
            {/* </div> */}
          </section>



        </div>
      </section >
    </>
  )
}

export default RecipeShow