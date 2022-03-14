
const Flight = require('../models/Flight');

// This is the older CommonJS version of
// 'export default Whatever'
module.exports = {

  // home: function(req, res){ ... }
  home(req, res){
    res.send('Welcome to the BA backend!!!!!!!');
  },

  async search(req, res){

    console.log('params', req.params);

    // Fake flights response

    // res.json([
    //   { flight_number: 'BA123' },
    //   { flight_number: 'BA456'}
    // ]);

    try {
      // const query = { origin: req.params.origin, destination: req.params.destination }; // like strong params
      const {origin, destination} = req.params;
      const flights = await Flight.find( {origin, destination} );
      res.json( flights );
    } catch( err ){
      console.log('Error searching for flights', err);
      res.sendStatus( 422 ); // 'Unprocessable entity'
    }

  }, // search

   async show(req, res){

    const flight = await Flight.findOne({ _id: req.params.id });
    res.json( flight );

  }, // show

  async createReservation(req, res){
    console.log('POST body:', req.body);

    // flight = Flight.find params[:id]
    // flight.update reservations: {new_reservation}


    const newReservation = {
      row: req.body.row,
      col: req.body.col,
      // user_id: req.user.id   // NOT YET...
      user_id: 10 // same FAKE_USER_ID as used in frontend
    }

    try {

      const result = await Flight.updateOne(
        // how to find the document to change:
        { _id: req.body.flight_id },
        // what to change about the retrieved document:
        {
          // loses existing reservations:
          // reservations: [ newReservation ]
          // push onto the end of the array of reservations:
          $push: {
            reservations: newReservation
          }
        },
      );

      console.log('result:', result);

      if( result.modifiedCount === 0 ){
        throw new Error('Flight not found');
        // res.json({ error: 'invalid Flight ID'}).sendStatus(404);
        // return;
      }

      res.json( newReservation ); // so the frontend can update its seating diagram

    } catch( err ){
      console.log('Error saving reservation:', err);
      res.sendStatus( 422 );
    }


    // res.json( {} );  // instead of next()

  }, // createReservation

};
