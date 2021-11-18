import React from 'react'
import fbLogo from '../assets/f_logo_RGB-Black_58.png'
import twitterLogo from '../assets/2021 Twitter logo - black.png'
import instagramLogo from '../assets/glyph-logo_May2016.png'



const Footer = () => {
  
  return (
    <>
      <div className="footer" id="footer">        
        <strong className="has-text-grey">© 2021 Platester</strong> 
          <a className="has-text-grey" href="/Privacy">Privacy</a>
          <a className="has-text-grey" href="/Ts&Cs">Terms</a> 
          <a className="has-text-grey" href="/CompanyDetails">Company details</a>
          
          <a className="footer-item" id="social" href="https://twitter.com" rel="noreferrer" target="_blank">
            <figure className="image is-24x24">
              <img className="twitter-logo" src={twitterLogo} alt="twitter" />
            </figure>
          </a>
          <a className="footer-item" id="social" href="https://instagram.com" rel="noreferrer" target="_blank">
            <figure className="image is-24x24">
              <img className="instagram-logo" src={instagramLogo} alt="instagram" />
            </figure>
          </a>
          <a className="footer-item" id="social" href="https://facebook.com" rel="noreferrer" target="_blank">
            <figure className="image is-24x24">
              <img className="facebook-logo" src={fbLogo} alt="facebook" />
            </figure>
          </a>                    
      </div>
    </>
  )
}

export default Footer