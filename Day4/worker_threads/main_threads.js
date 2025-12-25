const { Worker } = require("worker_threads");

console.log("Main thread started");

const worker = new Worker("./worker_threads.js");

worker.on("message", (res) => {
  console.log("Result from worker:", res);
});

console.log("Main thread still running...");
