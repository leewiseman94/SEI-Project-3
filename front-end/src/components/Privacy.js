import React from 'react'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return(
    <>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter mt-6">
          <h1>
          Platester privacy notice
          </h1>
          <p id="privacy">
          Don't worry about it. We just sell on your info to the highest bidder. 
          </p>
          <Link to={`/`}>
            <button class="button is-normal is-rounded is-danger is-ghost has-text-black is-shadowless mt-6" id="box-one-button">Enough of the boring bits, take me back to the food</button>
          </Link>
        </div>
      </div>
    </>
  
    
  
  )
  

}



export default Privacy