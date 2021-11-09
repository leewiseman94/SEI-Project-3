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
    const newRecipe = { ...req.body }
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
    const singleRecipe = await Recipe.findById(id)
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
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
    if (!updatedRecipe) throw new Error()
    return res.status(202).json(updatedRecipe)

  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not found' })
  }
}

