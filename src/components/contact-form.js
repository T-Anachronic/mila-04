import React from "react";
import {
    Link
} from "gatsby";
import styled from "styled-components";

export default ({
    children
}) => ( <
    MainSection >

    <
    p > Ecrivez - nous à: contact @associationmila.org < /p >

    {
        children
    } <
    /MainSection>
)

const MainSection = styled.section `
padding: 2rem;
`