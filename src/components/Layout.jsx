import { NavigationBar } from './NavigationBar';
import { SEO } from '../utils/SEO';
import styled from 'styled-components';

const Content = styled.main`
  margin: 10px auto;
`;

export const Layout = ({ children, title }) => {
  return (
    <>
      {/* <SEO title={title} /> */}
      <NavigationBar />
      <Content>{children}</Content>
    </>
  );
};
