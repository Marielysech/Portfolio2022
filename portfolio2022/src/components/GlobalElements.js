import styled from "styled-components";

export const SectionTitle = styled.h1`

    font-size: 64px;
    color: #F8EFDB;
    top:0;
    padding-left: 1rem;
    margin-bottom: 1rem;
    &::after {
        content: "○";
        font-size: 24px;
        padding: 10px;
   
    }

    @media screen and (max-width: 768px) {
        font-size: 50px;

        &::after {
        font-size: 18.75px;
        padding: 7.8px;
        }
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
        &::after {
        font-size: 15px;
        padding: 6.25px;
        }
    }

`
