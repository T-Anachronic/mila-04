import React from "react"
import {
    Link
} from "gatsby"
import Navbar from "../components/navbar"
import styles from "../styles/card.module.css"
import Header from "../components/header"

const Row = props => ( <
    div className = {
        styles.row
    } >
    <
    div className = {
        styles.column
    } >
    <
    h3 className = {
        styles.title
    } > {
        props.title
    } < /h3> <
    p className = {
        styles.description
    } > {
        props.description
    } < /p> < /
    div > <
    /div>
)

export default () => ( <
    div style = {
        {
            textAlign: 'center'
        }
    } >
    <
    Navbar > < /Navbar> <
    Header headerText = "Mila vous plonge au cœur de la vallée du grand rift" / >
    <
    p > L’ association MILA est née de la volonté de ses membres fondateurs de promouvoir le potentiel socioculturel Est - africain en région méditerranéenne < /p>  

    <
    Header headerText = "Deuxième section" / >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-4" >
    <
    Row title = "titre secondaire individuel"
    description = "description" /
    >
    <
    /div>

    <
    div className = "col-4" >
    <
    Row title = "titre secondaire individuel 2"
    description = "description 2" /
    >
    <
    /div>

    <
    div className = "col-4" >
    <
    Row title = "titre secondaire individuel 3"
    description = "description 3" /
    >
    <
    /div>

    <
    /div>

    <
    /div>

    <
    /
    div >
)