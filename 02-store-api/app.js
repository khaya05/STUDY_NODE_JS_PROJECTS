const express = require('express');
const morgan = require('morgan');

const notFound = require('./middleware/not-found');
const { errorHandlerMiddleware } = require('./middleware/error-handler');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());

// router
app.use('/api/v1/tasks', taskRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

module.exports = app;
