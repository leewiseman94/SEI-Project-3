import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getPayload } from './helpers/auth'
import RecipeCard from './RecipeCard'
import { userIsAuthenticated } from './helpers/auth'

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = window.localStorage.getItem('token')
        if (!token) throw new Error()
        if (!userIsAuthenticated()) throw new Error()
        const header = { "Authorization": `Bearer ${token}` }
        const { data } = await axios.get('/api/profile', { headers: header })
        setUserProfile(data)
        setIsLoading(false)
        
      } catch (err) {
        console.log(err)
        setIsLoading(false)
        history.push('/')
      }
    }
    getUserData()
    
  }, [history])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  return (
    <>
    <section className="section my-profile">
      <div className="container">
        <div className="page-title">
          <h2>{userProfile.fullName}</h2>
          <hr></hr>
        </div>
      </div>
    </section>
    <section className="section my-recipes">
      <div className="container">
        <div className="my-recipes-title">
          <h3>Recipes I have added</h3>
        </div>
        <div className="my-recipes-container">
          {userProfile.createdRecipes && userProfile.createdRecipes.length ? 
            <div className="container" id="index-cards">
              <div className="columns is-multiline is-flex">
                {userProfile.createdRecipes.map(recipe => {
                  return (
                    <RecipeCard key={recipe._id} {...recipe}  />
                  )
                })}
              </div>
            </div> 
            :
            <div className="container is-flex is-justify-content-center">
              <h3>{isLoading ? 'Loading...' : 'You have not created any recipes'}</h3>
            </div>
          }
      
        </div>
        <hr></hr>
      </div>
    </section>
    <section className="section my-liked-recipes">
      <div className="container liked-recipes-container">
        <div className="my-liked-recipes-title">
          <h3>Recipes I have liked</h3>
        </div>
        <div className="my-liked-recipes-container">
          {userProfile.likedRecipes && userProfile.likedRecipes.length ?  
            <div className="container" id="index-cards">
              <div className="columns is-multiline is-flex">
                {userProfile.likedRecipes.map(recipe => {
                  return (
                    <RecipeCard key={recipe._id} {...recipe} />
                  )
                })}
              </div>
            </div> 
            :
            <div className="container is-flex is-justify-content-center">
              <h3>{isLoading ? 'Loading...' : 'You have not liked any recipes'}</h3>
            </div>
          }
        </div>
        <hr></hr>
      </div>
    </section>
    </>
  )
}

export default UserProfile