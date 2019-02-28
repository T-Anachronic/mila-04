import React from "react"

export default ({
    children
}) => ( <
    div style = {
        {
            backgroundColor: '#333',
            margin: 0,
            height: '35vh'

        }
    } >
    <
    div className = "container-fluid" >
    <
    div className = "row" >
    <
    div className = "col-sm-4" >
    <
    h3 style = {
        {
            marginTop: '2rem',
            color: "#f1f1f1"
        }
    } > Mila association à but non lucratif. < /h3>  < /
    div >
    <
    div className = "col-sm-4" > {
        /* menu */
    } <
    /div>

    <
    div className = "col-sm-4" > {
        /* icons */
    } <
    /div>

    <
    /div > 

    <
    /div>

    {
        children
    } <
    /div>

)