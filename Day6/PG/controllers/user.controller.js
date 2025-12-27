const pool = require("../db");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(404).json({
        message: "Both fields are required",
      });
    }

    const user = await pool.query(
      `INSERT INTO users(name, email)
        VALUES ($1, $2)
        RETURNING *
        `,
      [name, email]
    );
    res.status(201).json(user.rows[0]);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await pool.query(`SELECT * FROM users`);
    res.status(200).json(users.rows);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await pool.query(
      `
          UPDATE users
          SET name = $1, email = $2
          WHERE id = $3
          RETURNING *
          `,
      [name, email, id]
    );
    if (!user.rows.length) {
      res.status(404).json({
        message: "User not found",
      });
    }
    res.status(202).json(user.rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query(
      `
      SELECT * FROM users
      WHERE id = $1
      `,
      [id]
    );

    if (!user.rows.length) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    res.status(200).json(user.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query(
      `
      DELETE FROM users
      WHERE id = $1
      `,
      [id]
    );
    res.status(200).json({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser,
};
