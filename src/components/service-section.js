import React from "react"
import styled from "styled-components"
import {
    FaHandsHelping
} from 'react-icons/fa';
import {
    FaFistRaised
} from 'react-icons/fa';
import {
    FaGlobeAfrica
} from "react-icons/fa";


export default ({
    children
}) => ( <
    MainSection >

    <
    div className = "container" >
    <
    h2 > Mila, c 'est d'
    abord trois aspects. < /h2> <
    div className = "row" >
    <
    div className = "col-md-4" >
    <
    FaHandsHelping className = "icon" / >
    <
    h3 > Lorem ipsum < /h3> <
    p > De part nos projets nous contribuons au développement économique, nous soutenons l 'émergence de projet de coopérative pour la création d'
    activités locales et d 'emploi dans les pays de l'
    Afrique de l 'Est.  < /p> < /
    div > <
    div className = "col-md-4" >
    <
    FaGlobeAfrica className = "icon" / >
    <
    h3 > Lorem ipsum < /h3> <
    p > De part nos projets nous contribuons au développement économique, nous soutenons l 'émergence de projet de coopérative pour la création d'
    activités locales et d 'emploi dans les pays de l'
    Afrique de l 'Est. < /p> < /
    div > <
    div className = "col-md-4" >
    <
    FaFistRaised className = "icon" / >
    <
    h3 > Lorem ipsum < /h3> <
    p > De part nos projets nous contribuons au développement économique, nous soutenons l 'émergence de projet de coopérative pour la création d'
    activités locales et d 'emploi dans les pays de l'
    Afrique de l 'Est.  < /p> < /
    div > < /
    div > <
    /div>

    {
        children
    }

    <
    /MainSection>

)

const MainSection = styled.section `
text-align: center;
background-color:#f1f1f1;
padding-bottom: 3rem;

    h2 {
    font-size: 1.25rem;
    margin: 0 auto;
    padding: 2.5rem 0 1.5rem 0;
    }
}
.icon {
    font-size: 4.5rem;
    color: blue;
    margin: 1.5rem 0 0 0;
}
h3{
    font-size: 1.05rem;
    margin: 1rem 0 2rem 0;
}
p{
    font-size: 0.8rem;
    font-weight: 600;

}


@media(min-width: 768px) {
    padding: 1.5rem 0 1.5rem 0;
    h2{
        font-size: 1.45rem;
        margin: 0 auto;
        padding: 1.5rem 0 0.3rem 0;
    }
    h3 {
        font-size: 0.9rem;
        margin: 1rem 0 0.5rem 0;
    }
    p {
        font-size: 0.65rem;
        font-weight: 600;
    }
}
`