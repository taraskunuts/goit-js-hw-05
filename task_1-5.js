function Account({ login, email }) {
    this.login = login;
    this.email = email;
  }
  
  Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
  console.log(Account.prototype.getInfo)
  
  const mango = new Account({
    login: "Mangozedog",
    email: "mango@dog.woof",
  });
  
  mango.getInfo()
  
  const poly = new Account({
    login: "Poly",
    email: "poly@mail.com",
  });
  
  poly.getInfo()
//
//
//
//
class User {
    constructor({ name, age, followers }) {
      this.name = name
      this.age = age
      this.followers = followers
    }
    getInfo() {
      console.log(
        `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
      )
    }
  }
  const pear = new User({
    name: "Pear",
    age: 2,
    followers: 20,
  })
  pear.getInfo()
  const porcelain = new User({
    name: "Porce",
    age: 3,
    followers: 17,
  })
  porcelain.getInfo()
//
//
//
//
class Storage {
    constructor(items) {
      this.items = items
    }
    getItems() {
      return this.items
    }
    addItem(item) {
      this.items.push(item)
    }
    removeItem(item) {
      const itemIndex = this.items.indexOf(item)
      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1)
      }
    }
  }
  const storage = new Storage([
    "Нанітоіди",
    "Пролонгер",
    "Залізні жупи",
    "Антигравітатор",
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
  
  storage.addItem("Дроїд");
  console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
  
  storage.removeItem("Пролонгер");
  console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
//
//
//
//
class StringBuilder {
    constructor(value) {
      this._value = value; // Ініціалізуємо початковий рядок
    }
  
    // Геттер для отримання поточного значення
    get value() {
      return this._value;
    }
  
    // Метод для додавання рядка в кінець
    append(str) {
      this._value += str;
    }
  
    // Метод для додавання рядка на початок
    prepend(str) {
      this._value = str + this._value;
    }
    pad(str) {
      this._value = str + this._value + str;
    }
  }

  const builder = new StringBuilder(".");
  
  builder.append("^");
  console.log(builder.value); // '.^'
  
  builder.prepend("^");
  console.log(builder.value); // '^.^'
  
  builder.pad("=");
  console.log(builder.value); // '=^.^='
//
//
//
//
class Car {
    constructor({ maxSpeed, price }) {
      this.speed = 0
      this._price = price
      this.maxSpeed = maxSpeed
      this.isOn = false
      this.distance = 0
    }
    static getSpecs(car) {
      console.log(
        `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, total distance: ${car.distance}, price: ${car._price}`
      )
    }
    get price() {
      return this._price
    }
    set price(value) {
      this._price = value
    }
    turnOn() {
      this.isOn = true
    }
    turnOff() {
      this.isOn = false
      this.speed = 0
    }
    accelerate(value) {
      if (this.speed + value <= this.maxSpeed) {
        this.speed += value
      } else {
        this.speed = this.maxSpeed
      }
    }
    decelerate(value) {
      if (this.speed - value >= 0) {
        this.speed -= value
      } else {
        this.speed = 0
      }
    }
    drive(hours) {
      if (this.isOn) {
        this.distance = this.distance + (this.speed * hours)
      }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn()
  mustang.accelerate(50)
  mustang.drive(2)
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20)
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000
