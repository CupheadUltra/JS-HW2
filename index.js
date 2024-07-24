
let celcius = prompt(
  "Введіть скільки градусів Цельсія ви хочете перевести в Фаренгейти"
);
let fahrenheit = (celcius * 9) / 5 + 32;
console.log(fahrenheit);

let daysInMonth = 30;
let hoursADay = 24;
let minutesInHour = 60;
console.log(daysInMonth * hoursADay * minutesInHour);

let startingHealth = 100;
let startingEnergy = 150;
console.log(startingHealth - 20, "HP");
console.log(startingEnergy - 50, "Energy");

let normalPrice = prompt("Введіть ціну без знижки");
let priceWithDiscount = (normalPrice * 10) / 100;
console.log(normalPrice - priceWithDiscount);

let number = prompt("Введіть число, щоб заоокруглити");
let roundedNumber = Math.round(number);
console.log(roundedNumber);

let numberString = 5.34;
let decimalNumber = parseFloat(numberString);
console.log(decimalNumber);

let taskSevenNumber = prompt("Введіть число:");
let taskSevenValue = parseInt(taskSevenNumber);
console.log(taskSevenValue);

let firstNumber = prompt("Введіть число, щоб знайти квадратний корінь");
let sqrtNumber = Math.sqrt(firstNumber);
console.log(sqrtNumber);

let normalNumber = 123;
let stringNumber = "456";
let pasrseIntNumber = parseInt(stringNumber);
console.log(stringNumber);
let numberToString = toString(normalNumber);
console.log(numberToString);
