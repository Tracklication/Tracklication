require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dbConnect = require('./models/database');
dbConnect();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//to the user routes
app.use('/', userRoutes);

// statically serve everything in the build folder on the route '/build'
// app.use(express.static(path.join(__dirname, '../build')));

// Serve index.html on the route '/'
// Always send the index.html for all other routes
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

//Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = app;
