import React, { Component } from "react";
import PropTypes from "prop-types";

class Menu extends Component {
    render() {
        const items = this.props.items.map(menuItems => (
            <a className="menu__item">{menuItems}</a>
        ));

        function onShow() {
            const menuItems = document.querySelectorAll(".menu__item");
            const menuIcon = document.querySelector(".menu__mobile-button");

            menuIcon.onclick = function() {
                for (let i of menuItems) {
                    i.classList.toggle("menu__item--hidden");
                }
            };
        }

        return (
            <nav className="header__menu menu">
                {items}
                <a className="menu__item menu__item--button-sign">Sign up</a>
                <button className="menu__mobile-button">
                    <img
                        onClick={onShow}
                        alt="menu button"
                        src="menu_icon.png"
                        height="30"
                        width="30"
                    />
                </button>
            </nav>
        );
    }
}

Menu.propTypes = {
    items: PropTypes.object.isRequired,
};

export default Menu;
