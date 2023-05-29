import { Navbar, Nav } from 'react-bootstrap';

import './ContentNav.css';

function ContentNav({setDisplayedSection, hide, id}) {

  return (
    <Navbar id={id} bg="light">
      <Nav>
        <Nav.Link onClick={() => {setDisplayedSection("Me")}}>
          <span>Me</span><hr />
        </Nav.Link>
        <Nav.Link onClick={() => {setDisplayedSection("Projects")}}>
          <span>Projects</span><hr />  
        </Nav.Link>
        <Nav.Link onClick={hide}>
          <span>Hide</span><hr />
        </Nav.Link>
      </Nav>
    </Navbar>
  )

}

export default ContentNav;