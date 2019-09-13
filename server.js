const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const port = process.env.PORT || 5000;
var mongoose = require("mongoose");

// set up routes
app.use('/auth', authRoutes);

// Require all models
var Sensor = require("./src/models/sensorModel");

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//connect to mongo
mongoose.connect("mongodb+srv://Rebecca:cupboard@cluster0-vfyb8.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });


// create a GET route
app.get('/sensors', (req, res) => {
  //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  /*db.Sensor.find().then(found => {
    console.log(found);
    res.json(found);
  });*/

    Sensor.find({}, function(err, found) {
    // Log any errors if the server encounters one
    if (err) {
      console.log(err);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});