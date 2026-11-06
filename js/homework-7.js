/**
 * Задание №3. Создать функцию, которая принимает город и температуру и выводит сообщение о текущей температуре в консоль.
 */
function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showTemperature("Медине", 25);

/**
 * Задание №4. Создать переменную со значением скорости света и функцию, которая сравнивает переданную скорость со скоростью света.
 */
const speedOfLight = 299792458;

/**
 * Проверяет скорость и определяет, выше она скорости света, ниже неё или равна ей.
 */
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

/**
 * Задание №5. Создать переменные с названием товара и его ценой, а затем функцию, которая проверяет, хватает ли денег на покупку.
 */
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

/**
 * Задание №6. Создать функцию с произвольным именем, которая выводит приветственное сообщение.
 */
function sayHello() {
  console.log("Добро пожаловать!");
}

sayHello();

/**
 * Задание №7. Создать три переменные произвольных типов данных.
 */
const userName = "Husein";
const userAge = 44;
const isStudent = true;

console.log(`Имя: ${userName}`);
console.log(`Возраст: ${userAge}`);
console.log(`Студент: Да`);