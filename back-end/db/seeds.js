import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Recipe from '../models/recipe.js'
import recipeData from './data/recipes.js'
import UserData from './data/users.js'
import User from '../models/user.js'

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('🧬 Connected to the DB')

    await mongoose.connection.db.dropDatabase()
    console.log('🎸 DB has been dropped')

    const users = await User.create(UserData)
    console.log('✌️ User added to db', users)
    const recipesWithOwners = recipeData.map(recipe => {
      recipe.owner = users[0]._id
      return recipe
    })

    const recipes = await Recipe.create(recipesWithOwners)
    console.log(`🍔 DB has been seeded with ${recipes.length} recipes`)

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