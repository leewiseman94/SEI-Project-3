import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Recipe from '../models/recipe.js'
import recipeData from './data/recipes.js'

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('🧬 Connected to the DB')

    await mongoose.connection.db.dropDatabase()
    console.log('🎸 DB has been dropped')

    // const users = await User.create(userData)
    // console.log('✌️ User added to db', users)

    const recipes = await Recipe.create(recipeData)
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