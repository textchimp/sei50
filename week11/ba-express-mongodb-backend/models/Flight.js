
const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({

  // schema fields go here

  // Note: just using snake case field names so that
  // the data eventually returned by the BA API matches
  // what the Rails backend returns.
  // In a pure full-stack JS app you would use camel
  // case, i.e. 'flightNumber' not 'flight_number'

  flight_number: String,
  origin: String,
  destination: String,
  departure_date: Date,

  airplane: {
    name: String,
    rows: Number,
    cols: Number
  },

  reservations: [
    {
      row: Number,
      col: Number,
      user_id: Number // just for now, kind of fake/cheating

      // TODO: make this work
      // user: {
      //   type: mongoose.Schema.Types.ObjectID,
      //   ref: 'User' // 'a Reservation belongs to a User'
      // }

    }
  ] // reservations array

}); // end of new mongoose.Schema({...})

// In order to be able to `require()` this model file in
// our seeds file and in our Express server, we need
// to export it here, using the older 'CommonJS' syntax
// (i.e. this is the older version of 'export default ...')
module.exports = mongoose.model('Flight', FlightSchema);
