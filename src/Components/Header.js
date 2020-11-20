import React from "react";
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import Popup from "./Popup";

function Header(props) {
  
  return (
    <div>
      <div className="fixed-top">
        <Navbar bg="light" expand="lg">
          <Navbar fixed="top" />
          <Navbar.Brand href="#home">
            <img
              src="https://cdn.freebiesupply.com/logos/thumbs/1x/star-movies-logo.png"
              height="60px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">TV Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Latset</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
              <NavDropdown title="Rating" id="basic-nav-dropdown" >
              {[5,6,7,8,9,10].map(el=><NavDropdown.Item onClick={(e)=>props.setSearchRating(e.target.innerHTML)}>{el}</NavDropdown.Item>)}
              </NavDropdown>
            </Nav>
            <Popup />
            <Form inline>
              <FormControl
                onChange={(e) => props.setSearchKeyword(e.target.value)}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
