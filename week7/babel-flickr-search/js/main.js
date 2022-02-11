'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
var FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';

// We will store the DOM nodes in these variables
// when the DOM is loaded
var searchFormNode = void 0,
    searchInputNode = void 0,
    resultsNode = void 0,
    detailsNode = void 0;

// Params:
// method=flickr.photos.search
// api_key  - REQUIRED
// format=json ??? for specifying format
// text - specify the search query
// nojsoncallback=1

// https://api.flickr.com/services/rest?method=flickr.photos.search&format=json&nojsoncallback=1&text=ocean+coral&api_key=2f5ac274ecfac5a455f38745704ad084

// $(function(){

var fetchSearchResults = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(queryText) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            console.log('in fetchSearchResults ()', queryText);

            _context.prev = 1;
            _context.next = 4;
            return axios.get(FLICKR_BASE_URL, {
              params: {
                // axios will combine these key-value pairs into the querystring for us
                method: 'flickr.photos.search',
                api_key: FLICKR_API_KEY,
                format: 'json',
                nojsoncallback: 1,
                // page: 2,  or some other variable?
                text: queryText // should come from user input
              }
            });

          case 4:
            res = _context.sent;


            // BECAUSE we used await axios.get, we don't need callbacks, and
            // we can be sure the result will be available by the next line of
            // code after the .get(), because JS *waits* for the promise to resolve
            // console.log('data', res.data.photos.photo );
            renderSearchResults(res.data.photos);

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            console.log('AJAX Search error', _context.t0);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 8]]);
  }));

  return function fetchSearchResults(_x) {
    return _ref.apply(this, arguments);
  };
}(); // fetchSearchResults()


var renderSearchResults = function renderSearchResults(results) {
  console.log('in renderSearchResults()', results);
  // results.photo.forEach( console.log );

  var ulNode = document.createElement('ul'); // create the container

  results.photo.forEach(function (photo) {
    var imageURL = generateImageURL(photo);
    // console.log( imageURL );
    var liNode = document.createElement('li');
    liNode.innerHTML = '\n      <img src="' + imageURL + '" alt="' + photo.title + '">\n    ';

    liNode.addEventListener('click', function (ev) {
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
      fetchImageDetails(photo.id);
    });

    // one-liner:
    // liNode.addEventListener('click', () => fetchImageDetails(photo.id) );

    ulNode.appendChild(liNode); // add to the <ul> container node
  }); // for each photo

  resultsNode.innerHTML = '\n    <strong>\n      Found ' + results.total + ' results\n      (in ' + results.pages + ' pages):\n    </strong>';
  // clear the "Loading" message (and also clear any previous search results)

  resultsNode.appendChild(ulNode); // add the <ul> to the actual DOM

  // Previously: AFTER adding to the DOM, we do a new query to retrieve
  // all the search result <li> tags and add a single click handler to them -
  // but in order for the click handler to know the ID of the image that
  // was clicked, we have to store that ID in the DOM (i.e. as a data attribute
  // of the <li> or <img> tag)

}; // renderSearchResults()


var generateImageURL = function generateImageURL(photo) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'q';


  return 'https://live.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_' + size + '.jpg';
}; // generateImageURL()


var fetchImageDetails = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('in fetchImageDetails():', id);

            detailsNode.innerHTML = '<em>Loading...</em>';
            detailsNode.style.display = 'block'; // in case we previously hid the details
            resultsNode.style.display = 'none'; // hide the results

            _context2.prev = 4;
            _context2.next = 7;
            return axios.get(FLICKR_BASE_URL, {
              params: {
                method: 'flickr.photos.getInfo',
                api_key: FLICKR_API_KEY,
                photo_id: id,
                format: 'json',
                nojsoncallback: 1
              }
            });

          case 7:
            res = _context2.sent;


            console.log('Details results:', res.data);
            renderImageDetails(res.data.photo);

            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2['catch'](4);

            console.log('Details AJAX request error', _context2.t0);

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[4, 12]]);
  }));

  return function fetchImageDetails(_x3) {
    return _ref2.apply(this, arguments);
  };
}(); // fetchImageDetails()


var renderImageDetails = function renderImageDetails(photo) {
  console.log('in renderImageDetails():', photo);

  // const link = document.createElement('a');
  // details.prependChild(link)
  // link.addEventListener(...)

  detailsNode.innerHTML = '\n    <a href="#" id="backLink">Back to results</a>\n    <h2>' + photo.title._content + '</h2>\n    <img src="' + generateImageURL(photo, 'b') + '" alt="' + photo.title._content + '">\n    <p>\n      ' + photo.description._content + '\n    </p>\n  ';

  document.querySelector('#backLink').addEventListener('click', function () {
    // console.log('back clicked!');
    detailsNode.style.display = 'none';
    resultsNode.style.display = 'block';
  });
}; // renderPhotoDetails()


document.addEventListener('DOMContentLoaded', function () {

  searchFormNode = document.querySelector('#searchForm');
  searchInputNode = document.querySelector('#searchText');
  resultsNode = document.querySelector('#results');
  detailsNode = document.querySelector('#details');
  // $('#details') MISS U SO BAD GURL

  searchInputNode.focus(); // quick submit by pressing enter

  searchFormNode.addEventListener('submit', function (ev) {
    ev.preventDefault(); // stop form from reloading page
    // const searchText = searchInputNode.value;
    // console.log('Form submitted!', searchText);
    resultsNode.innerHTML = '<em>Loading results...</em>';

    detailsNode.style.display = 'none'; // in case we were showing the details
    resultsNode.style.display = 'block'; // in case we were hiding previously

    fetchSearchResults(searchInputNode.value);
  }); // form submit handler

}); // document ready handler


window.addEventListener('scroll', function (ev) {
  console.log('current window.scrollY', window.scrollY);
  console.log('document.body.scrollHeight', document.body.scrollHeight);
  console.log('---------------------');

  // Have we reached the bottom?
  var bottomOfWindow = window.scrollY + window.innerHeight;
  if (bottomOfWindow >= document.body.scrollHeight - 200) {
    console.log('We have hit (NEAR) the bottom (no jQuery)');
    // start the next-page AJAX request a bit before the bottom...
    // but YOU HAD BETTER THROTTLE THE REQUEST! Otherwise you will
    // flood the API with requests and get our API key blocked!
  }
}); // scroll handler