
// console.log('main.js LOADED');
// console.log('jQuery:', jQuery);
// console.log('axios:', axios);

$(function(){

  console.log('DOM ready');


  axios.get('/uptime.json')
    .then( function( res ){
      console.log( res.data );
      $('#uptime').html( res.data.output );
    })
    .catch( function( err ){
      console.log('AJAX error:', err);
    });


}); // DOM ready handler
