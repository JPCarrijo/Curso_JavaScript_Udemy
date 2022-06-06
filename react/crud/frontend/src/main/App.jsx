import React from "react";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';


import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Routes from "./Routes";
import Footer from "../components/templates/Footer";


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav iconHome="home" iconUser="users" user="Usuário" title="Início" />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>