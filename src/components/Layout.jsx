import { NavigationBar } from './NavigationBar';
import styled from 'styled-components';
import { useEffect } from 'react';

const Content = styled.main`
  margin: 10px auto;
`;

export const Layout = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <NavigationBar />
      <Content>{children}</Content>
    </>
  );
};
