import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import logoWhite from '../images/platester_logo_white_withText.PNG'
import logoRed from '../images/platester_logo_red_withText.PNG'
import { Link } from 'react-router-dom'


const Navbar = () => {

  let listener = null
  const [scrollState, setScrollState] = useState("big")

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      const scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 10) {
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
            <a className="navbar-item p-0" href="https://bulma.io">
              <img src={logoRed} alt="platester" />
            </a>
          </div>
          <div className="navbar-center">
            <button className="search-button button"><div className="search-text">Start your search</div><div className="search-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-search"></i></span></div></button> 
          </div>

          <div className="navbar-end">
            <div className="navbar-links is-flex is-flex-direction-row mr-4">
              <button className="button nav-white nav-right" href="#">Become a host</button>
              <button className="button nav-white nav-right" href="#"><span class="icon has-background-transparent has-text-black"><i class="fas fa-globe"></i></span></button>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <button className="button account-button" aria-label="menu" aria-expanded="false">
                <div className="menu-icon"><span class="icon has-background-transparent has-text-black"><i class="fas fa-bars"></i></span></div>
                <div className="user-account-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-user"></i></span></div>
                </button>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#account">
                  <strong>Sign up</strong>
                </a>
                <a className="navbar-item" href="#account">
                  Login
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="#account">
                  Host your home
                </a>
                <a className="navbar-item" href="#account">
                  Host an experience
                </a>
                <a className="navbar-item" href="#account">
                  Help
                </a>
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
            <a className="navbar-item p-0" href="https://bulma.io">
              <img src={logoWhite} alt="platester" />
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
              <button className="button nav-transparent nav-right" href="#"><span class="icon has-background-transparent has-text-white"><i class="fas fa-globe"></i></span></button>
            </div>
            <div className="navbar-item has-dropdown account-dropdown">
              <button className="button account-button" aria-label="menu" aria-expanded="false" onClick={() => {
                const dropdown = document.querySelector('.account-dropdown').classList.toggle('is-active')
                console.log(dropdown)
                }
                }>
                <div className="menu-icon"><span class="icon has-background-transparent has-text-black"><i class="fas fa-bars"></i></span></div>
                <div className="user-account-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-user"></i></span></div>
                </button>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#account">
                  <strong><Link to='/account'>Sign up</Link></strong>
                </a>
                <a className="navbar-item" href="#account">
                  <Link to='/account'>Login</Link>
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="#account">
                  Host your home
                </a>
                <a className="navbar-item" href="#account">
                  Host an experience
                </a>
                <a className="navbar-item" href="#account">
                  Help
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-bottom p-6">
          <div className="button search-form">
            <div className="search-form-container is-flex is-flex-direction-row">
              <button className="button nav-right search-form-button"><h3><strong>Name</strong></h3><h3>What are you looking for?</h3></button>
              <button className="button nav-right search-form-button"><h3><strong>Course</strong></h3><h3>Select course</h3></button>
              <button className="button nav-right search-form-button"><h3><strong>Cuisine</strong></h3><h3>Select cuisine</h3></button>
            </div>
            <div className="form-search-icon"><span class="icon has-background-transparent has-text-white"><i class="fas fa-search"></i></span></div>
          </div>
        </div>
      </nav>
    </header>
    
    
    
  )
}

export default Navbar