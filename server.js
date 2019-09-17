const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require("mongoose");
const dbConnection = require('./client/src/config/userDataConnection');

// Require all models
var Sensor = require("./client/src/models/sensorModel");

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