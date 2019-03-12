import React from "react"
import styled from "styled-components"
import MainImage from "../images/seth-doyle-78210-unsplash.jpg"
import {
    Link
} from "gatsby";

export default ({
    children
}) => ( <
    MainSection >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-md-6" >
    <
    img src = {
        MainImage
    }
    alt = "de couverture"
    className = "img" / >
    <
    /div> <
    div className = "col-md-6" >
    <
    h2 >
    Lorem Ipsum <
    /h2> <
    p > Lorem ipsum < /p>   <
    Link to = "/about/" > <
    button className = "button" > Voir plus

    <
    /button>  < /
    Link > <
    /
    div > < /
    div > <
    /div>

    {
        children
    } <
    /MainSection>
)

const MainSection = styled.section `
padding: 3rem 0 3rem 0;
font-size: 0.8rem;
.img {

}
h2 {
    font-size: 1.25rem;
    padding: 0 0 1.5rem 0;
}

.button {
    background-color: #4CAF50;
    border: none;
    color: #f1f1f1;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 0 0.1rem 0 0.1rem;
    width: 50% ;
    height: auto;
    cursor: pointer;
    webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
@media(min-width: 768px) {
     font-size: 0.65rem;
    h2 {
        font-size: 1.45rem;
        margin: 0auto;
        padding: 1.5rem 0 0.3rem 0;
    }
    p {
        font-weight: 600;
    }
    .button {
        width: 35%;
        margin:0;
    }
}
`