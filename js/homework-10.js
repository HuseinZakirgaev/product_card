import { cosmeticProducts } from "./cosmetic-products.js";

const productTemplate = document.querySelector(".js-product-card-template");
const productsList = document.querySelector(".js-products");

cosmeticProducts.forEach(product => {
    const productsCopy = productTemplate.content.cloneNode(true);

    productsCopy.querySelector(".card__image").src = product.image;
    productsCopy.querySelector(".card__image").alt = product.name;
    productsCopy.querySelector(".card__category").textContent = product.recommendedSkinType;
    productsCopy.querySelector(".card__name").textContent = product.name;
    productsCopy.querySelector(".card__description").textContent = product.description;

    const compoundList = productsCopy.querySelector(".compound__list");
    product.ingredients.forEach(ingredient => {
        const productIngredient = document.createElement("li");
        productIngredient.textContent = ingredient;
        compoundList.appendChild(productIngredient);
    });

    productsCopy.querySelector(".card__price-value").textContent = product.price;

    productsList.appendChild(productsCopy);
});

const productInfo = cosmeticProducts.reduce((box, product) => {
    box.push({[product.name]: product.description});
    return box;
}, []);

console.log(productInfo);

