import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from './helpers/auth'
import AddandUpdate from './AddandUpdate'


const UpdateRecipe = () => {
  const history = useHistory()
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [method, setMethod] = useState([])
  const [recipe, setRecipe] = useState([])
  const { id } = useParams()


  useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get(`/api/recipes/${id}`)
    // setRecipe(data)
    setRecipe( {...recipe, name: data.name, description: data.description, ingredients : data.ingredients, method: data.method, prepTime: data.prepTime, cookingTime: data.cookingTime, difficulty: data.difficulty, servingSize: data.servingSize, nutritionalInfo: data.nutritionalInfo, tags: data.tags, course: data.course, allergens : data.allergens})
    console.log(data.ingredients)
  }
  getData()
}, [id]) 

  const [errors, setErrors] = useState({
  name: '',
  image: '',
  description: '',
  ingredients: '',
  method: '',
  prepTime: '',
  cookingTime: '',
  difficulty: '',
  servingSize: null,
  nutritionalInfo: [],
  tags: [],
  course: '',
  allergens: []
})


  const displayImage =(event) => {
    let img = event.target.files[0];
    // setImageUrl(img.name)
    setImage(URL.createObjectURL(img))

  }
  const handleChange =(event) => {
  const newFormData = { ...recipe, [event.target.name]: event.target.value }
  setRecipe(newFormData)
  }

  const displayDescription = () => {
  setDescription(recipe.description)
  recipe.description = ''
  }
  const displayIngredient = () => {
  const newIngredient = recipe.ingredients
  setIngredients([ ...ingredients, newIngredient ])
  recipe.ingredients =''
  }

  const displayMethod = () => {
  const newStep = recipe.method
  setMethod([ ...method, newStep])
  recipe.method = ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    recipe.description = description
      if (ingredients.length === 0) {
        recipe.ingredients = ''
      } else {
        recipe.ingredients = ingredients
      }
      if (method.length === 0 ) {
        recipe.method = ''
      } else {
        recipe.method = method
      }
      recipe.image = image
      if (recipe.tags !== '') {
        const tagsArray = recipe.tags.split(',')
        recipe.tags = tagsArray
      }
      if (recipe.nutritionalInfo !== '') {
        const nutritionalInfoArray = recipe.nutritionalInfo.split(',')
        recipe.nutritionalInfo = nutritionalInfoArray
      }
      if (recipe.allergens !== '') {
        const allergensArray = recipe.allergens.split(',')
        recipe.allergens = allergensArray
      }
    try {
      const { data } = await axios.post('/api/recipes', recipe, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
      const newRecipeId = data._id
      console.log(data._id)
      history.push(`/recipes/${newRecipeId}`)
    } catch (err){
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    }
  }

  console.log(recipe.ingredients)
  return (
    <AddandUpdate
      newRecipe={recipe}
      image={recipe.image}
      description={recipe.description}
      ingredients={recipe.ingredients}
      method={recipe.method}
      errors={errors}
      displayImage={displayImage}
      displayDescription={displayDescription}
      displayIngredient={displayIngredient}
      displayMethod={displayMethod}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />

  )
}

export default UpdateRecipe