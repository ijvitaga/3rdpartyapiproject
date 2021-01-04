import React from "react"
import {Nav} from "./Nav"
import {generatePath, Link} from "react-router-dom"

export const Header = (props) => {

    const h1Style = {textAlign:"center",}
    const spanStyle = {color: "var(--light-blue)"}

    return (<>
    <Link to="/"><h1 style={h1Style}>All About <span style={spanStyle}>Anime</span></h1></Link>
    <h2>Click the links below to show popular Animes in that genre.</h2>
    <Nav/>
    </>)
}