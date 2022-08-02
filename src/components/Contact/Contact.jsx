import React from 'react'

import './../App/App.css'

import './../Contact/Contact.css'

import Header from './../Header/Header'

import github from './../../assets/gh.png'
import linkdin from './../../assets/li.png'
import instagram  from './../../assets/in.png'



const Contact = () => {
  return (
    <>


          

          <div className='section-container' >
          <Header  heading=" Contact Me " details=" My Social Profiles " /> 

            <div className="social-profiles">

               <a href='https://github.com/abhiimali'  className='social-icons'>

                  <img src={github} alt="git" />

               </a>

               <a href='https://www.linkedin.com/in/abhiimali/'  className='social-icons'>

                  <img src={linkdin} alt="git" />
                  
               </a>
               <a href='https://www.instagram.com/abhii_mali/?hl=en'  className='social-icons' >

                  <img src={instagram} alt="git" />
                  
               </a>
               


            </div>


          </div>
    </>
  )
}

export default Contact