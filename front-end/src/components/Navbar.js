import React, { useState, useEffect } from 'react'
import logoWhite from '../images/platester_logo_white_withText.PNG'
import logoRed from '../images/platester_logo_red_withText.PNG'
import smallLogoRed from '../images/platester_smalllogo_red_withText.PNG'
import smallLogoWhite from '../images/platester_smalllogo_white_withText.PNG'
import { Link, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import * as QueryString from "query-string"
import { userIsAuthenticated } from './helpers/auth'

const Navbar = ({ handleLoginClick }) => {

  const [scrollState, setScrollState] = useState("big")
  const [searching, setSearching] = useState(false)
  const [courses, setCourses] = useState([])
  const [allergens, setAllergens] = useState([])
  const [query, setQuery] = useState({})
  const history = useHistory() 
  const location = useLocation()
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    
  }, [location.pathname])
  
  useEffect(() => {
    const getRecipeData = async () => {
      const { data } = await axios.get('/api/recipes')      
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


  const handleLoginPopup = () => {
    handleLoginClick()
  }

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    document.querySelector('.account-dropdown').classList.toggle('is-active')
    history.push('/')
  }

  const handleBlur = async (event, name) => {
      const dropdown = document.querySelector(name)
      dropdown.classList.remove('is-active')
  
  }

  const handleDropdown = async (name) => {
    const dropdown = document.querySelector(name)
    dropdown.classList.toggle('is-active')
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
            <div className="dropdown account-dropdown" >
              <div className="dropdown-trigger">
                <button className="button account-button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => handleDropdown('.account-dropdown')} 
                onBlur={(event) => handleBlur(event, '.account-dropdown')}>
                  <div className="menu-icon"><span className="icon has-background-transparent has-text-black"><i className="fas fa-bars"></i></span></div>
                  <div className="user-account-icon"><span className="icon has-background-transparent has-text-white"><i className="fas fa-user"></i></span></div>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu" >
                <div className="dropdown-content">
                {!userIsAuthenticated() ? 
                  <>
                    <Link to="#" onClick={handleLoginPopup} onMouseDown={(event) => event.preventDefault()} className="dropdown-item">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="#" onMouseDown={handleLoginPopup} className="dropdown-item">
                      Login
                    </Link>
                    <hr className="dropdown-divider" />
                  </> :
                  <>
                    <Link to="#" onMouseDown={handleLogout} className="dropdown-item">
                      <strong>Logout</strong>
                    </Link>
                    <hr className="dropdown-divider" />
                  </>
                  }
                  {userIsAuthenticated() ? 
                  <>
                  <Link to="/add" onMouseDown={(event) => event.preventDefault()} className="dropdown-item">
                    Create a recipe
                  </Link>
                  <Link to="/profile" onMouseDown={(event) => event.preventDefault()} className="dropdown-item">
                    My Profile
                  </Link>
                  <button className="dropdown-item">
                    Help
                  </button>
                  </>
                  :
                  <button className="dropdown-item">
                    Help
                  </button>}
                  <hr className="dropdown-divider" />
                  <Link to="#" onMouseDown={(event) => event.preventDefault()} onClick={() => {
                    setScrollState("large")
                    setSearching(true)
                    document.querySelector('.account-dropdown').classList.toggle('is-active')
                  }} className="dropdown-item search-recipes">
                    Search Recipes
                  </Link>
                  <Link to="/CookingClass" onMouseDown={(event) => event.preventDefault()} className="dropdown-item">
                    Cooking Classes
                  </Link>
                  <Link to="/inspiration" onMouseDown={(event) => event.preventDefault()} className="dropdown-item">
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
              <Link to='/CookingClass'><button className="button nav-transparent nav-center" href="#"><div>Cooking Classes</div><div className="button-bottom-border"></div></button></Link>
              <Link to='/inspiration'><button className="button nav-transparent nav-center" href="#"><div>Inspiration</div><div className="button-bottom-border"></div></button></Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="dropdown account-dropdown">
              <div className="dropdown-trigger">
                <button className="button account-button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => handleDropdown('.account-dropdown')} 
                onBlur={(event) => handleBlur(event, '.account-dropdown')}>
                    <div className="menu-icon"><span className="icon has-background-transparent has-text-black"><i className="fas fa-bars"></i></span></div>
                    <div className="user-account-icon"><span className="icon has-background-transparent has-text-white"><i className="fas fa-user"></i></span></div>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  {!userIsAuthenticated() ? 
                  <>
                    <Link to="#" onMouseDown={(event) => event.preventDefault()} onClick={handleLoginPopup} className="dropdown-item">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="#" onMouseDown={(event) => event.preventDefault()} onClick={handleLoginPopup} className="dropdown-item">
                      Login
                    </Link>
                    <hr className="dropdown-divider" />
                  </> :
                  <>
                    <Link to="#" onMouseDown={(event) => event.preventDefault()} onClick={handleLogout} className="dropdown-item">
                      <strong>Logout</strong>
                    </Link>
                    <hr className="dropdown-divider" />
                  </>
                  }
                  {userIsAuthenticated() ? 
                  <>
                  <Link to="/add" onMouseDown={(event) => event.preventDefault()} className="dropdown-item">
                    Create a recipe
                  </Link>
                  <Link to="/profile" onMouseDown={(event) => event.preventDefault()} className="dropdown-item">
                    My Profile
                  </Link>
                  <button className="dropdown-item">
                    Help
                  </button>
                  </>
                  :
                  <button className="dropdown-item">
                    Help
                  </button>}
                  <hr className="dropdown-divider bottom-divider" />
                  <Link to="#" onMouseDown={(event) => event.preventDefault()} onClick={() => {
                    setScrollState("large")
                    setSearching(true)
                  }} className="dropdown-item search-recipes">
                    Search Recipes
                  </Link>
                  <Link to="/CookingClass" onMouseDown={(event) => event.preventDefault()} className="dropdown-item cooking-classes">
                    Cooking Classes
                  </Link>
                  <Link to="/inspiration" onMouseDown={(event) => event.preventDefault()} className="dropdown-item inspiration">
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
                    <button className="button bottom-search-form-dropdown search-form-button" onClick={() => handleDropdown('.course-dropdown')} 
                onBlur={(event) => handleBlur(event, '.course-dropdown')}>
                      <h3><strong>Courses</strong></h3><input readOnly className="search-input-box" id="course-input" name="course-name" placeholder="Select course"></input>
                    </button>
                  </div>
                  <div className="dropdown-menu course-dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content course-dropdown-content">
                      {courses.map(course => {
                        return (
                        <Link key={course} to="#" onMouseDown={(event) => event.preventDefault()} className="dropdown-item course-dropdown-item" onClick={(event) => {
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
                    <button className="button bottom-search-form-dropdown search-form-button" onClick={() => handleDropdown('.allergens-dropdown')} 
                    onBlur={(event) => handleBlur(event, '.allergens-dropdown')}>
                      <h3><strong>Allergens</strong></h3><input readOnly className="search-input-box" id="allergens-input" name="allergens-name" placeholder="Select allergens"></input>
                    </button>
                  </div>
                  <div className="dropdown-menu allergens-dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content allergens-dropdown-content">
                      {allergens.map(allergen => {
                        return (
                        <Link key={allergen} to="#" onMouseDown={(event) => event.preventDefault()} className="dropdown-item allergens-dropdown-item" onClick={(event) => {
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
              <div className="bottom-search-form-buttons">
                <Link to='#' onClick={(event) => {
                  event.preventDefault()
                  closeSearchMobile()
                }
                  
                  } className="form-search-icon"><i className="far fa-times-circle form-close-icon"></i></Link>
                <Link to={`/recipes${getSearchLink()}`} onClick={() => {
                  closeSearchMobile()
                  getSearchLink()
                }
                  
                  } className="form-search-icon"><span className="icon has-background-transparent has-text-white"><i className="fas fa-search"></i></span></Link>
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
                  <button className="button search-form-dropdown search-form-button" onClick={() => handleDropdown('.course-dropdown')} 
                  onBlur={(event) => handleBlur(event, '.course-dropdown')}>
                    <h3><strong>Course</strong></h3><input readOnly className="search-input-box" id="course-input" name="course-name" placeholder="Select course"></input>
                  </button>
                </div>
                <div className="dropdown-menu course-dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content course-dropdown-content">
                    {courses.map(course => {
                      return (
                      <Link key={course} to="#" onMouseDown={(event) => event.preventDefault()} className="dropdown-item course-dropdown-item" onClick={(event) => {
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
                  <button className="button bottom-search-form-dropdown search-form-button" onClick={() => handleDropdown('.allergens-dropdown')} 
                  onBlur={(event) => handleBlur(event, '.allergens-dropdown')}>
                    <h3><strong>Allergens</strong></h3><input readOnly className="search-input-box" id="allergens-input" name="allergens-name" placeholder="Select allergens"></input>
                  </button>
                </div>
                <div className="dropdown-menu allergens-dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content allergens-dropdown-content">
                    {allergens.map(allergen => {
                      return (
                      <Link key={allergen} to="#" onMouseDown={(event) => event.preventDefault()} className="dropdown-item allergens-dropdown-item" onClick={(event) => {
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