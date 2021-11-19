import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Inspiration = () => {
  const [starters, setStarters] = useState([])
  const [main, setMain] = useState([])
  const [dessert, setDessert] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes`)
        getAllrecipes(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])



  const getAllrecipes =(data) => {
    const coursesStarterOnly = (data.filter(course => {
      return (course.course.toLowerCase() === 'starter')
    }))

    const coursesMainOnly = (data.filter(course => {
      return (course.course.toLowerCase() === 'main')
    }))

    const coursesDessertOnly = (data.filter(course => {
      return (course.course.toLowerCase() === 'dessert')
    }))

    setStarters(coursesStarterOnly)
    setMain(coursesMainOnly)
    setDessert(coursesDessertOnly)
    const newStarterIndex = Math.floor(Math.random() * coursesStarterOnly.length)
    const newMainIndex = Math.floor(Math.random() * coursesMainOnly.length)
    const newDessertIndex = Math.floor(Math.random() * coursesDessertOnly.length)
    setCourses([coursesStarterOnly[newStarterIndex], coursesMainOnly[newMainIndex], coursesDessertOnly[newDessertIndex]])
  }

  const refreshInspo = async() => {
    const newStarterIndex = Math.floor(Math.random() * starters.length)
    const newMainIndex = Math.floor(Math.random() * main.length)
    const newDessertIndex = Math.floor(Math.random() * dessert.length)
    setCourses([starters[newStarterIndex], main[newMainIndex], dessert[newDessertIndex]])
  }

  return (
    <section className="section" id="inspiration-page">
      <div className="container courses-container" >
        
          {starters.length ? <div className="columns is-multiline courses-columns-multiline is-flex is-justify-content-center">
            { courses.map(recipe => {
            return (
              <>
                <div key={recipe.name} className="column is-one-third-tablet pl-4 pr-4 course-column-3 ">
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
            <button className="button is-danger has-text-white" id="refresh-btn" onClick={refreshInspo}><i className="fas fa-sync"></i>&nbsp;Refresh</button>
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