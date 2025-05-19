const express = require('express')
const app = express()
const morgan = require('morgan')
const createError = require('http-errors')
// const xssClean = require('xss-clean')
const rateLimit = require('express-rate-limit')


const rateLimiter  = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: 'Too many requests, try again later',
});


app.use(rateLimiter);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.status(200).send({
    message: 'user profile is returned'
  });
});

//client error
app.use((req, res, next) => {
  next(createError(404, 'route not found'));
});

//server error
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
});

module.exports = app



