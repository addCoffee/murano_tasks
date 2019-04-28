import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
    render() {
        const descriptions = this.props.description.map(items => (
            <li className="card__description--decor">{items}</li>
        ));

        return (
            <div className="tariffs__card card">
                <p className="card__name">{this.props.name}</p>
                <p className="card__price-per">
                    <span className="card__price-per--price">
                        ${this.props.price}{" "}
                    </span>
                    <span className="card__price-per--period">
                        \ {this.props.period}
                    </span>
                </p>
                <div>
                    <ul className="card__description">{descriptions}</ul>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
};

export default Card;
