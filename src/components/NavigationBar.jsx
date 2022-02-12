import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-wealth-health.jpeg';

const Nav = styled.nav`
  // position: fixed;
  // z-index: 1;
  // left: 0;
  // right: 0;
  // top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  // color: #1fa0aa;
  &:visited {
    color: #1fa0aa;
  }

  &:hover {
    color: #fecf2d;
    transition: 0.2s;
  }
`;
const Image = styled.img`
  width: 60px;
  height: 55.2px;
`;
const Title = styled.h2`
  color: #1fa0aa;
`;

export const NavigationBar = () => {
  return (
    <Nav>
      <LogoWrapper>
        {/* <Image src={Logo} /> */}
        <Title>HRnet</Title>
      </LogoWrapper>
      <LinkWrapper>
        <NavLink to="/">Create New</NavLink>
        <NavLink to="/employee-list">View Employees</NavLink>
      </LinkWrapper>
    </Nav>
  );
};
