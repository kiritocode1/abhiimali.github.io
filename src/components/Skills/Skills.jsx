import React from 'react'
import { skillList } from '../../assets/skillsData'
import './../App/App.css'


import Header from './../Header/Header'
import SkillCard from './SkillCard'
const Skills = () => {
  return (

    <div className='section-container' >

      <Header heading=" Skills " details=" Passinate About Technology | Exploring Everything | Here The Tech Stack I Have Worked It   ! " />

      <div className="skill-card-conatainer">

        {

              skillList.map((Skill) => {
              return <SkillCard skillName={Skill.skillName} skillUrl={Skill.skillUrl} /> 
            })

        }

      </div>

    </div>


  )
}

export default Skills