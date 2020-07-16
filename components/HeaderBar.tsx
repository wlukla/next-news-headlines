import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';

const routes = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Categories',
    url: '/categories',
  },
];

const HeaderBar = () => {
  return (
    <Wrapper>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Headlines</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link href="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/categories">Categories</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default HeaderBar;
