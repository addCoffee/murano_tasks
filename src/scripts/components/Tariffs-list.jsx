import React, { Component } from "react";
import Card from "./Card.jsx";
import PropTypes from "prop-types";

class TariffsList extends Component {
    render() {
        const cards = this.props.listCard.map((item, id) => (
            <Card
                key={id}
                name={item.name}
                price={item.price}
                period={item.period}
                description={item.description}
            />
        ));

        return <div className="main__tariffs tariffs">{cards}</div>;
    }
}

TariffsList.propTypes = {
    listCard: PropTypes.object.isRequired,
};

export default TariffsList;
