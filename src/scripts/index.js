window.onload = () => {
  user = document.querySelector(".name p");

  user.onclick = function() {
    this.classList.toggle("clicked");
  };
};
