const pool = require('../models/database');
const jobPostMiddleware = {
  async createJobPost(req, res, next) {
    try {
      const jobPostData = req.body;
      const query = `INSERT INTO job_post (user_id, company_name, salary, position, contact, location, address, last_heard, notes, status)
                      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                      RETURNING *`;
      const values = [
        jobPostData.user_id,
        jobPostData.company_name,
        jobPostData.salary,
        jobPostData.position,
        jobPostData.contact,
        jobPostData.location,
        jobPostData.address,
        jobPostData.last_heard,
        jobPostData.notes,
        jobPostData.status,
      ];

      const result = await pool.query(query, values);
      res.locals.newJobPost = result.rows[0];
      return next();
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'Middleware error in createJobPost Controller' });
    }
  },

  async getJobPosts(req, res, next) {
    try {
      const query = 'SELECT * FROM job_post';
      const result = await pool.query(query);
      res.locals.jobPosts = result.rows;
      return next();
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'Middleware error in getJobPosts Controller' });
    }
  },

  async updateJobPost(req, res, next) {
    try {
      const { id } = req.params;
      const updatedJobPostData = req.body;
      const query = `UPDATE job_post
                       SET company_name = $1, salary = $2, position = $3, contact = $4, location = $5, address = $6, last_heard = $7, notes = $8, status = $9
                       WHERE id = $10
                       RETURNING *`;
      const values = [
        updatedJobPostData.company_name,
        updatedJobPostData.salary,
        updatedJobPostData.position,
        updatedJobPostData.contact,
        updatedJobPostData.location,
        updatedJobPostData.address,
        updatedJobPostData.last_heard,
        updatedJobPostData.notes,
        updatedJobPostData.status,
        id,
      ];

      const result = await pool.query(query, values);
      res.locals.updatedJobPost = result.rows[0];
      return next();
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'Middleware error in updateJobPost Controller' });
    }
  },

  async deleteJobPost(req, res, next) {
    try {
      const { id } = req.params;
      const query = 'DELETE FROM job_post WHERE id = $1 RETURNING *';
      const result = await pool.query(query, [id]);
      res.locals.deletedJobPost = result.rows[0];
      return next();
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'Middleware error in deleteJobPost Controller' });
    }
  },
};

module.exports = jobPostMiddleware;
