import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';


function Content() {

  const [displayContent, setDisplayContent] = useState(true);
  const [displayedSection, setDisplayedSection] = useState(null);
  const [displayedProject, setDisplayedProject] = useState(null)

  const contentClass = displayContent ? 
    'display' 
    : 
    'hide';

  return (
    <div id="content" className={contentClass}>
      <Container>
        <Navbar bg="light">
          <Nav>
            <Nav.Link onClick={() => {setDisplayedSection()}}>Me</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Hide</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  )
}

export default Content;