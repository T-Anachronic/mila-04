import React from "react"
import {
    Link
} from "gatsby";

const ListLink = props => ( <
    li style = {
        {
            display: 'inline-block',
            marginRight: '1rem',
            textDecoration: `none`
        }
    } >
    <
    Link to = {
        props.to
    } > {
        props.children
    } < /Link> < /
    li >
)

export default ({
    children
}) => ( <
    div style = {
        {
            margin: '1.5rem auto',
            maxWidth: 650,
            padding: '0 1rem'
        }
    } >
    <
    header style = {
        {
            marginBottom: `4rem`
        }
    } >
    <
    Link to = "/"
    style = {
        {
            textShadow: `none`,
            backgroundImage: `none`,
            textDecoration: `none`
        }
    } >
    <
    h3 style = {
        {
            display: `inline`
        }
    } > MILA East Africa < /h3> < /
    Link > <
    ul style = {
        {
            listStyle: `none`,
            float: `right`
        }
    } >
    <
    ListLink to = "/" > Accueil < /ListLink> <
    ListLink to = "/about/" > A propos < /ListLink> <
    ListLink to = "/portfolio/" > Réalisations < /ListLink> < /
    ul > <
    /header> {
    children
} <
/div>
)