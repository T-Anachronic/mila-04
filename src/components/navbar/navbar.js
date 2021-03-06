import React, {
    Component
} from 'react';
import NavbarHeader from "./navbarHeader"
import NavbarLinks from "./navbarLinks"
import styled from "styled-components"

export default class navbar extends Component {
    state = {
        navbarOpen: false
    }
    handleNavbar = () => {
        this.setState(() => {
            return {
                navbarOpen: !this.state.navbarOpen
            }
        })
    }
    render() {
        return ( <
            NavWrapper >
            <
            NavbarHeader handleNavbar = {
                this.handleNavbar
            }
            / > <
            NavbarLinks navbarOpen = {
                this.state.navbarOpen
            }
            / > < /
            NavWrapper >
        )
    }
}

const NavWrapper = styled.nav `

position: fixed;
width: 100% ;
top: 0;
background-color: #333;
z-index: 2000;

@media (min-width: 768px){
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    
    height: 65px;
    z-index: 2000;
}
`