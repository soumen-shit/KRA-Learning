interface Person {
  name: string;
  age: number;
}

const users: Person = {
  name: "soumen",
  age: 23,
};

console.log(users);

const usersArr: Person[] = [
  { name: "soumen", age: 23 },
  { name: "Raj", age: 24 },
];

let name: string | number = "Harsh";
if (typeof name == "string") {
  console.log(name.toUpperCase());
}

function fun(a: number, b: number): number {
  let sum: number = a + b;
  return sum;
}

console.log(fun(3, 5));

type value = string | number | boolean;

let v: value = false;

class BottleMaker {
  constructor(public name: string, public price: number) {
    console.log(`Bottle name ${this.name} and price ${this.price}`);
  }
  changePrice(price: number) {
    this.price = price;
  }
}

const b1 = new BottleMaker("Milton", 1200);
b1.changePrice(1300);

class HumanMaker {
  constructor(protected name: string, protected age: number) {}
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

function sum(...arg: number[] | string[]): void {
  console.log(arg);
}

sum(1, 2, 3, 4, 5, 6);

function abcd<T>(val: T) {
  console.log(val);
}

abcd<number>(5);

interface human<T> {
  name: string;
  age: number;
  key: T;
}

function callHuman(obj: human<string>): void {
  console.log(obj.key.length);
}

const obj = {
  name: "soumen",
  age: 23,
  key: "23456",
};

callHuman(obj);

type User = {
  name: string;
  email: string;
  age: number;
};

type ReadOnlyUser = Readonly<User>;

const user: ReadOnlyUser = {
  name: "soumen",
  email: "soumen@gmail.com",
  age: 23,
};
console.log(user);
type PartialUser = Partial<User>;

const user1: PartialUser = {
  name: "soumen",
};

console.log(user1);

type User1 = {
  name?: string;
  email?: string;
  age?: number;
};

type RequiredUser = Required<User1>;

const user2: RequiredUser = {
  name: "soumen",
  age: 23,
  email: "soumen@gmail.com",
};

type PublicUser = Pick<User1, "email" | "name">;

const user3: PublicUser = {
  name: "soumen",
  email: "sou@gmail.com",
};

type User4 = {
  name: string;
  email: string;
  age: number;
  pass: string;
};

type OmitFilers = Omit<User4, "pass">;

const user4: OmitFilers = {
  name: "soumen",
  email: "sou@gmail.com",
  age: 23,
};
