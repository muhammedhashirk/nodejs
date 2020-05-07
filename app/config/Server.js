const express = require('express');
const bodyParser = require('body-parser');

const config = require('./Config');

module.exports.start = () => {
    var app = express();
    app.use(bodyParser.urlencoded({ extended: true })); 
    app.use(bodyParser.json());
    app.use(bodyParser.raw()); 
    
    app.use('/',require('../routes/AuthenticationRoute'));
    app.use('/info',require('../routes/InfoRoute'));
    
    app.listen(config.express.port, () => 
        console.log(`App listening at http://localhost:${config.express.port}`)
    );
}
