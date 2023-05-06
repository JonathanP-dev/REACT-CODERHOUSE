import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NAVITEMS, NAVDROPDOWNITEMS } from '../mockup';
import { Cart } from './CartWidget';

export default function Navigation() {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container className='header-container'>
        <Navbar.Brand href="#home">
          PROGRAMMER
          <Cart />
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