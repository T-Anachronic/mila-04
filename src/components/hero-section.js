import React from "react"
import heroStyles from "../styles/hero-section.module.css"

export default ({
    children
}) => ( <
    div className = {
        heroStyles.hero
    } > {
        children
    } < /div>
)