
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";


function NavBar() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#"><img src='/images/LOGO.jpg' height="40px" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">New Arrivals</Nav.Link>
            <Nav.Link href="#action2">Trending</Nav.Link>
            <Nav.Link href="#action2">Women</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <FiShoppingCart style={{ fontSize: "30px" }} className='mx-2' />
          <FaRegHeart style={{ fontSize: "30px" }} className='mx-2' />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;