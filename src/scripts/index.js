import img from "../images/menu_icon.png";
import React from "react";
import ReactDOM from "react-dom";
import ContainerAll from "./components/ContainerAll.jsx";

ReactDOM.render(<ContainerAll />, document.getElementById("root"));

/*window.onload = function() {
  let menu_icon = document.querySelectorAll(".menu__item");
  let menu_style = document.querySelector(".menu");

  menu_style.onclick = function() {
    for (let i of menu_icon) {
      i.classList.toggle("menu__item--hidden");
    }
  };
};*/
