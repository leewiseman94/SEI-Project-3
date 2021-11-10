import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const reviewsSchema = new mongoose.Schema({
  subject: { type: String, required: true, maxlength: 50 },
  comments: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 300 },
  ingredients: [{ type: String, required: true }],
  method: [{ type: String, required: true }],
  prepTime: { type: String, required: true },
  cookingTime: { type: String, required: true },
  difficulty: { type: String, required: true },
  servingSize: { type: Number, required: true },
  nutritionalInfo: { type: Object, required: false },
  tags: [{ type: String, required: false }],
  course: { type: String, required: false },
  allergens: [{ type: String, required: false }], 
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  likedBy: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  reviews: [reviewsSchema]
})

recipeSchema.plugin(uniqueValidator)

export default mongoose.model('Recipe', recipeSchema)