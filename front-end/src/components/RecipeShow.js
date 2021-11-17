import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import recipeMethod from '../assets/recipeMethod.PNG'
import cookingTime from '../assets/cookingTime.PNG'
import prepTime from '../assets/prepTime.PNG'
import ingredientsIMG from '../assets/ingredientsIMG.PNG'
import { getPayload } from './helpers/auth'

const RecipeShow = () => {
  const [recipe, setRecipe] = useState([])
  const [owner, setOwner] = useState([])
  const { id } = useParams()
  // console.log('ID', id)

  window.scrollTo(0,0)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes/${id}`)
        setRecipe(data)
        setOwner(data.owner)
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


  return (


    <section className="section" id="recipe-show">
      <div className="container">
        <section className="section recipe-subtitle">
          <div>
            <h2 className="title" id="recipe-title">{recipe.name}</h2>
            <div className="container show-links">
              <h6 className="show-rating" id="recipe-show-rating"><i className="fas fa-utensils"></i>&nbsp;{recipe.course} · {recipe.difficulty} · <i className="far fa-star"></i>Rating: {recipe.averageRating} </h6>
              <div className="save-share">
                <div className="share">
                  <Link className="has-text-black" to="/share"><h6><i className="far fa-share-square"></i>Share</h6></Link>
                </div>
                <div className="save">
                  <h6><i className="far fa-heart"></i>Save</h6>
                </div>
              </div>
            </div>
            {userIsOwner(owner._id) &&
            <>
            <hr/>
              <Link to={`/recipes/${id}/edit`}><button className='button is-danger'>Edit Recipe</button></Link>
              <br/>
              <Link to={`/recipes/${id}/delete`}><button className='button is-danger'>Delete Recipe</button></Link>
              <hr/>
              </>
              }

          </div>

        </section>

        <div className="columns">
          <div className="column is-half">
            <figure className="image">
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
                      <h6 className="steps">Step {index + 1}</h6>
                      <p>{step}</p>
                      <br />
                    </>
                  )

                })}

            </div>
            <br />
            <div className="container nutrition-info">
              <div className="info is-flex justify-content-space-evenly">
                <div className="info is-flex is-flex-direction-row">
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

            <div className="column" id="icon-info">
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


            <div className="column" id="icon-info2">
              <hr />
              <div className="icon-info-space">
                <div className="info-icons">
                  <img src={cookingTime} className="method-icon" alt="method-icon" width="40px"></img>
                  <h4 className="title-prep is-6">Difficulty</h4>
                </div>
                <div className="extra-info">
                  <p className="subtitle method">{recipe.difficulty}</p>
                </div>
              </div>

              <div>
                <div className="info-icons">
                  <img src={cookingTime} className="method-icon" alt="method-icon" width="40px"></img>
                  <h4 className="title-prep is-6">Serves</h4>
                </div>
                <div className="extra-info">
                  <p className="subtitle method">{recipe.servingSize}</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="column is-one-half">
              <div className="card" id="ingredients-list">
                <div className="card-content">
                  <div className="content">
                    <div className="buttons recipe-info">
                      <button class="button is-danger" id="ingredients-button" >
                        <img src={ingredientsIMG} className="method-icon" alt="method-icon" width="40px"></img>
                        <h5 className="method-title has-text-white">Ingredients</h5>
                      </button>

                    </div>
                    <br />
                    {recipe.ingredients &&
                      recipe.ingredients.map((ingredients) => {
                        return (
                          <>
                            <p style={{ display: { ingredients } ? "none" : "block" }}>{ingredients}</p>
                            <br />
                          </>
                        )

                      })}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <section className="is-flex">
          <div className="button-container">
            <Link to={`/recipes/${id}/reviews`}><button className="button is-danger has-text-white" id="click-review">Leave a review</button></Link>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column is-full">
                <h3>{recipe.name}</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column is-full">
                <h3>{recipe.review}</h3>
              </div>
            </div>


          </div>
        </section>



      </div>

    </section >

  )
}

export default RecipeShow