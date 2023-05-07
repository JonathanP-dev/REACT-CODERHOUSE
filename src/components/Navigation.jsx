import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CATEGORIES } from '../mockup';
import { Cart } from './CartWidget';
import { Button, Form } from 'react-bootstrap';

export default function Navigation() {
  
  return (
  <>
    <Navbar bg="light" expand="lg">
    <Container className='header-container'>
      <div className='search-container'>
      <Navbar.Brand className='brand' href="#home">
          PROGRAMMER
          </Navbar.Brand>
        <Form className="search d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
      <div className='filters-cart-container'>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {CATEGORIES.map((navItem) => {
              return <Nav.Link key={navItem} href="#home">{navItem}</Nav.Link>
            })}
          </Nav>
        </Navbar.Collapse>
        <Cart />
      </div>
    </Container>
  </Navbar>
  </>
  );
}