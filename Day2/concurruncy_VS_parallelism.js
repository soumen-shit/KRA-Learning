// Concurrency means handling multiple tasks at the same time, but not executing them simultaneously.

setTimeout(() => console.log("Task 1 done"), 2000);
setTimeout(() => console.log("Task 2 done"), 1000);
setTimeout(() => console.log("Task 3 done"), 1500);

// parallelism means execute multiple task at a same time. we can say multiple CPU core doing work at the same time.
const crypto = require("crypto");

console.log("Start");

crypto.pbkdf2("a", "b", 100000, 64, "sha512", () => {
  console.log("Task 1 done"); //Use thread-1
});

crypto.pbkdf2("a", "b", 100000, 64, "sha512", () => {
  console.log("Task 2 done"); //use thread-2
});

console.log("End");
