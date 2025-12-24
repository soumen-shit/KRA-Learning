const fs = require("fs");

// write file
fs.writeFile("data.txt", "Hello Node", (err) => {
  if (err) throw err;
});

// read file
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
