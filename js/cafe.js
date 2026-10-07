// cafe.js

export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    console.log(`\n=== Добро пожаловать в кафе "${this.name}" ===`);
    console.log(`📍 Мы находимся по адресу: ${this.location}\n`);
  }

  orderDrink(drink) {
    console.log(`--- Новый заказ ---`);
    console.log(`Чек: ${drink.getInfo()}`);
    
    drink.serveDrink();
    
    let currentTemp = drink.getTemperature();
    let newTemp = currentTemp > 20 ? currentTemp - 5 : currentTemp + 2; 
    drink.setTemperature(newTemp);
    
    console.log(`[Лог]: Спустя 5 минут температура изменилась до ${drink.getTemperature()}°C\n`);
  }
}