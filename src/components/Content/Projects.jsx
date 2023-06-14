import {useState} from 'react';
import DetailSection from './DetailSection';
import './Projects.css';

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
      Return to Projects
    </span>
    </>
  )
}

function ProjectMenu({projects, setDisplayedProject}) {

  return(
    <div className="project-menu-container">
      {projects.map(project => 
        <div className="project-menu-option" key={project.title}>
          <h3>{project.title}</h3>
          <div 
            className="project-menu-option-image-container"
            onClick={()=>{setDisplayedProject(project)}}
          >
            <img 
              className="project-menu-option-image"
              src={project.image} 
              alt={project.title} 
            />
          </div>
        </div>  
      )}
    </div>
  )
}