/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from './helpers/auth'
// import AddandUpdate from './AddandUpdate'
import logoIMG from '../images/IMG_0630.PNG'
import ingredientsIMG from '../assets/ingredientsIMG.PNG'
import recipeMethod from '../assets/recipeMethod.PNG'
import { userIsAuthenticated } from './helpers/auth'


const UpdateRecipe = () => {
  const history = useHistory()

  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [method, setMethod] = useState([])
  const [tags, setTags] = useState([])
  const [nutritionalInfo, setNutritionalInfo] = useState([])
  const [allergens, setAllergens] = useState([])
  const [stepIndex, setStepIndex] = useState(null)
  const [ingredientIndex, setIngredientIndex] = useState(null)
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
  const { id } = useParams()


  useEffect(() => {
  const getData = async () => {
    if (!userIsAuthenticated()) {
      history.push('/')
    }
    const { data } = await axios.get(`/api/recipes/${id}`)
    setNewRecipe( {...newRecipe, name: data.name, description: data.description, prepTime: data.prepTime, cookingTime: data.cookingTime, difficulty: data.difficulty, servingSize: data.servingSize, nutritionalInfo: data.nutritionalInfo, tags: data.tags, course: data.course, allergens : data.allergens})
    setDescription(data.description)
    setMethod(data.method)
    setIngredients(data.ingredients)
    setTags(data.tags)
    setNutritionalInfo(data.nutritionalInfo)
    setAllergens(data.allergens)
    setImage(data.image)
  
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
    // if (event.target.name === ingredients ||event.target.name === method || event.target.name === newRecipe.tags)
    // event.target.value.split(',')
    const newFormData = { ...newRecipe, [event.target.name]: event.target.value }
    setNewRecipe(newFormData)
  }

  const displayDescription = () => {
  setDescription(newRecipe.description)
  // recipe.description = ''
  }





  const displayIngredient = () => {
    if (ingredientIndex === null) {
  setIngredients([ ...ingredients, newRecipe.ingredients ])
    } else {
      const newIngredient = ingredients.splice(ingredientIndex, 1, newRecipe.ingredients)
    }
  setNewRecipe({...newRecipe, ingredients: ''})
  setIngredientIndex(null)
  
  }

  const editIngredient = (ingredient) => {
    setIngredientIndex(ingredients.indexOf(ingredient))
    setNewRecipe({ ...newRecipe, ingredients: ingredient } )
  }


  const deleteIngredient = (ingredient) => {
    const index = ingredients.indexOf(ingredient)
    const newIngredientsArray = [...ingredients.splice(index, 1)]
    setIngredients([...ingredients])
  }




  const displayMethod = () => {
    if (stepIndex === null) {
      setMethod([...method, newRecipe.method])

    } else {
      const newMethod = method.splice(stepIndex, 1, newRecipe.method)
    }
  setNewRecipe({ ...newRecipe, method: ''})
  setStepIndex(null)
  }

  const editMethod = (step) => {
    setStepIndex(method.indexOf(step))
    setNewRecipe({ ...newRecipe, method: step })
  }


  const deleteMethod = (step) => {
    const index = method.indexOf(step)
    const newMethodArray = [ ...method.splice(index, 1 )]
    setMethod([...method])
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
      if (newRecipe.image === '') {
        newRecipe.image = image
      }
      // newRecipe.image = image
      // if (newRecipe.tags !== '' || !newRecipe.tags.length || newRecipe.tags !== tags)  {
      //   const tagsArray = newRecipe.tags.split(',')
      //   newRecipe.tags = tagsArray
      // }
      // if (newRecipe.nutritionalInfo !== '' || !newRecipe.nutritionalInfo.length || newRecipe.nutritionalInfo !== nutritionalInfo ) {
      //   const nutritionalInfoArray = newRecipe.nutritionalInfo.split(',')
      //   newRecipe.nutritionalInfo = nutritionalInfoArray
      // }
      // if (newRecipe.allergens !== '' || !newRecipe.allergens.length || newRecipe.allergens !== allergens ) {
      //   const allergensArray = newRecipe.allergens.split(',')
      //   newRecipe.allergens = allergensArray
      // }
  
    try {
      await axios.put(`/api/recipes/${id}`, newRecipe, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )

      history.push(`/recipes/${id}`)
    } catch (err){
      setErrors(err.response.data.errors)
    }
  }

  return (
    // <AddandUpdate
    //   newRecipe={recipe}
    //   image={recipe.image}
    //   description={recipe.description}
    //   ingredients={recipe.ingredients}
    //   method={recipe.method}
    //   errors={errors}
    //   displayImage={displayImage}
    //   displayDescription={displayDescription}
    //   displayIngredient={displayIngredient}
    //   displayMethod={displayMethod}
    //   handleChange={handleChange}
    //   handleSubmit={handleSubmit}
    // />
    <section className='addRecipe'>
      <form className='form' onSubmit={handleSubmit}>
      <div className="field is-vertical">
        <div className='is-flex is-justify-content-space-around	'>
      <div className='subtitle is-3' id='formtitle'>Update Your Recipe</div>
          <button className="button" type='submit' id='addRecipeSubmit' >
            Post Recipe
          </button>
          </div>
      <hr/>
      <div className='field is-grouped' id='group-form'>
  <label className='label mr-6 mt-1' id='difficultydropdown'>Difficulty</label>
        <p className="control">
          <span class="select is-fullwidth">
            <select onChange={handleChange} name='difficulty'   value={newRecipe.difficulty}
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
          <span class="select is-fullwidth">
            <select onChange={handleChange} name='course' value={newRecipe.course}
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
        <p className="control" id='servingsizedropdown'>
          <span class="select is-fullwidth">
            <select onChange={handleChange} name='servingSize' value={newRecipe.servingSize}
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
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </span>
          {errors.servingSize && <p className='is-danger subtitle mt-2 mb-2 ml-0'>Please select an option</p>}
        </p>
    </div>
      <div className="field-body" id ='formdetails'>
      <div className="field" id='details1'>
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
      <div className="field" id='details2'>
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

  <div className="field is-horizontal mt-6" id='recipedetailsform'>
      <div className="field-label is-normal" id='label'>
      <label className="label" >Image</label>
      </div>
      <div className="field-body" id='flexForm'>
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


  <div className="field is-horizontal mt-6" id='recipedetailsform'>
      <div className="field-label is-normal" id='label'>
      <label className="label" >Description</label>
      </div>
    <div className="field-body" id='flexForm'>
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
    <div className="field-body " id='addMedhod'>
        <h4><img src={logoIMG} alt="method-icon" width="40px"></img><strong> Description</strong>
        <hr/>
        <div className='mr-6'>{description && description}</div>
        </h4>
        </div>
  </div>

  <div className="field is-horizontal mt-6" id='recipedetailsform'>
  <div className="field-label is-normal " id='label'>
    <label className="label " >Ingredients</label>
    </div>
    <div className="field-body" id='flexForm'>
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
  <div className="field-body " id='addMedhod'>
        <h4 ><img src={ingredientsIMG} alt="method-icon" width="40px"></img><strong> Ingredients added </strong>
        <hr/>
          {ingredients && ingredients.map((ingredient, index) => {
          return (
            <>
            <div >
            <li id='lineIngredients'key={index}  ><i class="fas fa-edit" onClick={() => editIngredient(ingredient)}>&nbsp;</i><i class="fas fa-trash" onClick={() => deleteIngredient(ingredient)}>&nbsp;</i> {ingredient} </li>
            </div>
            </>
          )
          }
          )}
        </h4>
        </div>
  </div>
    
    <br/>
    



    <div className="field is-horizontal mt-4 mb-6" id='recipedetailsform'>
      <div className="field-label is-normal" id='label'>
        <label className="label" >Method</label>
      </div>
    <div className="field-body" id='flexForm'>
        <div className="control">
          <textarea id='method' name='method' placeholder="Write each step here" value={newRecipe.method} onChange={handleChange}
            className={`textarea ${errors["method.0"] && 'is-danger' } `} 
            ></textarea>
            {errors["method.0"] && <p className='is-danger subtitle mt-2 mb-2 ml-0'>You need to add your method</p>}
          <button className='button' type='button' id='addStepButton' onClick={displayMethod}>Add another Step</button>
        </div>
    </div> 
    <div className="field-body" id='addMedhod'>
      <h4><img src={recipeMethod} alt="method-icon" width="40px"></img><strong> Method</strong>
        <hr/>
        {method && method.map((step, index) => {
          return(
            <div key={index}>
            <div ><i class="fas fa-edit" onClick={() => editMethod(step)}></i><i class="fas fa-trash" onClick={() => deleteMethod(step)}></i><strong> Step {index + 1 } </strong></div>
            <div className='mr-6'>{step}</div>
            <br/>
            </div>
          )})}
          </h4>
    </div>
    </div>
</form>
</section>

  )
}

export default UpdateRecipe