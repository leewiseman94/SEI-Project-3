// import logo from './logo.svg';
import './styles/App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import RecipeIndex from './components/RecipeIndex'
import RecipeShow from './components/RecipeShow'

function App() {
  const [recipes, setRecipes] = useState([])
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
  
  console.log('recipes', recipes)

  return (
    // <h1>platester</h1>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/recipes' component={RecipeIndex}/>
        <Route exact path='/recipes/:id' component={RecipeShow}/>



        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    
    </BrowserRouter>
  )

}



export default App;
