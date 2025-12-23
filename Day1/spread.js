const arr = [1, 2, 3, 4];

let arr1 = [...arr];

arr1[2] = 5;

console.log(arr);
console.log(arr1);

let obj = {
  name: "Soumen",
  age: 23,
  email: "soumen@gmail.com",
};

let objAns = { ...obj };
console.log(objAns);
