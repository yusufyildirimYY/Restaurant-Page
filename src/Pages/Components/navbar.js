import "./navbar.css";
const navbar = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const menuBtn = document.createElement("button");
  menuBtn.id = "menuBtn";
  menuBtn.textContent = "Menu";

  const homeBtn = document.createElement("button");
  homeBtn.id = "homeBtn";
  homeBtn.textContent = "Home";

  const aboutBtn = document.createElement("button");
  aboutBtn.id = "aboutBtn";
  aboutBtn.textContent = "About";

  nav.appendChild(menuBtn);
  nav.appendChild(homeBtn);
  nav.appendChild(aboutBtn);

  header.appendChild(nav);

  return header;
};

export default navbar;
