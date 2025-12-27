import prisma from "../configs/db.config.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await prisma.user.create({
      data: { name, email, age: Number(age) },
    });
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({
      message: `Server Error, ${error}`,
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await prisma.findMany();
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: `Server Error, ${error}`,
    });
  }
};
