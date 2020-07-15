import React from 'react';
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
    <Header>
      <Nav>
        <List>
          {routes.map(({ label, url }) => (
            <ListItem>
              <Link href={url}>
                <a>{label}</a>
              </Link>
            </ListItem>
          ))}
        </List>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
`;

const List = styled.ul`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ListItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HeaderBar;
