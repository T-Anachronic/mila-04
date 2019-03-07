import React from "react"
import Navbar from "../components/navbar/navbar"
// import Menu from "../components/menu/menu"
import Footer from "../components/footer"

export default ({
    children
}) => ( <
    div>
    <
    Navbar / > {
        children
    } <
    Footer / >
    <
    /div>
)