import { Navbar, Nav } from 'react-bootstrap';

import './ContentNav.css';

function ContentNav({displayedSection, setDisplayedSection, hide, id}) {

  return (
    <Navbar id={id} bg="light">
      <Nav>
        <Nav.Link 
          className={displayedSection==="Me" ? "selected" : ""}
          onClick={() => {setDisplayedSection("Me")}}
        >
          <span>Me</span><hr />
        </Nav.Link>
        <Nav.Link 
          className={displayedSection==="Projects" ? "selected" : ""}
          onClick={() => {setDisplayedSection("Projects")}}
        >
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