import React from "react";
import './Nav.css';
import NavItens from "./NavItens";


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <aside className="menu-area">
    <NavItens {...props} />
  </aside>

