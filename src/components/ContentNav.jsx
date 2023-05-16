import { Navbar, Nav } from 'react-bootstrap';

function ContentNav({setDisplayedSection}) {

  return (
    <Navbar bg="light">
      <Nav>
        <Nav.Link onClick={() => {setDisplayedSection()}}>Me</Nav.Link>
        <Nav.Link>Projects</Nav.Link>
        <Nav.Link>Hide</Nav.Link>
      </Nav>
    </Navbar>
  )

}

export default ContentNav;