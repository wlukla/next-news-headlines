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
        <Navbar.Brand>
          <Link href="/">
            <WhiteColorLink>Headlines</WhiteColorLink>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as="div">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Nav.Link>
            <Nav.Link as="div">
              <Link href="/categories">
                <a>Categories</a>
              </Link>
            </Nav.Link>
            <Nav.Link as="div">
              <Link href="/search">
                <a>Search</a>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const WhiteColorLink = styled.a`
  color: #ffffff;
  cursor: pointer;
`;

export default HeaderBar;
