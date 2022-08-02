import React from 'react'
import './../App/App.css'

import Header from './../Header/Header'

import ProjectCard  from './ProjectCard' 
import './Projects.css'
import { projectsData } from './../../assets/projectsData'


const  Projects = () =>  {
  return (
    <div className='section-container' >
        <Header heading=" My Projects " details=" Take A Look At What I have Done Till The Date " />

        <div className="project-cards-container">

            {

                  projectsData.map((project) => {

                    return  <ProjectCard projectName={project.projectName} 
                                          projectUrl={project.projectUrl}
                                          imageUrl={project.imageUrl}
                                          projectDescription ={project.projectDescription} 
                                          liveUrl={project.liveUrl} />

                  })

            }


        </div>
    </div>
  )
}

export default Projects