import React, { Component } from "react";

class ContainerAll extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__company">Company name</div>
          <nav className="header__menu menu">
            <a className="menu__item">Features</a>
            <a className="menu__item">Enterprise</a>
            <a className="menu__item">Support</a>
            <a className="menu__item">Pricing</a>
            <a className="menu__item menu--button-sign">Sign up</a>
            <div className="menu__adaptive-hidden-button">
              <img alt="menu button" src="menu_icon.png" />
            </div>
          </nav>
        </header>

        <main className="main">
          <p className="main__header">Pricing</p>

          <p className="main__description">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built wuth default
            Bootstrap components and utilities wuth lil customization.
          </p>

          <ul className="main__tariffs tariffs">
            <li className="tariffs__card card">
              <p className="card__name">Free</p>
              <div className="card__price-per">
                <span className="card__price-per--price">$0 </span>
                <span className="card__price-per--period">/ mo</span>
              </div>
              <ul className="card__description">
                <li className="card__description--decor">10 users included</li>
                <li className="card__description--decor">2 GB of storage</li>
                <li className="card__description--decor">Email support</li>
                <li className="card__description--decor">Help center access</li>
              </ul>
              <a className="card__button card--button-sign">Sign up for free</a>
            </li>
            <li className="tariffs__card card">
              <p className="card__name">Pro</p>
              <div className="card__price-per">
                <span className="card__price-per--price">$15 </span>
                <span className="card__price-per--period">/ mo</span>
              </div>
              <ul className="card__description">
                <li className="card__description--decor">20 users included</li>
                <li className="card__description--decor">10 GB of storage</li>
                <li className="card__description--decor">
                  Priority email support
                </li>
                <li className="card__description--decor">Help center access</li>
              </ul>
              <a className="card__button">Get started</a>
            </li>
            <li className="tariffs__card card">
              <p className="card__name">Enterprise</p>
              <div className="card__price-per">
                <span className="card__price-per--price">$29 </span>
                <span className="card__price-per--period">/ mo</span>
              </div>
              <ul className="card__description">
                <li className="card__description--decor">30 users included</li>
                <li className="card__description--decor">15 GB of storage</li>
                <li className="card__description--decor">
                  Phone and email support
                </li>
                <li className="card__description--decor">Help center access</li>
              </ul>
              <a className="card__button">Contact us</a>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default ContainerAll;
