import React from 'react'
import { Link } from 'react-router-dom'

import homeAnime from './../../assets/home_anime.gif' 
import './../Home/Home.css' 
function Home() {
  return (
    <div  className='home-container'>

      <div className='header-text'>
        <h1>  Hi Welcome To My Portfolio </h1>
        <p> This Is Abhijit Mali Freelance Security Researcher & Full Stack Web Dev </p>
  
      </div>

      <div className="head-btns">
          <Link to='/about' className='btn-btn-white'>
            <p className='btn-text' > Know More About Me  </p>
          </Link>

          <Link to='/contact' className='btn-btn-white'>
            <p className='btn-text' > Connect With Me  </p>
          </Link>

      </div>

      {/* <div className='splash-image'>

        < src={homeAnime} alt='image ' >  <
       </div> */}

       <div className="splash-image">
        <img src={homeAnime} alt='img' ></img>
       </div>
        

    </div>
  )
}

export default Home
