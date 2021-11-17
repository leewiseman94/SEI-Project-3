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

const RecipeShow = ({ ingredients }) => {
  const [recipe, setRecipe] = useState([])
  const [owner, setOwner] = useState([])
  const [deleteOptions, setDeleteOptions] = useState(false)
  let { id } = useParams()
  id = id.replace(' ', '')
  const history = useHistory()
  const [error, setError] = useState(false)
  const [liked, setLiked] = useState(false)
  const [reviews, setReviews] = useState([])
  // console.log('ID', id)

  // window.scrollTo(0, 0)

  const [visible, setVisible] = useState(false)

  // console.log('ID', id)
  // window.scrollTo(0, 0)  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes/${id}`)
        setRecipe(data)
        setOwner(data.owner)
        recipeLiked(data)
        setReviews(data.reviews)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const userIsOwner = (currentUserId) => {
    const payload = getPayload()
    // console.log('PAYLOAD',payload.sub)
    // console.log(currentUserId)
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

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
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
        if (data.likedBy) data.likedBy = [ ...data.likedBy, user._id ]
        if(!data.likedBy) data.likedBy = [user._id]
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
      console.log(reviewId)
      console.log(review)
      console.log(index)
      const newReviewsArray = [...reviews.splice(index, 1)]
      setReviews([...reviews])
      history.push(`/recipes/${id}`)
    } catch (err) {
      console.log(err)
    }
  }


  return (

    <>
        
      <section className="section" id="recipe-show">
      <nav className="breadcrumb pl-6" aria-label="breadcrumbs" id="master-breadcrumb">
        <ul>
          <li><a href="/recipes">Recipes</a></li>
          <li class="is-active"><a href={`/recipes/${recipe.name}`} aria-current="page">{recipe.name}</a></li>
        </ul>
      </nav>
        <div className="container">
          <section className="section recipe-subtitle">
            <div>
              <h2 className="title" id="recipe-title">{recipe.name}</h2>
              <div className="container show-links">
                <h6 className="show-rating" id="recipe-show-rating"><i className="fas fa-utensils"></i>&nbsp;{recipe.course} · {recipe.difficulty} · <i className="far fa-star"></i>Rating: {recipe.averageRating} </h6>
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
              <div >
                {userIsOwner(owner._id) &&
                  <>
                    <hr />
                    <div className="field is-grouped is-flex is-justify-content-center is-align-items-center	">
                      <p className='control'>
                    <Link to={`/recipes/${id}/edit`}><button className='button is-danger pl-6 pr-6'>Edit Recipe</button></Link>
                    </p>
                    <br />
                    <p className='control'>
                    <button className='button is-danger pl-6 pr-6' onClick={displayDelete}>Delete Recipe</button>
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
            <div className="column is-half">
              <figure className="image" >
                <img className="image" src={recipe.image} alt={recipe.name}></img>
              </figure>

            </div>
            <div className="column is-half">
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
              <div className="container nutrition-info is-flex-wrap-wrap">
                <div className="info is-flex justify-content-space-evenly">
                  <div className="info is-flex is-flex-direction-row ">
                    {recipe.nutritionalInfo &&
                      recipe.nutritionalInfo.map((nutritionalInfo) => {
                        return (
                          <>
                            <div className="card nutritional" >
                              <div className="card-content" id="nutri-info">
                                <p className="nutri-p">{nutritionalInfo}</p>
                              </div>
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

          <div className="container recipe-info">


            <div className="columns">

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
                <div className="icon-info-space">
                  <div className="info-icons">
                    <img src={difficultyIMG} className="method-icon" alt="method-icon" width="40px"></img>
                    <h4 className="title-prep is-6">Difficulty</h4>
                  </div>
                  <div className="extra-info">
                    <p className="subtitle method">{recipe.difficulty}</p>
                  </div>
                </div>

                <div>
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

              <div className="column is-half">
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
                              <p>{ingredients}</p>
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

            <div className="button-container">
              {userIsAuthenticated() &&
                <Link to={`/recipes/${id}/reviews`}><button className="button is-danger has-text-white mb-6" id="click-review">Leave a review</button></Link>}
            </div>



            <div className="columns">
              <div className="column is-full">
                <div>
                

                  {reviews &&
                reviews.map((review) => {
                  if (userIsOwner(review.owner)) {
                    return (
                      <>
                        <p key={review._id} className='title is-5  ml-4'>{review.subject}</p>
                        <p className='subtitle is-5 mt-3 mb-2  ml-4'>{review.comments}</p>
                        <p className='mb-3  ml-3'> <i className="far fa-star"></i>{review.rating}</p>
                        <button className='button' onClick={() => deleteReview(review._id, review)}>Delete</button>
                        <br />
                      </>
                    )
                  }
                    return (
                      <>
                        <p key={review._id} className='title is-5  ml-4'>{review.subject}</p>
                        <p className='subtitle is-5 mt-3 mb-2  ml-4'>{review.comments}</p>
                        <p className='mb-3  ml-3'> <i className="far fa-star"></i>{review.rating}</p>
                        <br />
                      </>
                    )

                  })}

                </div>
              </div>
            </div>
          </section>



        </div>

      </section >
    </>
  )
}

export default RecipeShow