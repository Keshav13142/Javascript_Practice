class Car {
  constructor(name, model, weight, color) {
    this.name = name;
    this.model = model;
    this.weight = weight;
    this.color = color;
  }
  start = () => {
    console.log("Engine started");
  };
  drive = () => {
    console.log("You are now driving");
  };
  brake = () => {
    console.log("Brakes applied");
  };
  stop = () => {
    console.log("Car has stopped");
  };
}
const car = new Car("Hyundai", "Getz", "500 Kgs", "Gray");
// console.log(car.brake());

class Bank {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  withdraw = (amount) => {
    if (this.balance < amount || this.balance <= 0) {
      console.warn("Insufficient funds!!!");
      console.log(`Current balance : ${this.balance}`);
    } else {
      this.balance -= amount;
      console.log(`${amount} withdrawn successfully`);
      console.log(`Current balance : ${this.balance}`);
    }
  };
  deposit = (amount) => {
    this.balance += amount;
    console.log("Successfully deposited");
    console.log(`Current balance : ${this.balance}`);
  };
  showBalance = () => {
    console.log(`You have ${this.balance} in your account`);
  };
}
