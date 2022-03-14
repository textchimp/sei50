
const express = require('express');
const app = express();
const PORT = 3000;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtAuthenticate = require('express-jwt');

const checkAuth = () => {
  return jwtAuthenticate({
    secret: SERVER_SECRET_KEY, // check the token hasn't been tampered with
    algorithms: ['HS256'],
    requestProperty: 'auth' // i.e. add 'auth' to req to create 'req.auth'
  }); // jwtAuthenticate()
}; // checkAuth()

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

const User = require('./models/User'); // for auth

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


app.post('/login', async (req, res) => {

  console.log('POST /login', req.body);

  const { email, password } = req.body;


  try {
    const user = await User.findOne({ email });
    // console.log('user', user);

    if( user && bcrypt.compareSync(password, user.passwordDigest) ){
      // correct credential

      const token = jwt.sign(
        // the data to encode in the token aka 'payload'
        { _id: user._id },
        // the secret key to use to encode the token - this means that while
        // the token payload can be decoded and the ID viewed, it CANNOT be
        // modified or tampered with in any way (unless you have the secret key)
        SERVER_SECRET_KEY,
        // expiry:
        { expiresIn: '72h' } // 3 days
      ); // jwt.sign()

      const filteredUser = {
        name: user.name,
        email: user.email,
        reservations: user.reservations
      }

      res.json({ token, user: filteredUser }); // Success! Send token as JSON response

      // In your frontend, store the JWT token in state (localStorage?) or even
      // better in your global Redux store - also the 'user' object

    } else {
      // incorrect credentials
      res.sendStatus( 401 ); // Unauthorized
    }


  } catch( err ){
    console.log('Error querying User:', err );
    res.sendStatus( 500 );
  }


}); // POST /login

// All routes beyond this point require authentication
app.use( checkAuth() );

app.use( async (req, res, next) => {

  try {
    // use the req.auth object provided by the checkAuth() above to get the
    // logged-in user's ID and use it to look up the User object
    const user = await User.findOne({ _id: req.auth._id });

    if( user === null ){
      res.sendStatus( 401 ); // No user with that ID found (stale token?)
    } else {
      req.user = user;
      next(); // move on to next handler (i.e. actual specific route handler)
    }

  } catch( err ){
    console.log('Error querying user in auth middleware', err);
    res.sendStatus( 500 ); // prevents any further handlers from running
  }

});



// TODO: how about checking permissions, i.e. admin users?

app.get(
    '/seekrits',

    // checkAuth(),  // app.use above is doing the checking now
    // (req, res, next) => {
    //   console.log('Secret requested!');
    //   if( Math.random() < 0.5 ){
    // req.auth = {};
    //     next(); // move on to the next (in this case final handler)
    //   } else {
    //     res.sendStatus(401); // 50% of the time
    //   }
    // },
    (req, res) => {
      console.log('Auth:', req.auth); // provided by checkAuth()
      console.log('User: ', req.user);
      res.json({ terribleSecrets: ['I am a fish'] });
    }
); // GET /seekrits

app.get('/moreseekrits', (req, res) => {
  res.json({ anotherSecret: 'I am a robot'});
});


// app.use( (req, res) => {
//   // error handler, no matching routes
// });
