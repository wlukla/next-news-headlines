import React from 'react';
import styled from 'styled-components';

import HeaderBar from './HeaderBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <Wrapper>
    <HeaderBar />
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainLayout;
