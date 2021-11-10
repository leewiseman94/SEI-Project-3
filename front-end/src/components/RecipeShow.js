import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <section className="section">
      <div className="container">
        <div>
          <h2 className="title">{recipe.name}</h2>
          <h6 className="show-rating">Rating: {recipe.averageRating}</h6>
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
              <h4 className="method-title">Method</h4>
              <div className="recipe-steps">
              <h6 className="steps">Step 1</h6>
           
            </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default RecipeShow