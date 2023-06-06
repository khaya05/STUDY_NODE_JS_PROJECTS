const CustomError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

exports.authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomError('No token provided', 401);
  }

  const token = authHeader.split(' ')[1];
  next();
};
