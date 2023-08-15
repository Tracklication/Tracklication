const express = require('express');
const router = express.Router();
const pool = require('../models/database'); // Your PostgreSQL connection pool module

const userController = {};
// Create a new record
userController.createJob(async (req, res) => {
  try {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2)';
    await pool.query(query, [name, email]);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Read all records
userController.getJobs(async (req, res) => {
  try {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update a record
userController.updateJob(async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';
    await pool.query(query, [name, email, id]);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete a record
userController.deleteJob(async (req, res) => {
  try {
    const id = req.params.id;
    const query = 'DELETE FROM users WHERE id = $1';
    await pool.query(query, [id]);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = userController;
