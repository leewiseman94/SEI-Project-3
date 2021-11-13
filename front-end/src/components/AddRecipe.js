import React, { useState } from 'react'


const AddRecipe = () => {
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
    nutritionalInfo: [''],
    tags: [''],
    course: '',
    allergens: ['']
  })

  const handleChange =(event) => {
    const newFormData = { ...newRecipe, [event.target.name]: event.target.value }
    setNewRecipe(newFormData)
  }


  console.log(newRecipe)
  return (
    <>
    <section className='addRecipe'>
      <form className='form'>
      <div className="field is-vertical">
      <h2 className='subtitle is-3 ml-6'>Add Your Recipe</h2>
      <hr/>
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
          <input className="input"  placeholder="Allergens" name='allergens: vegetarian, vegan, gluten free...' value={newRecipe.allergens} onChange={handleChange}/>
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
        <input className="input"  placeholder="Tags" name='tags' value={newRecipe.tags} onChange={handleChange}/>
        </p>
        <br/>
      </div>
    </div>
  </div>
  
    <div className='field is-grouped is-grouped-left ml-6'>
  <label className='label mr-4 mt-1'>Difficulty</label>
        <p className="control">
          <span class="select is-fullwidth">
            <select onClick={handleChange} name='difficulty'>
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>
            </select>
          </span>
        </p>
        <label className='label ml-6 mr-5 mt-1'>Course</label>
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
        <label className='label ml-6 mr-5 mt-1'>Serves</label>
        <p className="control">
          <span class="select is-fullwidth">
            <select onClick={handleChange} name='servingSize'>
              <option value='1'>1</option>
              <option value='1'>2</option>
              <option value='1'>3</option>
              <option value='1'>4</option>
              <option value='1'>5</option>
              <option value='1'>6</option>
              <option value='1'>7</option>
              <option value='1'>8</option>
            </select>
          </span>
        </p>
    </div>
    <br/>
    <div className="field is-horizontal">
    <div className="field-label is-normal">
    <label className="label pr-6">Description</label>
    </div>
    <div className="field-body">
      <div className="field is-expanded mr-6">
          <p className="control is-expanded">
            <input className="input" type="text" name='description' placeholder='Short description of your dish' value={newRecipe.description}/>
          </p>
      </div>
    </div>
  </div>

  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">Ingredients</label>
    </div>
    <div className="field-body">
      <div className="field is-narrow mr-5">
        <div className="control">
          <div className="select is-fullwidth">
            <select>
              <option>Business development</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="field is-horizontal">
    <div className="field-label">
      <label className="label">Already a member?</label>
    </div>
    <div className="field-body">
      <div className="field is-narrow mr-5">
        <div className="control">
          <label className="radio">
            <input type="radio" name="member"/>
            Yes
          </label>
          <label className="radio">
            <input type="radio" name="member"/>
            No
          </label>
        </div>
      </div>
    </div>
  </div>

  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">Subject</label>
    </div>
    <div className="field-body">
      <div className="field mr-5">
        <div className="control">
          <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity"/>
        </div>
        <p className="help is-danger">
          This field is required
        </p>
      </div>
    </div>
  </div>

  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">Question</label>
    </div>
    <div className="field-body">
      <div className="field mr-5">
        <div className="control">
          <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
        </div>
      </div>
    </div>
  </div>

  <div className="field is-horizontal">
    <div className="field-label">
    </div>
    <div className="field-body">
      <div className="field mr-5">
        <div className="control">
          <button className="button is-primary">
            Send message
          </button>
        </div>
      </div>
    </div>
</div>
</form>
</section>
    </>
  )
}

export default AddRecipe