import React from "react";
import Layout from "../components/layout"
// import styled from "styled-components";
import Hero from "../components/hero-section";
import Header from "../components/header";
import Service from "../components/service-section"
import AboutSection from "../components/about-section";




export default () => ( <
    div >
    <
    Layout >

    <
    Hero / >

    <
    Service / >

    <
    AboutSection / >

    <
    div className = "container"
    style = {
        {
            backgroundColor: "yellow",
            padding: "3.5rem"
        }
    } >
    <
    Header headerText = "Quatrième section" / >
    <
    /div>

    <
    div className = "container"
    style = {
        {
            padding: "3.5rem",
            backgroundColor: "#f1f1f1"
        }
    } >
    <
    Header headerText = "Cinquième section" / >
    <
    p > Contact form < /p> < /
    div >


    <
    /Layout>

    <
    /
    div >
);