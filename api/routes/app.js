require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authenticationRoute = require('../controller/authentication');
const financialRoute = require('../controller/financialsite');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/user', authenticationRoute);
app.use('/file_gs', financialRoute);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
