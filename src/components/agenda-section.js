import React from "react"
import {
    Link
} from "gatsby";
import styled from "styled-components"
import MainImage from "../images/seth-doyle-78210-unsplash.jpg"
import {
    FaShareAlt,
    FaStopwatch
} from 'react-icons/fa';

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
    className = "MainImage" / >
    <
    h5 className = "date" > 12 < /h5>  <
    h6 className = "date" > Avril < /h6> 

    <
    FaShareAlt className = "icon" / >

    <
    /div> <
    div className = "col-md-4" >
    <
    h2 > Lorem Ipsum < /h2> <
    b > Lorem IPSUM < /b>  <
    p > Lorem ipsum, lorem ipsum. < /p>  <
    Link to = "/about/" >
    <
    button className = "button" > Voir plus < /button> < /
    Link > <
    /
    div > <
    /
    div > <
    /div> {
    children
} <
/
MainSection >
)

const MainSection = styled.section `
background-color: blue;
padding: 3rem;
.MainImage {
    position: relative;
    margin-top: -30px;
    border-radius: 12px 12px 12px 12px;
    -moz-border-radius: 12px 12px 12px 12px;
    -webkit-border-radius: 12px 12px 12px 12px;
    border: 0px solid #000000;

    -webkit-box-shadow: 15px 29px 78px -6px rgba(0, 0, 0, 0.75); 
    -moz-box-shadow: 15px 29px 78px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 15px 29px 78px -6px rgba(0, 0, 0, 0.75);
}
h5 {
    position: absolute;
    left: 30px;
    bottom: -20px;
    font-size: 2.5rem;
    color: #7B7B7B;
}
h6 {
    position: absolute;
    left: 30px;
    bottom: -55px;
    font-size: 2.5rem;
    color: #7B7B7B;
}
.icon {
    position: relative;
    right: -300px;
    font-size: 1.8rem;
}
.container {
    background-color: #f1f1f0;
    border-radius: 12px 12px 12px 12px; 
    -moz-border-radius: 12px 12px 12px 12px; 
    -webkit-border-radius: 12px 12px 12px 12px;
    border: 0px solid #000000;
}
b{
    font-size: 0.6rem;
    padding: 5px;
    background-color: yellow;
    border-radius: 103px 103px 103px 103px; 
    -moz-border-radius: 103px 103px 103px 103px; 
    -webkit-border-radius: 103px 103px 103px 103px;
    border: 0px solid #000000;
    
}
.button {
    background-color: #4CAF50;

    border: none;
    color: #f1f1f1;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 0 2rem 0 2rem;
    width: 80 % ;
    height: auto;
    cursor: pointer;
    webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
@media(min-width: 768px) {
    .button{
        width: 45%;
        margin: 0;
    }
}
`