//Array methods
// 1.Array.of()
console.log(Array.of(1, 2, 3));

const words = ["hi", "", "hello"];

const ans = words.flatMap((w) => (w ? [w] : []));

console.log(ans);

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.indexOf(4));

let str = "hello";

console.log(str.slice(1, 3));
console.log(str.includes("hi"));
console.log(str.repeat(4));

let bag = {
  book: "Math",
  pencil: "Blue",
  bottle: "Water",
};

console.log(Object.keys(bag));
console.log(Object.values(bag));
console.log(Object.entries(bag));
let obj = Object.fromEntries([
  ["book", "math"],
  ["pen", "blue"],
]);
console.log(obj); // its make an object of the array

console.log(bag.hasOwnProperty("bottle")); // if the key exist then its return true otherwise return false

Object.seal(bag); //using this we can change any value of key but we caan't create new key value pair
bag.book = "Science";
bag.newBook = "English";
console.log(bag);

Object.freeze(bag); //its freeze the object we cann't change any value of the object also we cann't make any key and value
bag.book = "Science";
bag.newBook = "English";
console.log(bag);

console.log(Object.isFrozen(bag));
