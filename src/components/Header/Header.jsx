import React from 'react'

import './../Header/Header.css' 


const Header = ( { heading ,  details } ) => { 

  // const user = {
  //   heading:heading,
  //   details:details 
  // }
  return (
    <div  className='header-container'>

         <h1> {heading} </h1>
        <p> {details}  </p> 
        

    </div>
  )
}

export default Header