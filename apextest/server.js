const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({path: './config.env'});

const app = express();
 
//  Dev Logging
if(process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

// Profile routes
app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 8000;

app.listen(5000, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});