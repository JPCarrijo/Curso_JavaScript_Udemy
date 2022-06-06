import React from "react";
import './NavItens.css';
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  <nav className="menu">
    <Link to="/">
      <i className={`fa fa-${props.iconHome}`}> </i>
      {props.title}
    </Link>
    <Link to="/users">
      <i className={`fa fa-${props.iconUser}`}></i>
      {props.user}
    </Link>
  </nav>

