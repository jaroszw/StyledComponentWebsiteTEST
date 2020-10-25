import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoIcon,
  NavMenuContainer,
  NavItems,
  NavMenuLink,
  MobileIcons,
  NavItemBtn,
  NavItemBtnLink,
} from './NavBar.elements';
// import { FaTimes, FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const clickHandler = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <NavLogoIcon></NavLogoIcon>
          </NavLogo>
          <MobileIcons onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcons>
          <NavMenuContainer click={click}>
            <NavItems>
              <NavMenuLink>About</NavMenuLink>
            </NavItems>
            <NavItems>
              <NavMenuLink>Services</NavMenuLink>
            </NavItems>
            <NavItems>
              <NavMenuLink>Products</NavMenuLink>
            </NavItems>

            <NavItemBtn>
              {button ? (
                <NavItemBtnLink to="signup">
                  <Button primary>Signup</Button>
                </NavItemBtnLink>
              ) : (
                <NavItemBtnLink to="signup">
                  <Button primary fontbig big>
                    Signup
                  </Button>
                </NavItemBtnLink>
              )}
            </NavItemBtn>
          </NavMenuContainer>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default NavBar;
