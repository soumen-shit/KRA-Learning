const dataCheckingMiddleware = async (req, res, next) => {
  try {
    const { name, email, age, address } = req.body;
    if (!name || !email || !age || !address) {
      res.status(400).json({
        message: "All fields are required",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dataCheckingMiddleware;
