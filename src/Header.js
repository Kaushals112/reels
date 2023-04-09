import React from "react";
import { NavLink } from "react-router-dom";



function Header(props) {
  return (
    <header>
      <h1><img  id="image" src="./logo.jpeg" alt="logo"/></h1>
      <NavLink to={"/Home"}>{props.home}</NavLink>
      

    </header>
  );
}

export default Header;
