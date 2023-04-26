import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NAVITEMS, NAVDROPDOWNITEMS } from '../mockup';

function Navigation({totalCompras}) {
  useEffect(()=> {

  },[totalCompras])
  return (
    <Navbar bg="light" expand="lg">
      <Container className='header-container'>
        <Navbar.Brand href="#home">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="d-inline-block align-top" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>
          {totalCompras}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NAVITEMS.map((navItem) => {
              return <Nav.Link key={navItem} href="#home">{navItem}</Nav.Link>
            })}
            <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">
              {NAVDROPDOWNITEMS.map((navDropItem)=> {
                return <NavDropdown.Item key={navDropItem} href="#action/3.1">{navDropItem}</NavDropdown.Item>

              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;