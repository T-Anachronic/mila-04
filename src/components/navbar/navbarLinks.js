import React, {
    Component
} from 'react'
import styled from "styled-components"
import {
    Link
} from "gatsby";

export default class navbarLinks extends Component {
    state = {
        links: [{
                id: 0,
                path: '/',
                name: 'accueil',
            },
            {
                id: 1,
                path: '/about/',
                name: 'apropos',
            },
            {
                id: 2,
                path: '/portfolio/',
                name: 'realisations',
            },
        ]
    }
    render() {
        return ( <
            LinkWrapper open = {
                this.props.navbarOpen
            } > {
                this.state.links.map(item => {
                    return ( <
                        li key = {
                            item.id
                        } >
                        <
                        Link to = {
                            item.path
                        }
                        className = "nav-link" > {
                            item.name
                        } <
                        /Link> < /
                        li >
                    )
                })
            } <
            /
            LinkWrapper >
        )
    }
}

const LinkWrapper = styled.ul `
li {
    list-style-type: none;
}
.nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: #333;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
        background-color: #f1f1f1;
        color: #333;
        padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
}
height: ${props=>(props.open ? '180px' : '0px')};
overflow:hidden;
transition: all 0.5s ease-in-out;
@media(min-width: 768px) {
    height: auto;
    display: flex;
    margin-right: 80px;
    .nav-link:hover {
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
}

`