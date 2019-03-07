import React from "react"
import styled from "styled-components"
import heroStyles from "../styles/hero-section.module.css"

export default ({
    children
}) => ( <
    HeroSection className = {
        heroStyles.hero
    } >

    <
    MidSection >
    <
    h1 > Mila East Africa < /h1> <
    p > Nous accompagnons les ressortissants de l 'Afrique de l'
    Est. < /p>  <
    button className = "button" > Voir plus <
    /button> < /
    MidSection >


    {
        children
    }

    <
    /HeroSection>
)

const HeroSection = styled.section `
`
const MidSection = styled.div `
text-align: center;
color: #f1f1f1;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 300px;
margin: 0 2rem 0 2rem;

h1 {
    color:#f1f1f1;
    text-align: center;
    margin: 0 1rem 0 1rem;
    padding: 0 0 2rem 0;
}
.button {
    background-color: #4CAF50;
    border: none;
    color: #f1f1f1;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 1px;
    width: 68% ;
    height: auto;
    cursor: pointer;
    webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0rgba(0, 0, 0, 0.24), 0 17px 50px 0rgba(0, 0, 0, 0.19);
}

@media(min-width: 768px) {
    .button{
        width: 28%;
    }
}
`