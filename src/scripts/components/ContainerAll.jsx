import React, { Component } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import ajax from "../source.js";

class ContainerAll extends Component {
  render() {
    return (
      <div>
        <Header companyName={ajax.header.companyName} />
        <Main header={ajax.main.header} description={ajax.main.description} />
      </div>
    );
  }
}

export default ContainerAll;
