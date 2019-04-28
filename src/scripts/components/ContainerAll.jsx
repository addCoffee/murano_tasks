import React, { Component } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import ajax from "../source.js";

class ContainerAll extends Component {
  render() {
    return (
      <div>
        <Header response={ajax} companyName={ajax.header.companyName} />
        <Main
          response={ajax}
          header={ajax.main.header}
          description={ajax.main.description}
        />
      </div>
    );
  }
}

export default ContainerAll;
