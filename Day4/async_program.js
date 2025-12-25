function orderFood() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Food Ordered");
    }, 2000);
    res();
  });
}

function prepearedFood() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Food Prepeared");
    }, 3000);
    res();
  });
}

function deleverFood() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Food Delevered");
    }, 4000);
    res();
  });
}

async function orderFoodProcess() {
  try {
    await orderFood();
    await prepearedFood();
    await deleverFood();
  } catch (error) {
    console.log(error);
  }
}

orderFoodProcess();
