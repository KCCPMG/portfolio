import { useState } from 'react';
import { Container } from 'react-bootstrap';

import ContentNav from './ContentNav';
import PortraitIcon from './PortraitIcon';

import './Content.css';

function Content() {

  const [animate, setAnimate] = useState(true);
  const [displayContent, setDisplayContent] = useState(true);
  const [displayedSection, setDisplayedSection] = useState(null);
  const [displayedProject, setDisplayedProject] = useState(null)


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
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt dignissimos possimus iure cupiditate officiis corporis omnis. Excepturi deserunt, iusto sit inventore voluptas optio, similique repudiandae id obcaecati fugit nostrum?

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore libero voluptates accusantium vel alias dicta est sunt, adipisci qui atque totam, omnis provident neque quae pariatur animi molestias, veritatis fugiat.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe delectus doloribus mollitia enim quisquam veritatis perferendis magnam ratione aliquid vero, consequatur culpa eaque hic repellendus totam, ex iure tenetur.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi, corporis dolores dignissimos explicabo impedit aliquam tenetur minus nobis, consequuntur neque sint! Mollitia repudiandae vel soluta nobis voluptate explicabo facere.
          </h1>
          {/* {displayedSection === } */}
          {/* <DetailSection /> */}
        </div>

        <PortraitIcon id="portrait-icon" show={show} />
        
        
      </Container>
    </div>
  )
}

export default Content;