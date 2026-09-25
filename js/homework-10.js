import { cosmeticProducts } from "./cosmetic-products.js";

const productsList = document.querySelector(".products");

function getProductTemplate(product) {
    return `
        <li class="products__item card">

            <img
                src="${product.image}"
                alt="Товар ${product.name}"
                class="card__image"
            >

            <span class="card__category">${product.targetSkinType}</span>

            <h2 class="card__name">${product.name}</h2>

            <p class="card__description">
                ${product.description}
            </p>

            <div class="card__compound compound">

                <span class="compound__name">Состав</span>

                <ul class="compound__list">

                    ${product.ingredients
                        .map(ingredient => `<li>${ingredient}</li>`)
                        .join("")}

                </ul>

            </div>

            <div class="card__price">
                <b>Цена</b>

                <span>${product.price.toLocaleString("ru-RU")} ₽</span>
            </div>

        </li>
    `;
}

function renderProducts(products) {
    productsList.innerHTML = products
        .map(product => getProductTemplate(product))
        .join("");
}

const productsDescription = cosmeticProducts.reduce(
    (result, product) => {
        result.push({
            [product.name]: product.description
        });

        return result;
    },
    []
);

console.log(productsDescription);

function getProductsCount() {
    const count = Number(
        prompt("Сколько карточек отобразить? От 1 до 5")
    );

    if (Number.isInteger(count) && count >= 1 && count <= 5) {
        return count;
    }

    return getProductsCount();
}

const productsCount = getProductsCount();

renderProducts(cosmeticProducts.slice(0, productsCount));