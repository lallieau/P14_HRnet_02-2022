import { NavigationBar } from './NavigationBar';
import { SEO } from '../utils/SEO';
import styled from 'styled-components';

export const Layout = ({ children, title }) => {
  const Content = styled.main`
    margin: 10px auto;
  `;
  return (
    <>
      <SEO title={title} />
      <NavigationBar />
      <Content>{children}</Content>
    </>
  );
};
