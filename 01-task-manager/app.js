const express = require('express');
const morgan = require('morgan');

const taskRouter = require('./routes/tasksRouter');
const notFound = require('./middleware/not-found');

const app = express();



// middleware
app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(express.json());

// router
app.use('/api/v1/tasks', taskRouter);

app.use(notFound)

module.exports = app;
