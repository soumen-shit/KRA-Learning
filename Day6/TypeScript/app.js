"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = {
    name: "soumen",
    age: 23,
};
console.log(users);
const usersArr = [
    { name: "soumen", age: 23 },
    { name: "Raj", age: 24 },
];
let name = "Harsh";
if (typeof name == "string") {
    console.log(name.toUpperCase());
}
function fun(a, b) {
    let sum = a + b;
    return sum;
}
console.log(fun(3, 5));
let v = false;
class BottleMaker {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        console.log(`Bottle name ${this.name} and price ${this.price}`);
    }
    changePrice(price) {
        this.price = price;
    }
}
const b1 = new BottleMaker("Milton", 1200);
b1.changePrice(1300);
class HumanMaker {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class HumanMaker2 extends HumanMaker {
    changeName() {
        this.name = "Soumen";
    }
}
class HumamMaker3 extends HumanMaker2 {
    changeAge() {
        this.age = 25;
    }
}
const h1 = new HumanMaker("Raj", 24);
const h2 = new HumanMaker2("soumen", 23);
console.log(h1);
console.log(h2);
function sum(...arg) {
    console.log(arg);
}
sum(1, 2, 3, 4, 5, 6);
function abcd(val) {
    console.log(val);
}
abcd(5);
function callHuman(obj) {
    console.log(obj.key.length);
}
const obj = {
    name: "soumen",
    age: 23,
    key: "23456",
};
callHuman(obj);
const user = {
    name: "soumen",
    email: "soumen@gmail.com",
    age: 23,
};
console.log(user);
const user1 = {
    name: "soumen",
};
console.log(user1);
const user2 = {
    name: "soumen",
    age: 23,
    email: "soumen@gmail.com",
};
const user3 = {
    name: "soumen",
    email: "sou@gmail.com",
};
const user4 = {
    name: "soumen",
    email: "sou@gmail.com",
    age: 23,
};
//# sourceMappingURL=app.js.map