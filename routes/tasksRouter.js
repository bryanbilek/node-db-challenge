const express = require('express');
const Tasks = require('../helpers/helperModel');
const router = express.Router();

//GET tasks
router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(Tasks => {
            res.status(200).json(Tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

//POST tasks
router.post('/', (req, res) => {
    const task = req.body;
    Tasks.addTask(task)
        .then(Task => {
            res.status(201).json(Task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new task' });
        });
});

module.exports = router;
