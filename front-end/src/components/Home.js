import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'


const Home = () => {  
  const [courses, setCourses] = useState([])
  const [recipes, setRecipes] = useState([])
  // const { id } = useParams()
  
  // console.log('ID', id)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes`)
        setRecipes(data)
        // const getCourses = data.map(recipe => {
        //   return(recipe.course.toLowerCase()) 
        // }) 
        // console.log(getCourses)
        const newArray = []
        for(let i = 0; i<data.length; i++){
          let coursesOnly = false
          coursesOnly = (newArray.some(course => {
            console.log('COURSE', course.course)
            console.log(data[i].course)
            return (course.course === (data[i].course))
          } ))
          console.log('courses only', coursesOnly)
          if (!coursesOnly) newArray.push(data[i])

          
          // if (!newArray.map(course => course.course.toLowerCase().includes(data[i].course.toLowerCase()))) newArray.push(data[i])
        }
        console.log('newArray', newArray)
        setCourses(newArray)
        bulmaCarousel.attach('.carousel', {
          slidesToScroll: 1, 
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
        })
      } catch (err) {
        // setHasError(true)
        console.log(err)
      }
    }
    
  
  getData()

}, [])

  

  console.log('recipes', recipes)
  return (
    <>
      <section className="hero-carousel is-large">
      <div className="hero-head"></div>
          <div className='carousel-container'>
            <div className='carousel'>
            {recipes.map((recipe, index) => {
              return (
                // <div  className={`item-${index+1}`}>
                  <div key={recipe._id} className='carousel-item has-background'>
                  <img className='is-background' src={recipe.image} alt={recipe.name}/>
                  </div>
                // </div>
              )
            })}
          </div>
          <div className="hero-body"></div>
          </div>
      </section>

      
      
      {/* <div className="dropdown is-active">
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Courses</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-courses">
          <div className="dropdown-content">
            <Link to="/recipes" className="dropdown-item">
              Starter
            </Link>
            <Link to="/recipes" className="dropdown-item">
              Main
            </Link>
            <Link to="/recipes" className="dropdown-item">
              Dessert
            </Link>
          </div>
        </div>

      </div> */}
      <h1>Inspiration for your next meal</h1>
        <div className="columns">
          <div class="column is-one-third">
            <Link to={`/recipes/`}>
                <div className="card is-shadowless">
                  <div className="card">
                    
                    { courses.length && courses.map(recipe => {
                    return(
                    <div key={recipe._id} className="card">
                      <div className="media-content">
                        <p className="title">{recipe.course}</p>
                      </div>
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={recipe.image} alt={recipe.name}></img>
                        </figure>
                      </div>
                      <div className="card-content">
                        <p className="content">{recipe.description}</p>                       
                      </div>
                    </div>
                      )
                    })}                  
                  </div>
                </div>
              </Link>
          </div>
          
          
          
          
        </div>
      <section className="hero is-medium is-danger">
        <div className="hero-body">
          <p className="title">
            What's in your fridge?
          </p>
          <p className="subtitle">
            Let our ingredients search help you find your perfect recipe.
          </p>
        </div>
      </section>

      {/* <section className="columns">
        <div className="column">
          <Link to={`/recipes/`}>
            <div className="card is-shadowless">
              <div className="card">
                <div className="media-content">
                  <p className="title">Fancy yourself as the next Gordon or Pru?</p>
                </div>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src=""></img>
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="content">Upload a pic of your latest creations to our "Rate My Plate" page</p>                       
                  </div>
                </div>
          
                                
              </div>
            </div>
          </Link>
        </div>
      </section>              */}
      

      <section className="hero is-medium is-link">
        <div className="hero-body">
          <p className="title">
            Want to up your kitchen skills game?
          </p>
          <p className="subtitle">
            Take a butchers at one of our cooking class events.
          </p>
        </div>
      </section>

            
          
    </>

  )
}

export default Home

