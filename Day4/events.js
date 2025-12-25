const eventEmitter = require("events");

const emmiter = new eventEmitter();

emmiter.on("greet", ({ name, prof }) => {
  console.log(`Hello, My name is ${name} I am a ${prof}`);
});

emmiter.emit("greet", { name: "Soumen", prof: "Full stack dev" });
