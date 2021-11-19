/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from './helpers/auth'
import AddandUpdate from './AddandUpdate'
import { userIsAuthenticated } from './helpers/auth'


const AddRecipe = () => {
  const history = useHistory()
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [method, setMethod] = useState([])
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    image: '',
    description: '',
    ingredients: null,
    method: null,
    prepTime: '',
    cookingTime: '',
    difficulty: '',
    servingSize: null,
    nutritionalInfo: '',
    tags: '',
    course: '',
    allergens: ''
  })

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

  useEffect(()=> {
    if (!userIsAuthenticated()) {
      history.push('/')
    }
  }, [])


  const displayImage =(event) => {
      let img = event.target.files[0];
      // setImageUrl(img.name)
      setImage(URL.createObjectURL(img))

  }
  const handleChange =(event) => {
    const newFormData = { ...newRecipe, [event.target.name]: event.target.value }
    setNewRecipe(newFormData)
  }

  const displayDescription = () => {
    setDescription(newRecipe.description)
    newRecipe.description = ''
  }
  const displayIngredient = () => {
    const newIngredient = newRecipe.ingredients
    setIngredients([ ...ingredients, newIngredient ])
    newRecipe.ingredients =''
  }

  const displayMethod = () => {
    const newStep = newRecipe.method
    setMethod([ ...method, newStep])
    newRecipe.method = ''
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    newRecipe.description = description
      if (ingredients.length === 0) {
        newRecipe.ingredients = ''
      } else {
        newRecipe.ingredients = ingredients
      }
      if (method.length === 0 ) {
        newRecipe.method = ''
      } else {
        newRecipe.method = method
      }
      newRecipe.image = image
      if (newRecipe.tags !== '') {
        const tagsArray = newRecipe.tags.split(',')
        newRecipe.tags = tagsArray
      }
      if (newRecipe.nutritionalInfo !== '') {
        const nutritionalInfoArray = newRecipe.nutritionalInfo.split(',')
        newRecipe.nutritionalInfo = nutritionalInfoArray
      }
      if (newRecipe.allergens !== '') {
        const allergensArray = newRecipe.allergens.split(',')
        newRecipe.allergens = allergensArray
      }
    try {
      const { data } = await axios.post('/api/recipes', newRecipe, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
      const newRecipeId = data._id
      history.push(`/recipes/${newRecipeId}`)
    } catch (err){
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    }
  }


  return (
    <>
    <AddandUpdate
      image={image}
      description={description}
      ingredients={ingredients}
      method={method}
      newRecipe={newRecipe}
      errors={errors}
      displayImage={displayImage}
      displayDescription={displayDescription}
      displayIngredient={displayIngredient}
      displayMethod={displayMethod}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  {/* <section className='addRecipe'>
      <form className='form' onSubmit={handleSubmit}>
      <div className="field is-vertical">
        <div className='is-flex is-justify-content-space-around	'>
      <div className='subtitle is-3'>Add Your Recipe</div>
          <button className="button" type='submit' id='addRecipeSubmit' >
            Add Recipe
          </button>
          </div>
      <hr/>
      <div className='field is-grouped ml-6'>
  <label className='label mr-6 mt-1'>Difficulty</label>
        <p className="control">
          <span className="select is-fullwidth">
            <select onChange={handleChange} name='difficulty' 
            className={`input ${errors.difficulty && 'is-danger' } `} 
            >
              <option value=''></option>
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>
            </select>
          </span>
          {errors.difficulty && <p className='is-danger subtitle mt-2 mb-2 ml-0'>Please select an option</p>}
        </p>
        <label className='label ml-4 mr-5 mt-1'>Course</label>
        <p className="control">
          <span className="select is-fullwidth">
            <select onClick={handleChange} name='course'
            >
              <option value=''></option>
              <option value='Starter'>Starter</option>
              <option value='Main'>Main</option>
              <option value='Dessert'>Dessert</option>
              <option value='Snack'>Snack</option>
            </select>
          </span>
        </p>
        <label className='label ml-4 mr-5 mt-1'>Serves</label>
        <p className="control">
          <span className="select is-fullwidth">
            <select onClick={handleChange} name='servingSize'
              className={`input ${errors.servingSize && 'is-danger' } `} 
              >
              <option value=''></option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
            </select>
          </span>
          {errors.servingSize && <p className='is-danger subtitle mt-2 mb-2 ml-0'>Please select an option</p>}
        </p>
    </div>
      <div className="field-body">
      <div className="field mr-5 ml-6">
        <p className="control is-expanded">
          <input type="text" placeholder="Recipe Name" name='name' value={newRecipe.name} onChange={handleChange}
            className={`input ${errors.name && 'is-danger' } `} 
            />
          {errors.name && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add a name</p>}

        </p>
        <br/>
        <p className="control is-expanded ">
          <input className="input"  placeholder="Allergens: vegetarian, vegan, gluten free..." name='allergens' value={newRecipe.allergens} onChange={handleChange}/>
        </p>
        <br/>
        <p className="control is-expanded ">
        <input className="input"  placeholder="Nutritional Information: iron: 3mg, protein: 8g..." name='nutritionalInfo' value={newRecipe.nutritionalInfo} onChange={handleChange}/>
        </p>
      </div>
      <div className="field mr-6">
        <p className="control is-expanded ">
        <input  placeholder="Preparation Time" name='prepTime' value={newRecipe.prepTime} onChange={handleChange}
        className={`input ${errors.prepTime && 'is-danger' } `} 
        />
        {errors.prepTime && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add preparation time for this recipe</p>}
        </p>
        <br/>
        <p className="control is-expanded ">
        <input placeholder="Cooking Time" name='cookingTime' value={newRecipe.cookingTime} onChange={handleChange}
          className={`input ${errors.cookingTime && 'is-danger' } `} 
          />
          {errors.cookingTime && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add cooking time for this recipe</p>}
        </p>
        <br/>
        <p className="control is-expanded ">
        <input className="input"  placeholder="Tags: Italian, Curry, slow-cooked..." name='tags' value={newRecipe.tags} onChange={handleChange}/>
        </p>
      </div>
    </div>
  </div>

  <div className="field is-horizontal mt-6">
      <div className="field-label is-normal" id='label'>
      <label className="label" >Image</label>
      </div>
      <div className="field-body">
        <div className="control ">
            <input type="file" name="image" value={newRecipe.image} onChange={displayImage} 
              className={`${errors.image && 'is-danger' } `} 
              />
              {errors.image && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add an image</p>}
          </div>
          </div>
          <div className='field-body'>
          <img className='pt-0 image is-1by1' id='addimage' alt={image} src={image} />
          </div>
    </div>


  <div className="field is-horizontal mt-6">
      <div className="field-label is-normal" id='label'>
      <label className="label" >Description</label>
      </div>
    <div className="field-body">
        <div className="control ">
          <textarea id='addDescriptionBox' type='text' name='description' placeholder='Short description of your dish' value={newRecipe.description} onChange={handleChange}
            className={`input ${errors.description && 'is-danger' } `} 
            />
            {errors.description && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add a description </p>}
        </div>
        <div className='control'>
        <button className='button' type='button' id='addIngredientButton' onClick={displayDescription}>Add
        </button>
      </div>
    </div>
    <div className="field-body ">
        <h4><img src={logoIMG} alt="method-icon" width="40px"></img><strong> Description</strong>
        <hr/>
        <div className='mr-6'>{description && description}</div>
        </h4>
        </div>
  </div>

  <div className="field is-horizontal mt-6">
  <div className="field-label is-normal " id='label'>
    <label className="label " >Ingredients</label>
    </div>
    <div className="field-body">
      <div className='control'>
      <input id='addIngredientBox' type='text' name='ingredients' placeholder='eg: 2 eggs' value={newRecipe.ingredients} onChange={handleChange}
          className={`input ${errors["ingredients.0"] && 'is-danger' } `} 
          />
          {errors["ingredients.0"] && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add your ingredients</p>}
      </div>
      <div className='control'>
        <button className='button' type='button' id='addIngredientButton' onClick={displayIngredient}>Add 
        </button>
      </div>
  </div>
  <div className="field-body ">
        <h4 ><img src={ingredientsIMG} alt="method-icon" width="40px"></img><strong> Ingredients added </strong>
        <hr/>
          {ingredients && ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
        </h4>
        </div>
  </div>
    
    <br/>
    



    <div className="field is-horizontal mt-4 mb-6">
      <div className="field-label is-normal" id='label'>
        <label className="label" >Method</label>
      </div>
    <div className="field-body">
        <div className="control">
          <textarea id='method' name='method' placeholder="Write each step here" value={newRecipe.method} onChange={handleChange}
            className={`textarea ${errors["method.0"] && 'is-danger' } `} 
            ></textarea>
            {errors["method.0"] && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add your method</p>}
          <button className='button' type='button' id='addStepButton' onClick={displayMethod}>Add another Step</button>
        </div>
    </div> 
    <div className="field-body">
      <h4><img src={recipeMethod} alt="method-icon" width="40px"></img><strong> Method</strong>
        <hr/>
        {method && method.map((step, index) => {
          return(
            <div key={index}>
            <div ><strong>Step {index + 1 }</strong></div>
            <div className='mr-6'>{step}</div>
            <br/>
            </div>
          )})}
          </h4>
    </div>
    </div>
</form>
</section> */}
    
    </>
  )
}

export default AddRecipe