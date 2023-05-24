const express = require('express');
const taskRouter = require('./routes/tasksRouter');

const app = express();

// middleware
app.use(express.json())

// router
app.use('/api/v1/tasks', taskRouter);

module.exports = app;
