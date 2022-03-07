
const mongoose = require('mongoose');

// Load our Flight model file (and any others?)
const Flight = require('./Flight');

// Connect to DB server; note the DB selection: 'ba', like a path
mongoose.connect('mongodb://localhost/ba');

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection error', err);
});

// Once the connection is established, we can start querying/seeding
db.once('open', async () => {

  console.log('Connected.');

  // ActiveRecord Flight.all
  // Flight.find()
  //   .then( flights => {
  //     console.log('flights', flights);
  //   })
  //   .catch( err => {
  //     console.log('Error querying flights:', err);
  //   });

  try {
    const flights = await Flight.find();
    console.log('flights:', flights);
  } catch ( err ){
    console.log('Error finding flights:', err);
    process.exit(1);
  }

  process.exit(0); // all good, quit program


}); // once open
