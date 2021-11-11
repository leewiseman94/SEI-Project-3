import express from 'express'
import { findUser, loginUser, registerUser } from '../controllers/auth.js'
import { getAllRecipes, addRecipe, getSingleRecipe, updateRecipe, deleteRecipe, addAReview, deleteAReview, updateAReview } from '../controllers/recipes.js'
import { getUserProfile } from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

router.route('/recipes')
  .get(getAllRecipes)
  .post(secureRoute, addRecipe)

router.route('/recipes/:id')
  .get(getSingleRecipe)
  .put(secureRoute, updateRecipe)
  .delete(secureRoute, deleteRecipe)


router.route('/recipes/:id/reviews')
  .post(secureRoute, addAReview)

router.route('/recipes/:id/reviews/:reviewId')
  .delete(secureRoute, deleteAReview)
  .put(secureRoute, updateAReview)

router.route('/register')
  .post(registerUser)

router.route('/users')
  .post(findUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getUserProfile)

export default router