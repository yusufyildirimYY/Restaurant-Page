import chefImage from "../../Images/chef.png";
import render from "../../functions/clearContent";
import menu from "../Menu/menu";

import "./home.css";
const home = () => {
  const content = document.getElementById("content");

  const homeContent = document.createElement("div");
  homeContent.id = "homeContent";

  const homeText = document.createElement("div");
  homeText.className = "homeText";

  const headerText = document.createElement("h1");
  headerText.className = "HeaderText";
  headerText.textContent =
    "Enjoy authentic Japanese meals crafted by our chefs";

  const textDescription = document.createElement("p");
  textDescription.className = "textDescription";
  textDescription.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum ratione reprehenderit non, maiores tenetur? Consequuntur quibusdam, soluta saepe, atque voluptatibus quos minus nisi dolores quidem suscipit expedita dolorum aliquid et dolor quod quis neque.";

  const btnContainer = document.createElement("div");
  btnContainer.className = "btnContainer";

  const menuButton = document.createElement("button");
  menuButton.id = "menuBtn2";
  menuButton.textContent = "Our Menu";

  const chefImg = document.createElement("img");
  chefImg.id = "chefImg";
  chefImg.src = chefImage;
  chefImg.alt = "Chefs";

  homeText.appendChild(headerText);
  homeText.appendChild(textDescription);
  btnContainer.appendChild(menuButton);
  homeText.appendChild(btnContainer);
  homeContent.appendChild(homeText);
  homeContent.appendChild(chefImg);

  menuButton.addEventListener("click", () => {
    render();
    menu();
  });
  return content.appendChild(homeContent);
};

export default home;
