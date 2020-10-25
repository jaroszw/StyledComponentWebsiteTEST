import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';

export const Nav = styled.nav`
  background-color: #1d2d50;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const NavLogoIcon = styled(FaGithubAlt)`
  color: #fff;
`;

export const MobileIcons = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    padding: 30px 30px;
    cursor: pointer;
    display: block;
    position: absolute;
    color: #fff;
    top: 0;
    right: 0;
  }
`;

export const NavMenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    width: 100%;
    height: 90vh;
    background-color: #1d2d50;
    transition: 0.5s ease-out;
  }
`;

export const NavItems = styled.li`
  padding: 0 2rem;
  height: 80px;
  list-style: none;
  border-bottom: 4px solid transparent;

  &:hover {
    border-bottom: 4px solid #cc0e74;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    border: none;
    justify-content: center;

    &:hover {
      border: none;
    }
  }
`;

export const NavMenuLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavItemBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
