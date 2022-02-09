
// console.log('main.js LOADED');
// console.log('jQuery:', jQuery);
// console.log('axios:', axios);

$(function(){

  console.log('DOM ready');

  // UPTIME
  axios.get('/uptime.json')
    .then( function( res ){
      console.log( 'uptime', res.data );
      $('#uptime').html( res.data.output );
    })
    .catch( function( err ){
      console.log('Uptime AJAX error:', err);
    });


  // CPU HOG
  axios.get('/cpuhog')
    .then( function( res ){
      console.log('cpuhog', res.data );
      $('#hog').html( res.data.hog )
    })
    .catch( function( err ){
      console.log('CPU Hog AJAX error:', err );
    });

  // INDEX OF MESSAGES (i.e. results of Message.all)
  axios.get('/messages')
    .then( function( res ){
      // console.log('messages data', res.data);
      $('#messagesIndex').empty();
      res.data.forEach( function( message ){
        // console.log(message);
        $('#messagesIndex').append(`
          <li>${ message.content } (${message.user_id})</li>
        `);
      }); // each message

      })
      .catch( function( err ){
        console.log('Messages AJAX error', err);
      });

}); // DOM ready handler
