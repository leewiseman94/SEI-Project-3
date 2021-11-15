import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as QueryString from "query-string"

const RecipeIndex = () => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [difficulties, setDifficulties] = useState([])
  const [difficultySearch, setDifficultySearch] = useState('')
  

  const props = useLocation()
  const history = useHistory()
  const params = QueryString.parse(props.search)
  
  const [query, setQuery] = useState(QueryString.parse(props.search))

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/recipes')
      setRecipes(data)

      const difficultyArray = ['All']
      // const allergensArray  = ['All']
      for(let i = 0; i < data.length; i++) {
        // Add to difficulty array if no duplicate
        const difficultyLowerCase = difficultyArray.map(difficulty => difficulty.toLowerCase())
        if (!difficultyLowerCase.includes(data[i].difficulty.toLowerCase())) difficultyArray.push(data[i].difficulty)
      }

      setDifficulties(difficultyArray)

      const filtered = data.filter(recipe => {
        const allergenArrayLowerCase = recipe.allergens.map(allergen => allergen.toLowerCase())
        return (
          ((params.name ? recipe.name.toLowerCase().includes(params.name) : recipe))
          &&
          (params.course ? (recipe.course.toLowerCase().includes(params.course) || params.course === 'all') : recipe)
          && 
          (params.allergens ? (allergenArrayLowerCase.includes(params.allergens) || params.allergens === 'all') : recipe)
          && 
          (params.difficulty ? (recipe.difficulty.toLowerCase().includes(params.difficulty) || params.difficulty === 'all') : recipe)
        )
      })
      console.log(filtered)
      setFilteredRecipes(filtered)
    }
    getData()
  }, [props])
  // console.log('recipes on state ->', recipes)

  const getSearchLink = (event) => {
    console.log(event.target.name)
    const queryParams = QueryString.parse(props.search)
    queryParams.difficulty = `${event.target.innerHTML.toLowerCase()}`
    setQuery(queryParams)
  }

  useEffect(() => {
    history.push(`recipes?${QueryString.stringify(query)}`)
  }, [query])

  return (
    <>
      <section className="section" id="recipe-index">
        <div className="container">
          <div className="subtitle">
            <div className="index-links">
            <Link to="/recipes/starters" className="has-text-grey">Starter</Link>&nbsp;
            <Link to="/recipes/mains" className="has-text-grey">Main</Link>&nbsp;
            <Link to="/recipes/desserts" className="has-text-grey">Dessert</Link>
            </div>

            <div className="dropdown dropdown-filter">
              <div className="dropdown-trigger">
                <button className="button filter" id="filterbtn" aria-haspopup="true" aria-controls="dropdown-menu" aria-pressed="false" onClick={() => {
                const dropdown = document.querySelector('.dropdown-filter').classList.toggle('is-active')
                console.log(dropdown)
              }
            }>
                  <span className="icon is-small">
                    <i className="fas fa-filter fa-sm" aria-hidden="true"> </i>
                    <span className="filterbtn">Difficulty</span>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  {difficulties.map(difficulty => {
                    return (
                      <Link to={`/recipes`} onClick={(event) => getSearchLink(event)} id="diffulty-name-input" className="dropdown-item" name={difficulty}>{difficulty}</Link>
                      // <Link to={`/recipes${props.search + '&difficulty=' + difficulty.toLowerCase()}`} onClick={(event) => getSearchLink(event)} id="diffulty-name-input" className="dropdown-item">{difficulty}</Link>
                    )
                  })}              
                </div>
              </div>
              
            </div>
          </div>
        </div>


      <div className="container" id="index-cards">
        <div className="columns is-multiline">
          {filteredRecipes.map(recipe => {
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