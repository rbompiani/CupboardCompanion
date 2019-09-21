const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./client/src/config/userDataConnection');
const MongoStore = require('connect-mongo')(session);
const passport = require('./client/src/passport');
const user = require('./client/src/routes/user');

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

// Set Up User Routes
app.use('/user', user);

app.use(morgan('dev'))

// body parser things
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

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

app.post('/signup', (req, res, next)=> {
	console.log('server post username: ');
	console.log(req.body.username)
	res.end()
})

app.use( (req, res, next) => {
    console.log('req.session', req.session);
    return next();
  });

app.post('/new_sensor', (req, res) => {
    // Create a new mongo sensor entry using data
    Sensor.findOneAndUpdate({product:req.body.item}, {reading:100, reorderLink:req.body.link},{upsert:true})
    .then(function(sensorReading) {
        // If saved successfully, send the the new User document to the client
        console.log(sensorReading);
    })
    .catch(function(err) {
        // If an error occurs, send the error to the client
        console.log(err);
    });
})