import styled from "styled-components";
import { Link as LinkS } from "react-scroll/modules";
import {FaTimes} from 'react-icons/fa'

export const DrawerContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    background-color: black;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '90%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')} 
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    font-weight: lighter;
    font-size: 3rem;
    margin: 2rem 2rem 0 0;

` 

export const Icon = styled.div`
    position: absolute;
    
`


export const DrawerLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    justify-content: center;
    transition: 0.2s ease-in-out;
    padding-top: 2rem;
    font-size: 25px;
    width: fit-content;

    &:hover {
        border-bottom: 3px solid white;
    }
`

export const NavMenu = styled.div`

    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: right;
        color: ${({isOpen}) => (isOpen ? "#fff" : 'black')};
        transition: 0.3s ease-in-out;
        align-items: center;
    }
`
