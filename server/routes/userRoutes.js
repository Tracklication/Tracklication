// route.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all tasks
router.get('/Jobs', userController.getJobs);

// Create a new task
router.post('/login', userController.createJob);

// Update a task
router.put('/somePath/:id', userController.updateJob);

// Delete a task
router.delete('/tasks/:id', userController.deleteJob);

module.exports = router;
