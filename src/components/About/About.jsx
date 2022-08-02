import React from 'react'
import './../App/App.css'
// import './../Header/Header'
import Header from './../Header/Header'

import './../About/About.css'
// import React from 'react'

import anime from './../../assets/about_anime.gif' 
const About = () => {
  return (
    <div className='about-page'>
      <Header heading=" About Me "
        details="  I am a Full Stack Web Developer By Profession And  Security Researcher By Passion 
       "

      />

      <div className="about-main">

        <div className="about-main-left">
          {/*  For Left Part Links n ALL */}

          <h3 className="about-sub-headd">
            Web Developer
          </h3>
          <p className='about-details'>
            I'm Abhijit Mali , a student, developer - web-developer for the most part.

            I make beautiful and expressive Websites and Apps with Emerging Technologies.

          </p>
          <h3 className="about-sub-head">
            Security Researcher
          </h3>

          <p className='about-details'>
            I Am having experience in Web Application, Android Application, API Testing, Source Code Analysis, Vulnerability Assessment and Penetration Testing. As a bug bounty Hunter, I have helped many companies secure themselves by reporting breaking point in there system.


          </p>
        </div>



        <div className="about-main-right">

          {/* For Image  */}  
          <img src={anime} alt=' anime' />
        </div>


      </div>


    </div>
  )
}

export default About
