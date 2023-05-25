const { createCustomError } = require('../errors/custom-error');
const { asyncWrapper } = require('../middleware/async');
const Task = require('../models/taskModel');

exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json({
    status: 'success',
    data: {
      tasks,
    },
  });
});

exports.createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json({
    status: 'success',
    task,
  });
});

exports.getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });

  if (!task) {
    return next(createCustomError(`No task with id: ${id}`));
  }

  res.status(200).json({ data: task });
});

exports.updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id: ${id}`));
  }

  res.status(200).json({ data: task });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return next(createCustomError(`No task with id: ${id}`));
  }

  res.status(200).json({
    status: 'success',
    task: null,
  });
});
