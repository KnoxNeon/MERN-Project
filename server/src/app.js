const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const createError = require('http-errors')


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



