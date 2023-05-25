require('express-async-errors');

const express = require('express');
const morgan = require('morgan');
const productsRouter = require('./routes/products');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());

// router
app.use('/api/v1/products', productsRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

module.exports = app;
