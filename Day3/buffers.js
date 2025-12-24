// Buffers temporarily store binary data so Node.js can work with files, streams, and networks efficiently.
const fs = require("fs");
const buffer = Buffer.from("hello");

console.log(buffer);

console.log(buffer.toString());

fs.readFile("data.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); // buffer
  console.log(data.toString()); //actual text
});
