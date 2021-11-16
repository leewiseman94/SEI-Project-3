import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Recipe from '../models/recipe.js'
import edData from './data/ed.js'
import issraData from './data/issra.js'
import leeData from './data/lee.js'
import reeData from './data/ree.js'
// import recipeData from './data/recipes.js'
import UserData from './data/users.js'
import User from '../models/user.js'

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('🧬 Connected to the DB')

    await mongoose.connection.db.dropDatabase()
    console.log('🎸 DB has been dropped')

    // const users = await User.create(UserData)
    // console.log('✌️ User added to db', users)
    // const recipesWithOwners = recipeData.map(recipe => {
    //   recipe.owner = users[0]._id
    //   return recipe
    // })

    // const recipes = await Recipe.create(recipesWithOwners)
    // console.log(`🍔 DB has been seeded with ${recipes.length} recipes`)

    const users = await User.create(UserData)
    console.log('✌️ Users added to db')

    // adding users to recipe data
    // Ed

    const edsRecipes = edData.map(recipe => {
      recipe.owner = users[1]._id
      if (recipe.reviews) {
        recipe.reviews.map(review => {
          const randomIndex = Math.floor(Math.random() * users.length)
          review.owner = users[randomIndex]._id
          return review
        })
      }
      return recipe
    })

    const recipes1 = await Recipe.create(edsRecipes)
    console.log(`🍔 DB has been seeded with ${recipes1.length} recipes by ${users[1].fullName}`)

    // Issra

    const issrasRecipes = issraData.map(recipe => {
      recipe.owner = users[2]._id
      if (recipe.reviews) {
        recipe.reviews.map(review => {
          const randomIndex = Math.floor(Math.random() * users.length)
          review.owner = users[randomIndex]._id
          return review
        })
      }
      return recipe
    })

    const recipes2 = await Recipe.create(issrasRecipes)
    console.log(`🍔 DB has been seeded with ${recipes2.length} recipes by ${users[2].fullName}`)


    // Lee

    const leesRecipes = leeData.map(recipe => {
      recipe.owner = users[3]._id
      if (recipe.reviews) {
        recipe.reviews.map(review => {
          const randomIndex = Math.floor(Math.random() * users.length)
          review.owner = users[randomIndex]._id
          return review
        })
      }
      return recipe
    })

    const recipes3 = await Recipe.create(leesRecipes)
    console.log(`🍔 DB has been seeded with ${recipes3.length} recipes by ${users[3].fullName}`)

    // Ree

    const reesRecipes = reeData.map(recipe => {
      recipe.owner = users[4]._id
      if (recipe.reviews) {
        recipe.reviews.map(review => {
          const randomIndex = Math.floor(Math.random() * users.length)
          review.owner = users[randomIndex]._id
          return review
        })
      }
      return recipe
    })

    const recipes4 = await Recipe.create(reesRecipes)
    console.log(`🍔 DB has been seeded with ${recipes4.length} recipes by ${users[4].fullName}`)

    await mongoose.connection.close()
    console.log('🥸 Connection to DB closed')

  } catch (err) {
    console.log('🆘 Something has gone wrong seeding the db')
    console.log(err)
    await mongoose.connection.close()
    console.log('🥸 Connection to DB closed')
  }
}
seedDatabase()