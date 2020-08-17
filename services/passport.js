const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(new GoogleStrategy(
    {
        clientID : keys.googleClientID ,
        clientSecret : keys.googleClientSecret ,
        callbackURL : '/auth/google/callback'
    }
     , (acessToken , refreshToken , profile , done)=> {
        User.findOne({ googleId : profile.id })
            .then((existingUser) => {
                if (existingUser){

                }
                else {
                    new User({ googleId : profile.id }).save();
                }
            })



     }
     )
     );
    