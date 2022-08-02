import React from 'react'

import './Projects.css'

const ProjectCard = ( { projectName , projectDescription , projectUrl , imageUrl , liveUrl }) => {
  return (
    <div  className='project-card'>
            <div className="image-container">
                    <a href={projectUrl} className="extranal-project-link" >
                        <img src={imageUrl} alt="project" className="project-image" />
                    </a>
            </div>
            <div className="project-details-container">
                    <h2 className='projects-heading'>{projectName}</h2>
                    <p className='project-details'> {projectDescription}</p> 
                    <a href={liveUrl} className='project-yt-link' > Live   </a> 
            </div>

    </div>
  )
}

export default ProjectCard