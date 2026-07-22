// Переменные
const firstProductCard = document.querySelector('.products__item');
const allProductCards = document.querySelectorAll('.products__item');

const changeFirstCardColorButton = document.querySelector('#change-color-first-card');
const changeAllCardsColorButton = document.querySelector('#change-color-all-cards');
const goToGoogleButton = document.querySelector('#go-to-google');
const showHomeworkMessageButton = document.querySelector('#show-homework-message');
const changeButtonColorButton = document.querySelector('#change-button-color');

const anotherColor = '#ddbaba';
const googleURL = 'https://google.com';

// Изменение цвета первой карточки
changeFirstCardColorButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = anotherColor;
});

// Изменение цвета всех карточек
changeAllCardsColorButton.addEventListener('click', () => {
    allProductCards.forEach((card) => {
        card.style.backgroundColor = anotherColor;
    });
});

// Переход в Google
goToGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на сайт Google?');

    if (answer) {
        window.open(googleURL);
    }
}

// Вывод сообщения
showHomeworkMessageButton.addEventListener('click', () => {
    outputMessage('ДЗ №6');
});

function outputMessage(message) {
    alert(message);
    console.log(message);
}

// Вывод заголовка в консоль
const productsTitle = document.querySelector('.products__title');

productsTitle.addEventListener('mouseover', () => {
    console.log(productsTitle.textContent);
});

// Изменение цвета кнопки
let isViolet = false;

changeButtonColorButton.addEventListener('click', () => {
    if (isViolet) {
        changeButtonColorButton.style.backgroundColor = '#ec7777';
    } else {
        changeButtonColorButton.style.backgroundColor = '#7c2266';
    }

    isViolet = !isViolet;
});