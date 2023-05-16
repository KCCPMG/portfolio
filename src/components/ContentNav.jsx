import { Navbar, Nav } from 'react-bootstrap';

function ContentNav({setDisplayedSection}) {

  return (
    <Navbar bg="light">
      <Nav>
        <Nav.Link onClick={() => {setDisplayedSection()}}>
          <span>Me</span><hr />
        </Nav.Link>
        <Nav.Link>
          <span>Projects</span><hr />  
        </Nav.Link>
        <Nav.Link>
          <span>Hide</span><hr />
        </Nav.Link>
      </Nav>
    </Navbar>
  )

}

export default ContentNav;