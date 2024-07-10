console.log("lesson 4");

function capitalize(text) {
  let firstLetter = text[0];
  let restLetters = text.slice(1);
  return firstLetter.toUpperCase() + restLetters.toLowerCase();
}

// for of
let students = ["adilet", "RENATA", "SalTANat", "baKIR", "MARSel"];
let newStudents = [];

for (let student of students) {
  newStudents.push(capitalize(student));
}

console.log(students);
console.log(newStudents);

// functions - функции

// function declaration - определение функции
function calculatePrice(price, discount) {
  let priceWithDiscount = price - (price * discount) / 100;
  return priceWithDiscount;
}

console.log(calculatePrice(1000, 40));

// y = f(x^2), x = 5, y = 25

// GEEKS_SUMMER - 20%
// KIT_FORUM_2024 - 5%
// FROM_EVGENIY_JS - 100%
function calculatePriceWithPromocode(price, promocode) {
  if (!promocode) return price;

  switch (promocode.toUpperCase()) {
    case "GEEKS_SUMMER":
      return calculatePrice(price, 20);
    case "KIT_FORUM_2024":
      return calculatePrice(price, 5);
    case "FROM_EVGENIY_JS":
      return calculatePrice(price, 100);
    default:
      return price;
  }
}

// let userPromocode = prompt("enter promocode");

// console.log(calculatePriceWithPromocode(10_000, userPromocode));

// function expression - функциональное выражение

let getDeveloperLevel = function (yearsInIT) {
  if (typeof yearsInIT !== "number" || yearsInIT < 0) {
    console.error("Invalid years in IT", yearsInIT);
    return null;
  }

  if (yearsInIT <= 2) return "Junior";
  else if (yearsInIT > 2 && yearsInIT <= 7) return "Middle";
  else if (yearsInIT > 7) return "Senior";
};

console.log("6 month = ", getDeveloperLevel(0.5));
console.log("6 years = ", getDeveloperLevel(6));
console.log("16 years = ", getDeveloperLevel(16));

// function declaration
function calculateCircleArea(radius){
    // return Math.PI * radius ** 2;
    return Math.PI * radius * radius;
    // return Math.PI * Math.pow(radius, 2);
}
// function expression
let calculateCircleAreaV2 = function(radius){
    return Math.PI * (radius ** 2);
}

console.log("V1.0 = " + calculateCircleArea(10));
console.log("V2.0 = " + calculateCircleAreaV2(10));
