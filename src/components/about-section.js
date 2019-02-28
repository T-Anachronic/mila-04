import React from "react"

export default ({
    children
}) => ( <
    div style = {
        {
            margin: '5rem 0 5rem 0',
            textAlign: 'left',

        }
    } >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-sm-6" >
    <
    img src = "https://source.unsplash.com/random/1200x650"
    alt = "" / > <
    /div> <
    div className = "col-sm-6" >
    <
    div style = {
        {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '300px'

        }
    } >
    <
    h2 style = {
        {
            fontSize: '2rem',
            letterSpacing: '2.5px'
        }
    } > Titre de la section < /h2>  <
    p > De part nos projets nous contribuons au développement économique, nous soutenons l 'émergence de projet de coopérative pour la création d'
    activités locales et d 'emploi dans les pays de l'
    Afrique de l 'Est. < /p>   <
    button style = {
        {
            backgroundColor: '#4CAF50',
            border: 'none',
            color: '#f1f1f1',

            padding: '5px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            margin: '1px',
            width: '28%',
            height: 'auto',
            cursor: 'pointer',
            WebkitTransitionDuration: '0.4s',
            transitionDuration: '0.4s',
            boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)'
        }
    } > Voir plus <
    /button> < /
    div > <
    /
    div > < /
    div > <
    /div> {
    children
} <
/div>
)