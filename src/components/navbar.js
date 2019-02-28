import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li
    style={{
      listStyleType: "none"
    }}
  >
    <Link to={props.to}> {props.children} </Link>{" "}
  </li>
);

export default ({ children }) => (
  <div>
    <menu
      style={{
        backgroundColor: "#4CAF50",
        color: "#fff",
        height: "50px",
        width: "100%",
        position: "fixed",
        zIndex: 2000
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
          lineHeight: "10px",
          position: "absolute",
          left: "50px",
          padding: 0,
          top: "10px",
          textTransform: "uppercase"

          // amakenga!!! niveau padding ou lineHeight
        }}
      >
        <h3> Mila East Africa </h3>{" "}
      </Link>

      <ul
        style={{
          background: "inherit",
          fontWeight: "bold",
          margin: "5rem 5rem auto",
          height: 0,
          display: "flex",
          flexDirection: "row",
          float: "right",
          textTransform: "uppercase"
        }}
      >
        <ListLink
          to="/about/"
          style={{
            display: "block",
            letterSpacing: "1px",
            lineHeight: 2.5,
            width: "100%",
            listStyleType: "none"
          }}
        >
          {" "}
          A propos{" "}
        </ListLink>{" "}
        <ListLink
          to="/portfolio/"
          style={{
            display: "block",
            letterSpacing: "1px",
            lineHeight: 2.5,
            padding: "0 20px",
            width: "100%"
          }}
        >
          {" "}
          Réalisations{" "}
        </ListLink>{" "}
      </ul>
    </menu>{" "}
    {children}{" "}
  </div>
);
