import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import logoWhite from '../images/platester_logo_white_withText.PNG'
import logoRed from '../images/platester_logo_red_withText.PNG'
import smallLogoRed from '../images/platester_smalllogo_red_withText.PNG'
import smallLogoWhite from '../images/platester_smalllogo_white_withText.PNG'
import { Link } from 'react-router-dom'
import 'animate.css';

const Navbar = () => {

  let listener = null
  const [scrollState, setScrollState] = useState("big")
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      const scrolled = document.scrollingElement.scrollTop
      if (scrolled > 0) {
        setSearching(false)
        // console.log(scrolled)
        if (scrollState !== "small") {
          setScrollState("small")
        }
      } else {
        if (scrollState !== "large") {
          setScrollState("large")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  console.log(scrollState)
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
            <button className="search-button button" onClick={() => setScrollState('large')}><div className="search-text">Start your search</div><div className="search-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-search"></i></span></div></button> 
          </div>

          <div className="navbar-end">
            <div className="navbar-links is-flex is-flex-direction-row mr-4">
              <button className="button nav-white nav-right" href="#">Become a host</button>
              <button className="button nav-white nav-right" href="#"><span className="icon has-background-transparent has-text-black"><i className="fas fa-globe"></i></span></button>
            </div>
            <div class="dropdown account-dropdown">
              <div class="dropdown-trigger">
                <button className="button account-button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => {
                const dropdown = document.querySelector('.account-dropdown').classList.toggle('is-active')
                console.log(dropdown)
                }
                }>
                    <div className="menu-icon"><span class="icon has-background-transparent has-text-black"><i class="fas fa-bars"></i></span></div>
                    <div className="user-account-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-user"></i></span></div>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <Link to="/account" class="dropdown-item">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to="/account" class="dropdown-item">
                    Login
                  </Link>
                  <hr class="dropdown-divider" />
                  <Link to="/recipes" class="dropdown-item">
                    Create a recipe
                  </Link>
                  <Link to="/recipes" class="dropdown-item">
                    My Recipes
                  </Link>
                  <Link to="/recipes" class="dropdown-item">
                    Help
                  </Link>
                  <hr class="dropdown-divider" /><Link to="/recipes" class="dropdown-item">
                    Search Recipes
                  </Link>
                  <Link to="/recipes" class="dropdown-item">
                    Cooking Classes
                  </Link>
                  <Link to="/recipes" class="dropdown-item">
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
            <Link className="navbar-item p-0" to="/">
              <img className="logo-main" src={logoWhite} alt="platester" />
              <img className="logo-small" src={smallLogoWhite} alt="platester" />
            </Link>
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
            <div class="dropdown account-dropdown">
              <div class="dropdown-trigger">
                <button className="button account-button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => {
                const dropdown = document.querySelector('.account-dropdown').classList.toggle('is-active')
                console.log(dropdown)
                }
                }>
                    <div className="menu-icon"><span class="icon has-background-transparent has-text-black"><i class="fas fa-bars"></i></span></div>
                    <div className="user-account-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-user"></i></span></div>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <Link to="/account" class="dropdown-item">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to="/account" class="dropdown-item">
                    Login
                  </Link>
                  <hr class="dropdown-divider" />
                  <Link to="/recipes" class="dropdown-item">
                    Create a recipe
                  </Link>
                  <Link to="/recipes" class="dropdown-item">
                    My Recipes
                  </Link>
                  <Link to="/recipes" class="dropdown-item">
                    Help
                  </Link>
                  <hr class="dropdown-divider bottom-divider" />
                  <Link to="/recipes" class="dropdown-item search-recipes">
                    Search Recipes
                  </Link>
                  <Link to="/recipes" class="dropdown-item cooking-classes">
                    Cooking Classes
                  </Link>
                  <Link to="/recipes" class="dropdown-item inspiration">
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
            <button className="bottom-search-button button" onClick={() => {setSearching(true)}
          }><div className="bottom-search-text">Start your search</div><div className="bottom-search-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-search"></i></span></div></button>
            :
            <div className="button bottom-search-form">
              <div className="bottom-search-form-container is-flex is-flex-direction-column">
                <button className="button bottom-search-form-dropdown search-form-button"><h3><strong>Name</strong></h3><h3>What are you looking for?</h3></button>
                <button className="button bottom-search-form-dropdown search-form-button"><h3><strong>Course</strong></h3><h3>Select course</h3></button>
                <button className="button bottom-search-form-dropdown search-form-button"><h3><strong>Cuisine</strong></h3><h3>Select cuisine</h3></button>
              </div>
              <Link to='/recipes' className="form-search-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-search"></i></span></Link>
            </div>
            }
          </div>
          <div className="button search-form">
            <div className="search-form-container is-flex is-flex-direction-row">
              <button className="button search-form-dropdown search-form-button"><h3><strong>Name</strong></h3><h3>What are you looking for?</h3></button>
              <button className="button search-form-dropdown search-form-button"><h3><strong>Course</strong></h3><h3>Select course</h3></button>
              <button className="button search-form-dropdown search-form-button"><h3><strong>Cuisine</strong></h3><h3>Select cuisine</h3></button>
            </div>
            <Link to='/recipes' className="form-search-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-search"></i></span></Link>
          </div>
        </div>
      </nav>
    </header>
    
    
    
  )
}

export default Navbar