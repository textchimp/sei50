
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // to encrypt passwords for seeded users

// Load our Flight model file (and any others?)
const Flight = require('./Flight');
const User = require('./User');

// Connect to DB server; note the DB selection: 'ba', like a path
mongoose.connect('mongodb://127.0.0.1/ba');

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

  await Flight.deleteMany();

  // Flight.destroy_all
  // Flight.deleteMany()
  //   .then( res => {
  //     Flight.create(...);
  //   });

  // Same as ActiveRecord Flight.create except you can pass in an array
  // to specify multiple flights to create at the same time
  try {
    const results = await Flight.create([
      {
        flight_number: 'BA123',
        origin: 'SYD',
        destination: 'MEL',
        departure_date: new Date('2022-03-20T04:20:00Z'),
        // nested data instead of an ID (association) for a belongs_to
        airplane: { name: '737 Max', rows: 20, cols: 6 },
        // As above, we can store a has_many as nested data here,
        // this time an array of reservation objects...
        // BUT since we will almost certainly want to be able to see
        // reservations in a different context, i.e. "what are all the
        // reservations for a specific user", we WILL eventually want to
        // make this into a list of Reservation IDs, or more likely,
        // each User document will contain a duplicated ("denormalized")
        // list of reservations for that user, which will link back to
        // this Flight using the flight ID
        reservations: [
          { row: 1, col: 1 }, // NOT real user_ids yet!
          { row: 2, col: 2 },
          { row: 3, col: 3 }
        ], // reservations[]
      }, // end of flight #1
      {
        flight_number: 'BA456',
        origin: 'SYD',
        destination: 'MEL',
        departure_date: new Date('2022-03-21T04:20:00Z'),
        airplane: { name: '767', rows: 16, cols: 4 },
        reservations: [
          { row: 1, col: 1 }, // NOT real user_ids yet!
          { row: 1, col: 2 },
          { row: 1, col: 3 }
        ], // reservations[]
      }, // end of flight #2
    ]);
  } catch( err ){
    console.log('Error creating flights:', err);
  }

  try {
    const flights = await Flight.find();
    console.log('flights:', flights);

    // Let's also add some Users; pass in created flights for adding associations
    await createUsers(flights);

  } catch ( err ){
    console.log('Error finding flights:', err);

    db.close(); // close the connection
    process.exit(1);
  }

  process.exit(0); // all good, quit program

}); // once open


const createUsers = async (testFlights) => {

  await User.deleteMany(); // User.destroy_all

  let users = await User.create([
    {
      name: 'Test User 1',
      email: 'one@one.com',
      // password: 'chicken',
      passwordDigest: bcrypt.hashSync('chicken', 10),
      // reservations: [
      //   {
      //     row: 10,
      //     col: 1,
      //     // need to give an actual flight object (document)
      //     flight: testFlights[0],
      //   },
      //   {
      //     row: 11,
      //     col: 12,
      //     flight: testFlights[1]
      //   }
      // ],
    },
    {
      name: 'Test User 2',
      email: 'two@two.com',
      passwordDigest: bcrypt.hashSync('chicken', 10),
      // reservations: [
      //   {
      //     row: 1,
      //     col: 2,
      //     flight: testFlights[0]
      //   }
      // ]
    },
  ]);

  // console.log( `Created Users:`, results.map( u => u.reservations) );
  // console.log(results[0].reservations, results[1].reservations);

  // let users = await User.find({}); //.populate('reservations.flight');


  // Use the 'saveReservation()' method of the Flight model to save duplicate
  // reservation entries in both Flight reservations and User reservations
  await testFlights[0].saveReservation( 10, 1, users[0] );
  await testFlights[1].saveReservation( 10, 2, users[1] );
  await testFlights[1].saveReservation( 10, 2, users[1] );

  // Re-load query, this time including reservation flight association;
  // to get the details of a Flight reference (which is within the reservations
  // array) when we query the User, you need to use .populate()
  users = await User.find().populate('reservations.flight');

  console.log('Created users:', users);
  console.log(users[0].reservations, users[1].reservations);

}; // createUsers()
