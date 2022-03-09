
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


};
