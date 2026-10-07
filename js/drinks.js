// drinks.js

export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать экземпляр абстрактного класса Drink");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `${this.name} (Объем: ${this.size}) — ${this.price} руб.`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemp) {
    this.#temperature = newTemp;
  }

  #prepareDrink() {
    console.log(`[Лог]: Идет процесс приготовления напитка "${this.name}"...`);
  }

  serveDrink() {
    this.#prepareDrink();
    console.log(`[Лог]: Напиток "${this.name}" подан. Температура: ${this.#temperature}°C`);
  }
}

export class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  getInfo() {
    return `${super.getInfo()} [Зерна: ${this.beanType}, Молоко: ${this.milkType}]`;
  }
}

export class Tea extends Drink {
  constructor(name, size, price, temperature, leafType) {
    super(name, size, price, temperature);
    this.leafType = leafType;
  }

  getInfo() {
    return `${super.getInfo()} [Сорт чая: ${this.leafType}]`;
  }
}

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);
    this.flavor = flavor;
  }

  getInfo() {
    return `${super.getInfo()} [Вкус: ${this.flavor}]`;
  }
}