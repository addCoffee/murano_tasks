import React, { Component } from "react";

class Card extends Component {
  render() {
    let descriptions = this.props.description.map(i => (
      <li className="card__description--decor">{i}</li>
    ));

    return (
      <ul className="tariffs__card card">
        <li className="card__name">{this.props.name}</li>
        <li className="card__price-per">
          <span className="card__price-per--price">{this.props.price} </span>
          <span className="card__price-per--period">{this.props.period}</span>
        </li>
        <li>
          <ul className="card__description">{descriptions}</ul>
        </li>
      </ul>
    );
  }
}

export default Card;
