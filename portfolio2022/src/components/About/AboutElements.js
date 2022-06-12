import styled from "styled-components";


//Section Elements

export const AboutSection = styled.div`
background-color: #457383;
height:100vh;

@media screen and (max-width: 900px) {
        height:160vh;
    }

@media screen and (max-width: 780px) {
    height:180vh;
}

@media screen and (max-width: 600px) {
    height:200vh;
}

@media screen and (max-width: 400px) {
    height:230vh;
}
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 80px;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }


`


export const SubSectionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (max-width: 900px) {
        margin-bottom: -2rem;
    }

`
//LEFT or BOTTOM - Section Elements

    //container

    export const ShortSectionL = styled.div`
    display: flex;
    margin: 0 0 1rem 5rem;
    background-color: #F8EFDB;
    padding:  0.5rem ;
    justify-content: center;
    border-radius: 15px;
    width: 80%;
    align-items: right;

   @media screen and (max-width: 800px) {
    width: 75%;
    align-items: center;
}

@media screen and (max-width: 400px) {
    width: 70%;
    margin: 1rem auto
}
    
    `
        //elements

        export const Text = styled.p`
        width: 100%;
        margin-left: 0.6rem;
        font-size: 15px;
        font-weight: 400;
        color: #457383;    
        `


        export const Emoji = styled.p`

        `

//Right or TOP - Section Elements

    //container

    export const ShortSection = styled.div`
    display: block;
    justify-content: space-around;
    align-items: baseline;
    
    @media screen and (max-width: 900px) {
        text-align: -webkit-center;
        margin-bottom: 1rem;
    }

    `
        //elements  

        export const TextShort = styled.p`
        font-size: 15px;
        width: 90%;
        text-align: left;
        color: #F8EFDB;
        margin: 0.5rem .5rem;

        @media screen and (max-width: 900px) {
            width: 30%;
            text-align: justify;
         }

         @media screen and (max-width: 900px) {
            width: 50%;
         }

        `
        export const TitleShort = styled.h3`
        color: #F8EFDB;
        width: fit-content;
        border-bottom: 3px solid #FF6F59;
        font-family: 'Space Grotesk', sans-serif;
        margin-bottom: 0.8rem;

        &:hover {
            
            border-bottom: 20px solid #FF6F59;
            transition: 0.3s ease-in;
        }
        `
        export const ShortElem = styled.p`
        color: #457383;
        background-color: #F8EFDB;
        margin: 0.5rem .5rem;
        width: fit-content;
        font-weight: bold;
        font-size: 15px;
        padding: 0.2rem 0.5rem ;
        border-radius: 10px
        
        `