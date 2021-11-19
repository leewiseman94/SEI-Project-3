/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'
// import fbLogo from '../assets/f_logo_RGB-Black_58.png'
// import twitterLogo from '../assets/2021 Twitter logo - black.png'
// import instagramLogo from '../assets/glyph-logo_May2016.png'
import heroImage1 from '../assets/heroImages/1.png'
import heroImage2 from '../assets/heroImages/2.png'
import heroImage3 from '../assets/heroImages/3.png'
// import heroImage4 from '../assets/heroImages/4.png'

const Home = () => {  
  const [courses, setCourses] = useState([])
  const [recipes, setRecipes] = useState([])
  // const { id } = useParams()
  // console.log('ID', id)
  
  // * Import all images from the Hero Images folder so we can use them in the carosel
  const heroImages = [{ name: "1", image: heroImage1 }, { name: "2", image: heroImage2 }, { name: "3", image: heroImage3 }]

  bulmaCarousel.attach('.carousel', {
    slidesToScroll: 1, 
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    loop: true,
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes`)
        setRecipes(data)
        const getCourses = data.filter(recipe => {
          return(
            recipe.course.toLowerCase() === 'starter' || recipe.course.toLowerCase() === 'main' || recipe.course.toLowerCase() === 'dessert'
          ) 

        }) 
        console.log(getCourses)
        const newArray = []
        for(let i = 0; i < getCourses.length; i++){
          let coursesOnly = false
          coursesOnly = (newArray.some(course => {
            return (course.course.toLowerCase() === (getCourses[i].course.toLowerCase()))
          } ))
          if (!coursesOnly) newArray.push(getCourses[i])
        }
        newArray.sort((a, b) => b.course.toLowerCase() - a.course.toLowerCase())
        setCourses(newArray)

      } catch (err) {
        // setHasError(true)
        console.log(err)
      }
    }
  getData()
}, [])
  

  
console.log(heroImages)
  return (
    <>
      <section class="hero home-hero is-large is-white">
        <div class="hero-body home-hero-body">
          <div class='hero-background fade'>
          </div>
        </div>
      </section>

      {/* <section className="hero-carousel is-medium">
      <div className="hero-head"></div>
          <div className='carousel-container'>
            <div className='carousel'>
            {heroImages.length && heroImages.map((image, index) => {

              return (
                // <div  className={`item-${index+1}`}>
                  <div key={image._id} className='carousel-item has-background'>
                  <img className='carousel-image is-background' src={image.image} alt={image.name}/>
                  </div>
                // </div>
              )
            })}
          </div>
          <div className="hero-body"></div>
          </div>
      </section>       */}
      
      <h1 className="is-size-3 ha-text-weight-medium ml-5" id="home-h1">Inspiration for your next meal</h1>              
            
      <Link to={`/recipes`}>
        <div className="container courses-container">
          <div className="columns is-multiline courses-columns-multiline">                        
            { courses.length && courses.map(recipe => {
            return(
            <div key={recipe._id} className="column is-one-third-tablet pl-4 pr-4 course-column-3">
              <div className="card is-shadowless" id="courses-columns">
                
                <div className="card-image"id="home-card-image">
                  <figure className="image is-1by1" >
                    <img id="course-img" src={recipe.image} alt={recipe.name}></img>
                  </figure>
                </div>
                <div className="card-header  has-text-centered">
                  <div className="card-header-title has-text-white" id="home-course-headers">{`${recipe.course[0].toUpperCase()}${recipe.course.slice(1).toLowerCase()}`}</div>
                </div>
                
              </div>
            </div>
              )
            })}                  
          </div>
        </div>
      </Link>
            

      <section className="section home-section">
        <div className="container p-2">
          <div className="box is-shadowless is-large" id="box-one">
            <p className="title has-text-white" id="box-onep">
              Not sure what to make for dinner?
            </p> 
            <Link to={`/recipes`}>
              <button class="button is-normal is-rounded is-shadowless is-full-mobile" id="box-one-button">Search recipes</button>
            </Link>         
          </div>
        </div>
      </section>

      <section className="section home-section">
        <div className="container">
          <div className="tile is-ancestor mt-3">
            <div className="tile is-parent">            
              <div className="tile is child column is-one-half-tablet is-full-mobile is-one-half">
                <Link to={`/recipes/add`}> 
                  <div className="overlay card is-shadowless is-flex is-flex-direction-column is-justify-content-space-between" id="column-one">
                    <div className="media-content">
                      <p className="title pt-1 pr-1 pl-1 has-text-centered">Fancy yourself as the next Gordon or Pru?</p>
                    </div>
                      <div className="card-content has-text-grey">
                        <p className="content has-text-centered" id='homecardtext'>Upload a your latest creation to our Add Recipe page</p>                       
                      </div>
                  </div>
                
                </Link> 
              </div>             
              <div className="tile is child column is-one-half-tablet is-full-mobile mr-5 ">
                <Link to={`/recipes`}>  
                  <div className="overlay card is-shadowless" id="column-two">
                    <div className="media-content">
                      <p className="title pt-1 pr-1 pl-1 has-text-centered">Are you a budding Jay Rayner or Grace Dent?</p>
                    </div>
                      <div className="card-content has-text-grey">
                        <p className="content has-text-centered" id='homecardtext'>Rate and comment on recipes</p>                       
                      </div>
                  </div>
                </Link> 
              </div>
                
            </div>          
          </div>
      </div>
      </section>
      
                
    <section className="section home-section">
      <div className="container"> 
        <div className="column is-one-half-tablet is-full-mobile">
          <div className="overlay box is-shadowless is-large" id="box-two">
            <div className="media">
              <p className="title has-text-white" id="box-twop">
                Want to sharpen up your knife skills?
              </p>
            </div>
            <Link to={`/CookingClass`}>
              <button class="button is-normal is-rounded is-shadowless" id="box-two-button">Cooking classes</button>
            </Link>
          </div>
        </div>
      </div> 
    </section>

      {/* <div className="footer is-flex is-flex-direction-row" id="footer">        
        <strong className="has-text-grey ml-6 mr-4">© 2021 Platester</strong> 
          <a className="has-text-grey mx-4" href="/Privacy">Privacy</a>
          <a className="has-text-grey mx-4" href="/Ts&Cs">Terms</a> 
          <a className="has-text-grey mr-6 ml-4 pr-6" href="/CompanyDetails">Company details</a>            
          <a className="footer-item ml-6 mr-4 pl-6" id="social" href="https://twitter.com" rel="noreferrer" target="_blank">
            <figure className="image is-24x24">
              <img className="twitter-logo" src={twitterLogo} alt="twitter" />
            </figure>
          </a>
          <a className="footer-item mx-4" id="social" href="https://instagram.com" rel="noreferrer" target="_blank">
            <figure className="image is-24x24">
              <img className="instagram-logo" src={instagramLogo} alt="instagram" />
            </figure>
          </a>
          <a className="footer-item mr-6 ml-4" id="social" href="https://facebook.com" rel="noreferrer" target="_blank">
            <figure className="image is-24x24">
              <img className="facebook-logo" src={fbLogo} alt="facebook" />
            </figure>
          </a>                    
      </div> */}
            
          
    </>

  )
 
}


export default Home

