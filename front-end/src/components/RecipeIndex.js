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

            <div className="dropdown is-active">
              <div className="dropdown-trigger">
                <button className="button" id="filterbtn" aria-haspopup="true">
                <span class="icon is-small">
                    <i class="fas fa-filter fa-sm"> </i>
                    <span className="filterbtn">Filter</span>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                  <a href="/" className="dropdown-item">
                    American
                    </a>
                  </div>
                
                  <a href="/" className="dropdown-item">
                    British
                  </a>
                </div>
              </div>
            </div>
          </div>
        

        {/* <div class="dropdown is-active">
              <div class="dropdown-trigger">
                <button class="button" id="filter-button" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span class="icon is-small">
                    <i class="fas fa-filter fa-sm"> </i>
                    <span className="filterbtn">Filter</span>
                  </span>
                </button>
              </div> */}

      
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