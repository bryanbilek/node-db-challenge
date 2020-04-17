const express = require('express');
const Resources = require('../helpers/helperModel');
const router = express.Router();

//GET resources
router.get('/', (req, res) => {
    Resources.find()
        .then(Resources => {
            res.status(200).json(Resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

//POST resources
router.post('/', (req, res) => {
    const resource = req.body;
    Resources.add(resource)
        .then(Resource => {
            res.status(201).json(Resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

module.exports = router;