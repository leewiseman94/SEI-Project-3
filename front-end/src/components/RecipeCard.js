/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPayload } from './helpers/auth'


const RecipeCard = ({ _id, name, image, averageRating, likedBy }) => {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const recipeLiked = async () => {
      const user = await getUserData()
      if (!user) return false
      if (!likedBy.includes(user._id)) {
        setLiked(false)
        return false
      }
      setLiked(true)
      return true
    }
    recipeLiked()
  }, [])
  

  const likeRecipe = async (event) => {
    const user = await getUserData()
    try {
      const { data } = await axios.get(`/api/recipes/${_id}`)
      if (event.target.classList.contains('liked') || event.target.parentElement.classList.contains('liked')) {
        const index = data.likedBy.indexOf(user._id)
        data.likedBy.splice(index, 1)
      } else {
        if (data.likedBy) data.likedBy = [ ...data.likedBy, user._id ]
        if(!data.likedBy) data.likedBy = [user._id]
      }

      if (!data) throw new Error()
      const token = window.localStorage.getItem('token')
      if (!token) throw new Error()
      if (!userIsAuthenticated()) throw new Error()
      const header = { "Authorization": `Bearer ${token}` }
      const response = await axios.put(`/api/recipes/${_id}`, data, { headers: header })
      if (!response) throw new Error()
      setLiked(!liked)
    } catch (err) {
      console.log(err)
    }
  }

  const getUserData = async () => {
    try {
      const token = window.localStorage.getItem('token')
      if (!token) throw new Error()
      if (!userIsAuthenticated()) throw new Error()
      const header = { "Authorization": `Bearer ${token}` }
      const { data } = await axios.get('/api/profile', { headers: header })
      return data
    } catch (err) {
      console.log(err)
    }
  }

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  } 

  return (
    <div key={_id} className="column is-one-quarter-desktop is-one-third-tablet is-three-quarters-mobile full-card-container">
      <>
      
      <div className="card-container">
        
          <div className="card">
            {userIsAuthenticated() && 
              <div onClick={(event) => likeRecipe(event)} className={`${liked ? 'liked' : ''} like-recipe-button card-content is-overlay`}>
                <i className="fa fa-heart-o fa-lg" id="heart-icon"></i>  
              </div>
            }    
            <Link to={`/recipes/${_id} `}>            
            <div className="card-image">
              <figure className="image is-1by1">
              
                <img className="image" id="image-index" src={image} alt={name}></img>
              </figure>
                    
              <div className="card-header">
                <div className="card-header-title">{name}</div>
              </div>
              <div className="card-content">
                <h6 className="card-rating">Rating: {averageRating}</h6>
              </div>
            </div>
            </Link>
          </div>
          
      </div>
      </>
    </div>


  )
}

export default RecipeCard