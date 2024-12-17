import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { FaBarsStaggered } from "react-icons/fa6";

export default function MainNavbar({ setIsOpened }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary m-3 rounded shadow">
      {console.log("MainNavbar")}

      <Container fluid>
        <span
          className="bg-body-secondary p-2 me-2 rounded"
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <FaBarsStaggered />
        </span>
        <div>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Link" id="navbarScrollingDropdown" drop="start">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
