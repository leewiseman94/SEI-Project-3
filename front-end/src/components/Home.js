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

  
console.log(courses)
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
              
            
                {/* <Link to={`/recipes/`}> */}
                    <div className="container courses-container">
                      <div className="columns is-multiline">                        
                        { courses.length && courses.map(recipe => {
                        return(
                        <div key={recipe._id} className="column is-one-third-tablet is-full-mobile pl-4 pr-4">
                          <div className="card">
                            <div className="card-header has-text-centered">
                              <div className="card-header-title">{`${recipe.course[0].toUpperCase()}${recipe.course.slice(1).toLowerCase()}`}</div>
                            </div>
                            <div className="card-image">
                              <figure className="image is-4by3">
                                <img src={recipe.image} alt={recipe.name}></img>
                              </figure>
                            </div>
                          </div>
                        </div>
                          )
                        })}                  
                      </div>
                    </div>
                  {/* </Link> */}
            


      <div className="column is-one-half mx-5 mt-5">
        <div className="box is-shadowless is-large" id="box-one">
          <p className="title has-text-white" id="box-onep">
            Not sure what to make for dinner?
          </p> 
          <Link to={`/recipes/`}>
            <button class="button is-normal is-rounded is-ghost has-text-black" id="box-one-button">Let our recipe search help you find your perfect meal</button>
          </Link>         
        </div>
        

      </div>

      <div className="tile is-ancestor mt-3">
        <div className="tile is-parent">            
          <div className="tile is child column is-one-half ml-5">
            <Link to={`/recipes/add`}> 
              <div className="card is-shadowless is-flex is-flex-direction-column is-justify-content-space-between" id="column-one">
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
            
            </Link> 
          </div>             
          <div className="tile is child column is-one-half mr-5 ">
            <Link to={`/recipes/`}>  
              <div className="card is-shadowless" id="column-two">
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
            </Link> 
          </div>
            
        </div>          
      </div>
      
                
      
    <div className="column is-one-half mx-5">
      <div className="box is-shadowless is-large" id="box-two">
        <div className="media">
          <p className="title has-text-white" id="box-twop">
            Want to sharpen up your knife skills?
          </p>
        </div>
        <Link to={`/recipes/`}>
          <button class="button is-normal is-rounded is-ghost has-text-white is-shadowless" id="box-two-button">Check out one of our masterclasses</button>
        </Link>
      </div>
    </div>

      <div className=" footer is-flex is-flex-direction-row" id="footer">        
        <strong className="has-text-grey ml-6 mr-4">© 2021 Platester</strong> 
          <a className="has-text-grey mx-4" href="/recipes/">Privacy</a>
          <a className="has-text-grey mx-4" href="/recipes/">Terms</a> 
          <a className="has-text-grey mr-6 ml-4 pr-6" href="/recipes/">Company details</a>            
          <a className="footer-item ml-6 mr-4 pl-6" id="twitter" href="https://twitter.com">
            <figure className="image is-24x24">
              <img className="twitter-logo" src={twitterLogo} alt="twitter" />
            </figure>
          </a>
          <a className="footer-item mx-4" id="insta" href="https://instagram.com">
            <figure className="image is-24x24">
              <img className="instagram-logo" src={instagramLogo} alt="instagram" />
            </figure>
          </a>
          <a className="footer-item mr-6 ml-4" id="fb" href="https://facebook.com">
            <figure className="image is-24x24">
              <img className="facebook-logo" src={fbLogo} alt="facebook" />
            </figure>
          </a>                    
      </div>
            
          
    </>

  )
 
}


export default Home

