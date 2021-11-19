import React from 'react'
import { Link } from 'react-router-dom'

const CompanyDetails = () => {
  return(
    <>
      <div className="columns is-full-mobile" id="cd">
        <div className="column is-half is-offset-one-quarter is-full-mobile">
          <h1 id="cdh1">
          This super website was hand crafted by Ed Steer, Issra Hashim, Lee Wiseman & Ree Gilling.
          </h1>
          <Link to={`/`}>
            <button className="button is-centered is-normal is-rounded is-danger has-text-black is-shadowless mt-6 is-full-mobile" id="cd-button">Yeah nice, please take me back to the food!</button>
          </Link>
        </div>
      </div>
    </>
  
    
  
  )
  

}



export default CompanyDetails