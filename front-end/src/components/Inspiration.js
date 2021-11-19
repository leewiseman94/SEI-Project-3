import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'


const Inspiration = () => {
  const [courses, setCourses] = useState([])
  const [recipes, setRecipes] = useState([])
  const [index, setIndex] = useState()
  const history = useHistory()

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes`)
        setRecipes(data)
        coursesRefresh(data)
      } catch (err) {
        // setHasError(true)
        console.log(err)
      }
    }
    getData()
  }, [])

  const coursesRefresh = (recipes) => {
    const getCourses = recipes.filter(recipe => {
      return (
        recipe.course.toLowerCase() === 'starter' || recipe.course.toLowerCase() === 'main' || recipe.course.toLowerCase() === 'dessert'
      )

    })
    const newIndex = Math.floor(Math.random() * recipes.length)
    setIndex(newIndex)

    const newArray = []
    for (let i = newIndex; i < getCourses.length; i++) {
      let coursesOnly = false
      coursesOnly = (newArray.some(course => {
        return (course.course.toLowerCase() === (getCourses[i].course.toLowerCase()))
      }))
      if (!coursesOnly) newArray.push(getCourses[i])
    }
    setCourses(newArray)
  }

  const refreshInspo = () => {
    coursesRefresh(recipes)
  }

  console.log('courses ->', courses.length)
  
  return (
    <section className="section" id="inspiration-page">
      <div className="container courses-container" >
        
          {courses.length ? <div className="columns is-multiline courses-columns-multiline is-flex is-justify-content-center">
            { courses.map(recipe => {
            return (
              <>
                <div key={recipe._id} className="column is-one-third-tablet pl-4 pr-4 course-column-3 ">
                  <Link to={`/recipes/${recipe._id}`}>
                    <div className="card is-shadowless" id="courses-columns">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={recipe.image} alt={recipe.name} id="course-img"></img>
                        </figure>
                      </div>
                      <div className="card-header has-text-centered">
                        <div className="card-header-title has-text-white" id="home-course-headers">{`${recipe.course[0].toUpperCase()}${recipe.course.slice(1).toLowerCase()}`}</div>
                      </div>
                      <div className="card-header has-text-centered">
                        <div className="card-header-title subtitle is-6 has-text-white" id="">{recipe.name}</div>
                      </div>
                    </div>
                  </Link>
                </div>

              </>
            )
          })}
          
            <div>
            <button className="button is-danger has-text-white" id="refresh-btn" onClick={refreshInspo}><i class="fas fa-sync"></i>&nbsp;Refresh</button>
          </div>
          </div>
        
        :

        <div>
          <h2>Loading your meals...</h2>
        </div>
          }

      
    </div>
    </section >

  )
}

export default Inspiration