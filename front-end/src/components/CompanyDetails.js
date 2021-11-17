import React from 'react'
import { Link } from 'react-router-dom'

const CompanyDetails = () => {
  return(
    <>
      <div className="columns" id="cd">
        <div className="column is-full is-offset-one-quarter">
          <h1 id="cdh1">
          This brilliant website was hand crafted by Ed Steer, Issra Hashim, Lee Wiseman & Ree Gilling.
          </h1>
          <Link to={`/`}>
            <button className="button is-centered is-normal is-rounded is-danger is-ghost has-text-black is-shadowless mt-6" id="cd-button">These guys sound really great but please take me back to the food!</button>
          </Link>
        </div>
      </div>
    </>
  
    
  
  )
  

}



export default CompanyDetails