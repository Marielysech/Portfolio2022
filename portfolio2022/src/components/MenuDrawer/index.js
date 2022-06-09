import React from 'react'
import { DrawerContainer, Icon, CloseIcon, NavMenu, DrawerLinks } from './MenuDrawerElements'

const MenuDrawer = ({toggleOpen, isOpen}) => {

  return (
    <DrawerContainer isOpen={isOpen} onClick={toggleOpen}>
        <Icon onClick={toggleOpen}>
            <CloseIcon />
        </Icon>
        <NavMenu isOpen={isOpen}>
            <DrawerLinks to='about'>About</DrawerLinks>
            <DrawerLinks to='projects'>Projects</DrawerLinks>
            <DrawerLinks to='stack'>Stack</DrawerLinks>
            <DrawerLinks to='contact'>Contact</DrawerLinks>
        </NavMenu>
    </DrawerContainer>
  )
}

export default MenuDrawer