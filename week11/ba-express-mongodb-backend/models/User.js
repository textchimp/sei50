
import {mongoose} from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordDigest: String,

  createdAt: {
    type: Date,
    default: Date.now, // automatically default this field to the current date
  },

  // a User has_many Reservations
  reservations: [
    {
      row: Number,
      col: Number,
      // flight_id: 14

      // Instead of just a flight ID here, which we would need to do a separate query
      // to look up the flight object for,
      // we can create the equivalent of an ActiveRecord belongs_to association
      // ... in Mongoose this is called a 'reference'
      flight: {
        ref: 'Flight', // a reservation belongs to a Flight
        type: mongoose.Schema.Types.ObjectID,  // i.e. this is the ID of a document in the Flight collection
      }

    }
  ],  // reservations[]


}); // new mongoose.Schema()

module.exports = mongoose.model('User', UserSchema);
// const User = require('./models/User');
