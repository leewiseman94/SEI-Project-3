import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import bulmaCarousel from 'bulma-carousel'
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
        const getCourses = data.map(recipe => {
          return(recipe.course.toLowerCase()) 
        }) 
        console.log(getCourses)
        const newArray = []
        for(let i = 0; i<getCourses.length; i++){
          if (!newArray.includes(getCourses[i])) newArray.push(getCourses[i])
        }
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

  

  console.log('recipes', courses)
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
      <script src="~bulma-carousel/dist/js/bulma-carousel.min.js"></script>

      <h1>Courses</h1>
            <div className="columns">
              <div className="column">
                <Link to={`/recipes/`}>
                    <div className="card is-shadowless">
                      <div className="card-header">
                        { courses.map(course => {
                          return(
                            <div key={course}>{course}</div>
                          )
                        })}
                        {/* <div className="card-header-title">{recipe.name}</div>
                      </div>
                        <figure className="image image-is-1by1">
                          <img src={recipe.image} alt={recipe.name}></img>
                        </figure>
                    </div>
                  </Link>
              </div>
              <div class="column">
                <Link to={`/recipes/`}>
                    <div className="card">
                      <div className="card-header">
                        <div className="card-header-title">{recipe.name}</div>
                      </div>
                        <figure className="image image-is-1by1">
                          <img src={recipe.image} alt={recipe.name}></img>
                        </figure>
                    </div>
                  </Link>
              </div>
              <div class="column">
                <Link to={`/recipes/`}>
                    <div className="card">
                      <div className="card-header">
                        <div className="card-header-title">{recipe.name}</div>
                      </div>
                        <figure className="image image-is-1by1">
                          <img src={recipe.image} alt={recipe.name}></img>
                        </figure>
                    </div>
                  </Link>
              </div>
              <div class="column">
                <Link to={`/recipes/`}>
                    <div className="card">
                      <div className="card-header">
                        <div className="card-header-title">{recipe.name}</div> */}
                      </div>
                        {/* <figure className="image image-is-1by1">
                          <img src={recipe.image} alt={recipe.name}></img>
                        </figure> */}
                    </div>
                  </Link>
              </div>                            
            </div>
    </>

  )
}

export default Home

