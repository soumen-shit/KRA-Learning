const fs = require("fs");

const stream = fs.createReadStream("data.txt");

stream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.toString());
});

// Streams process data in small chunks, making Node.js fast and memory-efficient.