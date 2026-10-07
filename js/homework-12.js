// Базовый класс
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Товар: ${this.name}, Цена: ${this.price} руб.`;
  }
}

// Дочерний класс
class CosmeticProduct extends Product {
  constructor(name, price, category) {
    super(name, price); // вызываем конструктор родителя
    this.category = category;
  }

  getCategoryInfo() {
    return `${this.getInfo()}, Категория: ${this.category}`;
  }
}

// Проверка работы
const item = new CosmeticProduct("Крем для лица", 1500, "Уход");
console.log(item.getCategoryInfo());