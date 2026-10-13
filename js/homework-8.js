// ==========================================
// Домашнее задание №8: Объекты и массивы
// ==========================================

// ==========================================
// Задание 3: Объект с личными данными
// ==========================================

const myProfile = {
    firstName: "Husein",
    lastName: "Zakirgaev",
    age: 44,
    country: "Saudi Arabia",
    city: "Madina",
    workExperience: "IT Company",
    jobTitle: "Frontend Developer",
    maritalStatus: "married",
    email: "huseinzakirgaev@gmail.com",
};

console.log(myProfile);

// ==========================================
// Задание 4: Объект с данными автомобиля
// ==========================================

const myCar = {
    brand: "Lada",
    model: "Granta",
    year: 2020,
    color: "silver",
    mileage: 127000,
    fuelType: "petrol",
    transmission: "manual",
    bodyType: "sedan",
    engineCapacity: 1.6,
    price: 7000,
};

myCar.owner = myProfile;

console.log(myCar);

// ==========================================
// Задание 5: Проверка и добавление максимальной скорости
// ==========================================

function carSpeed(car) {
    if (car.maxSpeed === undefined) {
        car.maxSpeed = 200;
    }
}

carSpeed(myCar);

console.log(myCar);

// ==========================================
// Задание 6: Функция вывода свойства объекта
// ==========================================

function showPropertyValue(object, key) {
    console.log(object[key]);
}

showPropertyValue(myCar, "brand");
showPropertyValue(myCar, "model");
showPropertyValue(myCar, "year");


// ==========================================
// Задание 7: Массив объектов с продуктами
// ==========================================

const products = ["Часы", "Телефон", "Телевизор", "Ноутбук"];
console.log(products);

// ==========================================
// Задание 8 Массив книг
// ==========================================

const ibnQayyimBooks = [
  {
    title: "Фаваид",
    author: "Ибн аль-Каййим",
    translationYear: 2013,
    coverColor: "Черный",
    genre: "религиозная литература"
  },
    {
    title: "Степени идущих",
    author: "Ибн аль-Каййим",
    translationYear: 2016,
    coverColor: "Синий",
    genre: "религиозная литература"
  },
    {
    title: "аль-Вабиль",
    author: "Ибн аль-Каййим",
    translationYear: 2018,
    coverColor: "Красный",
    genre: "религиозная литература"
    },
];

ibnQayyimBooks.push({
    title: "Китаб ар-Рух",
    author: "Ибн аль-Каййим",
    translationYear: 2013,
    coverColor: "Зеленый",
    genre: "религиозная литература"
});

console.log(ibnQayyimBooks);


// ==========================================
// Задание 9: Объединение массивов книг
// ==========================================

const ibnTaymiyyahBooks = [
  {
    title: "Акыда аль-Васития",
    author: "Ибн Таймия",
    translationYear: 2014,
    coverColor: "Синий",
    genre: "религиозная литература"
  },
  {
    title: "Краткий завет",
    author: "Ибн Таймия",
    translationYear: 2021,
    coverColor: "Зеленый",
    genre: "религиозная литература"
  },
  {
    title: "Правило о достоинствах Корана",
    author: "Ибн Таймия",
    translationYear: 2025,
    coverColor: "Красный",
    genre: "религиозная литература"
  }
];

const allBooks = [...ibnQayyimBooks, ...ibnTaymiyyahBooks];

console.log(allBooks);

function addRareProperty(books) {
    return books.map(function (book) {
        return {
            ...book,
            isRare: book.translationYear > 2015
        };
    });
}

const booksWithRareStatus = addRareProperty(allBooks);

console.log(booksWithRareStatus);