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
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {recipes.map(recipe => {
            return (
              <RecipeCard key={recipe._id} {...recipe}/>
            )
          })}
        </div>
      </div>

    </section>
    </>
  )
}

export default RecipeIndex