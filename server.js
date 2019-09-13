const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const port = process.env.PORT || 5000;

// set up routes
app.use('/auth', authRoutes);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});