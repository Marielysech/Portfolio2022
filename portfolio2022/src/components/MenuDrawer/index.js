import React from 'react'
import { DrawerContainer, Icon, CloseIcon, NavMenu, DrawerLinks } from './MenuDrawerElements'

const MenuDrawer = ({toggleOpen, isOpen}) => {

  return (
    <DrawerContainer isOpen={isOpen} onClick={toggleOpen}>
        <Icon onClick={toggleOpen}>
            <CloseIcon />
        </Icon>
        <NavMenu isOpen={isOpen}>
            <DrawerLinks to='about' smooth={true} duration={500} spy={true} exact='true'>About</DrawerLinks>
            <DrawerLinks to='stack' smooth={true} duration={500} spy={true} exact='true'>Stack</DrawerLinks>
            <DrawerLinks to='projects' smooth={true} duration={500} spy={true} exact='true'>Projects</DrawerLinks>
            <DrawerLinks to='contact' smooth={true} duration={500} spy={true} exact='true'>Contact</DrawerLinks>
        </NavMenu>
    </DrawerContainer>
  )
}

export default MenuDrawer