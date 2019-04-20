import React, { Component } from "react";
import Card from "./Card.jsx";

class TariffsList extends Component {
  render() {
    let cards = this.props.listCard.map((i, id) => (
      <Card
        key={id}
        name={i.name}
        price={i.price}
        period={i.period}
        description={i.description}
      />
    ));

    return <div className="main__tariffs tariffs">{cards}</div>;
  }
}

export default TariffsList;
