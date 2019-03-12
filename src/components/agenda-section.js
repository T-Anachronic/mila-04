import React from "react";
import {
  Link
} from "gatsby";
import styled from "styled-components";
import HeroStyle from "../styles/hero-section.module.css"

export default ({
  children
}) => ( <
  MainSection className = {
    HeroStyle.hero2
  } >
  <
  div className = "container" >
  <
  div className = "row" >
  <
  div className = "col-lg-4" >
  <
  h2 > La programmation du mois d 'Avril</h2> <
  p > Lorem ipsum < /p> <
  ul >
  <
  li > 1 < /li> <
  li > 2 < /li> <
  li > 3 < /li> < /
  ul >
  <
  Link to = "/portfolio/" >
  <
  button className = "button" > Voir plus < /button> < /
  Link >
  <
  div className = "col-lg-8" > < /div> < /
  div > <
  /div> < /
  div >

  {
    children
  } {
    " "
  } <
  /MainSection>
);

const MainSection = styled.section `
font-size: 0.8rem;
display: flex;
margin: 2rem 0 auto;
h2 {
  color: #f1f1f1;
  font-size: 1.25rem;
}
color: #f1f1f1;
  li {
    list-style-type: none;
  }

.col-lg-4 {
  z-index: 2000;
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
   width: 50%;
   height: auto;
   cursor: pointer;
   webkit-transition-duration: 0.4s;
   transition-duration: 0.4s;
   box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
 }
  @media (min-width: 768px) {
    font-size: 0.65rem;
    
    h2 {
      font-size: 1.45rem;
    
    }

    .button {
      width: 35% ;
      margin: 0;
    }
  }
`;