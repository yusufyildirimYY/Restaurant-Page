import navbar from "../Pages/Components/navbar.js";
import home from "../Pages/Home/home";

const firstload = () => {
  const content = document.getElementById("content");
  const body = document.querySelector("body");

  body.appendChild(content);
  body.insertBefore(navbar(), body.firstChild);
  home();
};

export default firstload;
