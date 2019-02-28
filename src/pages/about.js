import React from "react"
import Navbar from "../components/navbar"
import
Header
from "../components/header";
import Layout from "../components/layout"
import Footer from "../components/footer"

export default () => ( <
    div style = {
        {
            textAlign: 'center'
        }
    } >
    <
    Navbar > < /Navbar> <
    Header headerText = "Notre mission" / >
    <
    img src = "https://source.unsplash.com/random/1200x600"
    alt = "" / >
    <
    Layout > <
    Header headerText = "Association Mila" / >
    <
    p > Hmm.It would be nice
    if the content of the two new pages were centered like the index page.And it would be nice to have some sort of global navigation so it’ s easy
    for visitors to find and visit each of the sub - pages.And it would be nice to have some sort of global navigation so it’ s easy
    for visitors to find and visit each of the sub - pages.And it would be nice to have some sort of global navigation so it’ s easy
    for visitors to find and visit each of the sub - pages < /p> < /
    Layout >

    <
    Footer >
    <
    /
    Footer >


    <
    /div>
)