import React, { Component } from "react";
import TariffsList from "./Tariffs-list.jsx";
import PropTypes from "prop-types";

class Main extends Component {
    render() {
        return (
            <main className="main">
                <p className="main__header">{this.props.header}</p>
                <p className="main__description">{this.props.description}</p>
                <TariffsList listCard={this.props.response.main.tariffs} />
            </main>
        );
    }
}

Main.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Main;
