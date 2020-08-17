const express = require('express') ;

const app = express();
const passportConfig = require('./services/passport.js') ;

require('./routes/authroutes.js')(app);


const PORT = process.env.PORT || 5000 ;

app.listen(PORT) ;