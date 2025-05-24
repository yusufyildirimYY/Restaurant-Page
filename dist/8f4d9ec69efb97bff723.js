import "./style.css";
import firstLoad from "./functions/firstLoad";
import render from "./functions/clearContent";
import home from "./Pages/Home/home";
import menu from "./Pages/Menu/menu";
import about from "./Pages/About/about";

firstLoad();

const homeButton = document.getElementById("homeBtn");
const menuButton = document.getElementById("menuBtn");
const aboutButton = document.getElementById("aboutBtn");

homeButton.addEventListener("click", () => {
  render();
  home();
});
menuButton.addEventListener("click", () => {
  render();
  menu();
});

aboutButton.addEventListener("click", () => {
  render();
  about();
});
