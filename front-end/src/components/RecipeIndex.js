/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as QueryString from "query-string"

const RecipeIndex = () => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [difficulties, setDifficulties] = useState([])
  const [loading, setLoading] = useState(false)
  const props = useLocation()
  const history = useHistory()
  const params = QueryString.parse(props.search)
  const [query, setQuery] = useState(QueryString.parse(props.search))

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const { data } = await axios.get('/api/recipes')
      setRecipes(data)

      const difficultyArray = ['All']
      // const allergensArray  = ['All']
      for (let i = 0; i < data.length; i++) {
        // Add to difficulty array if no duplicate
        const difficultyLowerCase = difficultyArray.map(difficulty => difficulty.toLowerCase())
        if (!difficultyLowerCase.includes(data[i].difficulty.toLowerCase())) difficultyArray.push(data[i].difficulty[0].toUpperCase() + data[i].difficulty.slice(1).toLowerCase())
      }

      setDifficulties(difficultyArray)
      let filtered = null
      filtered = data.filter(recipe => {
        const allergenArrayLowerCase = recipe.allergens.map(allergen => allergen.toLowerCase())
        return (
          ((params.name ? recipe.name.toLowerCase().includes(params.name) : recipe))
          &&
          (params.course ? (recipe.course.toLowerCase().includes(params.course) || params.course === 'all') : recipe)
          &&
          (params.allergens ? (allergenArrayLowerCase.includes(params.allergens) || params.allergens === 'all') : recipe)
          &&
          (params.difficulty ? (recipe.difficulty.toLowerCase().includes(params.difficulty) || params.difficulty === 'all') : recipe)
          &&
          (params.rating ? (parseInt(recipe.averageRating) >= parseInt(params.rating)) : recipe)

        )
      })
      setFilteredRecipes(filtered)
      if (filtered) setLoading(false)
    }
    getData()
    
  }, [props])

  const getSearchLink = (event) => {
    const queryParams = QueryString.parse(props.search)
    if (event.target.id === 'difficulty-name-input') queryParams.difficulty = `${event.target.innerHTML.toLowerCase()}`
    if (event.target.id === 'rating-input') queryParams.rating = `${event.target.name}`
    if (event.target.parentElement.id === 'rating-input') queryParams.rating = `${event.target.parentElement.name}`
    if (event.target.id === 'remove-recipe-name' || event.target.parentElement.id === 'remove-recipe-name') delete queryParams.name
    if (event.target.id === 'remove-course-name' || event.target.parentElement.id === 'remove-course-name') delete queryParams.course
    if (event.target.id === 'remove-allergens-name' || event.target.parentElement.id === 'remove-allergens-name') delete queryParams.allergens
    if (event.target.id === 'remove-difficulty-name' || event.target.parentElement.id === 'remove-difficulty-name') delete queryParams.difficulty
    if (event.target.id === 'remove-rating-name' || event.target.parentElement.id === 'remove-rating-name') delete queryParams.rating
    if (event.target.id === 'difficulty-name-input' && event.target.innerText === 'All') delete queryParams.difficulty
    setQuery(queryParams)
  }

  useEffect(() => {
    history.push(`recipes?${QueryString.stringify(query)}`)
  }, [query])
  
  const handleBlur = async (event, name) => {
      const dropdown = document.querySelector(name)
      dropdown.classList.remove('is-active')
  
  }

  const handleDropdown = async (name) => {
    const dropdown = document.querySelector(name)
    dropdown.classList.toggle('is-active')
  }

  return (
    <>
      <section className="section" id="recipe-index">
        <div className="container">
          <div className="subtitle is-flex is-flex-direction-column is-align-items-start">
            <div className="filter-container">
              <div className="current-filter-links">
                <div className={params.name || params.course || params.allergens || params.difficulty || params.rating ? 'current-filter-title' : 'current-filter-title none'}>
                  <h3>{params.name || params.course || params.allergens || params.difficulty || params.rating ? 'Active Filters:' : 'Active Filters: None'}</h3>
                </div>
                <div className="current-filters">
                  {params.name && <div className="active-name-filter current-filter-container">Recipe Name: {params.name}<Link to={'/recipes'} id="remove-recipe-name" onClick={(event) => { getSearchLink(event) }}><i className="far fa-times-circle remove-filter-icon"></i></Link></div>}
                  {(params.course && params.course !== 'all') && <div className="active-course-filter current-filter-container">Course: {params.course}<Link to={'/recipes'} id="remove-course-name" onClick={(event) => { getSearchLink(event) }}><i className="far fa-times-circle remove-filter-icon"></i></Link></div>}
                  {(params.allergens && params.allergens !== 'all') && <div className="active-allergens-filter current-filter-container">Allergens: {params.allergens}<Link to={'/recipes'} id="remove-allergens-name" onClick={(event) => { getSearchLink(event) }}><i className="far fa-times-circle remove-filter-icon"></i></Link></div>}
                  {(params.difficulty && params.difficulty !== 'all') && <div className="active-difficulty-filter current-filter-container">Difficulty: {params.difficulty}<Link to={'/recipes'} id="remove-difficulty-name" onClick={(event) => { getSearchLink(event) }}><i className="far fa-times-circle remove-filter-icon"></i></Link></div>}
                  {params.rating && <div className="active-rating-filter current-filter-container">Min Rating: {params.rating}<Link to={'/recipes'} id="remove-rating-name" onClick={(event) => { getSearchLink(event) }}><i className="far fa-times-circle remove-filter-icon"></i></Link></div>}
                </div>

              </div>

              <div className="filter-buttons">
                <div className="dropdown dropdown-filter">
                  <div className="dropdown-trigger">
                    <button className="button filter" id="filterbtn" aria-haspopup="true" aria-controls="dropdown-menu" aria-pressed="false" onClick={() => handleDropdown('.dropdown-filter')} 
                  onBlur={(event) => handleBlur(event, '.dropdown-filter')}>
                      <span className="icon is-small">
                      <i class="fas fa-utensils" aria-hidden="true"> </i>
                        <span className="filterbtn">Difficulty</span>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      {difficulties.map(difficulty => {
                        return (
                          <button key={difficulty} onMouseDown={(event) => event.preventDefault()} onClick={(event) => getSearchLink(event)} id="difficulty-name-input" className="dropdown-item">{difficulty}</button>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-rating">
                  <div className="dropdown-trigger">
                    <button className="button rating" id="ratingbtn" onClick={() => handleDropdown('.dropdown-rating')} onBlur={(event) => handleBlur(event, '.dropdown-rating')} >
                      <span className="icon is-small">
                        <i className="fas fa-star fa-sm" aria-hidden="true"> </i>
                        <span className="ratingbtn">&nbsp;Minimum Rating</span>
                      </span>
                    </button>
                  </div>
                  <div className="rating-dropdown-menu dropdown-menu" id="rating-dropdown-menu" role="menu">
                    <div className="rating-dropdown-content dropdown-content">
                      <button onMouseDown={(event) => event.preventDefault()} onClick={(event) => getSearchLink(event)} id="rating-input" className="dropdown-item" name="1">
                        1 <i className="fas fa-star"></i>
                      </button>
                      <button onMouseDown={(event) => event.preventDefault()} onClick={(event) => getSearchLink(event)} id="rating-input" className="dropdown-item" name="2">
                        2 <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </button>
                      <button onMouseDown={(event) => event.preventDefault()} onClick={(event) => getSearchLink(event)} id="rating-input" className="dropdown-item" name="3">
                        3 <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </button>
                      <button onMouseDown={(event) => event.preventDefault()} onClick={(event) => getSearchLink(event)} id="rating-input" className="dropdown-item" name="4">
                        4 <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </button>
                      <button onMouseDown={(event) => event.preventDefault()} onClick={(event) => getSearchLink(event)} id="rating-input" className="dropdown-item" name="5">
                        5 <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="showing-count">
              <h3>Showing {filteredRecipes.length} of {recipes.length}</h3>
            </div>
          </div>
        </div>
        {filteredRecipes.length && !loading ? 
        <div className="container" id="index-cards">
          <div className="columns is-multiline is-flex recipe-index-columns is-flex-wrap-wrap">
            {filteredRecipes.map(recipe => {
              return (
                <RecipeCard key={recipe._id} {...recipe} />
              )
            })}
          </div>
        </div> 
        :
        <div className="container is-flex is-justify-content-center">
          <h3>{loading ? 'Loading...' : 'Please search again, no recipes match your conditions'}</h3>
        </div>
        }
        

      </section >
    </>
  )
}

export default RecipeIndex