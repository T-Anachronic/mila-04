import React from "react"
import ContactSection from "../components/contact-form"
import styled from "styled-components"

export default ({
    children
}) => ( <
    MainSection >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-sm-4" >
    <
    h3 > Mila association à but non lucratif. < /h3>  < /
    div >
    <
    div className = "col-sm-8" >
    <
    ContactSection / >
    <
    /div>

    <
    /div > 

    <
    /div>



    {
        children
    } <
    /MainSection>

)

const MainSection = styled.section `
background-color: #333;
* {
    color: #f1f1f1;
}
h3 {
    font-size: 1.25rem;
}
`