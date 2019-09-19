var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var SensorSchema = new Schema({
  product: {
    type: String,
    required: true
  },
  reading: {
    type: Number,
    required: true,
  },
  dataLogged: {
    type: Date,
    default: Date.now,
    required: true
  },
  reorderLink: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Sensor = mongoose.model("Sensor", SensorSchema);

// Export the User model
module.exports = Sensor;