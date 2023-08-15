// route.js
const express = require('express');
const router = express.Router();
const jobPostMiddleware = require('../controllers/jobController');

// GET user's job posts
router.get('/', jobPostMiddleware.getJobPosts, (req, res) => {
  const jobPosts = res.locals.jobPosts;
  res.status(200).json(jobPosts);
});

// POST create a new job post for a user
router.post('/post', jobPostMiddleware.createJobPost, (req, res) => {
  const newJobPost = res.locals.newJobPost;
  res.status(201).json(newJobPost);
});

// PUT update a job post for a user
router.patch('/:id', jobPostMiddleware.updateJobPost, (req, res) => {
  const updatedJobPost = res.locals.updatedJobPost;
  res.status(200).json(updatedJobPost);
});

// DELETE delete a job post for a user
router.delete('/:id', jobPostMiddleware.deleteJobPost, (req, res) => {
  const deletedJobPost = res.locals.deletedJobPost;
  res.status(200).json(deletedJobPost);
});

module.exports = router;
