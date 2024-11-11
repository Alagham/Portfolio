import React, { useState } from 'react';
import "./Skills.css";
import Skillcard from '../../components/Skills/Skillcards/Skillcard';
import { SKILLS } from '../../utils/data';
import Skillsinfocard from './SkillsinfoCard/Skillsinfocard';


const Skills = () =>{

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  
  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <Skillcard
              key={item.title}
              icon={item.icon}
              title={item.title}  
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}   
            />
          ))}
        </div>
        <div className="skills-info">
          <Skillsinfocard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
