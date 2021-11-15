/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import recipeMethod from '../assets/recipeMethod.PNG'
import ingredientsIMG from '../assets/ingredientsIMG.PNG'


const AddRecipe = () => {
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [method, setMethod] = useState([])
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    image: '',
    description: '',
    ingredients: [''],
    method: [''],
    prepTime: '',
    cookingTime: '',
    difficulty: '',
    servingSize: 0,
    nutritionalInfo: '',
    tags: '',
    course: '',
    allergens: ''
  })


  
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

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      newRecipe.description = description
      newRecipe.ingredients = ingredients
      newRecipe.method = method
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
      console.log(newRecipe)
    } catch (err){
      console.log(err)
    }
  }

  console.log(description)
  return (
    <>
    
    <section className='addRecipe'>
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
          <span class="select is-fullwidth">
            <select onClick={handleChange} name='difficulty'>
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>
            </select>
          </span>
        </p>
        <label className='label ml-4 mr-5 mt-1'>Course</label>
        <p className="control">
          <span class="select is-fullwidth">
            <select onClick={handleChange} name='course'>
              <option value='Starter'>Starter</option>
              <option value='Main'>Main</option>
              <option value='Dessert'>Dessert</option>
              <option value='Snack'>Snack</option>
            </select>
          </span>
        </p>
        <label className='label ml-4 mr-5 mt-1'>Serves</label>
        <p className="control">
          <span class="select is-fullwidth">
            <select onClick={handleChange} name='servingSize'>
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
        </p>
    </div>
      <div className="field-body">
      <div className="field mr-5 ml-6">
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="Recipe Name" name='name' value={newRecipe.name} onChange={handleChange}/>
        </p>
        <br/>
        <p className="control is-expanded ">
          <input className="input"  placeholder="Image" name='image' value={newRecipe.image} onChange={handleChange}/>
        </p>
        <br/>
        <p className="control is-expanded ">
          <input className="input"  placeholder="Allergens: vegetarian, vegan, gluten free..." name='allergens' value={newRecipe.allergens} onChange={handleChange}/>
        </p>
      </div>
      <div className="field mr-6">
        <p className="control is-expanded ">
        <input className="input"  placeholder="Preparation Time" name='prepTime' value={newRecipe.prepTime} onChange={handleChange}/>
        </p>
        <br/>
        <p className="control is-expanded ">
        <input className="input"  placeholder="Cooking Time" name='cookingTime' value={newRecipe.cookingTime} onChange={handleChange}/>
        </p>
        <br/>
        <p className="control is-expanded ">
        <input className="input"  placeholder="Tags: Italian, Curry, slow-cooked..." name='tags' value={newRecipe.tags} onChange={handleChange}/>
        </p>
        <br/>
        <p className="control is-expanded ">
        <input className="input"  placeholder="Nutritional Information: iron: 3mg, protein: 8g..." name='nutritionalInfo' value={newRecipe.nutritionalInfo} onChange={handleChange}/>
        </p>
      </div>
    </div>
  </div>

  <div className="field is-horizontal">
      <div className="field-label is-normal" id='label'>
      <label className="label" >Description</label>
      </div>
    <div className="field-body">
        <div className="control ">
          <textarea className="input" id='addDescriptionBox' type='text' name='description' placeholder='Short description of your dish' value={newRecipe.description} onChange={handleChange}/>
        </div>
        <div className='control'>
        <a className='button' id='addIngredientButton' onClick={displayDescription}>Add
        </a>
      </div>
    </div>
    <div className="field-body ">
        <h4 className='mr-6'>Description: {description && description}
        </h4>
        </div>
  </div>

  <div className="field is-horizontal">
  <div className="field-label is-normal " id='label'>
    <label className="label " >Ingredients</label>
    </div>
    <div className="field-body">
      <div className='control'>
      <input className='input' id='addIngredientBox' type='text' name='ingredients' placeholder='eg: 2 eggs' value={newRecipe.ingredients} onChange={handleChange}/>
      </div>
      <div className='control'>
        <a className='button' id='addIngredientButton' onClick={displayIngredient}>Add 
        </a>
      </div>
  </div>
  <div className="field-body ">
        <h4 ><img src={ingredientsIMG} alt="method-icon" width="40px"></img><strong>Ingredients added </strong>
        <hr/>
          {ingredients && ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
        </h4>
        </div>
  </div>
    
    <br/>
    



      <div className="field is-horizontal">
    <div className="field-label is-normal" id='label'>
      <label className="label" >Method</label>
    </div>
    <div className="field-body">
        <div className="control">
          <textarea className="textarea" id='method' name='method' placeholder="Write each step here" value={newRecipe.method} onChange={handleChange}></textarea>
        </div>
        <div className='control'>
          <a className='button' id='addStepButton' onClick={displayMethod}>Add another Step</a>
        </div>
    </div> 
    <div className="field-body">
      <h4><img src={recipeMethod} alt="method-icon" width="40px"></img><strong>Method</strong>
        <hr/>
        {method && method.map((step, index) => {
          return(
            <div key={index}>
            <div ><strong>Step {index + 1 }</strong></div>
            <div >{step}</div>
            <br/>
            </div>
          )})}
          </h4>
    </div>
    </div>
</form>
</section>
    </>
  )
}

export default AddRecipe