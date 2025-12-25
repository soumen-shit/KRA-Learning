const getUsers = (req, res) => {
  const users = [
    {
      name: "Alice",
      email: "alice@gmail.com",
      age: 24,
      address: "USA",
    },
    {
      name: "Rohit",
      email: "@gmail.com",
      age: 24,
      address: "USA",
    },
  ];
  try {
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
  }
};

const createUser = (req, res) => {
  try {
    const { name, email, age, address } = req.body;
    res.status(201).json({
      message: "Users successfully created",
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getUsers, createUser };
