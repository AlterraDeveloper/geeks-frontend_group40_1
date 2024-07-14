// console.log("lesson 5");

// function charCount(text, char) {
//   let result = 0;

//   result = 5;
//   //...
//   return result;
//   return text + " " + char + "(" + result + ")"; // "hello" z(0)
// }

// let charCounter = charCount();

// console.log();

// DOM - Document Object Model

let emojiContainer = document.querySelector(".emoji-container");
let starsContainer = document.querySelector(".stars-container");

let stars = starsContainer.getElementsByTagName("i");
let emoji = emojiContainer.querySelector("i");

for (let i = 0; i < stars.length; i++) {
  let star = stars[i];
  // events
  star.addEventListener("click", function () {
    let rating = i + 1;
    updateRating(rating);
  });
}

updateRating(1);

function updateRating(rating) {
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    if (i >= rating) {
      star.classList.remove("star-active");
    } else {
      star.classList.add("star-active");
    }
  }

  let smileClasses = [
    "fa-face-angry",
    "fa-face-frown-open",
    "fa-face-meh",
    "fa-face-smile",
    "fa-face-laugh-squint",
  ];
  let smileClass = smileClasses[rating - 1];
  emoji.className = "fa-regular " + smileClass;

  let colors = ["red", "orange", "deepskyblue", "gold", "green"];
  let color = colors[rating - 1];
  emoji.style.color = color;

//   switch (rating) {
//     case 1:
//       emoji.className = "fa-regular fa-face-angry";
//       emoji.style.color = "red";
//       break;
//     case 2:
//       emoji.className = "fa-regular fa-face-frown-open";
//       emoji.style.color = "orange";
//       break;
//     case 3:
//       emoji.className = "fa-regular fa-face-meh";
//       emoji.style.color = "deepskyblue";
//       break;
//     case 4:
//       emoji.className = "fa-regular fa-face-smile";
//       emoji.style.color = "gold";
//       break;
//     case 5:
//       emoji.className = "fa-regular fa-face-laugh-squint";
//       emoji.style.color = "green";
//       break;
//   }
}
