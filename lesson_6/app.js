var myName;

console.log("lesson 6");

// let

// JavaScript - ECMAScript
// European Computer Manufactures Association
// before(до) 2015 - ECMAScript 5
// 2015+ - ECMAScript 6+

// var - hoisting

// V8 - JavaScript Engine

console.log(myName);
// console.log(mySurname); // error
// console.log(myFatherName); // error

myName = "Eugene";
let mySurname = "Kiselev";
const myFatherName = "Dmitrievich";

mySurname = null;
// myFatherName = "Anatolievich"; // error

console.log(mySurname);

const myInfo = {
  name: "Eugene",
  surname: "Kiselev",
  fatherName: "Dmitrievich",
};

console.log(myInfo);

myInfo.fatherName = "Anatolievich";
delete myInfo.surname;
myInfo.jobTitle = "Geeks courses";

console.log(myInfo);

// transplier - транспиляторы
// Babel
// i++ => i += 1 => i = i + 1;
for (let i = 0; i < 5; i++) {}

console.log("get0() =>", get0());
console.log("get10() =>", get10);

// declaration
// expression

function get0() {
  return 0;
}

var get10 = function () {
  return 10;
};

// sparsing
let numbers = [1, 2, 3, 4, 5]; //? ? ? ? ? ?  150
//             0 1 2 3 4    5 6 7 8 9 10 11

numbers[11] = 150;
numbers[15] = 200;

console.log("fragmentation:", numbers);
const numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]){
        numbers2.push(numbers[i])
    }
}

console.log("defragmentation:", numbers2);

// DOM - Document Object Model

document


