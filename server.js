const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require("mongoose");
const session = require('express-session');
const dbConnection = require('./client/src/config/userDataConnection');
const MongoStore = require('connect-mongo')(session);
const passport = require('./client/src/passport');

// Require all models
var Sensor = require("./client/src/models/sensorModel");

// Sessions
app.use(
	session({
		secret: 'projectsix', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls serializeUser and deserializeUser

// Routes
app.use('/user', user);

//connect to mongo
mongoose.connect("mongodb+srv://Rebecca:cupboard@cluster0-vfyb8.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
     Sensor.find().then(found => {
        //console.log(found);

         res.send({express: found});
    });
  
});