import './styles/App.css';
import React, { useState } from 'react'
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
import TsAndCs from './components/Ts&Cs'
import Privacy from './components/Privacy'
import CompanyDetails from './components/CompanyDetails'
import Footer from './components/Footer'
import CookingClass from './components/CookingClass';
import Inspiration from './components/Inspiration';



function App() {
  // const [recipes, setRecipes] = useState([])
  const [isShowLoginOrRegister, setIsShowLoginOrRegister] = useState(false)

  const handleLoginClick = () => {
    setIsShowLoginOrRegister((isShowLoginOrRegister) => !isShowLoginOrRegister)
  }

  const handleLoginOrRegister = (bool) => {
    setIsShowLoginOrRegister(bool)
  }



  return (
    <BrowserRouter>
      <Navbar handleLoginClick={handleLoginClick}/>
      <LoginorSignUp isShowLoginOrRegister={isShowLoginOrRegister} handleLoginClick={handleLoginClick} handleLoginOrRegister={handleLoginOrRegister} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recipes' component={RecipeIndex}/>
        <Route exact path='/recipes/:id' component={RecipeShow}/>
        <Route exact path='/recipes/:id/edit' component={UpdateRecipe}/>
        <Route exact path='/profile' component={UserProfile} />
        <Route exact path='/recipes/:id/reviews' component={AddandDeleteReview}/>
        <Route exact path='/Ts&amp;Cs' component={TsAndCs} />
        <Route exact path='/Privacy' component={Privacy} />
        <Route exact path='/CompanyDetails' component={CompanyDetails} />
        <Route exact path='/CookingClass' component={CookingClass} />
        <Route exact path='/add' component={AddRecipe}/> 
        <Route exact path='/inspiration' component={Inspiration}/> 

      </Switch>
      <Footer />
    </BrowserRouter>
  )

}



export default App;
