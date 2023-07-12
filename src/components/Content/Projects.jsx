import {useState} from 'react';
import DetailSection from './DetailSection';

import ANCHORMAN from  '../../assets/Anchorman_timer_large.jpeg';
import XKCD from  '../../assets/xkcd_view_large.jpeg';
import D20_CALC from  '../../assets/d20_attack_comparison_large.jpeg';
import DRAGONS_HOARD from '../../assets/Dragons_Hoard_large.jpeg';

import './Projects.css';


const imageDict = {
  "Anchorman Timer!": ANCHORMAN,
  "XKCD Viewer": XKCD,
  "D20 Attack Calculator": D20_CALC,
  "Dragon's Hoard": DRAGONS_HOARD
}


export default function Projects({projects}) {
  const [displayedProject, setDisplayedProject] = useState(null);

  return (
    <>
    {(displayedProject !== null) 
      ? <Project 
        project={displayedProject} 
        setDisplayedProject={setDisplayedProject}
      />
      : <ProjectMenu 
          projects={projects} 
          setDisplayedProject={setDisplayedProject}
        />
    } 
    </>
  )
}

function Project({project, setDisplayedProject}) {

  return (
    <>
    <DetailSection about={project} />
    <span 
      className="project-return"
      onClick={()=>{setDisplayedProject(null)}}
    >
      <h5>
        Return to Projects
      </h5>
    </span>
    </>
  )
}

function ProjectMenu({projects, setDisplayedProject}) {

  return(
    <div className="project-menu-container">
      {projects.map(project => 
        <div 
          className="project-menu-option" 
          key={project.title}
          onClick={()=>{setDisplayedProject(project)}}
        >
          <h3>{project.title}</h3>
          <div 
            className="project-menu-option-image-container"            
          >
            <img 
              className="project-menu-option-image"
              src={imageDict[project.title]} 
              title={project.title} 
            />
          </div>
        </div>  
      )}
    </div>
  )
}