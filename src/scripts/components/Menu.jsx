import React, { Component } from "react";

class Menu extends Component {
  render() {
    let items = this.props.items.map(menuItems => (
      <a className="menu__item">{menuItems}</a>
    ));

    return (
      <nav className="header__menu menu">
        {items}
        <a className="menu__item menu__item--button-sign">Sign up</a>
        <button className="menu__mobile-button">
          <img alt="menu button" src="menu_icon.png" height="30" width="30" />
        </button>
      </nav>
    );
  }
}

export default Menu;
