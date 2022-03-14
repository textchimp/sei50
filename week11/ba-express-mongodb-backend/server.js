
const express = require('express');
const app = express();
const PORT = 3000;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtAuthenticate = require('express-jwt');

// This should be in a .env file (i.e not in your repo) AND
// it should be generated from a program like md5
const SERVER_SECRET_KEY = 'yourSecretKeyHereCHICKEN';

// bcrypt - encrypt plaintext passwords (as done in seeds file), and also
//         verify that a password given during login is the right password

// jsonwebtoken - create JWTs to send to the frontend on successful login
//                (i.e. what the 'knock' gem in Rails does)

// express-jwt  - Express Middleware to decode JWT tokens, giving us the
//                user ID of any authenticated request

// 1. Create a POST /login route to check credentials and return a JWT token
//    if the credentials were correct (the frontend will have to store this
//    token and present it with all future requests via the Authorization header

// 2. Lock down certain routes to require authentication using Express middleware

const flightsController = require('./controllers/flightsController');


const cors = require('cors');
app.use( cors() ); // get this package to set the cors header for us


// To support POSTed 'formdata' body content, we have to explicitly
// add a new middleware handler
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );  /// ???

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} ...`);
});

// MongoDB initialisation section //////////////////

const mongoose = require('mongoose');

// Load our Flight model file (and any others?)
// const Flight = require('./models/Flight');

// Connect to DB server; note the DB selection: 'ba', like a path
mongoose.connect('mongodb://127.0.0.1/ba');

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection error', err);
  process.exit( 1 ); // quit the server
  // TODO: handle gracefully instead? Keep server running?
});

///////////////////////////////////////////////////




// get '/' do
//   # params
//  'response'
// end

app.get('/',  flightsController.home );


// // Set up a generic handler that runs first for ANY route
// app.use( (req, res, next) => {
//   console.log('request: ', req.url);
//
//   // set header here once so we don't have to do it
//   // separately inside each specific router handler
//   res.header('Access-Control-Allow-Origin', '*');
//
     // req.user = getUser();

//   next(); // move on to the next route handler below in the middleware stack
// });

app.get('/flights/search/:origin/:destination', flightsController.search);
app.get('/flights/:id', flightsController.show );
app.post('/reservations', flightsController.createReservation );


app.post('/login', (req, res) => {

  console.log('POST /login', req.body);

  res.json({ token: 'hi' });

}); // POST /login



// app.use( (req, res) => {
//   // error handler, no matching routes
// });
