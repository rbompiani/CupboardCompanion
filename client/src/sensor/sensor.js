var mongoose = require("mongoose");
var Sensor = require("./sensorModel.js");
var five = require("johnny-five"),
  fsr, led;

// Connect to the Mongo DB
//mongoose.connect("mongodb://localhost/sensordb", { useNewUrlParser: true });
mongoose.connect("mongodb+srv://Rebecca:cupboard@cluster0-vfyb8.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
(new five.Board()).on("ready", function() {

  // Create a new `fsr` hardware instance.
  fsr = new five.Sensor({
    pin: "A0",
    freq: 5000
  });

  led = new five.Led(9);

  // Scale the sensor's value to the LED's brightness range
  fsr.scale([0, 255]).on("data", function() {

    // set the led's brightness based on force
    // applied to force sensitive resistor
    led.brightness(this.scaled);

    // Create a new mongo sensor entry using data
    Sensor.create({reading:this.scaled})
    .then(function(sensorReading) {
        // If saved successfully, send the the new User document to the client
        console.log(sensorReading);
    })
    .catch(function(err) {
        // If an error occurs, send the error to the client
        console.log(err);
    });
  });
});

