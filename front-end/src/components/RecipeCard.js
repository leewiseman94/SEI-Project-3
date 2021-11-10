import React from 'react'
import { Link } from 'react-router-dom'



const RecipeCard = ({ _id, name, image, averageRating }) => {

  return (
    <div key={_id} className="column is-one-quarter-desktop is-one-third-tablet is-three-quarters-mobile">
      <Link to={`/recipes/${_id}`}>
        <div className="card is-shadowless">                
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img className="image" src={image} alt={name}></img>
            </figure>
                  
            <div className="card-header">
              <div className="card-header-title">{name}</div>
            </div>
            </div>
          </div>
      </Link>
            <div className="card-content">
              <h6 className="card-rating">Rating: {averageRating}</h6>
              <h5>🤍</h5>
            </div>
            
      
    </div>


  )
}

export default RecipeCard