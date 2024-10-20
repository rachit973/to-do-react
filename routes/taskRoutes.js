const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a new task
router.post('/tasks', async (req, res) => {
    try {
        const { title } = req.body;
        const newTask = new Task({ title });
        await newTask.save();
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        task.title = req.body.title;
        task.isCompleted = req.body.isCompleted;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
