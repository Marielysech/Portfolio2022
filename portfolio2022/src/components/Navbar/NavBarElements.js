import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll/modules";


export const Nav = styled.nav`
    display: flex;
    height: 80px;
    width: 100%;
    /* margin-top: -80px; */
    justify-content: center;
    font-size: 1rem;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 968px) {
        transition: 0.8s all ease;
    }
    
`

export const NavBarContainer = styled.div`
    background-color: #457383;
    justify-content: space-between;
    z-index: 1;
    height: 80px;
    display: flex;
    flex-direction: row;   
    width: 100%;
    padding: 0 24px;
`

export const NavLogo = styled(LinkS)`
    cursor: pointer;
    justify-self: flex-start;
    display: flex;
    color: #F8EFDB;
    /* color: #FF6F59; */
    font-size: 30px;
    align-items: center;
    margin-left: 24px; 
    font-weight: bold;
    text-decoration: none; 
    text-shadow: 3px 3px 0px #FF6F59;

    &:hover { 
        color: #FF6F59;
        transition: 0.3s ease-in-out;
        text-shadow: 3px 3px 0px #F8EFDB;

    }
`

export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top:0;
        right:0;
        cursor: pointer;
        transform: translate(-100%, 80%);
        font-size: 1.5rem;
        
    }
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 3rem 0 0;
    color: #F8EFDB;
    justify-content: center;
    transition: 0.2s ease-in-out;

    &.active {
        border-bottom: 3px solid black;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavMenu = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: right;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

