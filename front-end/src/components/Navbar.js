import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import logoWhite from '../images/platester_logo_white_withText.PNG'
import logoRed from '../images/platester_logo_red_withText.PNG'
import smallLogoRed from '../images/platester_smalllogo_red_withText.PNG'
import smallLogoWhite from '../images/platester_smalllogo_white_withText.PNG'
import { Link, useHistory, useLocation } from 'react-router-dom'
// import 'animate.css';
import axios from 'axios'
import { getPayload } from './helpers/auth'
import * as QueryString from "query-string"

const Navbar = ({ handleLoginClick }) => {

  const [scrollState, setScrollState] = useState("big")
  const [searching, setSearching] = useState(false)
  // const [recipeData, setRecipeData] = useState([])
  const [courses, setCourses] = useState([])
  const [allergens, setAllergens] = useState([])
  const [query, setQuery] = useState({})
  const history = useHistory() 
  const location = useLocation()

  useEffect(() => {
    
  }, [location.pathname])
  
  useEffect(() => {
    const getRecipeData = async () => {
      const { data } = await axios.get('/api/recipes')
      // setRecipeData(data)
      
      const coursesArray = ['All']
      const allergensArray  = ['All']
      for(let i = 0; i < data.length; i++) {
        // Add to courses array if no duplicate
        const coursesLowerCase = coursesArray.map(course => course.toLowerCase())
        if (!coursesLowerCase.includes(data[i].course.toLowerCase())) coursesArray.push(data[i].course)

        // Add to allergens array if no duplicate
        const allergensLowerCase = allergensArray.map(allergen => allergen.toLowerCase())
        data[i].allergens.forEach(allergen => {
          if (!allergensLowerCase.includes(allergen.toLowerCase())) allergensArray.push(allergen)
        })
      }
      coursesArray.sort()
      setCourses(coursesArray)
      allergensArray.sort()
      setAllergens(allergensArray)
    }
    getRecipeData()
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", e => {
      const scrolled = document.scrollingElement.scrollTop
      setQuery({})
      if (scrolled > 0) {
        setSearching(false)
        if (scrollState !== "small") {
          setScrollState("small")
        }
      } else if (scrollState !== "large"){
        setScrollState("large")
      }
    })
  }, [scrollState])
  // * if link is clicked expand the navbar to required height
  useEffect(() => {
    if (searching) {
      document.querySelector('.navbar-bottom').classList.add('clicked')
    } else {
      document.querySelector('.navbar-bottom').classList.remove('clicked')
    }
  }, [searching])

  const closeSearchMobile = () => {
    setSearching(false)
  }

  const setFilterLink = (event) => {
    if (event.target.id === 'recipe-name-input') {
      setQuery({ ...query, name: event.target.value.toLowerCase() })
    }

    if (event.target.classList.contains('course-dropdown-item')) {
      setQuery({ ...query, course: event.target.innerText.toLowerCase() })
    }

    if (event.target.classList.contains('allergens-dropdown-item')) {
      setQuery({ ...query, allergens: event.target.innerText.toLowerCase() })
    }
  }

  const getSearchLink = () => {
    return `?${QueryString.stringify(query)}`
  }

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  } 

  const handleLoginPopup = () => {
    handleLoginClick()
  }

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    document.querySelector('.account-dropdown').classList.toggle('is-active')
  }

  return (
    scrollState === 'small' ? 
    <header>
      <nav className="navbar is-fixed-top navbar-white" role="navigation" aria-label="main navigation">
        <div className="navbar-top">
          <div className="navbar-brand">
            <Link className="navbar-item p-0" to="/">
              <img className="logo-main" src={logoRed} alt="platester" />
              <img className="logo-small" src={smallLogoRed} alt="platester" />
            </Link>
          </div>
          <div className="navbar-center">
            <button className="search-button button" onClick={() => setScrollState('large')}><div className="search-text">Start your search</div><div className="search-icon"><span className="icon has-background-transparent has-text-white"><i className="fas fa-search"></i></span></div></button> 
          </div>

          <div className="navbar-end">
            <div className="navbar-links is-flex is-flex-direction-row mr-4">
              <button className="button nav-white nav-right" href="#">Become a host</button>
              <button className="button nav-white nav-right" href="#"><span className="icon has-background-transparent has-text-black"><i className="fas fa-globe"></i></span></button>
            </div>
            <div className="dropdown account-dropdown">
              <div className="dropdown-trigger">
                <button className="button account-button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => {
                const dropdown = document.querySelector('.account-dropdown')
                dropdown.classList.toggle('is-active')
                }
                }>
                  <div className="menu-icon"><span className="icon has-background-transparent has-text-black"><i className="fas fa-bars"></i></span></div>
                  <div className="user-account-icon"><span className="icon has-background-transparent has-text-white"><i className="fas fa-user"></i></span></div>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                {!userIsAuthenticated() ? 
                  <>
                    <Link to="#" onClick={() => {
                      handleLoginPopup()
                      document.querySelector('.account-dropdown').classList.toggle('is-active')
                    }} className="dropdown-item">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="#" onClick={() => {
                      handleLoginPopup()
                      document.querySelector('.account-dropdown').classList.toggle('is-active')
                    }} className="dropdown-item">
                      Login
                    </Link>
                    <hr className="dropdown-divider" />
                  </> :
                  <>
                    <Link to="#" onClick={handleLogout} className="dropdown-item">
                      <strong>Logout</strong>
                    </Link>
                    <hr className="dropdown-divider" />
                  </>
                  }
                  {userIsAuthenticated() ? 
                  <>
                  <Link to="/add" className="dropdown-item">
                    Create a recipe
                  </Link>
                  <Link to="/recipes" className="dropdown-item">
                    My Profile
                  </Link>
                  <Link to="/recipes" className="dropdown-item">
                    Help
                  </Link>
                  </>
                  :
                  <Link to="/recipes" className="dropdown-item">
                    Help
                  </Link>}
                  <hr className="dropdown-divider" />
                  <Link to="#" onClick={() => {
                    setScrollState("large")
                    setSearching(true)
                    document.querySelector('.account-dropdown').classList.toggle('is-active')
                  }} className="dropdown-item search-recipes">
                    Search Recipes
                  </Link>
                  <Link to="/recipes" className="dropdown-item">
                    Cooking Classes
                  </Link>
                  <Link to="/recipes" className="dropdown-item">
                    Inspiration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    :
    <header>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-top">
          <div className="navbar-brand">
            <a className="navbar-item p-0" href="/">
              <img className="logo-main" src={logoWhite} alt="platester" />
              <img className="logo-small" src={smallLogoWhite} alt="platester" />
            </a>
          </div>
          <div className="navbar-center">
            <div className="navbar-links is-flex is-flex-direction-row">
              <div className="button-container"></div>
              <button className="button nav-transparent nav-center active" href="#"><div>Search Recipes</div><div className="button-bottom-border active"></div></button>
              <button className="button nav-transparent nav-center" href="#"><div>Cooking Classes</div><div className="button-bottom-border"></div></button>
              <button className="button nav-transparent nav-center" href="#"><div>Inspiration</div><div className="button-bottom-border"></div></button>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-links is-flex is-flex-direction-row mr-4">
              <button className="button nav-transparent nav-right" href="#">Become a host</button>
              <button className="button nav-transparent nav-right" href="#"><span className="icon has-background-transparent has-text-white"><i className="fas fa-globe"></i></span></button>
            </div>
            <div className="dropdown account-dropdown">
              <div className="dropdown-trigger">
                <button className="button account-button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => {
                  const dropdown = document.querySelector('.account-dropdown')
                  dropdown.classList.toggle('is-active')
                }
                }>
                    <div className="menu-icon"><span className="icon has-background-transparent has-text-black"><i className="fas fa-bars"></i></span></div>
                    <div className="user-account-icon"><span className="icon has-background-transparent has-text-white"><i className="fas fa-user"></i></span></div>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  {!userIsAuthenticated() ? 
                  <>
                    <Link to="#" onClick={() => {
                      handleLoginPopup()
                      document.querySelector('.account-dropdown').classList.toggle('is-active')
                    }} className="dropdown-item">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="#" onClick={() => {
                      handleLoginPopup()
                      document.querySelector('.account-dropdown').classList.toggle('is-active')
                    }} className="dropdown-item">
                      Login
                    </Link>
                    <hr className="dropdown-divider" />
                  </> :
                  <>
                    <Link to="#" onClick={handleLogout} className="dropdown-item">
                      <strong>Logout</strong>
                    </Link>
                    <hr className="dropdown-divider" />
                  </>
                  }
                  {userIsAuthenticated() ? 
                  <>
                  <Link to="/add" className="dropdown-item">
                    Create a recipe
                  </Link>
                  <Link to="/recipes" className="dropdown-item">
                    My Profile
                  </Link>
                  <Link to="/recipes" className="dropdown-item">
                    Help
                  </Link>
                  </>
                  :
                  <Link to="/recipes" className="dropdown-item">
                    Help
                  </Link>}
                  <hr className="dropdown-divider bottom-divider" />
                  <Link to="#" onClick={() => {
                    setScrollState("large")
                    setSearching(true)
                    document.querySelector('.account-dropdown').classList.toggle('is-active')
                  }} className="dropdown-item search-recipes">
                    Search Recipes
                  </Link>
                  <Link to="/recipes" className="dropdown-item cooking-classes">
                    Cooking Classes
                  </Link>
                  <Link to="/recipes" className="dropdown-item inspiration">
                    Inspiration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-bottom p-6">
          <div className="bottom-search">
            {!searching ? 
            <button className="bottom-search-button button" onClick={() => {
              setSearching(true)
              document.querySelector('.navbar-bottom').classList.add('clicked')
            }
          }><div className="bottom-search-text">Start your search</div><div className="bottom-search-icon"><span className="icon has-background-transparent has-text-white"><i className="fas fa-search"></i></span></div></button>
            :
            <div className="button bottom-search-form">
              <div className="bottom-search-form-container is-flex is-flex-direction-column">
                <button className="button bottom-search-form-dropdown search-form-button" onClick={() => {document.querySelector("#recipe-name-input").focus() }}>
                  <h3><strong>Recipe Name</strong></h3><input type="text" className="search-input-box" id="recipe-name-input" name="recipe-name" placeholder="What are you looking for?" onChange={(event) => setFilterLink(event)}></input>
                </button>
                <div className="dropdown course-dropdown bottom-dropdown">
                  <div className="dropdown-trigger">
                    <button className="button bottom-search-form-dropdown search-form-button" onClick={() => {
                      document.querySelector('.course-dropdown').classList.toggle('is-active')
                    }}>
                      <h3><strong>Course</strong></h3><input readOnly className="search-input-box" id="course-input" name="course-name" placeholder="Select course"></input>
                    </button>
                  </div>
                  <div className="dropdown-menu course-dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content course-dropdown-content">
                      {courses.map(course => {
                        return (
                        <Link key={course} to="#" className="dropdown-item course-dropdown-item" onClick={(event) => {
                          setFilterLink(event)
                          document.querySelector("#course-input").value = event.target.innerText
                          document.querySelector('.course-dropdown').classList.remove('is-active')
                          }}>
                          {course[0].toUpperCase() + course.slice(1)}
                        </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="dropdown allergens-dropdown bottom-dropdown">
                  <div className="dropdown-trigger">
                    <button className="button bottom-search-form-dropdown search-form-button" onClick={() => {
                      document.querySelector('.allergens-dropdown').classList.toggle('is-active')
                    }}>
                      <h3><strong>Allergens</strong></h3><input readOnly className="search-input-box" id="allergens-input" name="allergens-name" placeholder="Select allergens"></input>
                    </button>
                  </div>
                  <div className="dropdown-menu allergens-dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content allergens-dropdown-content">
                      {courses.map(allergen => {
                        return (
                        <Link key={allergen} to="#" className="dropdown-item allergens-dropdown-item" onClick={(event) => {
                          setFilterLink(event)
                          document.querySelector("#allergens-input").value = event.target.innerText
                          document.querySelector('.allergens-dropdown').classList.remove('is-active')
                          }}>
                          {allergen[0].toUpperCase() + allergen.slice(1)}
                        </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

              </div>
              <div className="bottom-search-form-buttons">
                <Link to='#' onClick={closeSearchMobile} className="form-search-icon">Close</Link>
                <Link to={`/recipes${getSearchLink()}`} onClick={() => getSearchLink()} className="form-search-icon"><span className="icon has-background-transparent has-text-white"><i className="fas fa-search"></i></span></Link>
              </div>
            </div>
            }
          </div>
          <div className="button search-form">
            <div className="search-form-container is-flex is-flex-direction-row">
              <button className="button bottom-search-form-dropdown search-form-button" onClick={() => {document.querySelector("#recipe-name-input").focus() }}>
                <h3><strong>Recipe Name</strong></h3><input type="text" className="search-input-box" id="recipe-name-input" name="recipe-name" placeholder="What are you looking for?" onChange={(event) => setFilterLink(event)}></input>
              </button>
              <div className="dropdown course-dropdown">
                <div className="dropdown-trigger">
                  <button className="button search-form-dropdown search-form-button" onClick={() => {
                    document.querySelector('.course-dropdown').classList.toggle('is-active')
                  }}>
                    <h3><strong>Course</strong></h3><input readOnly className="search-input-box" id="course-input" name="course-name" placeholder="Select course"></input>
                  </button>
                </div>
                <div className="dropdown-menu course-dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content course-dropdown-content">
                    {courses.map(course => {
                      return (
                      <Link key={course} to="#" className="dropdown-item course-dropdown-item" onClick={(event) => {
                        event.preventDefault()
                        setFilterLink(event)
                        document.querySelector("#course-input").value = event.target.innerText
                        document.querySelector('.course-dropdown').classList.remove('is-active')
                        }}>
                        {course[0].toUpperCase() + course.slice(1)}
                      </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="dropdown allergens-dropdown bottom-dropdown">
                <div className="dropdown-trigger">
                  <button className="button bottom-search-form-dropdown search-form-button" onClick={() => {
                    document.querySelector('.allergens-dropdown').classList.toggle('is-active')
                  }}>
                    <h3><strong>Allergens</strong></h3><input readOnly className="search-input-box" id="allergens-input" name="allergens-name" placeholder="Select allergens"></input>
                  </button>
                </div>
                <div className="dropdown-menu allergens-dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content allergens-dropdown-content">
                    {allergens.map(allergen => {
                      return (
                      <Link key={allergen} to="#" className="dropdown-item allergens-dropdown-item" onClick={(event) => {
                        event.preventDefault()
                        setFilterLink(event)
                        document.querySelector("#allergens-input").value = event.target.innerText
                        document.querySelector('.allergens-dropdown').classList.remove('is-active')
                        }}>
                        {allergen[0].toUpperCase() + allergen.slice(1)}
                      </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              
            </div>
            <Link to={`/recipes${getSearchLink()}`} onClick={() => getSearchLink()} className="form-search-icon"><span className="icon has-background-transparent has-text-white"><i className="fas fa-search"></i></span></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar