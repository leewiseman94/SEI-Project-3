import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import bulmaCarousel from 'bulma-carousel'


const Home = () => {  
  const [courses, setCourses] = useState([])
  const [recipe, setRecipe] = useState({})
  // const { id } = useParams()
  
  // console.log('ID', id)
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes/`)
        setRecipe(data)
        const getCourses = data.map(recipe => {
          return(recipe.course.toLowerCase()) 
        }) 
        const newArray = []
        for(let i = 0; i<getCourses.length; i++){
          if (!newArray.includes(getCourses[i])) newArray.push(getCourses[i])
        }

        setCourses(newArray)
        
      } catch (err) {
        // setHasError(true)
        console.log(err)
      
    }
    
  }
  getData()

}, [])

// console.log('RECIPE ON STATE', recipe)
  
  console.log('courses', courses)
  return (
    <>
      <section className="hero is-medium" id="hero">
          <h1>PLATESTER</h1>
          <div className="hero-body">
            {/* <div className="box"> */}
              {/* <figure className="image is-fullwidth">
                <img className = "placeholder" src="https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Harissa-lamb-8ce5e1f.jpg" alt="placeholder"></img>
              </figure> */}
            {/* </div>             */}
          </div>
      </section>

      <h1>Courses</h1>
        <div className="columns">
          <div class="column">
            <Link to={`/recipes/`}>
                <div className="card is-shadowless">
                  <div className="card">
                    { courses.map(course => {
                      return(
                        <div key={course}>{course}</div>
                      )
                    })}
                    { recipe.length && recipe.map(recipe => {
                    return(
                    <div key={recipe._id} className="card">
                      <div className="media-content">
                        <p className="title">{recipe.name}</p>
                      </div>
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={recipe.image} alt={recipe.name}></img>
                        </figure>
                      </div>
                    </div>
                      )
                    })}                  
                  </div>
                </div>
              </Link>
          </div>
          <div class="column">
            <Link to={`/recipes/`}>
                <div className="card is-shadowless">
                  <div className="card">
                    { courses.map(course => {
                      return(
                        <div key={course}>{course}</div>
                      )
                    })}
                    { recipe.length && recipe.map(recipe => {
                    return(
                    <div key={recipe._id} className="card">
                      <div className="media-content">
                        <p className="title">{recipe.name}</p>
                      </div>
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={recipe.image} alt={recipe.name}></img>
                        </figure>
                      </div>
                    </div>
                      )
                    })}                  
                  </div>
                </div>
              </Link>
          </div>
          <div class="column">
            <Link to={`/recipes/`}>
                <div className="card is-shadowless">
                  <div className="card">
                    { courses.map(course => {
                      return(
                        <div key={course}>{course}</div>
                      )
                    })}
                    { recipe.length && recipe.map(recipe => {
                    return(
                    <div key={recipe._id} className="card">
                      <div className="media-content">
                        <p className="title">{recipe.name}</p>
                      </div>
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={recipe.image} alt={recipe.name}></img>
                        </figure>
                      </div>
                    </div>
                      )
                    })}                  
                  </div>
                </div>
              </Link>
          </div>
          
          
          
        </div>

            
          
    </>

  )
}

export default Home

