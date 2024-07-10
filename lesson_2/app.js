console.log("lesson 2");

// variables

let basePrice = 800;
let discount = 50; // in percents
let discountPrice = (basePrice * discount) / 100;
let salePrice = basePrice - discountPrice;

console.log("Sale price = ", salePrice);

// data types - типы данных
// 1. string - текстовый
// 2. number - числовой
// 3. boolean - булевый (логический)
// 4. undefined - неопределенный
// 5. null - пустой
// 6. object - объект
// --------
// 7. BigInt
// 8. Symbol

let promocode = "GEEKS_SUMMER_2024";

let isStudentPaid = true;
let isStudentGraduated = false;

let studentPassport = null;
let studentEmail; // undefined

console.log("passport:", studentPassport);
console.log("email:", studentEmail);

studentPassport = {
  // key: value
  series: "ID",
  no: "123456",
  inn: "21156118689",
  issueDate: "01.01.2020",
  expireDate: "01.01.2030",
  hasExpired: false,
};

let frontendTeachers = {
  "HTML,CSS": "Felix",
  JavaScript: "Evgeniy",
  "React, Redux": "Dastan",
};

let group40 = {
  course: "Frontend",
  order: 40,
  time: "17:00-19:00",
  startDate: "29052024",
  currentTeacher: "Evgeniy",
  currentMonth: 2,
  isActive: true,
  finishDate: null,
};

// operators

// concatenation - конкатенация
let groupName = "Geeks " + group40.order + "-";

if (group40.time === "17:00-19:00") {
  groupName = groupName + "1";
} else {
  groupName += "2";
}

switch (group40.course) {
  case "Frontend":
    groupName += "F";
    break;
  case "Backend":
    groupName += "B";
    break;
  case "Android":
    groupName += "A";
    break;
  case "IOS":
    groupName += "I";
    break;
}

groupName += group40.startDate;

console.log("Group name:", groupName); // Geeks 40-1F29052024

// escaping - экранирование
let geeksCompanyName = "ОсОО \"Сигма Солюшнс\"";

console.log(geeksCompanyName);