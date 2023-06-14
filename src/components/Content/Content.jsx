import { useState } from 'react';
import { Container } from 'react-bootstrap';

import ContentNav from './ContentNav';
import PortraitIcon from './PortraitIcon';
import DetailSection from './DetailSection';
import Projects from './Projects';

import './Content.css';


import ME_IMAGE from '../../assets/portrait.jpeg';
import contentJSON from '../../content/content.json';


const { ME, D20_CALC, XKCD, DRAGONS_HOARD, ANCHORMAN } = contentJSON;




function Content() {

  const [animate, setAnimate] = useState(true);
  const [displayContent, setDisplayContent] = useState(true);
  const [displayedSection, setDisplayedSection] = useState("Me");
  


  const hide = () => {
    setDisplayContent(false);
    setAnimate(true);
  }

  const show = () => {
    setDisplayContent(true);
    setAnimate(true);
  }

  const contentClass = 
    (displayContent ? 'display' : 'hide') + 
    (animate ? ' animate' : '');

  return (
    <div id="content" className={contentClass} onAnimationIteration={() =>{
      setAnimate(false);
    }}>
      <Container id="content-container">
        <div id="menu">
          <ContentNav 
            id="content-nav"
            displayedSection={displayedSection}
            setDisplayedSection={setDisplayedSection}
            hide={hide}
          />
          {(displayedSection === "Me") && 
            <DetailSection about={ME}/>
          }


          {(displayedSection === "Projects") && 
            <Projects 
              projects={[D20_CALC, XKCD, DRAGONS_HOARD, ANCHORMAN]} 
            />
          }
        </div>

        <PortraitIcon id="portrait-icon" show={show} />
        
        
      </Container>
    </div>
  )
}

export default Content;