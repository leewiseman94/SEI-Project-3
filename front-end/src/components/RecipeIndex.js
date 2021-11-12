import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from './RecipeCard'


const RecipeIndex = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/recipes')
      setRecipes(data)
    }
    getData()
  }, [])
  // console.log('recipes on state ->', recipes)


  return (
    <>
      <section className="section" id="recipe-index">
        <div className="container">
          <div className="subtitle">
            Starter
            Main
            Dessert

            <div className="dropdown dropdown-filter">
              <div className="dropdown-trigger">
                <button className="button filter" id="filterbtn" aria-haspopup="true" aria-controls="dropdown-menu" aria-pressed="false" onClick={() => {
                const dropdown = document.querySelector('.dropdown-filter').classList.toggle('is-active')
                console.log(dropdown)
              }
            }>
                  <span className="icon is-small">
                    <i className="fas fa-filter fa-sm" aria-hidden="true"> </i>
                    <span className="filterbtn">Filter</span>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="/" className="dropdown-item">
                    Dairy-Free
                  </a>
                  <a href="/" className="dropdown-item">
                    Gluten Free
                  </a>
                  <a href="/" className="dropdown-item">
                    Vegan
                  </a>
                  <a href="/" className="dropdown-item">
                    Vegetarian
                  </a>                 
                  <a href="/" className="dropdown-item">
                    Rating
                  </a>                 
                </div>
              </div>
              
            </div>
          </div>
        </div>


      <div className="container" id="index-cards">
        <div className="columns is-multiline">
          {recipes.map(recipe => {
            return (
              <RecipeCard key={recipe._id} {...recipe} />
            )
          })}
        </div>
      </div>

    </section >
    </>
  )
}

export default RecipeIndex