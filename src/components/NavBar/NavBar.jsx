import React, { Component } from 'react'

import { slide as Menu } from 'react-burger-menu'
// import { useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom' 
// import Home from '../Home/Home'

import  './../NavBar/NavBar.css' ;
export class NavBar extends Component {
    render() {
        
        // const { location } = this.props.location ; 
         
           
        // const homeClass = location.pathname === '/' ? 'active-item' : '' ;
        // const aboutClass = location.pathname === '/about' ? 'active-item' : '' ;
        // const projectsClass = location.pathname === '/projects' ? 'active-item' : '' ;
        // const skillClass = location.pathname === '/skills' ? 'active-item' : '' ;
        // const contactClass = location.pathname === '/contact' ? 'active-item' : '' ;

        const homeClass = 'active-item';
        const aboutClass = 'active-item';
        const projectsClass = 'active-item';
        const skillClass = 'active-item';
        const contactClass = 'active-item';
        return (


            <div>

                <Menu>
                    {/* <a id="home" className="menu-item" href="/">Home</a> */}
 
            <Link  to="/"  className= { `menu-item  ${homeClass} `}>
                        Home 
                    </Link>
                    <Link  to="/about"  className= { `menu-item  ${aboutClass} `}>
                        About 
                    </Link>
                    <Link  to="/projects"  className= { `menu-item  ${projectsClass} `} >
                        Projects 
                    </Link>
                    <Link  to="/skills"  className= { `menu-item  ${skillClass} `}>
                        Skills 
                    </Link>
                    <Link  to="/contact"  className= { `menu-item  ${contactClass} `}>
                        Contacts 
                    </Link>
                    

                </Menu>

            </div>



        )
    }
}

export default NavBar