import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-wealth-health.jpeg';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: #fff;
  box-shadow: 0px 0px 7px 1px RGBA(172, 212, 164, 0.4);
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: RGBA(68, 84, 65, 0.79);
  &:visited {
    color: RGBA(68, 84, 65, 0.79);
  }

  &:hover {
    color: RGBA(172, 212, 164, 1);
    transition: 0.2s;
  }
`;
const Image = styled.img`
  width: 60px;
  height: 55.2px;
`;

export const NavigationBar = () => {
  return (
    <Nav>
      <LogoWrapper>
        <Image src={Logo} />
        <NavLink to="/">HRnet</NavLink>
      </LogoWrapper>
      <LinkWrapper>
        <NavLink to="/">Create New</NavLink>
        <NavLink to="/employee-list">View Employees</NavLink>
      </LinkWrapper>
    </Nav>
  );
};
