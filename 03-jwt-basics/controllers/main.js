const CustomError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { password, username } = req.body;

  if (!username || !password) {
    throw new CustomError('Please provide email and password', 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  res.status(200).json({ msg: 'user created', token });
};

exports.dashboard = async (req, res) => {


};
