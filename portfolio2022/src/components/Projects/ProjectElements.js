import React from "react";
import styled from "styled-components";

export const ProjectsSection = styled.div`
    height: 100vh; /* For 100% screen height */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    background: green;

    @media screen and (max-width: 768px) {
        height: 100vh;
    }

    @media screen and (max-width: 480px) {
        height: 100vh;
    }

`


export const ProjectGrid = styled.div`
    border: 2px solid black;
    display: grid;
    width: 80%;
    margin: 0 3rem;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 10px;
    justify-items: center;
    


`
