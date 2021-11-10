// import logo from './logo.svg';
import './styles/App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'

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

      <Switch>
        <Route exact path='/' component={Home}/>





      </Switch>
    
    </BrowserRouter>
  )

}



export default App;
