import {Nav, NavBarContainer, NavLinks, NavLogo, NavMenu, MobileMenu, NavItem, } from './NavBarComponents'
import {FaBars} from 'react-icons/fa'

export default function NavBar(props) {
    return (
      <>
        <Nav>
          <NavBarContainer>
              <NavLogo to='/'>MaLy</NavLogo>
              {/* // responsive drawer containing icons */}
              <MobileMenu>
                <FaBars />
              </MobileMenu>
              {/* // all links of the navBar */}
              <NavMenu>
                <NavItem>
                  <NavLinks to='about'>About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='projects'>Projects</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='stack'>Stack</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='contact'>Contact</NavLinks>
                </NavItem>
              </NavMenu>
          </NavBarContainer>
        </Nav>
      </>
    );
  }