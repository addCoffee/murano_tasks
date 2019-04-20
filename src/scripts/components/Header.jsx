import React, { Component } from "react";
import ajax from "../source.js";
import Menu from "./Menu.jsx";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__company">{this.props.companyName}</div>
        <Menu items={ajax.header.menu} />
      </header>
    );
  }
}

export default Header;
