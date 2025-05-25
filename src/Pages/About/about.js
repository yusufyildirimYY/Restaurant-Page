import food1 from "../../Images/food1.png";
import food2 from "../../Images/food2.png";
import food3 from "../../Images/food3.png";
import restaurant1 from "../../Images/restaurant1.png";
import restaurant2 from "../../Images/restaurant2.png";
import restaurant3 from "../../Images/restaurant3.png";
import "./about.css";
const about = () => {
  const content = document.getElementById("content");

  const aboutContent = document.createElement("div");
  aboutContent.id = "aboutContent";

  const photoLeft = document.createElement("div");
  photoLeft.className = "photo";

  const p1 = document.createElement("img");
  p1.id = "p1";
  p1.className = "photos";
  p1.src = food1;

  const p2 = document.createElement("img");
  p2.id = "p2";
  p2.className = "photos";
  p2.src = restaurant3;

  const p3 = document.createElement("img");
  p3.id = "p3";
  p3.className = "photos";
  p3.src = food3;

  photoLeft.appendChild(p1);
  photoLeft.appendChild(p2);
  photoLeft.appendChild(p3);
  aboutContent.appendChild(photoLeft);

  const aboutText = document.createElement("div");
  aboutText.className = "aboutText";

  const aboutHeader = document.createElement("h1");
  aboutHeader.id = "aboutHeader";
  aboutHeader.textContent = "About Us";
  aboutText.appendChild(aboutHeader);

  const aboutDescription = document.createElement("p");
  aboutDescription.id = "aboutDescription";
  aboutDescription.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maiores eum minima molestiae adipisci eligendi culpa. Tenetur aliquam ea debitis iusto sequi accusamus sapiente ut perspiciatis nam consequatur excepturi eaque unde, illo et voluptas voluptatum explicabo adipisci? Alias, quisquam eos ex fugiat amet ullam? Debitis perferendis accusamus voluptatum ad, illum inventore cum qui aperiam aspernatur officia iusto nobis laborum placeat quos magni dolorum numquam totam maiores sapiente, error libero iure.";
  aboutText.appendChild(aboutDescription);

  const aboutExtra = document.createElement("div");
  aboutExtra.id = "aboutExtra";

  const aboutExtras1 = document.createElement("h1");
  aboutExtras1.classList = "aboutExtras";

  const aboutNumber1 = document.createElement("span");
  aboutNumber1.className = "aboutNumber";
  aboutNumber1.textContent = "10";

  const aboutP1 = document.createElement("p");
  aboutP1.innerHTML = '<span class="textOpac">Years Of</span> <br />Experience';

  aboutExtras1.appendChild(aboutNumber1);
  aboutExtras1.appendChild(aboutP1);
  aboutExtra.appendChild(aboutExtras1);

  const aboutExtras2 = document.createElement("h1");
  aboutExtras2.classList = "aboutExtras";

  const aboutNumber2 = document.createElement("span");
  aboutNumber2.className = "aboutNumber";
  aboutNumber2.textContent = "5000";

  const aboutP2 = document.createElement("p");
  aboutP2.innerHTML = '<span class="textOpac">Customer</span> <br /> Reviews';

  aboutExtras2.appendChild(aboutNumber2);
  aboutExtras2.appendChild(aboutP2);
  aboutExtra.appendChild(aboutExtras2);
  aboutText.appendChild(aboutExtra);
  aboutContent.appendChild(aboutText);

  const photoRight = document.createElement("div");
  photoRight.className = "photo";

  const p4 = document.createElement("img");
  p4.id = "p4";
  p4.className = "photos";
  p4.src = food2;

  const p5 = document.createElement("img");
  p5.id = "p5";
  p5.className = "photos";
  p5.src = restaurant1;

  const p6 = document.createElement("img");
  p6.id = "p6";
  p6.className = "photos";
  p6.src = restaurant2;

  photoRight.appendChild(p4);
  photoRight.appendChild(p5);
  photoRight.appendChild(p6);
  aboutContent.appendChild(photoRight);

  return content.appendChild(aboutContent);
};

export default about;
