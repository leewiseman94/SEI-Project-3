import React from 'react'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return(
    <>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter mt-6 is-full-mobile" id="privacy">
          <h1>
          Platester privacy notice
          </h1>
          <p id="privacy-p">
          Don't worry about it. We just sell on your info to the highest bidder. 
          </p>
          <Link to={`/`}>
            <button class="button is-normal is-rounded is-shadowless is-full-mobile" id="box-one-button">OK great. Please take me back to the food!</button>
          </Link>
        </div>
      </div>
    </>
  
    
  
  )
  

}



export default Privacy