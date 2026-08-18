// Задание 2
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbersArray.filter((num) => num >= 5);

console.log(newArray);


// Задание 3
const cars = ["Ford", "Toyota", "Nissan", "Mazda"];

const hasToyota = cars.includes("Toyota");

console.log(hasToyota);


// Задание 4
function reverseArray(array) {
  return [...array].reverse();
}

const reverseNumbers = reverseArray(numbersArray);
console.log(reverseNumbers);

const reverseCars = reverseArray(cars);
console.log(reverseCars);


// Задание 5-6
import { comments } from "./comments.js";


// Задание 7
const commentsWithDotCom = comments.filter((comment) =>
  comment.email.includes(".com")
);

console.log(commentsWithDotCom);


// Задание 8
const commentsWithUpdatedPostId = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

console.log(commentsWithUpdatedPostId);


// Задание 9
const commentsWithIdAndName = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));

console.log(commentsWithIdAndName);


// Задание 10
const commentsWithIsInvalid = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

console.log(commentsWithIsInvalid);


// Задание 11
const emailsWithReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsWithReduce);

const emailsWithMap = comments.map((comment) => comment.email);

console.log(emailsWithMap);


// Задание 12
const emailsWithToString = emailsWithMap.toString();

console.log(emailsWithToString);

const emailsWithJoin = emailsWithMap.join(" | ");

console.log(emailsWithJoin);