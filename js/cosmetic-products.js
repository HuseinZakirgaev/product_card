/**
 * Создать JS-файл с массивом объектов, описывающих товары из вёрстки.
 */

/**
 * @typedef {Object} CosmeticProduct
 * @property {string} image  Путь к изображению товара.
 * @property {string} recommendedSkinType  Тип кожи, для которого предназначен товар.
 * @property {string} name  Название товара.
 * @property {string} description  Описание товара.
 * @property {string[]} ingredients  Список компонентов товара.
 * @property {number} price  Цена товара.
 */
/** @type {CosmeticProduct[]} */

export const cosmeticProducts = [
    {
        image: "img/mousse_1.jpg",
        recommendedSkinType: "для нормальной кожи",
        name: "Увлажняющий мусс",
        description: "Глубоко увлажняет кожу лица, оставляя её мягкой и гладкой.",
        ingredients: [
            "активные натуральные комплексы",
            "витамины С, А, РР, В и Е",
            "солнцезащитные компоненты"
        ],
        price: 2750
    },

    {
        image: "img/moisturizing_mask.jpg",
        recommendedSkinType: "для нормальной кожи",
        name: "Увлажняющая маска",
        description: "Способствует удерживанию влаги в верхних слоях кожи.",
        ingredients: [
            "воски",
            "минералы",
            "масла"
        ],
        price: 3500
    },

    {
        image: "img/gel_cleanser.jpg",
        recommendedSkinType: "для нормальной кожи",
        name: "Гель для умывания",
        description: "Интенсивно очищает, не повреждает защитный барьер кожи.",
        ingredients: [
            "минералы",
            "витамины С, А, РР, В и Е",
            "солнцезащитные компоненты"
        ],
        price: 1650
    },

    {
        image: "img/gift_set_1.jpg",
        recommendedSkinType: "для нормальной кожи",
        name: "Подарочный набор №1",
        description: "Набор, состоящий из увлажняющего крема и маски.",
        ingredients: [
            "воски",
            "минералы",
            "масла"
        ],
        price: 4750
    },

    {
        image: "img/gift_set_5.jpg",
        recommendedSkinType: "для нормальной кожи",
        name: "Подарочный набор №5",
        description: "Весь набор средств Invisible Symphony: крем, маска, мусс и гель для умывания.",
        ingredients: [
            "воски",
            "минералы",
            "масла"
        ],
        price: 7520
    }
];