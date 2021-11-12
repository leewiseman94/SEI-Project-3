import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import recipeMethod from '../assets/recipeMethod.PNG'


const RecipeShow = () => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()
  // console.log('ID', id)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes/${id}`)
        setRecipe(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  console.log('RECIPE ON STATE', recipe)

  return (
    <section className="section" id="recipe-show">
      <div className="container">
        <section className="section recipe-subtitle">
          <div>
            <h2 className="title" id="recipe-title">{recipe.name}</h2>
            <div className="container show-links">
              <h6 className="show-rating" id="recipe-show-rating">{recipe.course} · {recipe.difficulty} · Rating: {recipe.averageRating} </h6>
            <div className="save-share">
              <div className="share">
              <Link className="has-text-black" to="/share"><h6><i className="far fa-share-square"></i>Share</h6></Link>
              </div>
              <div className="save">
              <h6><i className="far fa-heart"></i>Save</h6>
              </div>
            </div>
          </div>
          </div>
          
          </section>
          {/* <h6 className="show-rating"><div class="rating">
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div></h6> */}
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img className="image" src={recipe.image} alt={recipe.name}></img>
              </figure>
              
            </div>
            <div className="column is-half">
              <p className="desc">{recipe.description}</p>
              <hr/>
              <div className="recipe-info">
              <img src={recipeMethod} className="method-icon" alt="method-icon" width="40px"></img>
              <h4 className="method-title">Method</h4>
              
              </div>

                <div className="recipe-steps">
                  <hr/>
                  {recipe.method && 
                  recipe.method.map((step, index) => {
                    return (
                      <>
                      <h6 className="steps">Step {index + 1}</h6>
                      <p>{step}</p>
                      <br/>
                      </>
                    )
                  
                  })}
                  
                </div>
              </div>
            </div>

            <div className="container recipe-info">
              
              
              <div className="columns">
                <h4 className="title-prep is-6">Prep Time</h4>
                <div className="column is-one-quarter">                     
                  <p className="extra-info">{recipe.prepTime}</p>                      
                </div>
              </div>
              
              <div className="columns">
                <h4 className="title-prep is-6">Cook Time</h4>
                <div className="column is-one-quarter">                     
                  <p className="extra-info">{recipe.cookingTime}</p>                      
                </div>
              </div>
              <div className="columns">
                <h4 className="title-prep is-6">Difficulty</h4>
                <div className="column is-one-quarter">                     
                  <p className="extra-info">{recipe.difficulty}</p>                      
                </div>
              </div>
              <div className="columns">
                <h4 className="title-prep is-6">Serves</h4>
                <div className="column is-one-quarter">                     
                  <p className="extra-info">{recipe.servingSize}</p>                      
                </div>
              </div>


              
            </div>
          
        </div>
      
    </section>
  )
}

export default RecipeShow