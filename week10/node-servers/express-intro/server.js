
// Import the express package to use in this
// file - using the older 'CommonJS' syntax,
// i.e. 'require()' instead of 'import from'
const express = require('express');

// Use the express function returned from requiring the
// package to create a webserver app object
const app = express();

const ejs = require('ejs');
// Use the EJS template system as an Express plugin
app.set('view-engine', ejs);

// Use the 'public' folder as an assets folder
app.use( express.static('public') );


// What about a database?
// SQL: 'sequel'

// MERN: MongoDB Express React Node

app.listen( 8000, () => {
  console.log('Now listening at http://localhost:8000');
});


// Define the routes that we want to respond to,
// and how we should respond to them

// get '/' do
//   "This is the response"
// end



app.get( '/', (req, res) => {
  console.log('Someone requested /');

  res.send('<h1>Hello World from Express!!!</h1>');

}); // GET /


app.get('/hello/:person', (req, res) => {

  res.render('greeting.ejs', {
    // like @ instance vars in Rails
    user: req.params.person,
    age: Math.random() * 100
  });

});


app.get( '/guestbook', (req, res) => {
  res.send('<h2>Sign my Guestbook!!</h2><img src="http://www.fillmurray.com/500/500">');
}); // GET /guestbook

// get '/dogs/:id' do
//   "Dog show #{ params[:id] }"
// end

app.get('/dogs/:id', (req, res) => {
  console.log('params', req.params);
  console.log('querystring', req.query);
  // console.log('req', req);
  // res.send(`Dogs show page for id: ${ req.params.id } `);

  const dogInfo = {
    name: 'Fido',
    age: 2,
    goodBoy: true
  };

  // render json: dogInfo
  res.json( dogInfo );

}); // GET /dogs/:id


// To handle a route which was not matched by any
// of the above routes, we can define a kind of
// fallback handler at the end, which effectively
// becomes a default error handler
app.use( (req, res) => {
  console.log('Failed request!', req.url);

  res.send('PAGE NOT FOUND');
  // res.sendStatus( 404 );
});
