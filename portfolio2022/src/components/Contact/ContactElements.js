import styled from "styled-components";
import {MdChatBubble} from 'react-icons/md'
export const ContactSection = styled.div`
    background-color: #457383;
    height:110vh;

    @media screen and (max-width: 850px) {
            height:fit-content;
        }
`

export const Bubble = styled(MdChatBubble)`
    font-size: 400px;
    width: 100%;
    color: #F8EFDB;

    @media screen and (max-width: 900px) {
        font-size: 300px;
    }

`
export const ContentContainer = styled.div`
        display: flex;
        flex-direction: column;
`

export const Text = styled.p`
    text-align: left;
    font-size: 45px;
    width: 30%;
    margin: 0 auto;
    margin-top: -19rem;
    padding-left: 1.5rem;
    color: #457383;

    @media screen and (max-width: 900px) {
    width: 45%;
    margin: 0 auto;
    margin-top: -13.5rem;
    padding-left: 1.5rem;
    font-size: 30px;

    }

`
export const Button = styled.a`
    text-decoration: none;
    background-color: #F8EFDB;
    border: none;
    display: block;
    width: fit-content;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 0.7rem;
    cursor: pointer;
    border-radius: 15px;
    color: #FF6F59;
    font-weight: bold;
    border: 2px solid #FF6F59;

    &:hover {
        color:#F8EFDB;
        background-color: #FF6F59;
        transition: 0.3s ease-in-out;
    }
`

export const Image = styled.img`
    width: 30%;
    margin: 0 auto;
    display: block;
`