const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(bodyParser.raw()); 

app.use('/login', require('./app/routes/LoginRoute'));
app.use('/info', require('./app/routes/InfoRoute'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))