import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import bulmaCarousel from 'bulma-carousel'


const Home = () => {
  
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/recipes')
        setRecipes(data)
      } catch(err) {
        // setHasError(true)
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log(recipes)
  return (
    <>
      <section className="hero is-fullheight-with-navbar">
          <h1>PLATESTER</h1>
          <div className="hero-body is-flex is-flex-direction-row">
            <div className="box">
              <figure className="image is-fullwidth">
                <img className = "placeholder" src="https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Harissa-lamb-8ce5e1f.jpg" alt="placeholder"></img>
              </figure>
            </div>            
          </div>
      </section>
      <h1>CUISINES</h1>
            <div className="columns">
              <div class="column">
                <Link to={`/recipes/${recipes.id}`}>
                    <div className="card">
                      <div className="card-header">
                        <div className="card-header-title">{recipes.name}</div>
                      </div>
                        <figure className="image image-is-1by1">
                          <img src={recipes.image} alt={recipes.name}></img>
                        </figure>
                    </div>
                  </Link>
              </div>
              <div class="column">
                <Link to={`/recipes/${recipes.id}`}>
                    <div className="card">
                      <div className="card-header">
                        <div className="card-header-title">{recipes.name}</div>
                      </div>
                        <figure className="image image-is-1by1">
                          <img src={recipes.image} alt={recipes.name}></img>
                        </figure>
                    </div>
                  </Link>
              </div>
              <div class="column">
                <Link to={`/recipes/${recipes.id}`}>
                    <div className="card">
                      <div className="card-header">
                        <div className="card-header-title">{recipes.name}</div>
                      </div>
                        <figure className="image image-is-1by1">
                          <img src={recipes.image} alt={recipes.name}></img>
                        </figure>
                    </div>
                  </Link>
              </div>
              <div class="column">
                <Link to={`/recipes/${recipes.id}`}>
                    <div className="card">
                      <div className="card-header">
                        <div className="card-header-title">{recipes.name}</div>
                      </div>
                        <figure className="image image-is-1by1">
                          <img src={recipes.image} alt={recipes.name}></img>
                        </figure>
                    </div>
                  </Link>
              </div>                            
            </div>

            
          
    </>

  )
}

export default Home

