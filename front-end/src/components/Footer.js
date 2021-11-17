import React from 'react'
import fbLogo from '../assets/f_logo_RGB-Black_58.png'
import twitterLogo from '../assets/2021 Twitter logo - black.png'
import instagramLogo from '../assets/glyph-logo_May2016.png'


const Footer = () => {
  
  return (
    <>
      <div className="footer is-flex is-flex-direction-row" id="footer">        
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
      </div>
    </>
  )
}

export default Footer