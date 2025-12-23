const obj = {
  name: "Soumen",
  age: 23,
  email: "soumen@gmail.com",
};

const { name, age, email } = obj;

console.log(name);
console.log(age);

let arr = [1, 2, 3];

const [one, two, three] = arr;

console.log(one);
console.log(two);

let student = {
  firstname: "Amit",
  address: {
    city: "Delhi",
    state: {
      name: "Delhi",
      pincode: 110001,
    },
  },
};

const {
  firstname,
  address: {
    city,
    state: { pincode },
  },
} = student;

console.log(firstname);
console.log(pincode);
