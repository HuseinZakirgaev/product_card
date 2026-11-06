/**
 * Задание 2: Фильтрация массива (оставляем значения от 5 и выше)
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter (number => number >= 5);

console.log(filteredNumbers);


/**
 * Задание 3: Проверка наличия определенного элемента в массиве
 */
const cars = ["Ford", "Toyota", "Nissan", "Mazda"];

/**
 * Проверяем, есть ли "Toyota" в массиве cars, результат сохраняем в булеву константу
 */
const hasToyota = cars.includes("Toyota");

console.log(hasToyota); // true


/**
 * Задание 4: Создание чистой функции для переворота массива без мутации оригинала
 */
function reverseArray(array) {
  // Используем спред-оператор (...) для создания копии и метод .reverse() для переворота
  return [...array].reverse();
}

/**
 * Применяем функцию для массива с числами
 */
const reverseNumbers = reverseArray(filteredNumbers);
console.log(reverseNumbers);

/**
 * Применяем ту же функцию для массива с автомобилями
 */
const reverseCars = reverseArray(cars);
console.log(reverseCars);


/**
 * Задание 5-6: Импорт массива комментариев
 * Используем деструктуризацию (фигурные скобки) для импорта конкретной константы comments из модуля comments.js
 */
import { comments } from "./comments.js";


console.log(comments);


/**
 * Задание 7: Фильтрация массива комментариев.
 * Создает новый массив, включающий только те объекты, свойство email которых содержит ".com".
 */
const commentsWithDotCom = comments.filter((comment) =>
  comment.email.includes(".com")
);

console.log(commentsWithDotCom);


/**
 * Задание 8: Обновление привязки комментариев к постам.
 * Перебирает массив и устанавливает postId равным 2 (для первых пяти) или 1 (для остальных).
 */
const commentsWithUpdatedPostId = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

console.log(commentsWithUpdatedPostId);


/**
 * Задание 9: Перебирает массив и оставляет в каждом объекте только ID и имя.
 */
const commentsWithIdAndName = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));

console.log(commentsWithIdAndName);


/**
 * Задание 10: Перебирает массив и добавляет в каждый объект свойство isInvalid.
 */
const commentsWithIsInvalid = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

console.log(commentsWithIsInvalid);
  

/**
 * Задание 11: Используем reduce для создания массива email-адресов 
 */
const emailsWithReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsWithReduce);

/**
 * Используем map для создания массива email-адресов 
 */
const emailsWithMap = comments.map((comment) => comment.email);

console.log(emailsWithMap);


/**
 * Задание 12: Преобразуем массив email-адресов в строку
 */
const emailsWithToString = emailsWithMap.toString();

console.log(emailsWithToString);

const emailsWithJoin = emailsWithMap.join(" | ");

console.log(emailsWithJoin);