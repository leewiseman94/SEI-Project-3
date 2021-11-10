import React from 'react'
import { Link } from 'react-router-dom'


const Home = ({ _id, recipe, image, name }) => {

  return (
    <>
      <section className="hero is-fullheight is-warning">
          <h1>PLATESTER</h1>
          <div className="hero-body">
            <div className="hero-image">
              <figure className="image is-5by3">
                <img src={image} alt={name}></img>
              </figure>
            </div>
            <Link to="/recipes" className="button">Cuisines?</Link>
            <div className = "columns">
              <div className="column">
                cuisine1
              </div>
              <div className="column">
                cuisine2
              </div>
              <div className="column">
                cuisine3
              </div>
              <div className="column">
                cuisine4
              </div>
            </div>
          </div>
      </section>
    </>

  )
}

export default Home