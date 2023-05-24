const express = require('express');
const taskRouter = require('./routes/tasksRouter');

const app = express();

// router
app.use('/api/v1/tasks', taskRouter);

module.exports = app;
