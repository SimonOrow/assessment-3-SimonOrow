"use strict";

const shapeForm = document.querySelector(".add-square");

const shapeContainer = document.querySelector(".shape-container");

const toggleBtn = document.querySelector(".toggle");

let number = 0;

document.body.style.backgroundColor = "white";

shapeForm.addEventListener("click", (e) => {
  e.preventDefault();
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.title = "I'm a box!";
  newDiv.textContent = ++number;
  newDiv.style.width = "50px";
  newDiv.style.height = "50px";
  newDiv.style.lineHeight = "50px";
  shapeContainer.append(newDiv);
});

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "lightcoral";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
