// if..else

// Boolean
// > < >= <= == === != !==
// && || !

let trafficColor = "";

// DRY - Dont repeat yourself

// if (trafficColor === "green" || trafficColor === "зеленый") {
//   console.log("GO");
// } else if (trafficColor === "yellow" || trafficColor === "") {
//   //...
// } else if (trafficColor === "red" || trafficColor === "") {
//   // ...
// } else {
//   console.warn("Unknown color");
// }

// switch case

// switch (trafficColor) {
//   case "green":
//   case "зеленый":
//   case "зелёный":
//     console.log("Go");
//     break;
//   case "yellow":
//   case "":
//     console.log("Wait...");
//     break;
//   case "red":
//   case "":
//     console.log("");
//     break;
//   default:
//     console.warn("Unknown color");
// }

// let weekday = "mon";

// if(weekday === "wed" || weekday === "sat"){
//     console.log("Yohooo! Today lesson in GEEKS");
// }else{
//     console.log("Normal day");
// }

// let studentLogin = "jkiselev";
// let studentPassword = prompt("Enter your password");

// if (studentLogin === "jkiselev" && studentPassword === "test123test") {
//   console.log("Auth success! Welcome to GEEKS");
// } else {
//   console.error("Auth failed. Check your login or password");
// }

// Arrays - массивы
// Indexing (индексация)

let students = ["Abay", "Milana", "Aibike", "Diana", "Tazabek", "Maxim"];
//                 0        1         2         3         4         5
console.log("4th student is", students[3]);
console.log("Last student is", students[students.length - 1]);

console.log("Group consists of " + students.length + " students");

let newStudent = "Tamara";

// students.push(newStudent);
// students.unshift(newStudent);
// students.splice(2, 0, newStudent);
let maximIndex = students.indexOf("Maxim");
students.splice(maximIndex, 1);

console.log("Group consists of " + students.length + " students");
console.log("Last student is", students[students.length - 1]);

let homeworks = [null, null, null, null, null, null, null, null];

homeworks[0] = 10;
homeworks[1] = 8;
homeworks[3] = 10;
homeworks[7] = 7

console.log(homeworks);

// Loops - циклы

let homeworksPointsSum = 0;

// for..of
for (let homework of homeworks) {
  if (homework === null) {
    continue;
  } else {
    homeworksPointsSum += homework;
  }
}

console.log("Total points:", homeworksPointsSum);

// for
for (let i = 0; i < homeworks.length; i++) {
  let result =
    homeworks[i] === null ? "не выполнено" : homeworks[i] + " баллов";
  console.log(i + 1 + " домашнее задание:", result);
}

let completeHomeworksCount = 0;

for (let homework of homeworks) {
  if (homework !== null) {
    completeHomeworksCount++;
  }
}
console.log(
  "Вы сдали " +
    completeHomeworksCount +
    " из " +
    homeworks.length +
    " домашних заданий"
);
