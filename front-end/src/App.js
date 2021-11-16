import './styles/App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import RecipeIndex from './components/RecipeIndex'
import RecipeShow from './components/RecipeShow'
import LoginorSignUp from './components/LoginorSignUp'
import AddRecipe from './components/AddRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import UserProfile from './components/UserProfile';
import AddandDeleteReview from './components/AddandDeleteReview'



function App() {
  const [recipes, setRecipes] = useState([])
  const [isShowLoginOrRegister, setIsShowLoginOrRegister] = useState(false)
  // const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/recipes')
        setRecipes(data)
      } catch(err) {
        // setHasError(true)
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log(recipes)
  const handleLoginClick = () => {
    setIsShowLoginOrRegister((isShowLoginOrRegister) => !isShowLoginOrRegister)
  }

  const handleLoginOrRegister = (bool) => {
    setIsShowLoginOrRegister(bool)
  }



  return (
    // <h1>platester</h1>
    <BrowserRouter>
      <Navbar handleLoginClick={handleLoginClick}/>
      <LoginorSignUp isShowLoginOrRegister={isShowLoginOrRegister} handleLoginClick={handleLoginClick} handleLoginOrRegister={handleLoginOrRegister} />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/recipes' component={RecipeIndex}/>
        <Route exact path='/recipes/:id' component={RecipeShow}/>
        <Route exact path='/recipes/:id/edit' component={UpdateRecipe}/>
        <Route exact path='/profile' component={UserProfile} />
        <Route exact path='/recipes/:id/reviews' component={AddandDeleteReview}/>

        <Route exact path='/add' component={AddRecipe}/> */}
      </Switch>
    
    </BrowserRouter>
  )

}



export default App;
