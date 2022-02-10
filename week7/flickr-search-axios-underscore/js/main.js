
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';

// Params:
// method=flickr.photos.search
// api_key  - REQUIRED
// format=json ??? for specifying format
// text - specify the search query
// nojsoncallback=1

// https://api.flickr.com/services/rest?method=flickr.photos.search&format=json&nojsoncallback=1&text=ocean+coral&api_key=2f5ac274ecfac5a455f38745704ad084

// $(function(){

document.addEventListener('DOMContentLoaded', async function(){

  try {

    const res = await axios.get( 'FLICKR_BASE_URL', {
      params: {
        // axios will combine these key-value pairs into the querystring for us
        method: 'flickr.photos.search',
        api_key: FLICKR_API_KEY,
        format: 'json',
        nojsoncallback: 1,
        text: 'coral ocean' // should come from user input
      }
    });

    // BECAUSE we used await axios.get, we don't need callbacks, and
    // we can be sure the result will be available by the next line of
    // code after the .get(), because JS *waits* for the promise to resolve
    console.log('data', res.data.photos.photo );

  } catch( err ){
     console.log('AJAX Search error', err);
  }


    // .then( function( res ){
    //   console.log( res.data.photos.photo );
    // })
    // .catch( function( err ){
    //   console.log('AJAX Search error', err);
    // });

}); // document ready handler
