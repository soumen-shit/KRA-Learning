console.log("Start"); // this is run form call stack

setTimeout(() => {
  console.log("setTimeout"); //timmer phase 
}, 0);

setImmediate(() => {
  console.log("setImmediate"); // timmer phase
});

Promise.resolve().then(() => {
  console.log("Promise"); // this is promise excute after nextTick completed.
});

process.nextTick(() => {
  console.log("nextTick"); //micro task queue with highest priority its runs immidiately after current JS execution
});

console.log("End"); //this is run form call stack