import React from 'react'
// import { Link } from 'react-router-dom'

const CookingClass = () => {

  return(
    <>
      <nav className="breadcrumb" aria-label="breadcrumbs" id="master-breadcrumb">
        <ul>
          <li><a href="/" className="has-text-grey">Platester</a></li>
          <li><a href="/recipes" className="has-text-grey">Recipes</a></li>
          <li class="is-active"><a href="/Masterclass" aria-current="page">Cooking classes</a></li>
        </ul>
      </nav>
        <section className="section cards"  id="master-class-card">
          <div className="container">
            <div className="columns is-multiline">        
              <div className="column">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0fxL8v2dMho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="column">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UZ5ChKUTiJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="column">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/72dQonQa9jE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="column">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZQR8_pD2enk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="column">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/b6Yqw6J8WHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="column">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/e0OEmrHzJjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="column">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/CZAWaLgmy9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>         
            </div>
          </div>
        </section>

          
        

      

        


    </>
  
    
  
  )
  

}



export default CookingClass