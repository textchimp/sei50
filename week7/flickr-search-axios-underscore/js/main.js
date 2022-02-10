
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';


// We will store the DOM nodes in these variables
// when the DOM is loaded
let searchFormNode, searchInputNode, resultsNode, detailsNode;


// Params:
// method=flickr.photos.search
// api_key  - REQUIRED
// format=json ??? for specifying format
// text - specify the search query
// nojsoncallback=1

// https://api.flickr.com/services/rest?method=flickr.photos.search&format=json&nojsoncallback=1&text=ocean+coral&api_key=2f5ac274ecfac5a455f38745704ad084

// $(function(){

const fetchSearchResults = async (queryText) => {

  console.log('in fetchSearchResults()', queryText);

  try {

    const res = await axios.get( FLICKR_BASE_URL, {
      params: {
        // axios will combine these key-value pairs into the querystring for us
        method: 'flickr.photos.search',
        api_key: FLICKR_API_KEY,
        format: 'json',
        nojsoncallback: 1,
        text: queryText // should come from user input
      }
    });

    // BECAUSE we used await axios.get, we don't need callbacks, and
    // we can be sure the result will be available by the next line of
    // code after the .get(), because JS *waits* for the promise to resolve
    // console.log('data', res.data.photos.photo );
    renderSearchResults( res.data.photos );

  } catch( err ){
     console.log('AJAX Search error', err);
  }


  // .then( function( res ){
  //   console.log( res.data.photos.photo );
  // })
  // .catch( function( err ){
  //   console.log('AJAX Search error', err);
  // });

}; // fetchSearchResults()


const renderSearchResults = (results) => {
  console.log('in renderSearchResults()', results);
  // results.photo.forEach( console.log );

  const ulNode = document.createElement('ul'); // create the container

  results.photo.forEach( photo => {
    const imageURL = generateImageURL(photo);
    // console.log( imageURL );
    const liNode = document.createElement('li');
    liNode.innerHTML = `
      <img src="${ imageURL }" alt="${ photo.title }">
    `;

    liNode.addEventListener('click', ev => {
      // By adding a unique click handler function to each <li>
      // within the loop, the click handler function will STILL
      // have access to the surrounding variables in its scope
      // EVEN THOUGH THE FUNCTION RUNS MUCH LATER, AFTER THE LOOP
      // IS FINISHED AND THE LOOP'S LOCAL VARIABLES ARE GONE
      // This is because of a language feature called "closures":
      // function definitions "close over" the values of the variables
      // that exist in their surrouding scope when they are defined.
      // PROS: we don't need to store an ID in a DOM tag attribute
      // and retrieve it later
      // CONS: we are creating a unique click handler function to
      // attach to each of our 100 results, i.e. 100 functions...
      // these add up in memory!
      fetchImageDetails( photo.id );
    });

    // one-liner:
    // liNode.addEventListener('click', () => fetchImageDetails(photo.id) );

    ulNode.appendChild( liNode ); // add to the <ul> container node
  }); // for each photo

  resultsNode.innerHTML = `
    <strong>
      Found ${ results.total } results
      (in ${ results.pages} pages):
    </strong>`;
    // clear the "Loading" message (and also clear any previous search results)

  resultsNode.appendChild( ulNode ); // add the <ul> to the actual DOM

  // Previously: AFTER adding to the DOM, we do a new query to retrieve
  // all the search result <li> tags and add a single click handler to them -
  // but in order for the click handler to know the ID of the image that
  // was clicked, we have to store that ID in the DOM (i.e. as a data attribute
  // of the <li> or <img> tag)


}; // renderSearchResults()


const generateImageURL = (photo) => {

  return `https://live.staticflickr.com/${ photo.server }/${ photo.id }_${photo.secret}_q.jpg`

}; // generateImageURL()


const fetchImageDetails = async (id) => {
  console.log('in fetchImageDetails():', id);

  detailsNode.innerHTML = '<em>Loading...</em>';
  detailsNode.style.display = 'block'; // in case we previously hid the details
  resultsNode.style.display = 'none'; // hide the results

  try {

    const res = await axios.get( FLICKR_BASE_URL, {
      params: {
        method: 'flickr.photos.getInfo',
        api_key: FLICKR_API_KEY,
        photo_id: id,
        format: 'json',
        nojsoncallback: 1
      }
    });

    console.log('Details results:', res.data );
    renderImageDetails( res.data.photo );

  } catch( err ){
    console.log('Details AJAX request error', err);
  }


}; // fetchImageDetails()



const renderImageDetails = (photo) => {
  console.log('in renderImageDetails():', photo);

  console.log( generateImageURL(photo) );


  detailsNode.innerHTML = `
    <h2>${ photo.title._content }</h2>
    <img src="${ generateImageURL(photo) }" alt="${ photo.title._content }">
  `;


}; // renderPhotoDetails()




document.addEventListener('DOMContentLoaded', function(){

  searchFormNode = document.querySelector('#searchForm');
  searchInputNode = document.querySelector('#searchText');
  resultsNode = document.querySelector('#results');
  detailsNode = document.querySelector('#details');
  // $('#details') MISS U SO BAD GURL

  searchInputNode.focus(); // quick submit by pressing enter

  searchFormNode.addEventListener('submit', ev => {
    ev.preventDefault(); // stop form from reloading page
    // const searchText = searchInputNode.value;
    // console.log('Form submitted!', searchText);
    resultsNode.innerHTML = '<em>Loading results...</em>';
    fetchSearchResults( searchInputNode.value );
  }); // form submit handler


}); // document ready handler
