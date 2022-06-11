import React from "react";
import styled from "styled-components";

export const ProjectsSection = styled.div`
    /* height: 100vh; For 100% screen height */
    flex-direction: column;
    /* justify-content: center; */
    background: #457383;
    height: 100vh;

    @media screen and (max-width: 850px) {
        height: 275vh;
    }

`


export const ProjectGrid = styled.div`
    /* border: 2px solid black; */
    display: grid;
    width: 80%;
    /* max-height: 120% ; */
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr) ;
    grid-template-rows: repeat(2, 1fr) ;
    grid-gap: 50px 5px;
    justify-items: center;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        width: 80%
    }
    


`
