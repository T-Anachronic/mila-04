import React from "react";
import Navbar from "../components/navbar"
import styles from "../styles/card.module.css";
import Hero from "../components/hero-section";
import Header from "../components/header";
import AboutSection from "../components/about-section";
import Footer from "../components/footer";

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
    } < /h3>{" "} <
    p className = {
        styles.description
    } > {
        props.description
    } < /p>{" "} < /
    div > {
        " "
    } <
    /div>
);


export default () => ( <
    div style = {
        {
            textAlign: "center"
        }
    } >
    <
    Hero >
    <
    Navbar > < /Navbar>

    <
    div className = "container"
    style = {
        {
            color: "#f1f1f1",
            position: "relative",
            top: "15rem"
        }
    } > {
        " "
    } <
    h1 style = {
        {
            fontSize: "2.5rem"
        }
    } > {
        " "
    }
    Nous accompagnons les ressortissants de l 'Afrique de l'
    Est. {
        " "
    } <
    /h1>{" "} <
    p style = {
        {
            fontSize: "1.25rem"
        }
    } > {
        " "
    }
    Nous organisons des événements culturels pour partager et promouvoir les cultures de l 'Afrique de l'
    Est(concert, expositions, événements sportifs...) et créons des liens entre la communauté Africaine de l 'Est et la France. < /
    p > {
        " "
    } <
    /div>{" "} < /
    Hero > <
    section style = {
        {
            backgroundColor: "#f1f1f1",
            padding: "3.5rem 0 0 0"
        }
    } >
    <
    div style = {
        {
            paddingBottom: "1.5rem"
        }
    } >
    <
    Header headerText = "Deuxième section" / >
    <
    /div>{" "} <
    div className = "container"
    style = {
        {
            paddingBottom: '2.5rem'
        }
    } >
    <
    div className = "row" >
    <
    div className = "col-sm-4" >
    <
    Row title = "Caritatif"
    description = "De part nos projets nous contribuons au développement économique, nous soutenons l'émergence de projet de coopérative pour la création d'activités locales et d'emploi dans les pays de l'Afrique de l'Est. " /
    >
    <
    /div>

    <
    div className = "col-sm-4" >
    <
    Row title = "Entraide"
    description = "Nous accompagnons les ressortissants de l'Afrique de l'Est ( étudiants, demandeurs d'asiles, travailleurs, regroupements familiales...) en région PACA, pour les orienter auprès des différents institutions. Faciliter leurs démarches administratives pour favoriser leur intégration en région PACA. " /
    >
    <
    /div>

    <
    div className = "col-sm-4" >
    <
    Row title = "Partage"
    description = "Nous organisons des événements culturels pour partager et promouvoir les cultures de l'Afrique de l'Est ( concert, expositions, événements sportifs...) et créons des liens entre la communauté Africaine de l'Est et la France." /
    >
    <
    /div> < /
    div > <
    /div> < /
    section >

    <
    AboutSection > < /AboutSection>

    <
    div className = "container"
    style = {
        {
            backgroundColor: "yellow",
            padding: "3.5rem"
        }
    } >
    <
    Header headerText = "Quatrième section" / >
    <
    /div>

    <
    div className = "container"
    style = {
        {
            padding: "3.5rem",
            backgroundColor: "#f1f1f1"
        }
    } >
    <
    Header headerText = "Cinquième section" / >
    <
    p > Contact form < /p> < /
    div >

    <
    Footer >
    <
    /
    Footer >

    <
    /
    div >
);