import {Nav, 
        NavBarContainer, 
        NavLogo, 
        MobileMenu,
        NavLinks,
        NavMenu } from './NavBarElements'
import {FaBars} from 'react-icons/fa'


export default function NavBar({toggleOpen, isOpen}) {

    return (
      <>
        <Nav>
          <NavBarContainer>
              <NavLogo to='/'>MaLy</NavLogo>
              {/* // responsive drawer containing hamburger menu icons */}
              <MobileMenu onClick={toggleOpen}>
                <FaBars />
              </MobileMenu>
              {/* // all links of the navBar to scroll to indicated section */}
              <NavMenu isOpen={isOpen}>
                <NavLinks to='about' offset={-80}>About</NavLinks>
                <NavLinks to='projects' offset={-80}>Projects</NavLinks>
                <NavLinks to='stack'offset={-80} >Stack</NavLinks>
                <NavLinks to='contact'offset={-80}>Contact</NavLinks>
              </NavMenu>
          </NavBarContainer>
        </Nav>
      </>
    );
  }