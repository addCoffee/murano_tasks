import React, { Component } from "react";
import Menu from "./Menu.jsx";
import PropTypes from "prop-types";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__company">{this.props.companyName}</div>
                <Menu items={this.props.response.header.menu} />
            </header>
        );
    }
}

Header.propTypes = {
    companyName: PropTypes.string.isRequired,
};

export default Header;
