import React from "react";
// import { Link } from 'react-router-dom'
import NewItemButton from './NewItem'
import logo from "../logo.svg";

const Header = () => (
  <div>
    <header>
      <img src={logo} className="App-logo" alt="logo" />
    </header>

    <NewItemButton />
  </div>
);

export default Header;
