import React from 'react'
import { Link } from 'react-router-dom'



const RecipeCard = ({ _id, name, image, averageRating }) => {

  return (
    <div key={_id} className="column is-one-quarter-desktop is-one-third-tablet is-three-quarters-mobile">
      
      <i class="fa fa-heart-o fa-lg" data-fa-transform="right-10" id="heart-icon"></i>
      <Link to={`/recipes/${_id}`}>
        <div className="card is-shadowless">                
          <div className="card-image">
            <figure className="image image-is-5by4">
            
              <img className="image" id="image-index" src={image} alt={name}></img>
            </figure>
                  
            <div className="card-header">
              <div className="card-header-title">{name}</div>
            </div>
            </div>
          </div>
      </Link>
            <div className="card-content">
              <h6 className="card-rating">Rating: {averageRating}</h6>
            </div>
            
      
    </div>


  )
}

export default RecipeCard