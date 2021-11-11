import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../images/platester_logo.jpg'


const Navbar = () => {

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item p-0" href="https://bulma.io">
            <img src={logo} alt="platester" />
          </a>
        </div>

        <div className="navbar-search">
          <button className="button">Start your search</button>
        </div>

          <div className="navbar-end">
            <div className="navbar-links">
              <button className="button link-button" href="#">Become a host</button>
              
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <button className="button">Account</button>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="#account">
                  <strong>Sign up</strong>
                </a>
                <a class="navbar-item" href="#account">
                  Login
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item" href="#account">
                  Host your home
                </a>
                <a class="navbar-item" href="#account">
                  Host an experience
                </a>
                <a class="navbar-item" href="#account">
                  Help
                </a>
              </div>
            </div>
          </div>
      </nav>
    </header>
    
    
  )
}

export default Navbar