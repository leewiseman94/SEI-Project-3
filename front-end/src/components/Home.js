import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'
import fbLogo from '../assets/f_logo_RGB-Black_58.png'
import twitterLogo from '../assets/2021 Twitter logo - black.png'
import instagramLogo from '../assets/glyph-logo_May2016.png'


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
            {recipes.length && recipes.map((recipe, index) => {
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
      <div className="hero is-medium" id="box-one">
        <div className="hero-body">
          <p className="title has-text-white" id="box-onep">
            Not sure what to make for dinner?
          </p>          
        </div>
        <Link to={`/recipes/`}>
          <button class="button is-normal is-rounded is-ghost has-text-white" id="box-one-button">Let our recipe search help you find your perfect meal</button>
        </Link>

      </div>

      <div className="columns justfy-content-space-between">
        <div className="column is-one-third">
          <Link to={`/recipes/add`}>
            <div className="card is-shadowless">
              <div className="card" id="column-one">
                <div className="media-content">
                  <p className="title">Fancy yourself as the next Gordon or Pru?</p>
                </div>
                  {/* <div className="card-image"> */}
                    {/* <figure className="image is-4by3">
                      <img src="front-end/src/assets/pru.jpeg"></img>
                    </figure> */}
                  {/* </div> */}
                  <div className="card-content">
                    <p className="content">Upload a your latest creation to our Add Recipe page</p>                       
                  </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="column is-one-third">
          <Link to={`/recipes/`}>
            <div className="card is-shadowless">
              <div className="card" id="column-two">
                <div className="media-content">
                  <p className="title">Are you a budding Jay Rayner or Grace Dent?</p>
                </div>
                  {/* <div className="card-image"> */}
                    {/* <figure className="image is-4by3">
                      <img src="front-end/src/assets/pru.jpeg"></img>
                    </figure> */}
                  {/* </div> */}
                  <div className="card-content">
                    <p className="content">Rate and comment on recipes</p>                       
                  </div>
              </div>
            </div>
          </Link>
        </div>          
      </div>
      
                
      
    <div className="column is-one-half">
      <div className="box is-shadowless is-large" id="box-two">
        <div className="media">
          <p className="title has-text-white" id="box-twop">
            Want to sharpen up your knife skills?
          </p>
        </div>
        <Link to={`/recipes/`}>
          <button class="button is-normal is-rounded is-ghost has-text-white" id="button-two">Checkout one of our masterclasses</button>
        </Link>
      </div>
    </div>

      <div className=" footer is-flex is-flex-direction-row">        
        <div className="content has-text-left has-text-grey">          
            <strong className="has-text-grey mx-6">© 2021 Platester</strong> 
            <a className="has-text-grey mx-6 px-4" href="/recipes/">Privacy</a>
            <a className="has-text-grey mx-6 px-4" href="/recipes/">Terms</a> 
            <a className="has-text-grey mx-6 ml-6 px-4" href="/recipes/">Company details</a>
            <div className="footer links is-flex is-flex-direction-row" id="logos">
              <a className="footer-item" href="https://twitter.com">
              <figure className="image is-24x24">
                <img className="twitter-logo" src={twitterLogo} alt="twitter" />
              </figure>
              </a>
              <a className="footer-item" href="https://instagram.com">
              <figure className="image is-24x24">
                <img className="instagram-logo" src={instagramLogo} alt="instagram" />
              </figure>
              </a>
              <a className="footer-item" href="https://facebook.com">
                <figure className="image is-24x24">
                  <img className="facebook-logo" src={fbLogo} alt="facebook" />
                </figure>
              </a>
            </div>          
        </div>
        
          
        
      </div>
            
          
    </>

  )
 
}


export default Home

