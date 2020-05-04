const port = 2000;
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use('/login', require('./routes/LoginRoute'));
app.use('/info', require('./routes/InfoRoute'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))