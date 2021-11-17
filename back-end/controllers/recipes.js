import Recipe from '../models/recipe.js'


// * index
export const getAllRecipes = async (_req, res) => {
  try {
    const recipes = await Recipe.find()
    return res.status(200).json(recipes)

  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not found' })
  }
}

// * add recipe
export const addRecipe = async (req, res) => {
  try {
    const newRecipe = { ...req.body, owner: req.currentUser._id }
    const recipeToAdd = await Recipe.create(newRecipe)
    return res.status(201).json(recipeToAdd)

  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

export const getSingleRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const singleRecipe = await Recipe.findById(id).populate('owner')
    if (!singleRecipe) throw new Error()
    return res.status(200).json(singleRecipe)

  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const recipeToDelete = await Recipe.findById(id)
    if (!recipeToDelete) throw new Error()
    if (!recipeToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorized')
    await recipeToDelete.remove()
    return res.sendStatus(204)

  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'not found' })
  }
}

export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params
    console.log(req.body)
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
    if (!updatedRecipe) throw new Error()
    if (!req.body.likedBy) if (!updatedRecipe.owner.equals(req.currentUser._id)) throw new Error('Unauthorized')

    return res.status(202).json(updatedRecipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not found' })
  }
}

export const addAReview = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error()
    const newReview = { ...req.body, owner: req.currentUser._id }
    recipe.reviews.push(newReview)
    await recipe.save({ validateModifiedOnly: true })
    return res.status(200).json(recipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json(err)
  }
}

export const deleteAReview = async (req, res) => {
  try {
    const { id, reviewId } = req.params
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error()
    const reviewToDelete = recipe.reviews.id(reviewId)
    if (!reviewToDelete) throw new Error()
    if (!reviewToDelete.owner.equals(req.currentUser._id)) throw new Error()
    await reviewToDelete.remove()
    await recipe.save({ validateModifiedOnly: true })
    return res.sendStatus(204)

  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'something went wrong' })
  }
}

export const updateAReview = async (req, res) => {
  try {
    const { id, reviewId } = req.params
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error() 
    const reviewToUpdate = recipe.reviews.id(reviewId)
    if (!reviewToUpdate) throw new Error()
    if (!reviewToUpdate.owner.equals(req.currentUser._id)) throw new Error()
    reviewToUpdate.set(req.body)
    recipe.save({ validateModifiedOnly: true })
    return res.status(200).json(recipe)
  } catch (err){
    console.log(err)
    return res.status(404).json({ 'message': 'something went wrong' })
  }
}
