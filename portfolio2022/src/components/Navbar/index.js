import {Nav, 
        NavBarContainer, 
        NavLogo, 
        MobileMenu,
        NavLinks,
        NavMenu } from './NavBarElements'
import {FaBars} from 'react-icons/fa'
import { useState } from "react";

export default function NavBar({toggleOpen, isOpen}) {

    const [scrollNav, SetScrollNav] = useState(false)

    const changeNav = () => {
      window.scrollY >= 80 ? SetScrollNav(true) : SetScrollNav(false);
    }

    return (
      <>
        <Nav>
          <NavBarContainer>
              <NavLogo to='intro' offset={-80} smooth={true} duration={500} spy={true} exact='true'>MaLy</NavLogo>
              {/* // responsive drawer containing hamburger menu icons */}
              <MobileMenu onClick={toggleOpen}>
                <FaBars />
              </MobileMenu>
              {/* // all links of the navBar to scroll to indicated section */}
              <NavMenu isOpen={isOpen}>
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true'>About</NavLinks>
                <NavLinks to='stack' smooth={true} duration={500} spy={true} exact='true'>Stack</NavLinks>
                <NavLinks to='projects'smooth={true} duration={500} spy={true} exact='true'>Projects</NavLinks>
                <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true'>Contact</NavLinks>
              </NavMenu>
          </NavBarContainer>
        </Nav>
      </>
    );
  }