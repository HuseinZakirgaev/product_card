/** 
 * Константы и конфигурация
 */

const CARD_BG_FIRST = '#e3f2fd';
const CARD_BG_ALL = '#ebeaf8';
const GOOGLE_URL = 'https://google.com';


/**
 * Поиск и кэширование DOM-элементов
 */

const pageTitle = document.querySelector('.js-products-title');
const toggleBtn = document.querySelector('.js-change-color-btn');
const paintFirstCardBtn = document.querySelector('.js-paint-card-btn');
const paintAllCardsBtn = document.querySelector('.js-paint-all-cards-btn');
const openGoogleBtn = document.querySelector('.js-open-google-btn');
const logAlertBtn = document.querySelector('.js-log-alert-btn');

const firstCard = document.querySelector('.card');
const allCards = document.querySelectorAll('.card');


/**
 * Вспомогательные функции
 */

function outputMessage(message) {
    alert(message);
    console.log(message);
}


/**
 * Обработчики событий
 */

/**
 * Задание 1: Переключение состояния кнопки-тумблера
 */
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('btn--active');
});

/**
 * Задание 2: Перекрашивание первой карточки
 */
paintFirstCardBtn.addEventListener('click', () => {
    const firstCard = document.querySelector('.card');
    firstCard.style.backgroundColor = CARD_BG_FIRST;
});

/**
 * Задание 3: Перекрашивание всех карточек
 */
paintAllCardsBtn.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((card) => {
        card.style.backgroundColor = CARD_BG_ALL;
    });
});

/**
 * Задание 4: Переход на Google с подтверждением
 */
openGoogleBtn.addEventListener('click', () => {
    const isConfirmed = confirm('Вы уверены, что хотите перейти на сайт Google?');

    if (isConfirmed) {
        window.location.href = GOOGLE_URL;
    }
});

/**
 * Задание 5: Вывод системного сообщения (ДЗ №6)
 */
logAlertBtn.addEventListener('click', () => {
    outputMessage('ДЗ №6');
});

/**
 * Задание 6: Вывод текста заголовка при наведении мыши
 */
pageTitle.addEventListener('mouseover', () => {
    console.log(pageTitle.textContent.trim());
});
