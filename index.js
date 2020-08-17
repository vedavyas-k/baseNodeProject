const express = require('express') ;

const mongoose = require('mongoose');

const keys = require('./config/keys.js');

mongoose.connect('keys.mongoURI');


const app = express();

const passportConfig = require('./services/passport.js') ;

require('./routes/authroutes.js')(app);


const PORT = process.env.PORT || 5000 ;

app.listen(PORT) ;