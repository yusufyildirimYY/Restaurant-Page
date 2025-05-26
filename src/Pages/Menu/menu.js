import "./menu.css";
import tamegoYaki from "../../Images/tamago-yaki.png";
import gyoza from "../../Images/gyoza.png";
import edamame from "../../Images/edaname.png";
import korokke from "../../Images/korokke.png";
import chickenKatsuCurry from "../../Images/chicken-katsu-curry.png";
import tonkotsuRamen from "../../Images/tonkotsu-ramen.png";
import chirashiSushiBowl from "../../Images/chirashi-sushi-bowl.png";
import unagiOdon from "../../Images/unagi-don.png";
import moichiIceCream from "../../Images/mochi-ice-cream.png";
import dorayaki from "../../Images/Dorayaki.png";
import matchaLatte from "../../Images/matcha-lette.png";
import genmaichaTea from "../../Images/gemaicha-tea.png";

const menu = () => {
  const menuData = [
    {
      id: "mainMeals",
      header: "🥢Side Dishes",
      items: [
        {
          img: tamegoYaki,
          name: "Tamago Yaki",
          desc: "Sweet Japanese rolled omelette slices.",
          class: "L",
        },
        {
          img: gyoza,
          name: "Gyoza",
          desc: "Pan-fried pork and veggie dumplings.",
          class: "L",
        },
        {
          img: edamame,
          name: "Edamame",
          desc: "Steamed and salted green soybeans.",
          class: "L",
        },
        {
          img: korokke,
          name: "Korokke",
          desc: "Japanese potato and meat croquettes.",
          class: "L",
        },
      ],
    },
    {
      id: "sideDish",
      header: "🍜 Main Meals",
      items: [
        {
          img: chickenKatsuCurry,
          name: "Chicken Katsu Curry",
          desc: "Crispy chicken cutlet with rich Japanese curry over rice.",
          class: "L",
        },
        {
          img: tonkotsuRamen,
          name: "Tonkotsu Ramen",
          desc: "Creamy pork bone broth, chashu pork, noodles, soft-boiled egg.",
          class: "R",
        },
        {
          img: chirashiSushiBowl,
          name: "Chirashi Sushi Bowl",
          desc: "Assorted sashimi over a bed of sushi rice with toppings.",
          class: "L",
        },
        {
          img: unagiOdon,
          name: "Unagi Don",
          desc: "Grilled eel glazed with sweet soy sauce over steamed rice.",
          class: "R",
        },
      ],
    },
    {
      id: "others",
      header: "🍰 Others (Desserts & Drinks)",
      items: [
        {
          img: moichiIceCream,
          name: "Mochi Ice Cream",
          desc: "Soft rice cake filled with ice cream (various flavors).",
          class: "R",
        },
        {
          img: dorayaki,
          name: "Dorayaki",
          desc: "Sweet red bean pancake sandwich.",
          class: "R",
        },
        {
          img: matchaLatte,
          name: "Matcha Latte",
          desc: "Creamy green tea with milk.",
          class: "R",
        },
        {
          img: genmaichaTea,
          name: "Genmaicha Tea",
          desc: "Nutty green tea with roasted brown rice.",
          class: "R",
        },
      ],
    },
  ];
  const content = document.getElementById("content");
  const menuContent = document.createElement("div");
  menuContent.id = "menuContent";

  // Function to create each meal item
  function createMealItem(meal) {
    const mealDiv = document.createElement("div");
    mealDiv.className = `meal${meal.class}`;

    const img = document.createElement("img");
    img.className = `mealImg${meal.class}`;
    img.src = meal.img;
    img.alt = "";

    const nameP = document.createElement("p");
    nameP.className = `mealName${meal.class}`;
    nameP.textContent = meal.name;

    const descP = document.createElement("p");
    descP.className = `mealDescription${meal.class}`;
    descP.textContent = meal.desc;

    mealDiv.appendChild(img);
    mealDiv.appendChild(nameP);
    mealDiv.appendChild(descP);

    return mealDiv;
  }

  // Generate all sections
  menuData.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.id = section.id;

    const header = document.createElement("h1");
    header.className = "categoryHeader";
    header.textContent = section.header;

    const mealsContainer = document.createElement("div");
    mealsContainer.className = "meals";

    section.items.forEach((meal) => {
      const mealItem = createMealItem(meal);
      mealsContainer.appendChild(mealItem);
    });

    sectionDiv.appendChild(header);
    sectionDiv.appendChild(mealsContainer);
    menuContent.appendChild(sectionDiv);
  });

  return content.appendChild(menuContent);
};

export default menu;
