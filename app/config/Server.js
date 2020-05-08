const express = require('express');
const bodyParser = require('body-parser');

const config = require('./Config');

module.exports.start = () => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true })); 
    app.use(bodyParser.json());
    app.use(bodyParser.raw()); 
    
    app.use('/',require('../routes/AuthenticationRouter'));
    app.use('/info',require('../routes/InfoRouter'));
    
    app.listen(config.express.port, () => 
        console.log(`App listening at http://localhost:${config.express.port}`)
    );
}
