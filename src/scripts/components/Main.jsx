import React, { Component } from "react";
import TariffsList from "./Tariffs-list.jsx";
import ajax from "../source.js";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <p className="main__header">{this.props.header}</p>
        <p className="main__description">{this.props.description}</p>
        <TariffsList listCard={ajax.main.tariffs} />
      </main>
    );
  }
}

export default Main;
