const express = require('express');
const Projects = require('../helpers/helperModel');
const router = express.Router();

//GET projects
router.get('/', (req, res) => {
    Projects.find()
        .then(Projects => {
            res.status(200).json(Projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

//POST projects
router.post('/', (req, res) => {
    const project = req.body;
    Projects.add(project)
        .then(Project => {
            res.status(201).json(Project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});


module.exports = router;