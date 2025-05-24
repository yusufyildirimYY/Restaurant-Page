import navbar from "../Pages/Components/navbar.js";
import home from "../Pages/Home/home";

const firstload = () => {
  const content = document.createElement("div");
  content.id = "content";
  const body = document.querySelector("body");

  body.appendChild(content);
  body.appendChild(navbar());
  body.appendChild(home());
};

export default firstload;
