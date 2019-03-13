import React, {
    Component
} from 'react'
import {
    Link
} from "gatsby";
import styled from "styled-components"
import logo from "../../images/mila-logo.png"

import {
    FaAlignRight
} from 'react-icons/fa';


export default class navbarHeader extends Component {
    render() {
        const {
            handleNavbar
        } = this.props
        return ( <
            HeaderWrapper >

            <
            Link to = "/"
            className = "logo" >
            <
            img src = {
                logo
            }
            alt = "Mila East Africa" / >
            <
            /Link> 

            <
            FaAlignRight className = "toggle-icon"
            onClick = {
                () => {
                    handleNavbar()
                }
            } >
            <
            /FaAlignRight>

            <
            /
            HeaderWrapper >
        )
    }
}

const HeaderWrapper = styled.div `
padding: 0.4rem 1rem;
display: flex;
align-items: center;
justify-content: space-between;
height: 60px;

.logo {
    width: 10%;
    margin-top: 20px;
    
}

.toggle-icon {
    font-size: 1.75rem;
    cursor: pointer;
    color: #f1f1f1;
}
@media (min-width: 768px) {
    .toggle-icon {
        display: none;
    }
    .logo {
        margin-left: 80px;
        margin-top: 40px;
        width: 15%;
    }

}
`