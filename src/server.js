const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Routes
const bootcamps = require('./api/v1/bootcambs');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.get('/', (req, res) => {
  res.json({
    message: 'hello world'
  });
});

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`App listening in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
