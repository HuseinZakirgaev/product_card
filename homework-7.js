function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showTemperature("Медине", 25);

const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed === speedOfLight) {
    console.log("Скорость света");
  } else {
    console.log("Субсветовая скорость");
  }
}

checkSpeed(300000000);
checkSpeed(299792458);
checkSpeed(100000000);

const productName = "Наушники";
const productPrice = 150;

function buyProduct(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName}. Товар приобретён. Спасибо за покупку!`);
  } else {
    const missingAmount = productPrice - currentBudget;
    console.log(`Вам не хватает ${missingAmount}$, пополните баланс`);
  }
}

buyProduct(200);
buyProduct(100);

function sayHello() {
  console.log("Добро пожаловать!");
}

sayHello();

const userName = "Husein";
const userAge = 44;
const isStudent = true;

console.log(`Имя: ${userName}`);
console.log(`Возраст: ${userAge}`);
console.log(`Студент: Да`);