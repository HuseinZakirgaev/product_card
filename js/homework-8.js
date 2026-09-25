// 3. Объект с данными пользователя
const userInfo = {
    firstName: "Husein",
    lastName: "Zakirgaev",
    email: "huseinzakirgaev@mail.com",
    job: "Developer",
    position: "Frontend Developer",
    age: 44,
    country: "Dagestan",
    city: "Makhachkala",
    relationshipStatus: "married"
};

// 4. Объект автомобиля
const car = {
    brand: "Lada",
    model: "Granta",
    year: 2020,
    color: "silver",
    transmission: "manual"
};

car.owner = userInfo;

// 5. Проверка максимальной скорости
function addMaximumSpeed(car) {
    if (!car.maximumSpeed) {
        car.maximumSpeed = 200;
    }
}

addMaximumSpeed(car);

console.log(car);

// 6. Получение значения свойства объекта
function showProperty(object, property) {
    console.log(object[property]);
}

showProperty(car, "brand");
showProperty(car, "model");

// 7. Массив продуктов
const products = [
    "Наушники",
    "Телефон",
    "Ноутбук",
    "Клавиатура",
    "Мышь"
];

console.log(products);

// 8. Массив книг
const books = [
    {
        title: "Фаваид",
        author: "Ибн аль-Каййим",
        year: 1292,
        coverColor: "black",
        genre: "religious literature"
    },
    {
        title: "Степени идущих",
        author: "Ибн аль-Каййим",
        year: 1292,
        coverColor: "black",
        genre: "religious literature"
    },
    {
        title: "Китабу ат-таухид",
        author: "Мухаммад ибн Абдульуаххаб",
        year: 1703,
        coverColor: "green",
        genre: "religious literature"
    }
];

books.push({
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 2000,
    coverColor: "yellow",
    genre: "fantasy"
});

console.log(books);

const universeBooks = [
    {
        title: "Гарри Поттер и Орден Феникса",
        author: "Дж. К. Роулинг",
        year: 2003,
        coverColor: "purple",
        genre: "fantasy"
    },
    {
        title: "Гарри Поттер и Принц-полукровка",
        author: "Дж. К. Роулинг",
        year: 2005,
        coverColor: "gray",
        genre: "fantasy"
    }
];

const allBooks = [...books, ...universeBooks];

console.log(allBooks);

function addRareProperty(books) {
    return books.map(function (book) {
        return {
            ...book,
            isRare: book.year > 2000
        };
    });
}

const booksWithRareStatus = addRareProperty(allBooks);

console.log(booksWithRareStatus);