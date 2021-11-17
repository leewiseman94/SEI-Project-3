import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const DeleteRecipe =({ handleLoginOrRegister, handleLoginOrRegisterPopup}) => {
  const { id } = useParams()
  const history = useHistory()

  const handleClose = () => {
    history.push(`/recipes/${id}`)
    } 


  return (
    <div className='login-popup'>
    {/* <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center pt-6"> */}
      <form className='column is-offset-one-third box ' id='form'>
        <div className="close-login-popup" >
          <i className="far fa-times-circle login-close-icon" onClick={handleClose}></i>
        </div>
        <div className='form-field-container'>
          <div className='subtitle is-4' id='signuptext'>Delete your recipe</div>
          <hr className='mt-4 mb-5'/>
          <div className='title is-6 mb-5'>Are you Sure you want to delete your recipe?</div>
          <div className='field mb-4'>
            <p className='control'>
              <button type='text' className='button is-danger' id='submit'>Yes</button>
            </p>
          </div>
          <div className='field mb-4'>
            <p className='control'>
              <button type='text' className='button is-danger' id='submit' onClick={handleClose}>No</button>
            </p>
          </div>
        </div>
      </form>
    {/* </div> */}
  </div>
  )
}


export default DeleteRecipe