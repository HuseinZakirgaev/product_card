// main.js

import { Coffee, Tea, Lemonade } from './drinks.js';
import { Cafe } from './cafe.js';

// 1. Создаем кафе
const myCafe = new Cafe("У Гусейна", "ул. Центральная, д. 1");
myCafe.getCafeInfo();

// 2. Создаем напитки
const latte = new Coffee("Латте", "L", 250, 85, "Арабика", "Овсяное");
const greenTea = new Tea("Зеленый чай", "M", 150, 90, "Сенча");
const iceLemonade = new Lemonade("Айс Лимонад", "XL", 200, 4, "Малина-Мята");

// 3. Заказываем
myCafe.orderDrink(latte);
myCafe.orderDrink(greenTea);
myCafe.orderDrink(iceLemonade);